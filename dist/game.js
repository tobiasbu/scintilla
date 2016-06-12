
var VIEW = {
  w : 640,
  h : 480
}

var myGame = new tobi.Game({width:VIEW.w,height:VIEW.h, parent:"canvas-container"});

window.addEventListener("resize", OnResizeCalled, false);

function OnResizeCalled() {

  /*var gameWidth = document.getElementById('canvas-container').clientWidth;//window.innerWidth;
  var gameHeight =   document.getElementById('canvas-container').clientHeight; //window.innerHeight;
  var scaleToFitX = gameWidth / VIEW.w;
  var scaleToFitY = gameHeight / VIEW.h;

  var currentScreenRatio = gameWidth / gameHeight;
  var optimalRatio = Math.min(scaleToFitX, scaleToFitY);

  if (currentScreenRatio >= 1.77 && currentScreenRatio <= 1.79) {
      myGame.canvas.style.width = gameWidth + "px";
      myGame.canvas.style.height = gameHeight + "px";
  }  else {
      myGame.canvas.style.width = VIEW.w * optimalRatio + "px";
      myGame.canvas.style.height = VIEW.h * optimalRatio + "px";
  }*/
}

var myLoadingScene = new tobi.Scene(myGame);
var myScene = new tobi.Scene(myGame);


// loading scene
myLoadingScene.preload = function() {

  myGame.load.image('splash',"images/tobijs_splash.png");
  myGame.load.image('title',"images/title.png");

  myGame.load.image('starfield',"images/starfield0.png");
  myGame.load.image('star',"images/star.png");

  myGame.load.image('enemyBullet',"images/enemybullet.png");
  myGame.load.image('bullet',"images/bullet.png");
  myGame.load.image('ship',"images/ship.png");
  myGame.load.image('enemy',"images/enemy.png");
  myGame.load.image('enemy2',"images/enemy0.png");
  myGame.load.image('explosion',"images/explosion.png");
  myGame.load.image('life',"images/life.png");

  myGame.load.audio('explosionPlayer', "sounds/explosion.wav");
  myGame.load.audio('explosion', "sounds/explosion2.wav");
  myGame.load.audio('bullet', "sounds/bullet.wav");
  myGame.load.audio('enemyBullet', "sounds/enemybullet.wav");

  myGame.load.audio('title',"sounds/bgm_titlescreen2.ogg");
  myGame.load.audio('start',"sounds/bgm_startgame.ogg")
  myGame.load.audio('phase',"sounds/bgm_phase.ogg")
  myGame.load.audio('gameover',"sounds/bgm_gameover.ogg")

  this.rectColor = tobi.Color.HSLtoRGB(110,186,144,255);
  this.rectColorBG = tobi.Color.HSLtoRGB(0,0,180,255);
  this.step = 0;
  this.alpha = 1;
  this.fadeStart = false;
  this.progress = 0;
  this.scale = 0.85;


  //this.camera.setScale(this.scale,this.scale);

}

myLoadingScene.loading = function() {
this.progress = myGame.load.progress;
}

myLoadingScene.loadingRender = function() {

//myGame.draw.sprite('splash',VIEW.w / 2,VIEW.h / 2-24,'center','center');
myGame.draw.rectangle(VIEW.w / 2-50,VIEW.h / 2-8,100,16,this.rectColorBG);
myGame.draw.rectangle(VIEW.w / 2-50,VIEW.h / 2-8,100*this.progress,16,this.rectColor);

}


myLoadingScene.update = function() {

  if (!this.fadeStart) {

    this.step += myGame.clock.deltaTime;

    if (this.step > 2) { // seconds

      this.fadeStart = true;

    }

  } else {

    this.alpha -= myGame.clock.deltaTime * 2;

    if (this.alpha <= 0) {
      this.alpha = 0;
      myGame.scene.set('game');
    }

  }

}

