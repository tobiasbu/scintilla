'use strict';

const webpack = require('webpack');

const privatePlugin = require('babel-plugin-transform-private');
//privatePlugin.pattern = "^_";


module.exports = {

    context: `${__dirname}/src/`,

    entry: {
        'scintilla.dev' : './Scintilla.js'
    },

    output: {
        path: `${__dirname}/build/`,
        filename: '[name].js',
        library: 'Scintilla',
        libraryTarget: 'umd',
        sourceMapFilename: '[file].map',
        devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string
        devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string
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
                presets: ['env'],
                plugins: ['transform-runtime']
            }
          }
        ]
    },
    

    devtool: 'source-map'

}