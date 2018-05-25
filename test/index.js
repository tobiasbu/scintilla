
var VIEW = {
    w: 800,
    h: 600,
};

var config = {
    width: VIEW.w,
    height: VIEW.h,
    parent: "body",
    debug: true,
    pixelated: true,
    roundPixels: false,
};

var game = new scintilla.Game(config);

var TestScene = function() {

    this.start = function() {
        var rect = this.create.rectangle();
        rect.width = 100;
        rect.height = 100;
    };

};

game.scene.add('main', TestScene);

game.scene.set('main');