myLoadingScene.start = function() {

  var anim = myGame.animationCache.add('ship','player','still');
  anim.addStrip(0,0,64,82,3,3);
  anim.duplicateFrame(1);
  var anim2 = myGame.animationCache.add('enemy','enemies','move');
  anim2.addStrip(0,0,58,81,3,3);
  anim2.duplicateFrame(1);
  anim2 = myGame.animationCache.add('enemy2','enemies','move2');
  anim2.addStrip(0,0,58,81,3,3);
  anim2.duplicateFrame(1);
  var anim3 = myGame.animationCache.add('explosion','misc','boom');
  anim3.addStrip(0,0,160,160,10,10);

}

myLoadingScene.render = function() {

myGame.draw.alpha(this.alpha);
myGame.draw.sprite('splash',VIEW.w / 2,VIEW.h / 2-16,[0.5,0.5]);
myGame.draw.alpha(1);


}

var bg = tobi.GameObject.extend(function() {

this.start = function() {

  this.origin.set(0.5,0.5);
  this.name = 'bg';
  var spr = this.addComponent('tiledSprite',['starfield',VIEW.w+VIEW.h,VIEW.h+VIEW.w]);
  spr.tileScale.set(1,1);
  this.position.set(VIEW.w / 2,VIEW.h / 2);
  this.controller = null;
  this.setDepth(-2);

}

this.update = function() {

  this.component['render'].tilePosition.move(0,1.25);

  if (this.controller.state == "title") {
    this.angle += 0.1;
    if (this.angle > 360)
      this.angle = 0;
    }
  }


});

var starObj = tobi.GameObject.extend(function() {

  this.speed = 2;

this.start = function() {

  this.origin.set(0,0);
  this.name = 'star';
  this.addComponent('sprite','star');
  this.reset();
  this.setDepth(-1);


}

this.update = function() {

  this.position.move(0,this.speed);

  if (this.position.y > VIEW.h + 30)
    this.destroy(true);
  }

this.reset = function() {

  var s = tobi.Math.randomRange(0.15,0.65);
  var a = tobi.Math.randomRange(0.3,0.5)
  var x = tobi.Math.randomRange(0,VIEW.w)

  this.scale.set(s,s);
  this.component['render'].alpha = a;
  this.position.set(x,-64);
  this.speed = tobi.Math.randomRange(3,6);

}

});

var explosion = tobi.GameObject.extend(function() {

  this.start = function() {

    this.name = 'explosion';
    this.anim = this.addComponent('animation');
    this.anim.addFromCache('misc','boom');
    this.anim.setSpeed(1.1);

  }

  this.reset = function() {

    var rand = tobi.Math.randomRange(0.75,0.85);
    this.scale.set(rand);
    this.angle = tobi.Math.irandomRange(0,360);
    this.anim.play();

  }

  this.onAnimationEnd = function() {

    this.destroy(true);

  }



});

var playerBullet = tobi.GameObject.extend(function() {

  this.start = function() {

    this.name = 'bullet';
    this.player = null;
    this.addComponent('sprite','bullet')
    var col = this.addComponent('collider',['rectangle',15,33])
    this.speed = 6;
    this.setDepth(2);

  }

  this.update = function() {

    this.position.move(0,-this.speed);

    if (this.position.y < -32)
      this.destroy(true);

  }

});

var enemyBulletObj = tobi.GameObject.extend(function() {

    // /this.player = null;

  this.start = function() {

    this.name = 'enemyBullet';

    this.addComponent('sprite','enemyBullet')
    var col = this.addComponent('collider',['rectangle',18,18])
    this.speed = 5;
    this.setDepth(3);

  }

  this.update = function() {

    this.position.move(0,this.speed);

    if (this.position.y > VIEW.h+32)
      this.destroy(true);

  }

});



