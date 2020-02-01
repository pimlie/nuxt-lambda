# Nuxt command for quickly building lambda's (very expirimental)

You know that expirimental just means untested right?

## :warning: Limited Nuxt.js functionality

This will create a lambda for Nuxt.js ssr that is extremely optimized to run serverless. That means most non-essential Nuxt.js features have been stripped out.

- No support for runtime modules (only buildModules)
- No support for server middlewares
- No support for serving static files
- mode: SPA is probably broken (not tested, but render.shouldPrefetch/Preload are functions and we serialize with JSON.stringify)

### Recommended tunables

- turn of compression `render.compressor: false`
- turn of etags (?) `render.etag: false`

### How to use

#### Install
```js
$ yarn add nuxt-lambda
```

#### Build the lambda
```js
$ yarn nuxt-lambda <rootDir>

// eg: yarn test-lambda src
```

It will by default create a lambda dir in your rootDir containing the intermediates and a dist folder with the zip file you need to upload

#### Test the lambda
```js
$ yarn test-lambda <rootDir?> <url path>

// eg: yarn test-lambda src /about
// eg: yarn test-lambda /about
```

### Options

You can add a `lambda` section in your nuxt.config with the following properties

- `name` (default: _nuxt_)

The name of your lambda, ie the zip will be named `<name>.zip`. Dont change this for now if you want to run the test-lambda command

- `dist` (default: _lambda_)

The name of the folder where the intermediates for the lambda build are saved (dont use nuxt's buildDir)

- `spa` (default: _false_)

This is intended to be an override when you are using universal mode but have some single pages running as SPA. In essence it will _not_ optimize the lambda by removing SPA-only features

- `webpack` (default: _null_)

Any additional webpack config that is needed for your lambda build. At the moment it doesnt make really sense to touch this
