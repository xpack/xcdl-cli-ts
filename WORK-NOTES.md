# WORK NOTES

## Iterate trees

Q: given a tree of components, would it be possible in liquidjs to iterate over all nodes in the tree and output, for example, the name? possibly using javascript generators?

Claude Sonet: Yes, but the generator support in LiquidJS is specifically for the *render pipeline* (yielding output strings), not for providing iterables to `{% for %}`. The `for` tag requires a plain array or object.

There are three practical approaches, in order of preference:

---

### 1. Custom filter that flattens the tree (simplest — pure template)

Register it once in the engine setup:

```js
engine.registerFilter('walk_tree', function (root) {
  function* walk (node) {
    yield node
    for (const child of Object.values(node.children ?? {})) {
      yield* walk(child)
    }
  }
  return [...walk(root)]
})
```

 the for tag parses its collection with this.tokenizer.readValue(), which reads a single value token (variable or literal). It does not use a FilteredValueToken, which is the form that supports | filter syntax.

The correct pattern is to use assign first:

```liquid
{% assign nodes = xcdlTree | walk_tree %}
{% for node in nodes %}
{{ node.name }}
{% endfor %}
```

A JavaScript generator is used here, but it is spread into an array before being returned — `for` never sees the generator directly.

---

### 2. Custom tag with a template body per node

If you need to render a block template for each node (rather than just outputting a single value), a custom block tag works:

```js
engine.registerTag('tree_walk', {
  parse (token, remainTokens) {
    this.variable = token.args.trim()
    this.templates = []
    let t
    while ((t = remainTokens.shift()) && t.getText() !== '{% endtree_walk %}') {
      this.templates.push(engine.parseToken(t, remainTokens))
    }
  },
  * render (ctx, emitter) {
    function* walk (node) {
      yield node
      for (const child of Object.values(node.children ?? {})) yield* walk(child)
    }
    for (const node of walk(ctx.get([this.variable]))) {
      ctx.push({ node })
      yield this.liquid.renderer.renderTemplates(this.templates, ctx, emitter)
      ctx.pop()
    }
  }
})
```

```liquid
{% tree_walk xcdlTree %}
{{ node.name }}
{% endtree_walk %}
```

---

### 3. Pre-process before rendering (no engine customisation needed)

Flatten the tree in the JavaScript/TypeScript code that calls LiquidJS, then pass `flatNodes` as a plain array in the scope. This is the least elegant but requires no engine extensions.

For your use case (code generation from xCDL component trees), **option 1** is almost certainly the right choice — a single `walk_tree` filter registered once covers all templates cleanly.

-----------------------------------------------------------

in liquidjs if expressions, i need to compare strings as version, not lexicographically, i.e. in major.minor.patch format


```
const { Liquid } = require('liquidjs');
const engine = new Liquid();

engine.registerFilter('semver_gt', (a, b) => {
  const parse = v => v.split('.').map(Number);
  const [aMaj, aMin, aPat] = parse(a);
  const [bMaj, bMin, bPat] = parse(b);
  if (aMaj !== bMaj) return aMaj > bMaj;
  if (aMin !== bMin) return aMin > bMin;
  return aPat > bPat;
});

// Register others as needed
engine.registerFilter('semver_lt', (a, b) => engine.filters.get('semver_gt')(b, a));
engine.registerFilter('semver_gte', (a, b) => !engine.filters.get('semver_gt')(b, a));
engine.registerFilter('semver_lte', (a, b) => !engine.filters.get('semver_gt')(a, b));
```

or even better:

```
const semver = require('semver');

engine.registerFilter('semver_gt',  (a, b) => semver.gt(a, b));
engine.registerFilter('semver_lt',  (a, b) => semver.lt(a, b));
engine.registerFilter('semver_gte', (a, b) => semver.gte(a, b));
engine.registerFilter('semver_lte', (a, b) => semver.lte(a, b));
engine.registerFilter('semver_eq',  (a, b) => semver.eq(a, b));
engine.registerFilter('semver_ne',  (a, b) => semver.neq(a, b));
```

```
{% if version | semver_gt: "2.10.0" %}
  newer than 2.10.0
{% endif %}
```

-----------------------------------------------------------

```js
const path = require('path');

liquid.registerFilter('absolute_path', (relativePath, basePath = process.cwd()) => {
  if (path.isAbsolute(relativePath)) return relativePath;
  return path.resolve(basePath, relativePath);
});
```

- path.resolve normalises the result, so .. segments and redundant . are collapsed.
- This is Node-only. If you're running LiquidJS in the browser, path isn't available and you'd need to replicate the resolution logic manually.
- On Windows, path.resolve will produce backslash-separated paths. If that's a concern, add .split(path.sep).join('/') to the return value, or use path.posix.resolve if you know your paths will always use forward slashes.

```js
{{ "../images/photo.jpg" | absolute_path: "/home/user/site/blog/post/" }}
{# => "/home/user/site/images/photo.jpg" #}

{{ "./style.css" | absolute_path: "/home/user/site/assets/" }}
{# => "/home/user/site/assets/style.css" #}
```

-----------------------------------------------------------


## Configuration hierarchy processing

- parse xcdl-project.json
- recursively read includeCDLs
- read cdlConfiguration user settings
- apply user settings (enable nodes, set values)
- evaluate all `activeIf`; iterate
- ...
- collect \*Options, \*Defines, \*IncludeFolders from enabled nodes

- identify tests, if any
- identify artefacts
- identify dependencies
- for each artefact, colect options up to the artefact node
- for each component/option, merge parent artefact options with private ones

Q: are dependencies needed earlier, when collecting options?

## iifFolderExists

```js
engine.registerFilter('iifFolderExists', async (path, trueVal, falseVal = '') => {
  try {
    const stat = await fs.promises.stat(path);
    return stat.isDirectory() ? trueVal : falseVal;
  } catch {
    return falseVal;
  }
});
```

Usage

```txt
{{ some.path | iifFolderExists: 'Is a folder' }}
{{ some.path | iifFolderExists: 'yes', 'no' }}
```

## compiler standard

Is it reasonable to enforce in the xCDL definitions the compiler standard?

How to read it by invoking the compiler?


## Liquid substitution values

### buildFolderPath

Passed via the command line `--build-folder`.

Relative to the top project (or sub-project), lile `build/native-xcdl-sys-debug`.

Q: what if absolute and outside the project folder?

### buildFolderAbsolutePath

The buildFolderPath converted to absolute path.

### buildType

- release
- debug
- minSize

### executableSuffix

- .exe while on Windows

### rpathOptionsList

TODO: further define it as a computed value (the output of a string)

### compiler Object

#### compiler.dialect

- gnu
- clang

#### compiler.id

- gcc
- clang
- appleClang
- arm-none-eabi-gcc
- aarch64-none-elf-gcc
- riscv-none-elf-gcc

### compiler.version

- x.y.z

Q: how is it computed?

### compile.language

- c
- cpp
- s
