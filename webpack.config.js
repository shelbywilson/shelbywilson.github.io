var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT || 8080 : process.env.PORT || 3000;

function getDevTool() {
    if (isProduction !== 'production') {
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
        new Webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
          },
        }),
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        })

    ]
};

isProduction
  ? webpackConfig.plugins.push(
      new Webpack.optimize.OccurenceOrderPlugin(),
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      }),
      ExtractSASS
    )
  : webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin()
    );

if (!isProduction) {
  webpackConfig.devServer = {
    contentBase: Path.join(__dirname, './'),
    hot: true,
    port: port,
    inline: true,
    progress: true,
    historyApiFallback: true,
  };
}

module.exports = webpackConfig;
