var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT || 8080 : process.env.PORT || 3000;
var CopyWebpackPlugin = require('copy-webpack-plugin');

function getDevTool() {
    if (isProduction !== 'production') {
        return 'source-map'; //enables source map
    }
    
    return false; 
}

var webpackConfig = {
    entry: {
        dev: './src/app/entry/dev.js',
        home: './src/app/entry/home.js',
        news: './src/app/entry/news.js',
        patterns: './src/app/entry/patterns.js'
    },
    output: {
        filename: "./dist/scripts/[name].min.js"
    },
    devtool: getDevTool(),
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['env', 'react'] 
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [    
        new Webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
          },
        }),
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        }),
         new CopyWebpackPlugin([
            {from:'./src/files',to:'./dist/files'} 
        ]), 
         new CopyWebpackPlugin([
            {from:'./src/img',to:'./dist/img'} 
        ]), 
    ]
};

isProduction
  ? webpackConfig.plugins.push(
      new Webpack.optimize.OccurenceOrderPlugin(),
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      })
    )
  : webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin()
    );

if (!isProduction) {
  webpackConfig.devServer = {
    contentBase: Path.join(__dirname, './src/'),
    hot: true,
    port: port,
    inline: true,
    progress: true,
    historyApiFallback: true,
  };
}

module.exports = webpackConfig;
