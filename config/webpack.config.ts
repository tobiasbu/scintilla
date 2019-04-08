
import * as path from 'path';
import * as webpack from 'webpack';

// import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

export default function (env: { PROD: boolean }) {

  const PROJECT_PATH = path.resolve(__dirname, '../');
  const INDEX_PATH = path.join(PROJECT_PATH, './src/Glitter.js');
  const PRODUCTION = env.PROD !== undefined || env.PROD === true;
  const mode = (PRODUCTION) ? 'production' : 'development';


  const config: webpack.Configuration = {
    mode,
    context: PROJECT_PATH,
    devtool: (PRODUCTION) ? 'cheap-source-map' : 'source-map',
    entry: {
      'glitter': INDEX_PATH,
    },
    output: {
      path: `${PROJECT_PATH}/build/`,
      filename: '[name].js',
      library: 'Glitter',
      libraryTarget: 'umd',
      umdNamedDefine: true,
    },
    performance: {
      hints: false,
    },
    optimization: {
      minimize: false,
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
      ],
    },
  }

  if (PRODUCTION) {

    const entry = config.entry as webpack.Entry;
    entry['glitter.min'] = INDEX_PATH;

    config.optimization.minimizer = [
      new UglifyJsPlugin({
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
      })];
  }

  return config;
}
