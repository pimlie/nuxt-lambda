# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.5.7](https://github.com/pimlie/nuxt-lambda/compare/v0.5.6...v0.5.7) (2021-09-28)


### Features

* improve modern build support ([c36ac08](https://github.com/pimlie/nuxt-lambda/commit/c36ac082b16bfff2d4e82c9ca2f3ca64c884c4e1))

### [0.5.6](https://github.com/pimlie/nuxt-lambda/compare/v0.5.5...v0.5.6) (2021-06-12)


### Features

* add decode option to test-lambda to return plain html ([c94eee0](https://github.com/pimlie/nuxt-lambda/commit/c94eee0d434aa5d72d91a74819b4477cc79d388f))


### Bug Fixes

* replace routePath in nuxt context ([2b8bdd2](https://github.com/pimlie/nuxt-lambda/commit/2b8bdd27d23c667020214855fdb9dd9c10650eee))

### [0.5.5](https://github.com/pimlie/nuxt-lambda/compare/v0.5.4...v0.5.5) (2021-06-12)


### Features

* add support for rendering error page on internal server error ([8a33241](https://github.com/pimlie/nuxt-lambda/commit/8a33241af126a13fb5dcedf0ccc5fb060479209b))


### Bug Fixes

* upgrade to @babel/eslint-parser ([966133b](https://github.com/pimlie/nuxt-lambda/commit/966133b537fefc194121d9ca870a9b78040dd5fd))

### [0.5.4](https://github.com/pimlie/nuxt-lambda/compare/v0.5.3...v0.5.4) (2021-02-25)


### Bug Fixes

* chore update dependencies ([3237a69](https://github.com/pimlie/nuxt-lambda/commit/3237a690624e5a6b6935a6397ead336ece49c223))

### [0.5.3](https://github.com/pimlie/nuxt-lambda/compare/v0.5.2...v0.5.3) (2020-09-23)


### Bug Fixes

* exclude is not add to zip ([f2f2993](https://github.com/pimlie/nuxt-lambda/commit/f2f2993827b701989039e83d35f2249662503c24))

### [0.5.2](https://github.com/pimlie/nuxt-lambda/compare/v0.5.1...v0.5.2) (2020-09-22)


### Features

* add support for excludeFiles config ([6ada5de](https://github.com/pimlie/nuxt-lambda/commit/6ada5de4cd50ac61856761109bd51d3d0d5c275a))

### [0.5.1](https://github.com/pimlie/nuxt-lambda/compare/v0.5.0...v0.5.1) (2020-09-16)


### Bug Fixes

* by default always add files to zip (duh) ([30c08ac](https://github.com/pimlie/nuxt-lambda/commit/30c08aca7426feebd013b700a9c6dca85d5c6d3a))

## [0.5.0](https://github.com/pimlie/nuxt-lambda/compare/v0.4.4...v0.5.0) (2020-09-16)


### Features

* add excludeClientFiles option to exclude assets from the nuxt lambda ([9c5494e](https://github.com/pimlie/nuxt-lambda/commit/9c5494e3232b924a97f8bad1a752dce777b3134c))

### [0.4.4](https://github.com/pimlie/nuxt-lambda/compare/v0.4.3...v0.4.4) (2020-09-03)


### Bug Fixes

* add better stub for consola ([73629b3](https://github.com/pimlie/nuxt-lambda/commit/73629b34497a13215402026d4d1d32f696684b0a))
* **renderer:** provide `nuxt.options` ([3e90db7](https://github.com/pimlie/nuxt-lambda/commit/3e90db7d13e2402b8da2ae52061a8dae53115da7))
* **renderer:** provide `nuxt.options` ([1fccb1c](https://github.com/pimlie/nuxt-lambda/commit/1fccb1c1e91ecf3a358da464bc26b9aa4bf99ec0))

### [0.4.3](https://github.com/pimlie/nuxt-lambda/compare/v0.4.2...v0.4.3) (2020-05-04)


### Bug Fixes

* add bracket syntax for replacing consola ([36c270a](https://github.com/pimlie/nuxt-lambda/commit/36c270ab499124102727a8fadc46d32591aa628b))

### [0.4.2](https://github.com/pimlie/nuxt-lambda/compare/v0.4.1...v0.4.2) (2020-04-06)


### Bug Fixes

* support nuxt v2.12 ([515b2a0](https://github.com/pimlie/nuxt-lambda/commit/515b2a0746870d439437f1738ce951b497dc6f50))

### [0.4.1](https://github.com/pimlie/nuxt-lambda/compare/v0.4.0...v0.4.1) (2020-03-24)


### Bug Fixes

* remove unnecessary replace ([9055d99](https://github.com/pimlie/nuxt-lambda/commit/9055d99b52d2130f399ab6b1ce073579f9790415))

## [0.4.0](https://github.com/pimlie/nuxt-lambda/compare/v0.3.0...v0.4.0) (2020-02-27)


### Features

* add support for (optionally) serving static files ([15076c1](https://github.com/pimlie/nuxt-lambda/commit/15076c1a84958b2d1e92e330e94275153169620d))


### Bug Fixes

* allow setting handler in nuxt.options again ([50c40c5](https://github.com/pimlie/nuxt-lambda/commit/50c40c5d2aee8372f02a1299485dea7eec982f30))

## [0.3.0](https://github.com/pimlie/nuxt-lambda/compare/v0.2.2...v0.3.0) (2020-02-16)


### Features

* refactoring, better support for different handlers ([ba3bcc2](https://github.com/pimlie/nuxt-lambda/commit/ba3bcc25733ac3803cb897cefb12f95ce6bdaac7))


### Bug Fixes

* revert build script changes ([477d93f](https://github.com/pimlie/nuxt-lambda/commit/477d93f058c30543a90a4ff21ab31da503cec121))
* serialize/eval shouldPrefetch/Preload functions ([2273537](https://github.com/pimlie/nuxt-lambda/commit/2273537b9cb006cec1a01797400946084694f688))

### [0.2.2](https://github.com/pimlie/nuxt-lambda/compare/v0.2.1...v0.2.2) (2020-02-03)


### Bug Fixes

* an unknown config issue ([dd790c4](https://github.com/pimlie/nuxt-lambda/commit/dd790c456fdf250a0b5cdb99d21050a811f1798b))

### [0.2.1](https://github.com/pimlie/nuxt-lambda/compare/v0.2.0...v0.2.1) (2020-02-03)


### Features

* support separate build/dir dirs ([7caffda](https://github.com/pimlie/nuxt-lambda/commit/7caffdae9992f1dc631667095cf5b1bd94e4530d))

## [0.2.0](https://github.com/pimlie/nuxt-lambda/compare/v0.1.0...v0.2.0) (2020-02-02)


### Features

* add support to build full lambda (optimize is default) ([2f59fd5](https://github.com/pimlie/nuxt-lambda/commit/2f59fd540de31f51122c5178f10a97cf3f2655f6))

## 0.1.0 (2020-02-02)


### Bug Fixes

* root/build dir issue ([a0dc0d6](https://github.com/pimlie/nuxt-lambda/commit/a0dc0d6a3adb70db92f6a34d71e68e992437cbf4))

## 0.1.0 (2020-02-02)


### Bug Fixes

* root/build dir issue ([a0dc0d6](https://github.com/pimlie/nuxt-lambda/commit/a0dc0d6a3adb70db92f6a34d71e68e992437cbf4))
