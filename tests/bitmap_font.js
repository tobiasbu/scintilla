
var VIEW = {
  w: 800,
  h: 600,
};

const config = {
  width: VIEW.w,
  height: VIEW.h,
  parent: "body",
  debug: false,
  pixelated: true,
  roundPixels: false,
  contextMenu: {
    disable: true,
    target: 'canvas'
  }
};


const game = new glitter.Game(config);

var TestScene = function () {

  var timer = 0;
  var pisca = false;

  this.preload = function () {

    this.load.setBaseURL('assets/');
    this.load.bitmapFont('test', 'font2.fnt', ['font2.png', 'font3.png']);

  }

  this.update = function (delta) {
    timer += delta / 0.2;
    if (timer >= 1) {
      timer = 0;
      pisca = !pisca;
    }
  }

  this.start = function () {

    this.ui.setSize(256, 224);
    this.ui.setViewportByAspectRatio(256 / 224);
    // this.ui.resolution = 1;
  };

  this.gui = function (drawer) {
    let y = 0;
    let x = 0;
    let xj = 0;

    let bnk = pisca ? 1 : 0;

    for (let i = 0; i < 12; i += 1) {
      drawer.bitmapText('test', 'Anti-fascist', x, y, bnk)
      drawer.bitmapText('test', 'Game Jam', xj, y + 20, bnk)
      y += 40;
      bnk = (bnk === 1) ? 0 : 1;
      if (i === 5) {
        y = 0;
        x += 180;
        xj = x - 35;
      }
    }
  }

};

game.scene.add('main', TestScene);

game.scene.set('main');