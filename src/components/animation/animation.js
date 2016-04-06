
// storage of animation state
tobi.Animation = function(sprite) {

this.source = sprite;
this.frames = [];

}

tobi.Animation.prototype = {

addFrame : function(x,y,width,height) {

this.frames.push(new tobi.Rect(x,y,width,height));

},

addStrip : function(xinit,yinit,frameWidth,frameHeight,numberOfFrames,imagesPerRow) {

  var y = 0;
  var x = 0;

	for (var i = 0; i < numberOfFrames; i++) {

			this.addFrame(xinit + (frameWidth*x),
                    yinit + (frameHeight*y),
                    frameWidth,
                    frameHeight
                  );
    x++;

    if (i % imagesPerRow ==  (imagesPerRow-1)) {
      x = 0;
      y++;
    }

	}

},

duplicateFrame : function(index,at) {

  if (at === undefined)
    this.frames.push(this.frames[index]);
  else
    this.frames.splice(at,0,this.frames[index]);


},

getFrame : function(index) {

  return this.frames[index];

}

}

Object.defineProperty(tobi.Animation.prototype, "length", {

get : function() {
  return this.frames.length;
}

});
