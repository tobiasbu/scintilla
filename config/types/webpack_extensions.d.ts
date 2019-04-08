import * as webpack from "webpack";
import * as webpackDevMiddleware from 'webpack-dev-middleware';

/**
 * Development server configuration for webpack.
 */
interface webpackDevServer {
  port?: number,
  publicPath?: string,
  compress?: boolean,
  noInfo?: boolean,
  //stats?: string,
  inline?: boolean,
  lazy?: boolean,
  hot?: boolean,
  headers?: string | any,
  contentBase?: string,
  watchOptions?: {
    aggregateTimeout?: number;
    ignored?: string | string[] | RegExp;
    poll?: number
  },
  historyApiFallback?: {
    verbose?: boolean,
    disableDotRule?: boolean
  },
  before?: () => void;
}

/**
 * Webpack configuration file with *devServer* options.
 */
interface webpackDevServerConfiguration extends webpack.Configuration { 
    devServer?: webpackDevServer;
}

/**
 * Dev middleware extended options
 */
interface webpackDevMiddlewareExtendedOptions extends webpackDevMiddleware.Options {
    quiet?: boolean,
    reload?: boolean,
    overlay?: boolean,
    noInfo?:boolean,
}
