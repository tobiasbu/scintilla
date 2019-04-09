
import * as path from 'path';
import * as webpack from 'webpack';

import IBundlingSettings from './types/IBundlingSettings';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackIncludeAssetsPlugin from 'html-webpack-include-assets-plugin';

export default function (env: IBundlingSettings) {

  const PROJECT_PATH = path.resolve(__dirname, '../');
  const DEBUG_PATH = path.join(PROJECT_PATH, './tests');
  const STATIC_PATH = path.join(DEBUG_PATH, './static');

  const PRODUCTION = env.PROD;
  const mode = (PRODUCTION) ? 'production' : 'development';

  const HOT_MW = `webpack-hot-middleware/client?path=http://${env.HOST}:${env.PORT}/__webpack_hmr&reload=true`;
  const ENTRY_PATH = (PRODUCTION) ? [path.join(DEBUG_PATH, '/index.js')] : [path.join(DEBUG_PATH, '/index.js'), HOT_MW];

  const config: webpack.Configuration = {
    mode,
    context: PROJECT_PATH,
    devtool: 'source-map',
    target: 'web',
    entry: {
      'index': ENTRY_PATH
    },
    output: {
      path: `${PROJECT_PATH}/dist`,
      filename: '[name].js',
      // library: 'Scintilla',
      // libraryTarget: 'umd',
      // sourceMapFilename: '[file].map',
      // devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string
      // devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string
      // umdNamedDefine: false,
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
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(STATIC_PATH, "./index.html"),
        cache: true,
      }),
      new CopyWebpackPlugin([
        { from: path.join(DEBUG_PATH, './assets'), to: 'assets/', toType: 'dir' },
      ]),
      new HtmlWebpackIncludeAssetsPlugin({
        assets: path.relative(PROJECT_PATH, path.join(PROJECT_PATH, './build/glitter.js')),
        append: false,
      }),
    ]
  };

  if (!PRODUCTION) {
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin({ multiStep: false }), // enable HMR globally
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(true)
    );
  }

  return config;

}