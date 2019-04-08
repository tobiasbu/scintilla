
/**
 * Describes the bundling settings.
 */
export default interface IBundlingSettings {
  PROD: boolean;
  PORT?: number;
  HOST?: string;
  minifyAll?: boolean;
}
