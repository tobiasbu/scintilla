'use strict';

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {


    mode: 'production',

    context: `${__dirname}/src/`,

    entry: {
        'scintilla.min': './Scintilla.js',
        'scintilla': './Scintilla.js',
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
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets: ["env"],
                    plugins: [
                        ["transform-runtime"]
                    ]
                }
            }
        ]
    },

    performance: { hints: false },

    optimization: {
        minimizer: [new UglifyJSPlugin({
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
        })]
    }

}