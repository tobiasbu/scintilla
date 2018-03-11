
/**
* Image that holds image data.
* @class Image
* @constructor
*/
scintilla.Image = function(source) {

  this.width = 100;
  this.height = 100;
  this.isLoaded = false;
  this.source = source;
  this.imageUrl = null;

  if (!source) {
    return;
  }

  if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) {

      this.isLoaded = true;
      this.width = this.source.naturalWidth || this.source.width;
      this.height = this.source.naturalHeight || this.source.height;

  }

    return this;
}

scintilla.Image.prototype = {



}

scintilla.Image.prototype.constructor = scintilla.Image;

scintilla.Image.load = function(path) {




}

scintilla.Image.onload = function(image) {

}
