/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

var path = require('path');
var webpack = require('webpack');

const NODE_ENV = process.env['NODE_ENV'] || 'development',
    config = {
        context: path.join(__dirname, 'src'),
        entry: {
            app: './app.js' 
        },
        target: 'node',
        devServer: {
            contentBase: './src/'
        },
        output: {
            path: path.join(__dirname, 'build'),
            filename: 'app.bundle.js'
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
            }]
        },
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                'NODE_ENV': NODE_ENV
            })
        ]
    };


if (NODE_ENV == 'production') {
    config.devtool = null;
    config.watchOptions = null;
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false}
        })
    ];
}

module.exports = config;