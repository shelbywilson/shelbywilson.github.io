var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map'; //enables source map
    }
    
    return false; 
}

var webpackConfig = {
    entry: {
        main: './src/app/index.js'
    },
    output: {
        filename: './dist/scripts/[name].js'
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
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        })
    ]
};

webpackConfig.devServer = {
  contentBase: Path.join(__dirname, './'),
  hot: true,
  inline: true,
  progress: true,
  historyApiFallback: true,
};

module.exports = webpackConfig;