var enemy = tobi.GameObject.extend(function() {

  this.start = function() {

    this.name = 'enemy';

    var col = this.addComponent('collider',['rectangle',54])
    col.offset.y = -15;

    var anim = this.addComponent('animation')
    anim.addFromCache('enemies','move');
    anim.play(true);
    anim.setSpeed(0.45);

    this.setDepth(2);

    this.speed = tobi.Math.randomRange(2.5,4);
  }

  this.update = function() {

    this.position.y += this.speed;

    if (this.position.y > VIEW.h+60) {
      this.destroy(true);
    }

  }

  this.onCollision = function(collider) {

    if (collider.name == "bullet") {
        myGame.sound.play('explosion',0.75);
    collider.destroy(true);
    this.destroy(true);
    var explo = myGame.instance.addFromPool("explosion");
    explo.position.x = this.position.x;
    explo.position.y = this.position.y;
    collider.player.score += 100;
  }

  }

});

var enemy2Obj = enemy.extend(function() {

  this.stepBullet = 0;
  this.nextBullet = 1;
  this.bulletCount = 0;

  this.start = function() {

    this.name = "enemy"

    var col = this.addComponent('collider',['rectangle',54])
    col.offset.y = -15;

   var anim = this.addComponent("animation");
    anim.remove("move");
    anim.addFromCache('enemies','move2');
    anim.setState('move2');
    anim.play(true);
    anim.setSpeed(0.25);

    this.setDepth(2);

    this.speed = tobi.Math.randomRange(2.5,3.5);

  }

  this.reset = function() {

    this.stepBullet = 0;
    this.nextBullet = 1;
    this.bulletCount = 0;
    this.speed = tobi.Math.randomRange(2.5,3.5);

  }

  this.update = function() {

    this.position.y += this.speed;

    if (this.position.y > VIEW.h+60) {
      this.destroy(true);
    }

    this.stepBullet += myGame.clock.deltaTime / this.nextBullet;

    if (this.stepBullet > 1) {

        this.bulletCount++;
        this.stepBullet = 0;

        if (this.bulletCount > 5) {

          this.nextBullet = tobi.Math.randomRange(2,2.5);
          this.bulletCount = 0;

        } else {
            this.nextBullet = 1.2;
        }

        var bullet = myGame.instance.addFromPool("enemyBullet");

        bullet.position.set(this.position.x,this.position.y+10);
        myGame.sound.play("enemyBullet",0.25);

    }

  }

});

