/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

const webpack = require('webpack');
const NODE_ENV = process.env['NODE_ENV'] || 'development';

module.exports = {
    context: __dirname + '/js',
    entry: {
        app: './app.js',
        vendor: ['angular', 'angular-ui-router']
    },
    output: {
        path: __dirname + '/build/js',
        filename: 'app.bundle.js'
    },
    module: {
        loaders:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.DefinePlugin({
            'NODE_ENV': NODE_ENV
        })
    ],
    watch:  NODE_ENV == 'development',
    devtool: NODE_ENV == 'development' ?  'source-map' : null

};