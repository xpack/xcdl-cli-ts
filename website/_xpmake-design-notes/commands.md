# Commands

Commands are verbs passed as the first argument.

## Prepare

```sh
xpmake prepare [--sourceFolder folder] [--buildFolder folder] [--generator ninja] [--buildConfiguration configuration] [--property name=value...] [--verbose] [--file xpmake-tests.json]
```

The build configuration is taken from `package.json`, the `properties` array.

An alternate way is to use a list of `--property name=value`

## Build

```sh
xpmake build [--buildFolder folder] --buildConfiguration configuration [--verbose]
```

## Test

```sh
xpmake test [--buildFolder folder] --buildConfiguration configuration [--verbose]
```

## Clean

```sh
xpmake clean [--buildFolder folder] --buildConfiguration configuration [--verbose]
```

## Config

Configure the properties in the build configuration, using a curses tool.

```sh
xpmake config TODO
```