var player = tobi.GameObject.extend(function() {

  this.speed = 3.25;
  this.stepBullet = 0;
  this.dead = false;
  this.lifes = 3;
  this.score = 0;

  this.invulnerable = false;
  this.invulnerableTime = 0;
  this.triggerAlpha = false;
  this.alphaTime = 0;

this.start = function() {

  this.name = 'player';
  this.state = "intro";
  this.position.set(VIEW.w / 2,VIEW.h + 75);

  var anim = this.addComponent('animation');

  anim.addFromCache('player','still');
  anim.play(true);
  anim.setSpeed(0.5);
  this.setDepth(3);

  this.addComponent('collider',['triangle',64,64]);


}

this.update = function() {

if (  this.state == "playing") {



  if (this.invulnerable) {

    if (this.invulnerableTime > 0) {

      this.invulnerableTime -= myGame.clock.deltaTime;

      var t = 1 - (this.invulnerableTime / 2);

      var t2 = tobi.Math.lerp(0.1,0.02,t);

      this.alphaTime += myGame.clock.deltaTime / t2;

      if (this.alphaTime >= 1) {
        this.triggerAlpha = !this.triggerAlpha;
        this.alphaTime = 0;

        if (this.triggerAlpha)
          this.component['render'].alpha = 0.35;
        else
          this.component['render'].alpha = 0.9;
      }



    } else {

        this.invulnerableTime = false;
        this.invulnerable = false;
        this.component['render'].alpha = 1;
        this.triggerAlpha = false;

    }
    }

  if (!this.dead) {

    var movingX = 0;
    var movingY = 0;
    var angle = 0;


  if (this.game.input.keyboard.press(tobi.KeyCode.Right)) {
    movingX = 1;
    angle = 2;

  }
  if (this.game.input.keyboard.press(tobi.KeyCode.Left)) {
    movingX = -1;
    angle = -2;

  }
  if (this.game.input.keyboard.press(tobi.KeyCode.Down))
    movingY = 1;
  if (this.game.input.keyboard.press(tobi.KeyCode.Up))
      movingY = -1;

    this.position.move(this.speed*movingX,this.speed*movingY);
    this.angle = angle;

    // LIMIT position
    if (this.position.x+this.component['render'].frame.width*0.5 > VIEW.w)
      this.position.x = VIEW.w-this.component['render'].frame.width*0.5;
    else if (this.position.x < this.component['render'].frame.width*0.5)
        this.position.x = this.component['render'].frame.width*0.5;

    if (this.position.y < this.component['render'].frame.height*0.5 )
      this.position.y = this.component['render'].frame.height*0.5;
    else if (this.position.y > VIEW.h-this.component['render'].frame.height*0.5)
        this.position.y = VIEW.h-this.component['render'].frame.height*0.5;


    this.stepBullet += myGame.clock.deltaTime;

    if (this.stepBullet > 0.45) {

    if (this.game.input.keyboard.press(tobi.KeyCode.Space)) {
        //myGame.instance.create(bullet,this.position.x,this.position.y - 20);
        var bullet = myGame.instance.addFromPool("bullet");
        bullet.player = this;

        bullet.position.set(this.position.x,this.position.y-20);
        this.stepBullet = 0;
        myGame.sound.play("bullet",0.25);

    }

    }
  } else {

    if (this.position.y > VIEW.h - 100) {

      this.position.move(0,-3);

    } else {
      this.dead = false;
    }
  }

} else if (this.state != "gameover") {

  if (this.position.y > VIEW.h - 100)
    this.position.move(0,-2);
  else {
    this.state = "playing";
  }

}

}

this.onCollision = function(collider) {

  if (!this.dead && !this.invulnerable) {
    if (collider.name == "enemy" || collider.name == "enemyBullet") {
      collider.destroy(true);
     myGame.sound.play('explosionPlayer',0.85);
    var explo0 = myGame.instance.addFromPool("explosion");
    explo0.position.copy(this.position);
    var explo1 = myGame.instance.addFromPool("explosion");
    explo1.position.copy(collider.position);
    this.die();

  }
}


}

this.die = function() {

  this.lifes--;

  if (this.lifes <= 0) {
    this.controller.state = "gameover";
    this.state = "gameover";

  }

  this.position.set(VIEW.w / 2,VIEW.h + 50)
  this.invulnerableTime = 2;
  this.invulnerable = true;
  this.dead = true;

}



});

musicController = function() {

this.music = null;
this.changeMusicTo = {change:false};


this.play = function(name,volume,loop) {

  this.music = myGame.sound.play(name,volume,loop);

}


this.fadeAndChange = function(fadeDuration,fadeVolume,name,volume,loop) {

    this.music.setFade(fadeDuration,fadeVolume,true);
    this.changeMusicTo = {name:name,volume:volume,loop:loop,change:true};

}

this.update = function() {

  if (this.changeMusicTo.change) {

    if (!this.music.isPlaying || !this.music.isFading) {

      this.music.changeSound(this.changeMusicTo.name,this.changeMusicTo.volume,this.changeMusicTo.loop);
      this.changeMusicTo.change = false;

    }

  }

}

}

music = new musicController();

