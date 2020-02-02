# Nuxt command for quickly building a Nuxt.js lambda (experimental)

## :warning: Optimized build by default with limited Nuxt.js functionality

This command will by default create a lambda for Nuxt.js SSR that is extremely optimized to run serverless. That means most non-essential Nuxt.js features have been stripped out.

> You can disable the optimized build by setting `lambda.optimize: false` in your nuxt.config

- No connect server (it uses @nuxt/vue-renderer directly instead of going through @nuxt/server)
- No support for runtime modules (only buildModules)
- No support for server middlewares (although we might be able to add support for this at a later time)
- No support for serving static files (eg use Netlify if you want to deploy quickly)
- mode: SPA is probably broken for now (not tested, but render.shouldPrefetch/Preload are functions and we serialize with JSON.stringify)

### Recommended tunables

- turn off compression `render.compressor: false`
- turn off etags (?) `render.etag: false`

### How to use

#### Install
```js
$ yarn add nuxt-lambda
```

#### Configure (optional)

See [Options](#Options) below

#### Build the lambda
```js
$ yarn nuxt-lambda <rootDir> [-c nuxt.config.js]

// eg: yarn test-lambda src
```

It will by default create a lambda dir in your rootDir containing the intermediates and a dist folder with the zip file you need to upload

#### Test the lambda

> Note: doesnt support custom lambda names yet

```js
$ yarn test-lambda <rootDir?> <url path>

// eg: yarn test-lambda src /about
// eg: yarn test-lambda /about
```

### Rationale for using the optimized handler by default

A lambda should be very good at running a single task, ie have a single responsibility. Nuxt will by default start a connect server which is just another abstraction layer on top of a lambda. This is actually a very strong feature of why its normally so easy to develop with Nuxt.js as it greatly helps with ease of deployments. But there are many cases where you dont need this abstraction anymore or where this abstraction is just the _wrong_ approach once you start deploying serverless. Eg a common approach is to use Nuxt.js serverMiddleware's to deploy an API, but if you are deploying serverless that API should really be run in a separate lambda.

##### Why is a single responsibility important?

Most important reason is cold boot performance of the lambda I guess. A lambda is started for every single request, although the lambda context might be 'warm' from a previous request there are no guarantees that its still warm. Response times/performance of your Nuxt.js website could vary greatly because of this.

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

- Create a preparsed/optimized nuxt.config
- Build Nuxt.js with `standalone: true`
- Build Lambda, if using the optimized handler (the default) stub any Nuxt.js feature/dependencies we dont need/want
- Create a Zip file for the lambda:
  - Start with [@netlify/zip-it-and-ship-it](https://github.com/netlify/zip-it-and-ship-it) to zip the Nuxt.js lambda and all/just its dependencies
  - Then add all Nuxt.js resources from `<rootDir>/<buildDir>/dist` to it

##### Is stubbing imports to optimize the webpack build really a good approach?

Probably not, it would be better to fix these imports in Nuxt.js core. That might still happen, but stubbing gets us fastests to where we want to go for now. Also it will work with any Nuxt.js version and not just some future release.

Eg just parsing/loading the `consola` dependency takes up to 10ms. Do we really need fancy logging in a lambda? Plain console should be good enough too, so we replace all `consola.<log-fn>` statements to `console.<log-fn>`.

> This of course could break your code if you use non-standard log functions. Eg we have to set `render.ssrLog: false` because otherwise Nuxt.js will try to add a consola reporter

### Options

You can add a `lambda` section in your nuxt.config with the following properties

- `name` (default: _nuxt_)

The name of your lambda, ie the zip will be named `<name>.zip`. Dont change this for now if you want to run the test-lambda command

- `optimize` (default: _true_)

If _false_ a default Nuxt.js handler will be used, no optimizations at all. This means that eg a connect server will be started and you can use serverMiddleware's

- `dist` (default: _lambda_)

The name of the folder where the intermediates for the lambda build are saved (dont use nuxt's buildDir)

- `spa` (default: _false_)

This is intended to be an override when you are using universal mode but have some single pages running as SPA. In essence it will _not_ optimize the lambda by removing SPA-only features

- `webpack` (default: _null_)

Any additional webpack config that is needed for your lambda build. At the moment it doesnt make really sense to touch this

### TODO

- [ ] Test which features have been broken (please report them!)
- [ ] Make/test mode: SPA work
- [ ] Add support for serverMiddleware's back by just chaining them manually?
- [ ] (maybe) Try to pack `vue-server-renderer` in a single file (less files could be faster unzipping?)
- [ ] (maybe) Provide Nuxt.js lambdas as AWS layers (we'd need to remove the stubbing and just use optional requires instead)
   - Then users really only have to deploy their `.nuxt/dist` folder
