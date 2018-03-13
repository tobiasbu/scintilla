'use strict';

const webpack = require('webpack');
const uglify = require('uglifyjs-webpack-plugin');

module.exports = {

    context: `${__dirname}/src/`,

    entry: {
        'scintilla.min' : './Scintilla.js',
    },

    output: {
        path: `${__dirname}/build/`,
        filename: '[name].js',
        library: 'Scintilla',
        libraryTarget: 'umd',
        umdNamedDefine: true,
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

    plugins: [

        new uglify({
            include: /\.min\.js$/,
            parallel: true,
            sourceMap: false,
            uglifyOptions: {
                compress: true,
                ie8: false,
                ecma: 5,
                output: {
                    comments: false
                },
                warnings: false
                },
                warningsFilter: (src) => false
        })

    ]

}