var gameController = tobi.GameObject.extend(function() {

  this.start = function() {

    this.state = "title";
    this.alphaStart = 1;
    this.alphaStartTrg = 0;

    this.name = 'controller';
    music.play('title',1,true);
    this.setDepth(100);

    this.player = null;

    this.vec = new tobi.Vector(VIEW.w / 2,VIEW.h / 2);
    this.logo = new tobi.Vector(VIEW.w / 2,150);

    this.lerpTime = 0;
    this.oldAngle = 0;

    this.generateTime = 0;
    this.generateTimeNext = 3;
    this.timer = 0;
    this.trigger = 0
    this.generateTime2 = 0;
    this.generateTimeNext2 = 8;

  }

  this.update = function() {

    if (this.state == "title") {

      // rotate the camera around a point
      /*this.oldAngle = myGame.camera.angle;

      myGame.camera.angle += 0.1;
      if (myGame.camera.angle > 360)
        myGame.camera.angle = 0;

      var rotate = myGame.camera.angle - this.oldAngle;

      this.vec.rotateAround(rotate * tobi.Math.degToRad,new tobi.Vector(0,0));

      myGame.camera.setFocus(this.vec);*/

      if (this.alphaStartTrg == 0) {

        if (this.alphaStart > 0.5)
          this.alphaStart -=  myGame.clock.deltaTime;
        else {
            this.alphaStart = 0.5;
            this.alphaStartTrg = 1;
        }

      } else if (this.alphaStartTrg == 1) {

        if (this.alphaStart < 1)
          this.alphaStart +=  myGame.clock.deltaTime;
        else {
            this.alphaStart = 1;
            this.alphaStartTrg = 0;
        }

      }

      if (myGame.input.keyboard.pressed(tobi.KeyCode.Enter)) {
        this.state = "startgame";
        music.fadeAndChange(1.25,0,'start',1,false);
      if (this.bg) {
        this.oldAngle = this.bg.angle;


      }

      }

    } else if (this.state == "startgame") {

        this.lerpTime += myGame.clock.deltaTime / 1.5;

        var t = this.lerpTime;

      if ( t >= 1) {
          t = 1;
          this.lerpTime = 0;
          this.player = myGame.instance.create(player,0,0);
          this.player.controller = this;
          this.state = "playing";
      }

      if (this.bg !== undefined)
      this.bg.angle = tobi.Math.lerpAngle(this.oldAngle, 0, t);
      /*var focus = tobi.Vector.lerp(this.vec,new tobi.Vector(VIEW.w / 2,VIEW.h / 2),  t);
      myGame.camera.angle = angle;
      myGame.camera.setFocus(focus);*/

      this.logo.y = tobi.Math.lerp(150,-120,t);

    } else if (this.state == "playing") {

      if (music.music.tag != "phase")
        if (!music.music.isPlaying)
          music.music.changeSound('phase',1,true);



          this.generateTime += myGame.clock.deltaTime / this.generateTimeNext;
          this.generateTime2 += myGame.clock.deltaTime / this.generateTimeNext2;

            if (this.generateTime2 > 1) {

              var x = tobi.Math.irandomRange(32,VIEW.w-64);

              this.generateTimeNext2 = tobi.Math.randomRange(0.8,1.5);
                this.generateTime2 = 0;

                if (myGame.pool.getContainer("enemyRed").length > 0) {
                  var ene = myGame.instance.addFromPool("enemyRed");
                  ene.position.x = x;
                  ene.position.y = -50;
              }


            }

        if (this.generateTime > 1) {

          var x = tobi.Math.irandomRange(32,VIEW.w-64);

          this.generateTimeNext = tobi.Math.randomRange(0.65,1.25);
            this.generateTime = 0;

          if (myGame.pool.getContainer("enemy").length > 0) {
            var ene = myGame.instance.addFromPool("enemy");
            ene.position.x = x;
            ene.position.y = -50;
        }

      }

    } else if (this.state == "gameover") {

      if (this.trigger == 0) {

        music.music.stop();

        this.trigger = 1;

      }

      if (this.trigger == 1) {

        this.timer += myGame.clock.deltaTime / 0.75;

        if (this.timer >= 1) {
          this.trigger = 2;
          this.timer = 0;
            music.music.changeSound('gameover',1,false);
          }

      }

      if (this.trigger == 2) {

        var ok = myGame.input.keyboard.pressed(tobi.KeyCode.Enter);

        this.timer += myGame.clock.deltaTime / 10;

        if (ok || this.timer > 1) {
          this.trigger = 0;
          myGame.scene.restart();
        }

      }

    }
  }



  this.freelyrender = function(context) {

    myGame.draw.alpha(1);

    myGame.draw.sprite('title',this.logo.x,this.logo.y,[0.5,0.5])

    if (this.state == "title") {

      myGame.draw.font("Verdana", 12)
      myGame.draw.text("tobiJS - alpha test v0.2 - 2016",16,VIEW.h-32,'white');
      myGame.draw.text("github.com/tobiasbu/tobiJS",16,VIEW.h-16,'white');

      var txt = "Music by: Eduardo Luiz Beise Ulrich"
      var size = myGame.context.measureText(txt);
      myGame.draw.text(txt,VIEW.w-size.width - 16,VIEW.h-16,'white');

      myGame.draw.font("Verdana", 20)
      txt = "PRESS ENTER TO START"
      size = myGame.context.measureText(txt);


      myGame.draw.alpha(this.alphaStart);
      myGame.draw.text(txt,VIEW.w / 2-size.width/2,VIEW.w / 2,'white');
      myGame.draw.alpha(1);

    } else if (this.state == "playing") {

      if (this.player != null) {

        myGame.draw.font("Verdana", 20);
        var text = "Score: " + this.player.score;
        myGame.draw.text(text,VIEW.w-200,40,'white');

        for (var lf = 0; lf < this.player.lifes; lf++) {

          myGame.draw.sprite('life',32+(lf*40),32,[0.5,0.5])

        }

      }

    } else if (this.state == "gameover") {

      if (this.trigger == 2) {
      myGame.draw.font("Verdana", 40);
      var size = context.measureText("GAME OVER");
      myGame.draw.text("GAME OVER",VIEW.w / 2-size.width/2,(VIEW.h / 2) - 20,'white');
      myGame.draw.font("Verdana", 20);
      var text = "Score: " + this.player.score;
      size = context.measureText(text);
      myGame.draw.text(text,VIEW.w / 2-size.width/2,(VIEW.h / 2) + 20,'white');
    }

    }

  }

});


