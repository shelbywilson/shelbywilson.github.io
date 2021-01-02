const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  /**
   * Entry
   *
   * The first place Webpack looks to start building the bundle.
   */
  entry: {
    'home': paths.src + '/entry/home.js',
    'sky-above-clouds': paths.src + '/entry/sky-above-clouds.js',
    'cloud-town': paths.src + '/entry/cloud-town.js',
    'album-of-weaving-patterns': paths.src + '/entry/album-of-weaving-patterns.js',
    'cloud-diary': paths.src + '/entry/cloud-diary.js',
    'set': paths.src + '/entry/set.js',
    'checkers': paths.src + '/entry/checkers.js',
    'still_life': paths.src + '/entry/still-life.js',
    'pattern_finder': paths.src + '/entry/pattern-finder.js',
  },

  /**
   * Output
   *
   * Where Webpack outputs the assets and bundles.
   */
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  /**
   * Plugins
   *
   * Customize the Webpack build process.
   */
  plugins: [
    /**
     * CleanWebpackPlugin
     *
     * Removes/cleans build folders and unused assets when rebuilding.
     */
    new CleanWebpackPlugin(),
  ],

  /**
   * Module
   *
   * Determine how modules within the project are treated.
   */
  module: {
    rules: [
      /**
       * JavaScript
       *
       * Use Babel to transpile JavaScript files.
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },

      /**
       * Styles
       *
       * Inject CSS into the head with source maps.
       */
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },

      /**
       * Images
       *
       * Copy image files to build folder.
       */
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg|mp4|pdf)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src', // prevent display of src/ in filename
        },
      },

      /**
       * Fonts
       *
       * Inline font files.
       */
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[path][name].[ext]',
          context: 'src', // prevent display of src/ in filename
        },
      },
    ],
  },
}
