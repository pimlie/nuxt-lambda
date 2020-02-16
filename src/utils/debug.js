export function debug () {
  if (process.env.LAMBDA_DEBUG) {
    // eslint-disable-next-line no-console
    console.log(...arguments)
  }
}

export function createDebugProxy (obj, name) {
  return new Proxy(obj, {
    get: (target, prop) => {
      if (typeof target[prop] === 'function') {
        // eslint-disable-next-line no-console
        console.log(`${name}.get:`, prop, 'function')

        return new Proxy(target[prop], {
          apply (fn, fnThis, fnArgs) {
            // eslint-disable-next-line no-console
            console.log(`${name}.call:`, prop, fnArgs.join(', '))
            return fn.apply(fnThis, fnArgs)
          }
        })
      }

      // eslint-disable-next-line no-console
      console.log(`${name}.get:`, prop, target[prop])

      return target[prop]
    },
    set: (target, prop, value) => {
      // eslint-disable-next-line no-console
      console.log(`${name}.set:`, prop, value, target[prop])
      target[prop] = value
      return true
    }
  })
}
