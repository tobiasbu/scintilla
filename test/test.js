

var VIEW = {
    w : 640,
    h : 480
}

var config = {
    width: 640,
    height: 480,
    parent: "canvas-container",
    debug: true
};
  
  var game = new tobi.Game(config);
  var scene = game.scene.new('scene');

  scene.update = function() {

    if (game.input.keyboard.pressed(tobi.KeyCode.Space)) 
    {
        //console.log("pressed")
    }

    if (game.input.keyboard.release(tobi.KeyCode.Space)) 
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

//init();