import Resource, { ResourceType } from "./resource";

/**
* Image that holds image data.
* @class Image
* @constructor
*/
export default class ImageResource extends Resource {

    constructor(source, name) {

      super(source, name);
      
      this.width = 0;
      this.height = 0;
      this.source = source;
      this.imageUrl = null;
      this.type = ResourceType.Image;

      if (!source)
        return this;
      

      if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) {

          this.width = this.source.naturalWidth || this.source.width;
          this.height = this.source.naturalHeight || this.source.height;

      }
  }

}