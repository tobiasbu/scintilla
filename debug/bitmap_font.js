
var VIEW = {
  w: 800,
  h: 600,
};

const config = {
  width: VIEW.w,
  height: VIEW.h,
  parent: "body",
  debug: true,
  pixelated: true,
  roundPixels: false,
  contextMenu: {
    disable: true,
    target: 'canvas'
  }
};


const game = new glitter.Game(config);

var TestScene = function () {

  this.preload = function () {

    this.load.setBaseURL('assets/');
    this.load.bitmapFont('test', 'font2.fnt', 'font2.png');

  }

  // this.start = function () {
  //   /*var rect = this.create.rectangle();
  //   rect.width = 100;
  //   rect.height = 100;*/
  // };

  // this.gui = function (drawer) {

  // }

};

game.scene.add('main', TestScene);

game.scene.set('main');