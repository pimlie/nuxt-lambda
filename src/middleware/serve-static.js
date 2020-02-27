import path from 'path'
import serveStatic from 'serve-static'

const r = p => path.join(__dirname, p)

export default (app, { options }) => {
  app.use(serveStatic(r('static')))
  app.use(options.build.publicPath, serveStatic(r(options.clientDir)))
}
