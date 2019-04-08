import * as webpack from "webpack";

/**
 * Describes the base configuration and commons parameters for bundling.
 */
export default interface IBaseConfig {
  config: webpack.Configuration;
  mode: 'development' | 'production',
  isProduction: boolean,
  path: string;
}