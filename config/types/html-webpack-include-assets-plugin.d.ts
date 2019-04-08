import { Plugin, Compiler } from 'webpack'


type HashFunction = (assetName: string, hash: string) => void;

interface Attributes {
  [indexer: string]: string | number;
}

type AssetFiles = string | string[] | Asset | Asset[] | Array<string | Asset>;

interface Asset {
  /**
   * Asset path
   */
  path: string;
  /**
   * Wildcard to use to match all files in the path (uses the glob package).
   */
  glob?: string;
  /**
   * Asset type for cases if the assets if path is the asset href/src
   */
  type?: 'js' | 'css';
  /**
   * Specify the directory from which the `glob` should search for filename matches
   * (the default is to use path within webpack's output directory).
   */
  globPath?: string;
  /**
   * The attributes property may be used to add additional attributes to the link or script element that is injected. 
   * 
   * The keys of this object are attribute names and the values are the attribute values (string or boolean key values are allowed).
   */
  attributes?: Attributes;
}

interface HtmlWebpackIncludeAssetsOptions {
  /**
   * Assets that will be output into your `html-webpack-plugin` template.
   * 
   * To specify just one asset, simply pass a string or object. To specify multiple, pass an array of strings or objects.
   * 
   * If the asset path is static and ends in one of the `jsExtensions` or `cssExtensions` values, simply use a string value.
   * 
   * If the asset is not static or does not have a valid extension, you can instead pass an object with properties 
   * path (required) and type or `glob` or `globPath` or `attributes` (optional). 
   * In this case path is the asset href/src, `type` is one of `js` or `css`, and `glob` is a wildcard to use to
   * match all files in the path (uses the glob package).
   *
   * The assetPath property may be used to specify the full path to the included asset. 
   * This can be useful as it will trigger a recompilation after the assets have changed when using `webpack-dev-server` or
   * `webpack-dev-middleware` in development mode.
   */
  assets?: AssetFiles;
  /**
   * Specifies the file extensions to use to determine if assets are script assets. 
   * @default ['.js']
   */
  jsExtensions?: string | string[];
  /**
   * Specifies the file extensions to use to determine if assets are style assets. 
   * @default ['.css']
   */
  cssExtensions?: string | string[];
  /**
   * Specifying whether the assets should be prepended (false) before any existing assets, or appended (true) after them.
   */
  append?: boolean
  /**
   * Specifying whether the asset paths should be resolved with path.resolve (i.e. made absolute).
   */
  resolvePaths?: boolean
  /**
   * Specifying whether the assets should be prepended with webpack's public path or a custom publicPath (string).
   * 
   * A value of false may be used to disable prefixing with webpack's publicPath, or a value like 
   * `myPublicPath/` may be used to prefix all assets with the given string. 
   * @default true.
   */
  publicPath?: boolean | string;
  /**
   * Specifying whether the assets should be appended with webpack's compilation hash. 
   * This is useful for cache busting.
   * @default false
   */
  hash?: boolean | HashFunction;
  /**
   * Files that the assets will be added to.
   * 
   * By default the assets will be included in all files. 
   * If files are defined, the assets will only be included in specified file globs (uses the minimatch package).
   */
  files?: string | string[];
}


interface HtmlWebpackIncludeAssetsPlugin {
  new(options?: HtmlWebpackIncludeAssetsOptions): Plugin,
  apply(compiler: Compiler): void;
}

declare const htmlWebpackIncludeAssetsPlugin: HtmlWebpackIncludeAssetsPlugin;

export = htmlWebpackIncludeAssetsPlugin;
