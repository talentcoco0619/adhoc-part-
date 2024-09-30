// Configure webpack-dev-server to proxy requests for /api/<some-path> to
// the locally-running API server. This matches the routing configuration in
// Digital Ocean App Platform.
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_URL,
      changeOrigin: true,
    })
  )
}
