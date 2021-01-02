const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');  
const Path = require('path');

const webpackConfig = {
    entry: {
        home: './src/app/entry/home.js',
        news: './src/app/entry/news.js',
        patterns: './src/app/entry/patterns.js',
        'pattern-builder': './src/app/entry/pattern-builder.js',
         dev: './src/app/entry/dev.js',
    },
    output: {
        filename: "scripts/[name].[hash:7].min.js",
        path: Path.resolve('dist'),
        publicPath: './dist/',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=20000'
            },
        ]
    },
    plugins: [    
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {from:'./src/files',to:'./files'},
            {from:'./src/img',to:'./img'},
        ]), 
        new HtmlWebpackPlugin({
            title: 'home',
            chunks: ['home'],
            template: './src/index.html',
            inject: 'body', 
            filename: './../index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'news',
            chunks: ['news'],
            template: './src/index.html',
            inject: 'body', 
            filename: './../news.html'
        }),
        new HtmlWebpackPlugin({
            title: 'patterns',
            chunks: ['patterns'],
            template: './src/index.html',
            inject: 'body', 
            filename: './../patterns.html'
        }),
        new HtmlWebpackPlugin({
            title: 'pattern-builder',
            chunks: ['pattern-builder'],
            template: './src/index.html',
            inject: 'body', 
            filename: './../v1/patterns/builder.html'
        }),
        new HtmlWebpackPlugin({
            title: 'dev',
            chunks: ['dev'],
            template: './src/index.html',
            inject: 'body', 
            filename: './index.html'
        }),
    ],
    resolve: {
        modules: [Path.join(__dirname, 'src'), 'node_modules']
    },
};

webpackConfig.devServer = {
    contentBase: Path.join(__dirname, './src/'),
    historyApiFallback: true,
};

module.exports = webpackConfig;
