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
      template: paths.src + '/template/home.html', 
      filename: paths.apps.home.output, // output file
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.skyAboveClouds.output, // output file
      title: 'Shelby Wilson',
      chunks: ['sky-above-clouds'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.cloudTown.output, // output file
      title: 'Shelby Wilson — Cloud Town',
      chunks: ['cloud-town'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.albumOfWeavingPatterns.output, // output file
      title: 'Shelby Wilson',
      chunks: ['album-of-weaving-patterns'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.cloudDiary.output, // output file
      title: 'Shelby Wilson — Cloud Diary',
      chunks: ['cloud-diary'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.set.output, // output file
      title: 'Set',
      chunks: ['set'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps.checkers.output, // output file
      title: 'Shelby Wilson',
      chunks: ['checkers'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/still-life.html', 
      filename: paths.apps['still_life'].output, // output file
      chunks: ['still_life'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: paths.apps['pattern_finder'].output, // output file
      title: 'Pattern Finder',
      chunks: ['pattern_finder'],
    }),
  ],
})
