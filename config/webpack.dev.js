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

    /**
     * HtmlWebpackPlugin
     *
     * Generates an HTML file from a template.
     */
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.home.output, // output file
      title: paths.apps.home.title,
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.skyAboveClouds.output, // output file
      title: paths.apps.skyAboveClouds.title,
      chunks: ['sky-above-clouds'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.cloudTown.output, // output file
      title: paths.apps.cloudTown.title,
      chunks: ['cloud-town'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.albumOfWeavingPatterns.output, // output file
      title: paths.apps.albumOfWeavingPatterns.title,
      chunks: ['album-of-weaving-patterns'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.cloudDiary.output, // output file
      title: paths.apps.cloudDiary.title,
      chunks: ['cloud-diary'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.set.output, // output file
      title: paths.apps.set.title,
      chunks: ['set'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.checkers.output, // output file
      title: paths.apps.checkers.title,
      chunks: ['checkers'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps['monolith'].output, // output file
      title: paths.apps.monolith.title,
      chunks: ['monolith'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps['pattern_finder'].output, // output file
      title: paths.apps.pattern_finder.title,
      chunks: ['pattern_finder'],
    }),
  ],
})
