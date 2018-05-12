var path = require('path');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { VueLoaderPlugin } = require('vue-loader')

const env = process.env.NODE_ENV

module.exports = {
    mode: env || 'development',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'index.js',
        libraryTarget: 'umd',
    },
    externals: {
        axios: 'axios',
        vue: 'vue',
        'braintree-web-drop-in': 'braintree-web-drop-in'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // new BundleAnalyzerPlugin()
    ]
};
