
// based in pixi
tobi.CanvasBuffer = function(width,height) {

this.width = width;
this.height = height;
this.canvas = tobi.CanvasList.create(this, this.width, this.height);

this.context = this.canvas.getContext("2d");

this.canvas.width = width;
this.canvas.height = height;

}

tobi.CanvasBuffer.prototype.constructor = tobi.CanvasBuffer;

tobi.CanvasBuffer.prototype.clear = function() {

  this.context.setTransform(1, 0, 0, 1, 0, 0);
  this.context.clearRect(0,0, this.width, this.height);

}

tobi.CanvasBuffer.prototype.resize = function(width, height) {

  this.width = this.canvas.width = width;
  this.height = this.canvas.height = height;

}

tobi.CanvasBuffer.prototype.destroy = function() {

  tobiJS.CanvasList.remove(this);

}
