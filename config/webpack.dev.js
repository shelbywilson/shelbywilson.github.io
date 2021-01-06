const paths = require('./paths')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  /**
   * Mode
   *
   * Set the mode to development or production.
   */
  mode: 'development',

  /**
   * Devtool
   *
   * Control how source maps are generated.
   */
  devtool: 'inline-source-map',

  /**
   * DevServer
   *
   * Spin up a server for quick development.
   */
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 9009,
  },

  plugins: [
    /**
     * HotModuleReplacementPlugin
     *
     * Only update what has changed.
     */
    new webpack.HotModuleReplacementPlugin(),
  ].concat(
    /**
     * HtmlWebpackPlugin
     *
     * Generates an HTML file from a template.
     */
    Object.keys(paths.apps).map(key => (
      new HtmlWebpackPlugin({
        favicon: paths.src + '/images/favicon.ico',
        template: paths.src + '/template/template.html', 
        filename: paths.apps[key].output, // output file
        title: paths.apps[key].title,
        chunks: [key],
      })
    )),
  )
})
