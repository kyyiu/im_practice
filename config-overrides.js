const { override, fixBabelImports, addWebpackPlugin, addWebpackAlias, addLessLoader} = require('customize-cra')
const path = require('path')
module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@component': path.resolve(__dirname, 'src/components')
  }),
  addLessLoader({
    lessOptions: {
       javascriptEnabled: true,
       localIdentName: '[local]--[hash:base64:5]'
    }
  }),
)