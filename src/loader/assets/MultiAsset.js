
export default class MultiAsset {

  get isMulti() {
    return true;
  }

  /**
   * 
   * @param {AssetsType} type 
   * @param {string} tag 
   * @param {File[]} assets 
   */
  constructor(type, tag, assets) {

    /**
     * @type {AssetsType}
     */
    this.type = type;
    /**
     * @type {string}
     */
    this.tag = tag;
    /**
     * @type {File[]}
     */
    this.assets = assets;
    /**
     * @type {boolean}
     */
    this.complete = false;
    /**
     * @type {number}
     */
    this.pending = assets.length;

    this.failed = 0;

    for (let i = 0; i < this.pending; i += 1) {
      assets[i].multiFile = this;
    }

  }

  isReadyToProcess() {
    return (this.pending === 0 && this.failed === 0 && !this.complete);
  }

  onAssetComplete(asset) {
    let index = this.assets.indexOf(asset);

    if (index !== -1) {
      this.pending -= 1;
    }
  }

  onAssetFailed(asset) {
    let index = this.assets.indexOf(asset);

    if (index !== -1) {
      this.failed += 1;
    }
  }

}