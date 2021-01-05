const paths = require('./paths')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: '/dist/',
    filename: '[name].[contenthash].bundle.js',
  },
  plugins: [
    /**
     * MiniCssExtractPlugin
     *
     * Extracts CSS into separate files.
     *
     * Note: style-loader is for development, MiniCssExtractPlugin is for production.
     * They cannot be used together in the same config.
     */
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),

    /**
     * HtmlWebpackPlugin
     *
     * Generates an HTML file from a template.
     */
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: './../' + paths.apps.home.output, // output file
      chunks: ['vendors', 'runtime', 'home'],
      title: paths.apps.home.title,
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: './../' + paths.apps.skyAboveClouds.output, // output file
      title: paths.apps.skyAboveClouds.title,
      chunks: ['vendors', 'runtime', 'sky-above-clouds'],
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: './../' + paths.apps.cloudTown.output, // output file
      chunks: ['vendors', 'runtime', 'cloud-town'],
      title: paths.apps.cloudTown.title,
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: './../' + paths.apps.albumOfWeavingPatterns.output, // output file
      chunks: ['vendors', 'runtime', 'album-of-weaving-patterns'],
      title: paths.apps.albumOfWeavingPatterns.title,
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: './../' + paths.apps.cloudDiary.output, // output file
      chunks: ['vendors', 'runtime', 'cloud-diary'],
      title: paths.apps.cloudDiary.title,
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: './../' + paths.apps.set.output, // output file
      chunks: ['vendors', 'runtime', 'set'],
      title: paths.apps.set.title,
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      template: paths.src + '/template/template.html', 
      filename: './../' + paths.apps['monolith'].output, // output file
      chunks: ['vendors', 'runtime', 'monolith'],
      title: paths.apps.monolith.title,
    }),
    new HtmlWebpackPlugin({
      favicon: paths.src + '/images/favicon.ico',
      title: 'is there a pattern?',
      template: paths.src + '/template/template.html', 
      filename: './../' + paths.apps['pattern_finder'].output, // output file
      chunks: ['vendors', 'runtime', 'pattern_finder'],
      title: paths.apps.pattern_finder.title,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  /**
   * Optimization
   *
   * Production minimizing of JavaSvript and CSS assets.
   */
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: 'runtime',
    },
    // This breaks apart commonly shared deps (react, semantic ui, etc) into one shared bundle. React, etc
    // won't change as often as the app code, so this chunk can be cached separately from app code.
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|lodash)[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
})
