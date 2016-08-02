/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

const webpack = require('webpack');

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
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ],
    watch: true,
    devtool: 'source-map'
};