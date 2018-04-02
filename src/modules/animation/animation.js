
// storage of animation state
export default class Animation {
  
  
  constructor(sprite) {

this.source = sprite;
this.frames = [];

}


addFrame(x,y,width,height) {

this.frames.push(new scintilla.Rect(x,y,width,height));

}

addStrip(xinit,yinit,frameWidth,frameHeight,numberOfFrames,imagesPerRow) {

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

}

duplicateFrame(index,at) {

  if (at === undefined)
    this.frames.push(this.frames[index]);
  else
    this.frames.splice(at,0,this.frames[index]);


}

getFrame(index) {

  return this.frames[index];

}

}

Object.defineProperty(scintilla.Animation.prototype, "length", {

get : function() {
  return this.frames.length;
}

});
