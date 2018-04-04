
//Test.log();
//var t = new Test();
//t.log();

//import scintilla from '../src/Scintilla'


//require('./scintilla.dev');

var VIEW = {
    w : 640,
    h : 480,
}

var config = {
    width: VIEW.w,
    height: VIEW.h,
    camera: {
        width: 320,
        height: 240
    },
    parent: "canvas-container",
    debug: false,
    fps: 60,
    pixelated: true,
    roundPixels : false,
    floorTiles : true
};
  
  var game = new scintilla.Game(config);

  var scene = game.scene.new('scene');
  //game.system.render.layer.add('gui');

  var x = 0;
  var camSpeed = 100;


  console.log(scintilla.VERSION)


scene.preload = function() {
    this.load.setPath('assets/')
    this.load.image('heroi','img/block.png');
    this.load.image('title','img/neof.png');
    this.load.tilemapJSON('tilemap','map/n_tilemap.json');
    this.load.webFont('font', 'google', 'Press Start 2P');

   /* this.load.spritesheet('andando','img/spritesheet.png', 64, 32, 4, 1, 32, 32);
    var animator = this.cache.createAnimator('heroi_animator');
    
    var anim = animator.addState('parado');
    anim.setImage('andando')
    anim.addFrame(64, 32, 32, 32);
    anim.addStrip(64,32,32,32, 4, 1);*/
    //game.load.text('fontie','https://fonts.googleapis.com/css?family=Arima+Madurai:300,400,500', true)
}

var t = null;


/*var HeroiPrefab = {
 
    start() {
        this.modules.attach.sprite(10, 10);
        this.modules.attach.boxCollider(10, 10);
    },

    update(dt) {

        // Tempo
        this.time.deltaTime; 
        //game.time.deltaTime

        // Teclado
        this.key;
        // Mouse
        this.mouse; 


        /// Transformação
        // x, y, angle, scale.x, scale.y, origin.x, origin.y
        //this.origin.set(0.5,0.5);
        //this.scale.x = 0.5;
        //this.angle = 30;

        // Componentes
        this.modules;
        var render = this.modules['render'];
        render.setImage('heroi');
        var render = this.modules.get('render');
        this.anim = this.modules.attach.animation('andando');
        this.anim.setSpeed(5); // fps * 5

        //this.animator = this.modules.attach.animator();
        
    }


};*/

scene.start = function() {

    // Cria Objetos rápidos e predefinidos
    var t = this.create.tilemap('tilemap');
    
    // Cria Prefabs, Find GameObject, acessa hierarquia de objetos
    //this.entity.create(HeroiPrefab);
  
    t.origin.set(0,0)
    t.angle = 0;
    //t = this.create.sprite('test');
    //t.position.y = 100;
    

    //t.update.bind(update);
    //let render = t.modules.get('render');
    

}



var time = 0.0;
var ok = false;

scene.update = function(dt) {



    time += dt;

    if (time >= 1 && !ok) {
    this.transition.in();
    ok = true;
    console.log('asdasd');
    }

   //this.camera.x = scintilla.Ease.inout.cut(0,320,time, 3);
   //scintilla.Ease.inBy(scintilla.EasingType.Cut, 0, 320, time, 2, 3);
 
    //console.log(this.camera.x);
    //t.position.x += 80 * dt;

    if (game.input.keyboard.press(scintilla.KeyCode.Right)) 
    {
        this.camera.x += dt * camSpeed;
    }
    if (game.input.keyboard.press(scintilla.KeyCode.Left)) 
    {
        this.camera.x -= dt * camSpeed;
    }

    if (game.input.keyboard.press(scintilla.KeyCode.Up)) 
    {
        this.camera.y -= dt * camSpeed;
    }
    if (game.input.keyboard.press(scintilla.KeyCode.Down)) 
    {
        this.camera.y += dt * camSpeed;
    }



  }

  scene.gui = function(draw) {
    
    draw.color = '#000'
    draw.rect(0, 0, 640, 16);
    draw.font('Press Start 2P', 7, 'normal');
    draw.text('SCORE: 999',8, 12,'white','left');
    
    
    
}

  game.scene.set('scene');

