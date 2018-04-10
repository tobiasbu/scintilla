
//Test.log();
//var t = new Test();
//t.log();

//import scintilla from '../src/Scintilla';


//let scintilla = require('./scintilla.dev');

var VIEW = {
    w : 640,
    h : 480,
};

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
    roundPixels : true,
    floorTiles : true
};
  
var game = new scintilla.Game(config);
game.render.layer.add('game');
game.render.layer.add('effects');

console.log(scintilla.Environment.info);

function SceneLogo() {

    this.waitLogoTime = 0;
    this.done = false;

    this.preload = function() {
        this.load.setPath('assets/');
        this.load.image('block','img/block.png');
        this.load.image('title','img/n_title.png');
        this.load.image('antifaJamLogo','img/antifagamejamlogo.png');
        this.load.tilemapJSON('tilemap','map/n_tilemap.json');
        this.load.webFont('font', 'google', 'Press Start 2P');
        this.load.audio('titleMusic', 'n_title.mp3');
    };

    this.start = function() {
        this.transition.settings.setOutDuration(1);
        this.transition.settings.setEaseOutMethod(scintilla.Ease.Type.CUT, 3);
        this.transition.settings.setEaseInMethod(scintilla.Ease.Type.CUT, 3);
        this.transition.out();
        this.audio.play('titleMusic', 0.05, true);
    };

    this.update = function(dt) {
        if (!this.done)
        {
            this.waitLogoTime += dt / 2.5;

            if (this.waitLogoTime >= 1) {
                this.transition.settings.setInDuration(1);
                this.transition.in();
                var next = function() {
                    this.scene.set('title');
                };
                this.events.subscribeOnce('transition_end', next, this);
                this.done = true;
            } 
        }
    }

    this.gui = function(drawer) {
        drawer.sprite('antifaJamLogo',320/2,240/2,0.5, 0.5);
    }
}

function SceneTitle() {

    this.blinkStartTime = 0;
    this.blinkStart = false;

    this.start = function() {
        this.transition.out();
    }

    this.update = function(dt) {
        this.blinkStartTime += dt;

        if (this.blinkStartTime >= 0.5) {
            this.blinkStart = !this.blinkStart;
            this.blinkStartTime = 0;
        }

        if (this.key.pressed(scintilla.KeyCode.Enter)) {
            this.scene.set('game');
        }
    }

    this.gui = function(drawer) {
        drawer.sprite('title',320/2,13,0.5, 0);

        
        drawer.font('Press Start 2P', 8);
        drawer.color = '#fff';
        drawer.align = 'center';
        if (this.blinkStart) {
            drawer.text('PRESS START', 320/2, 148);
        }
        drawer.align = 'left';
        drawer.text('TOBIASBU', 8, 228);
        drawer.align = 'right';
        drawer.text('2018', 320-8, 228);
    };
}


function Player() {
    this.start = function() {
        this.modules.attach.sprite('block');
    }
}

function SceneGame() {

    var camSpeed = 100;

    this.start = function() {
        //this.create.tilemap('tilemap');
        this.entity.create(Player);
    };

    this.update = function(dt) {
        if (this.key.press(scintilla.KeyCode.Right)) 
        {
            this.camera.x += dt * camSpeed;
        }
        if (this.key.press(scintilla.KeyCode.Left)) 
        {
            this.camera.x -= dt * camSpeed;
        }
    
        if (this.key.press(scintilla.KeyCode.Up)) 
        {
            this.camera.y -= dt * camSpeed;
        }
        if (this.key.press(scintilla.KeyCode.Down)) 
        {
            this.camera.y += dt * camSpeed;
        }
    }
}

game.scene.add('logo', SceneLogo);
game.scene.add('title', SceneTitle);
game.scene.add('game', SceneGame);
game.scene.set('logo');


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

var EntityTest = {
    
    myVariable : 123,
    aString : 'asdasdasd',

    start() {
        this.modules.attach.sprite('block');
    },
    
    update() {

    }
};
/*
scene.start = function() {

   
  
  
   var obj = this.entity.create(EntityTest);
   
   obj.modules.get('render').layerID = 1;
     // Cria Objetos rápidos e predefinidos
    var t = this.create.tilemap('tilemap');
    
    // Cria Prefabs, Find GameObject, acessa hierarquia de objetos
    //this.entity.create(HeroiPrefab);
  
    //t.origin.set(0,0);
    //t.angle = 0;

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
       
        ok = true;
    }

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
    
    
    
}*/



