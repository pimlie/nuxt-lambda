> :fire: This package is still under heavy development & testing, especially the minimal handler. We are also waiting for better support in Nuxt.js which should be available soon. Please expect an unstable API until v1

# Nuxt command to create a Nuxt.js lambda (beta)
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

### :warning: Optimized build by default with limited Nuxt.js functionality

> You can enable the full Nuxt.js handler by setting `lambda.handler: 'full'` in your nuxt.config

This command will by default create a lambda for Nuxt.js SSR that is optimized to run serverless. That means most non-essential Nuxt.js SSR features have been stripped out.

- No connect server (it uses @nuxt/vue-renderer directly instead of going through @nuxt/server)
- No support for runtime modules (only buildModules)
- No support for server middlewares (although we might be able to add support for this at a later time)
- No support for serving static files (eg use Netlify if you want to deploy quickly)
- No support for hooks
- mode: SPA is probably broken for now (not tested, but render.shouldPrefetch/Preload are functions and we serialize with JSON.stringify)

### Possible tunables

- turn off compression `render.compressor: false`
- turn off etags `render.etag: false`

## How to use

#### Install
```js
$ yarn add nuxt-lambda
```

#### Configure (optional)

See [Options](#options) below

#### Build & test

See [Commands](#commands)

## Commands

### nuxt-lambda

The command to build a lambda. See `-h` for all available options (not all are supported).

It will by default create a `.lambda` dir in your rootDir containing the intermediates and a `dist` folder with the zip file you need to upload

```js
$ yarn nuxt-lambda <rootDir> [-c nuxt.config.js]

// eg: yarn test-lambda src
```

- `--handler`

Same as `options.lambda.handler`, see [Options](#options). Used to quickly override the handler you want to use

- `--no-optimize`

_Not supported yet_

- `--no-nuxt`

Build a lambda without re-building your Nuxt.js project.

- `--no-lambda`

_Not supported yet_

- `--no-zip`

_Not supported yet_

### test-lambda

The command to test a lambda. See `-h` for available options.

Accepts either a path to a nuxt rootDir or a path to a packed lambda zip file.

```js
$ yarn test-lambda <rootDir?> <url path>

// eg: yarn test-lambda src /about
// eg: yarn test-lambda /about
```

- `-p`, `--persistent`

Normally when running test-lambda the lambda is unzipped in a temporary directory which is cleaned-up when the lambda has finished. Passing the persistent option unpacks the lambda in the `options.lambda.distDir` folder instead only when it doesnt exists yet

- `--debug`

If your lambda was built with `debug: true` in your nuxt.config, use this switch to toggle verbose logging

## Available Handlers

#### connect (default)

This is an optimized handler that uses `connect` & `serverless-http` to process requests without starting a full blown server.

#### minimal (experimental, proof of concept)

This is an extremely optimized handler, it uses abstracted implementations for most dependencies which cannot be tree-shaked but have a reasonable effect on cold-boot / execution times.

> Dont use this handler yet in production until we have implemented more tests

- no `serverless-http`, uses a lightweight custom implementation
- `fs-extra` is stubbed with a lightweight custom implementation
- a custom `compression` middleware is used

Preliminary savings seem to be around ~10ms compared to the connect handler

#### full

Just start a full-blown Nuxt.js server instance with all Nuxt.js features and dependencies. Not optimized at all, provided as fallback so you can still benefit from the packaging this command provides

## Debugging

For the optimized handlers, make sure to set `debug: true` in your `nuxt.config`. Then re-build your lambda & run the `test-lambda` command with `--debug`

Debugging is implemented by returning a Proxy for the `res` and `req` variables which logs any `get`, `set` or `call` command. When you have compression enabled, it also prints debug logs about compression.

Also when `debug: true` the lambda wont be minimized, so you can check the file `${options.lambda.buildDir}/${options.lambda.name}.js` to debug the webpack build

## Rationale for using the optimized handler by default

A lambda should be very good at running a single task, ie have a single responsibility. Nuxt will by default start a connect server which provides a similar abstraction layer as lambdas provide. The connect server is actually a very strong feature of Nuxt.js, it helps greatly to simplify deployments. But there are also cases where you dont need this abstraction (anymore) or where this second abstraction layer is just the _wrong_ approach because you deploy serverless. Eg a common approach is to use Nuxt.js serverMiddleware's to deploy an API, but when you are deploying serverless that API should really be run in a separate lambda.

##### Why is a single responsibility important?

Most important/practical reason is cold boot performance of the lambda. A lambda is started for every single request, although the lambda context might be 'warm' from a previous request there are no guarantees that it will still be warm. Response times/performance of your Nuxt.js website could vary greatly because of this.

Having a single responsibility means less dependencies, less code to parse so quicker cold boots:

|Lambda implementation|Memory|Cold boot time|
|---|---|---|
|Full Nuxt.js|1GB|~500ms|
|Full Nuxt.js|1.5GB|~300ms|
|nuxt-lambda|1GB|~175ms|
|nuxt-lambda|1.5GB|?|

More information about AWS cold starts in this excellent article by @MikhailShilkov: [Cold Starts in AWS Lambda](https://mikhail.io/serverless/coldstarts/aws/)

### How does it work

In general the lambda build consists of 4 steps:

- Create a pre-normalized and optimized nuxt.config
- Build Nuxt.js
- Build Lambda, if using the optimized handler then stub any Nuxt.js feature/dependencies we dont need/want
- Create a Zip file for the lambda:
  - Start with [@netlify/zip-it-and-ship-it](https://github.com/netlify/zip-it-and-ship-it) to zip the Nuxt.js lambda and all/just its dependencies
  - Then add all Nuxt.js resources from `<rootDir>/<buildDir>/dist` to it

##### Is stubbing imports to optimize the lambda build really a good approach?

Probably not, it would be better to fix these imports in Nuxt.js core. That might still happen, but stubbing gets us fastests to where we want to be for now. Also it will work with any Nuxt.js version and not just some future release.

Eg just parsing/loading the `consola` dependency takes up to 10ms. Do we really need fancy logging in a lambda? Plain console should be good enough too, so we replace all `consola.<log-fn>` statements to `console.<log-fn>`.

> This of course could break your code if you use non-standard log functions. Eg we have to set `render.ssrLog: false` because otherwise Nuxt.js will try to add a consola reporter

## Options

You can add a `lambda` section in your nuxt.config with the following properties

- `name` (default: _nuxt_)

The name of your lambda, ie the zip will be named `<name>.zip`. Dont change this for now if you want to run the test-lambda command

- `handler` (default: _connect_)

Either `full`, `connect` or `minimal`. See [available handlers](#available-handlers)

- `buildDir` (default: _.lambda_)

The name of the folder where the intermediates for the lambda build are saved (dont use nuxt's buildDir, config is created before nuxt build which removes the nuxt builddir). If relative then relative to _rootDir_

- `distDir` (default: _dist_)

The name of the folder where the zipped lambda will be saved. If relative then relative to _rootDir_

- `spa` (default: _false_)

This is intended to be an override when you are using universal mode but have some single pages running as SPA. In essence it will _not_ optimize the lambda by removing SPA-only features

- `webpack` (default: _null_)

Any additional webpack config that is needed for your lambda build. At the moment it doesnt make really sense to touch this

## TODO

- [ ] (optimized handler only) Test which features have been broken (please report them!)
- [ ] (optimized handler only) Make/test mode: SPA work
- [ ] (optimized handler only) Add support for serverMiddleware's back by just chaining them manually?
- [ ] (maybe) Try to pack `vue-server-renderer` in a single file (less files could be faster unzipping?)
- [ ] (maybe) Provide Nuxt.js lambdas as AWS layers (we'd need to remove the stubbing and just use optional requires instead)
   - Then users really only have to deploy their `.nuxt/dist` folder

## License

[MIT License](./LICENSE)

Copyright (c) pimlie

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-lambda/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-lambda

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-lambda.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-lambda

[circle-ci-src]: https://img.shields.io/circleci/project/github/pimlie/nuxt-lambda.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/pimlie/nuxt-lambda

[codecov-src]: https://img.shields.io/codecov/c/github/pimlie/nuxt-lambda.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/pimlie/nuxt-lambda

[license-src]: https://img.shields.io/npm/l/nuxt-lambda.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-lambda
