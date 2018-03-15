
//Test.log();
//var t = new Test();
//t.log();


var VIEW = {
    w : 640,
    h : 480
}

var config = {
    width: VIEW.w,
    height: VIEW.h,
    parent: "canvas-container",
    debug: true
};
  
  var game = new scintilla.Game(config);
  var scene = game.scene.new('scene');
  var x = 0;

 /* var mat = new scintilla.Matrix(1);
  var mat2 = new scintilla.Matrix(3);
  //mat.set(1,2,5);
  mat2 = mat2.multiply(mat);
  mat2.transpose();
  console.log(mat2.toString());
  */


scene.preload = function()
{
    game.load.setPath('assets/')
    game.load.image('test','img/block.png');
}

scene.render = function() {
    game.draw.sprite('test',VIEW.w / 2 + x,VIEW.h / 2-16,[0.5,0.5]);
    
}

  scene.update = function() {

    //x += game.time.deltaTime * 20;

    if (game.input.keyboard.pressed(scintilla.KeyCode.Space)) 
    {
        console.log("pressed")
    }

    if (game.input.keyboard.release(scintilla.KeyCode.Space)) 
    {
        console.log("release")
    }


  }

  game.scene.set('scene');

Tester = function() {

  
    this.s = null;

    this.init = function() {
  
        // <script class="test-placeholder" type="application/javascript"> </script>

        this.s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "js1.js";
        s.innerHTML = null;
        s.id = "widget";
        document.getElementById("output").innerHTML = s;
  
    }
}

//init();*/