/**
 * Created by andrei.maksimchanka on 8/2/2016.
 */

const webpack = require('webpack'),
    NODE_ENV = process.env['NODE_ENV'] || 'development',
    config = {
        context: __dirname + '/src/js',
        entry: {
            app: './app.js'
        },
        devServer: {
          contentBase: './src/'
        },
        output: {
            path: __dirname + '/build/js',
            filename: 'app.bundle.js'
        },
        module: {
            loaders:[{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ["es2015"]
                }
            }]
        },
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                'NODE_ENV': NODE_ENV
            })
        ]
    };


if ( NODE_ENV == 'production' ){
    config.devtool = null;
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ];
}

module.exports = config;