/*
 * This file is part of the xPack project (http://xpack.github.io).
 * Copyright (c) 2017 Liviu Ionescu. All rights reserved.
 *
 * Permission to use, copy, modify, and/or distribute this software
 * for any purpose is hereby granted, under the terms of the MIT license.
 *
 * If a copy of the license was not distributed with this file, it can
 * be obtained from https://opensource.org/licenses/MIT/.
 */

/* eslint valid-jsdoc: "error" */
/* eslint max-len: [ "error", 80, { "ignoreUrls": true } ] */

// ----------------------------------------------------------------------------

/**
 * The Xcdl main module.
 *
 * It is re-exported publicly by `index.js`.
 *
 * To import classes from this module into Node.js applications, use:
 *
 * ```javascript
 * const Xcdl = require('xcdl').Xcdl
 * ```
 */

// ----------------------------------------------------------------------------

// import fs from 'fs'

// https://nodejs.org/docs/latest-v12.x/api/index.htm
// import path from 'path'

// import { fileURLToPath } from 'url'

// ----------------------------------------------------------------------------

// ES6: `import { CliApplication, CliOptions } from 'cli-start-options'
// import cliStartOptionsCsj from '@ilg/cli-start-options'

// ----------------------------------------------------------------------------

// const { CliApplication /*, CliOptions */ } = cliStartOptionsCsj
// const __dirname = path.dirname(fileURLToPath(import.meta.url))

// ============================================================================

// export
export class Xcdl {
  static start (): number {
    console.log('Not yet implemented')
    return 0
  }

  main (): number {
    return 0
  }
}

// ----------------------------------------------------------------------------
// Node.js specific export definitions.

// By default, `module.exports = {}`.
// The current class is added as a property to this object.

// module.exports.Xcdl = Xcdl

// In ES6, it would be:
// export class Xcdl { ... }
// ...
// import { Xcdl } from 'xcdl.js'

// ----------------------------------------------------------------------------
