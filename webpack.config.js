'use strict';

const webpack = require('webpack');

module.exports = {

    context: `${__dirname}/src/`,

    entry: {
        scintilla : './Scintilla.js'
    },

    output: {
        path: `${__dirname}/build/`,
        filename: '[name].js',
        library: 'Scintilla',
        libraryTarget: 'umd',
        sourceMapFilename: '[file].map',
        //devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string
        //devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string
        umdNamedDefine: false,
    },

    devtool: 'source-map'

}