myScene.start = function() {

  this.timeStar = 0;
  this.nextStar = 0;

var controller = myGame.instance.create(gameController,0,0);
var bg0 = myGame.instance.create(bg,0,0);

bg0.controller = controller;
controller.bg = bg0;

myGame.pool.clearAll();

console.log("start");


myGame.pool.add("bullet",playerBullet,20);
myGame.pool.add("enemy",enemy,30);
myGame.pool.add("enemyRed",enemy2Obj,20);
myGame.pool.add("enemyBullet",enemyBulletObj,20);
myGame.pool.add("explosion",explosion,15);
myGame.pool.add("star",starObj,20);




for (var i = 0; i < 8; i++) {

var x = tobi.Math.randomRange(0,VIEW.w);
var y = tobi.Math.randomRange(0,VIEW.h);
var star = myGame.instance.addFromPool("star");



star.position.set(x,y);


}





}

myScene.update = function() {

music.update();

if (myGame.pool.getContainer('star').length > 0) {

  this.timeStar += myGame.clock.deltaTime / this.nextStar;

  if (this.timeStar > 1) {

    myGame.instance.addFromPool('star');

    this.nextStar = tobi.Math.randomRange(0.15,0.75);
    this.timeStar = 0;

  }


}

}


myGame.scene.add('loading', myLoadingScene);
myGame.scene.add('game', myScene);
myGame.scene.set('loading');

// prepare your game objects





//player.sprite = myGame.assetManager.getAsset("images/cursor.png", "sprites");

//console.log(player.sprite);

//myScene.destroyGameObject(player);







 //new tobiJS.GameObject(myGame); //myGame.createGameObject();

//myGame.canvas.style = "border:1px solid #d3d3d3;background-color: #f1f1f1;";
