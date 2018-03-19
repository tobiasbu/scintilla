
//Test.log();
//var t = new Test();
//t.log();

//import scintilla from '../src/Scintilla'

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
  game.system.render.layer.add('gui');
  if (game.system.render.layer.contains('gui'))
  {
      console.log('yes');
  }
  var x = 0;

 /* var mat = new scintilla.Matrix(1);
  var mat2 = new scintilla.Matrix(3);
  //mat.set(1,2,5);
  mat2 = mat2.multiply(mat);
  mat2.transpose();
  console.log(mat2.toString());
  */


scene.preload = function() {
    this.load.setPath('assets/')
    this.load.image('test','img/block.png');
    //game.load.text('fontie','https://fonts.googleapis.com/css?family=Arima+Madurai:300,400,500', true)
}

var t = null;

scene.start = function() {
    t = this.create.sprite('test');
    t.position.x = 100;
    t.position.y = 100;
    t.update = function(){
        this.position.x += this.game.time.deltaTime * 20;
    }
}

scene.render = function() {
    
    //this.draw.sprite('test',VIEW.w / 2 + x,VIEW.h / 2-16,[0.5,0.5]);
    
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