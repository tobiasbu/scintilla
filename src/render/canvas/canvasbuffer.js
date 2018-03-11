
// based in pixi
Scintilla.CanvasBuffer = function(width,height) {

this.width = width;
this.height = height;
this.canvas = Scintilla.CanvasList.create(this, this.width, this.height);

this.context = this.canvas.getContext("2d");

this.canvas.width = width;
this.canvas.height = height;

}

Scintilla.CanvasBuffer.prototype.constructor = Scintilla.CanvasBuffer;

Scintilla.CanvasBuffer.prototype.clear = function() {

  this.context.setTransform(1, 0, 0, 1, 0, 0);
  this.context.clearRect(0,0, this.width, this.height);

}

Scintilla.CanvasBuffer.prototype.resize = function(width, height) {

  this.width = this.canvas.width = width;
  this.height = this.canvas.height = height;

}

Scintilla.CanvasBuffer.prototype.destroy = function() {

  tobiJS.CanvasList.remove(this);

}
