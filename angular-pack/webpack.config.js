/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

var resolve = require('path').resolve;
var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV || 'development';

var entryPoint = resolve(__dirname, 'src/app.js');
var srcPath = resolve(__dirname, 'src');
var buildPath = resolve(__dirname, 'build');

var config = {
    context: srcPath,
    entry: [
        'webpack/hot/dev-server',
        entryPoint
    ],
    target: 'node',
    devServer: {
        contentBase: './src/'
    },
    output: {
        filename: 'app.bundle.js',
        path: buildPath
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ["es2015"]
            }
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.css$/,
            loader: 'style!css',
            exclude: /node_modules/
        }, {
            test: /\.(png|woff|woff2|eot|otf|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.js$/,
            loader: 'ng-annotate',
            exclude: /node_modules/
        }]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': NODE_ENV
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};


if (NODE_ENV == 'production') {
    config.entry = entryPoint;
    config.devtool = null;
    config.devServer = null;
    config.watchOptions = null;
    config.plugins = [

    ];
}

module.exports = config;