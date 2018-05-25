'use strict';

const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {

    context: `${__dirname}/src/`,

    entry: {
        'scintilla.node.dev' : './Scintilla.js',
        'scintilla.node.dev.min' : './Scintilla.js',
    },

    output: {
        path: `${__dirname}/build/`,
        filename: '[name].js',
        library: 'Scintilla',
        libraryTarget: 'commonjs2',
        umdNamedDefine: true,
    },

    module: {
        // configuration regarding modules
    
        rules: [
          // rules for modules (configure loaders, parser options, etc.)
          {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
           /* options: {
                presets: ['env'],
                plugins: ['transform-runtime']
            }*/
          }
        ]
    },

    plugins: [

        new MinifyPlugin({},{
            include: /\\dev.min\.js$/,
            comments: true,
            sourceMap: true})

    ],

    devtool: 'source-map'

}