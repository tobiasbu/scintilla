
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
   contextMenu : {
       disable : true,
       target : 'canvas'
   }
};

var game = new scintilla.Game(config);

var TestScene = function() {

    var x, y;

    this.start = function() {
        /*var rect = this.create.rectangle();
        rect.width = 100;
        rect.height = 100;*/
    };

    this.update = function() {
        var is = this.key.pressed(scintilla.KeyCode.A);

    if (is)
        console.log('a was pressed');      
        
        var m_l = this.mouse.pressed(scintilla.MouseButton.Left);

        if (m_l)
        console.log('left mouse button was pressed');   

        m_l = this.mouse.pressed(scintilla.MouseButton.Middle);

        if (m_l)
        console.log('middle mouse button was pressed');   

        m_l = this.mouse.pressed(scintilla.MouseButton.Right);

        if (m_l)
        console.log('right mouse button was pressed');  
    }

    this.gui = function(drawer) {

        drawer.text('x = ' + this.mouse.x, 100, 100, '#fff');
        drawer.text('y = ' + this.mouse.y, 100, 124, '#fff');
    }

};

game.scene.add('main', TestScene);

game.scene.set('main');