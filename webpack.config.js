var ExtractTextPlugin = require('extract-text-webpack-plugin');
var Path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Webpack = require('webpack');
var port = 3000;
var CopyWebpackPlugin = require('copy-webpack-plugin');

var webpackConfig = {
    entry: {
        dev: './src/app/entry/dev.js',
        home: './src/app/entry/home.js',
        news: './src/app/entry/news.js',
        patterns: './src/app/entry/patterns.js',
        'pattern-builder': './src/app/entry/pattern-builder.js'
    },
    output: {
        filename: "./dist/scripts/[name].min.js"
    },
    devtool: 'source-map',
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
        new ExtractTextPlugin('dist/styles/main.css', {
            allChunks: true
        }),
         new CopyWebpackPlugin([
            {from:'./src/files',to:'./dist/files'} 
        ]), 
         new CopyWebpackPlugin([
            {from:'./src/img',to:'./dist/img'} 
        ]), 
    ],
    node: {
      fs: "empty",
      child_process: "empty"
    }
};

if (process.env.NODE_ENV === 'production') {
    webpackConfig.plugins.push(
        new Webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true
            }
        })
    )
} else {
    webpackConfig.devServer = {
        contentBase: Path.join(__dirname, './src/'),
        hot: true,
        port: port,
        inline: true,
        progress: true,
        historyApiFallback: true,
    };
    webpackConfig.plugins.push(
        new Webpack.HotModuleReplacementPlugin()
    );
}

module.exports = webpackConfig;
