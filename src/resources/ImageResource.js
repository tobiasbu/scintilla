import Resource from "./Resource";
import ResourceType from "./ResourceType";

/**
* Image that holds image data.
* @class Image
* @constructor
*/
export default class ImageResource extends Resource {

    constructor(name) {

      super(name, ResourceType.Image);
      
      this.data = data;
      this.width = 0;
      this.height = 0;
      this.imageUrl = null;

      if ((this.data.complete || this.data.getContext) && this.data.width && this.data.height) {

          this.width = this.data.naturalWidth || this.data.width;
          this.height = this.data.naturalHeight || this.data.height;

      }
  }

}