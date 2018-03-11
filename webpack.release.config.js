'use strict';

const webpack = require('webpack');

module.exports = {

    context: `${__dirname}/src/`,

    entry: {
        estest : './test.js'
    },

    output: {
        path: `${__dirname}/build/`,
        filename: '[name].js',
        library: 'estest',
        libraryTarget: 'umd',
        //devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string
        //devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string
        umdNamedDefine: false,
    },

    module: {
        // configuration regarding modules
    
        rules: [
          // rules for modules (configure loaders, parser options, etc.)
          {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            options: {
                presets: ["es2015"]
            }
          }
        ]
    },

    devtool: 'source-map'

}