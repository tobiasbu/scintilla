//Test.log();
//var t = new Test();
//t.log();

//import scintilla from '../src/Scintilla';


//let scintilla = require('./scintilla.dev');

var VIEW = {
    w: 640,
    h: 480,
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
    roundPixels: false,
    floorTiles: true
};

var game = new scintilla.Game(config);
game.render.layer.add('game');
game.render.layer.add('effects');

console.log(scintilla.Environment.info);

function SceneLogo() {

    this.waitLogoTime = 0;
    this.done = true;
    this.goToScene = 'title';

    this.preload = function () {
        this.load.setPath('assets/');

        /// TITLE
        this.load.webFont('font', 'google', 'Press Start 2P');
        this.load.image('titleNeo', 'img/n_title_neo.png');
        this.load.image('titleBugre', 'img/n_title_bugre.png');
        this.load.image('titleBugreBack', 'img/n_title_bugre_fill.png');
        this.load.image('titleBorder', 'img/n_title_bugre_border.png');
        this.load.image('titleChroma', 'img/n_title_chrome.bmp');

        this.load.image('titleBg', 'img/n_title_bg.bmp');
        this.load.image('antifaJamLogo', 'img/antifagamejamlogo.png');

        /// AUDIO
        this.load.audio('titleMusic', 'sfx/505-loop3.ogg');
        this.load.audio('gameMusic', 'sfx/505-myth.ogg');
        this.load.audio('ok', 'sfx/n_confirm.wav');
        this.load.audio('shoot', 'sfx/n_shot.wav');
        this.load.audio('explosion', 'sfx/n_explosion.wav');
        this.load.audio('dead', 'sfx/n_dead.wav');

        /// GAME
        this.load.tilemapJSON('tilemap', 'map/n_tilemap.json');
        this.load.image('chars', 'img/n_chars.png');

        // Bugreiro
        this.load.spritesheet('bug_down', 'chars', [0, 0, 16, 16, 2], 123);
        this.load.spritesheet('bug_side', 'chars', [0, 16, 16, 16, 2], 123);
        this.load.spritesheet('bug_up', 'chars', [0, 32, 16, 16, 2], 123);
        this.load.spritesheet('bug_shoot_down', 'chars', [32, 0, 16, 16, 4], 120);
        this.load.spritesheet('bug_shoot_side', 'chars', [32, 16, 16, 16, 4], 120);
        this.load.spritesheet('bug_shoot_up', 'chars', [32, 32, 16, 16, 4], 120);
        this.load.animMachine('bugreiro', ['bug_down', 'bug_side', 'bug_up', 'bug_shoot_down', 'bug_shoot_side', 'bug_shoot_up']);

        // Effects
        this.load.spritesheet('shoot_effect_side', 'chars', [96, 0, 16, 16, 3, 1], 120);
        this.load.spritesheet('shoot_effect_updown', 'chars', [112, 0, 16, 16, 3, 1], 120);
        this.load.spritesheet('bullet_explosion', 'chars', [128, 0, 16, 16, 4, 1], 120);
        this.load.spritesheet('blood_explosion', 'chars', [80, 48, 16, 16, 5, 1], 160);

        /// FOLKS

        var x = 0;
        var y = 48;
        var row = 0;
        var folkDown, folkUp, folkSide;
        var dur = 240;

        for (var i = 0; i < 6; i++) {

            folkDown = 'folk_down_' + i.toString();
            folkSide = 'folk_side_' + i.toString();
            folkUp = 'folk_up_' + i.toString();
            this.load.spritesheet(folkDown, 'chars', [x, y, 16, 16, 2], dur);
            this.load.spritesheet(folkSide, 'chars', [x, y + 16, 16, 16, 2], dur);
            this.load.spritesheet(folkUp, 'chars', [x, y + 32, 16, 16, 2], dur);
            this.load.animMachine('folk_' + i.toString(), [folkDown, folkSide, folkUp]);

            row++;
            if (row >= 2) {
                row = 0;
                x = 0;
                y += 48;
            } else {
                x += 32;
            }
        }

        this.events.subscribe("asset_complete", function (asset, type) {

            if (type === scintilla.AssetType.spritesheet) {
                let dur = (16 / 50) / 2;
                if (/^bug_shoot_/.test(asset.name)) {
                    asset.loop = false;
                    asset.duration = 120;
                    asset.duplicate(0);
                } else if (/^bug_/.test(asset.name)) {
                    asset.loop = true;
                    asset.duration = dur * 1000;
                }
            }

        });

    };

    this.start = function () {
        this.transition.settings.setOutDuration(1);
        this.transition.settings.setEaseOutMethod(scintilla.Ease.Type.CUT, 3);
        this.transition.settings.setEaseInMethod(scintilla.Ease.Type.CUT, 3);
        this.transition.out();
        this.audio.playPersistent('titleMusic', 0.3, true);
    };

    this.update = function (dt) {
        if (!this.done) {
            this.waitLogoTime += dt / 2.5;

            if (this.waitLogoTime >= 1) {
                this.transition.settings.setInDuration(1);
                this.done = true;
            }
        } else {

            this.transition.in();

            var next = function () {
                this.scene.set(this.goToScene);
            };
            this.events.subscribeOnce('transition_end', next, this);
        }
    };

    this.gui = function (drawer) {
        drawer.sprite('antifaJamLogo', 320 / 2, 240 / 2, 0.5, 0.5);
    };
}

function SceneTitle() {

    this.blinkStartTime = 0;
    this.blinkStart = false;
    var neoRotX = 0;
    var neoRotY = 0;
    var angt = 0;
    var rot = 0;
    var bugPosX = 62 + 114.5;
    var bugPosY = 57 + 24.5
    var it = 1;
    var optionsMenu = false;
    var optionsSelect = 0;
    var startGame = 0;
    var bgm = null;

    this.start = function () {
        this.transition.out();
    };

    this.update = function (dt) {

        if (startGame === 0) {

            if (!optionsMenu) {
                this.blinkStartTime += dt;


                if (this.blinkStartTime >= 0.5) {
                    this.blinkStart = !this.blinkStart;
                    this.blinkStartTime = 0;
                }

                if (this.key.pressed(scintilla.KeyCode.Enter) || this.key.pressed(scintilla.KeyCode.Space)) {
                    optionsMenu = true;
                    this.audio.playOnce('ok', 0.5);
                }
            } else {

                let arrow = this.key.pressed(scintilla.KeyCode.Up) || this.key.pressed(scintilla.KeyCode.Down);

                if (arrow) {
                    this.audio.playOnce('ok', 0.5);
                    optionsSelect = !optionsSelect;
                }

                if (this.key.pressed(scintilla.KeyCode.Enter)) {
                    this.transition.in();
                    this.audio.playOnce('ok', 0.5);
                    this.blinkStartTime = 0;
                    bgm = this.audio.at(0);
                    this.events.subscribeOnce('transition_end', function () {
                        startGame = 2;
                    });
                    startGame = 1;
                }
            }

        } else {

            if (startGame === 2) {

                this.blinkStartTime += dt;

                var tVolume = this.blinkStartTime / 1.5;

                if (tVolume >= 1)
                    tVolume = 1;

                bgm.volume = scintilla.Math.lerp(0.3, 0, tVolume);

                if (this.blinkStartTime >= 2) {
                    this.audio.stopAll(true);
                    this.scene.set('game');
                }
            }
        }

        angt += (dt / 8.0);

        if (angt >= 1) {
            angt = 0;
        }
        rot = scintilla.Math.degToRad * (angt * 360);

        neoRotX = Math.cos(rot);
        neoRotY = Math.sin(rot);
    };

    this.gui = function (drawer) {

        drawer.defaultComposite();

        drawer.sprite('titleChroma', bugPosX, bugPosY, 0.5, 0.5);
        drawer.composite = 'destination-in';
        drawer.spriteSkew('titleBugre', bugPosX, bugPosY, neoRotX * 0.05, -neoRotY * 0.05, 0.5, 0.5);
        drawer.composite = 'destination-over';

        var itX, itY;
        var tanY = Math.atan(neoRotY) * 0.05;
        var tanX = Math.atan(neoRotX) * 0.05;

        for (; it < 4; it++) {
            itX = it * 80; //64; // 4, 8
            itY = it * 64; //64;
            drawer.alpha = scintilla.Math.lerp(1, 0.0, ((it - 1) / 3));
            drawer.spriteSkew('titleBugreBack',
                bugPosX + (itX * tanX),
                bugPosY + (itY * tanY),
                neoRotX * 0.05, -neoRotY * 0.05, 0.5, 0.5);
        }

        drawer.alpha = 1;
        it = 1;

        drawer.sprite('titleBg', 0, 0);

        drawer.defaultComposite();

        drawer.spriteSkew('titleBorder', bugPosX + neoRotX, bugPosY + neoRotY, neoRotX * 0.05, -neoRotY * 0.05, 0.5, 0.5);
        drawer.sprite('titleNeo', 14 + (neoRotX * 4), 12 + (4 - neoRotY * 3));


        drawer.font('Press Start 2P', 8);
        drawer.color = '#fff';

        if (!optionsMenu) {
            drawer.align = 'center';
            if (this.blinkStart) {
                drawer.text('PRESS START', 160, 164);
            }
            drawer.align = 'left';
        } else {
            drawer.align = 'center';
            drawer.text('FAIR EXCHANGE?', 160, 148);
            drawer.align = 'left';
            //let unicode = eval('"\\u' + 2192 + '"'); //String.fromCharCode("8594");
            drawer.text(">", 148 - 16, 148 + 16 + (optionsSelect * 12));
            drawer.text('YES', 148, 148 + 16);
            drawer.text('NO', 148, 148 + 16 + 12);
        }

        drawer.text('TOBIASBU', 8, 232);
        drawer.text('MUSIC BY 505', 8, 232 - 10);
        drawer.align = 'right';
        drawer.text('2018', 320 - 8, 232);
    };
}

function CheckMapCollision(map, x, y) {
    var tile = map.layers[1].getTile(x, y);

    return (tile.data.properties.colliadable);
}

function SetTile(entity, tileX, tileY) {
    entity.position.set(
        scintilla.Math.floor(tileX * 16) + (entity.origin.x * 16),
        scintilla.Math.floor(tileY * 16) + (entity.origin.y * 16));
}

function GetEntityTile(entity) {
    return {
        x: Math.round((entity.x + (entity.origin.x * 16)) / 16),
        y: Math.round((entity.y + (entity.origin.y * 16)) / 16)
    };
}

function GetTile(xworld, yworld) {
    return {
        x: Math.round(xworld / 16),
        y: Math.round(yworld / 16)
    };
}

function RoundToTile(entity) {

    SetTile(entity,
        (entity.x - (entity.origin.x * 16)) / 16,
        (entity.y - (entity.origin.y * 16)) / 16
    );
}

function CameraFollowPlayer(camera, player) {

    var camX = player.x - 144;

    if (camX <= 0) {
        camX = 0;
    }

    camera.x = camX;

}

function CheckCollisionFolk(folks, x, y) {
    for (var i = 0; i < folks.length; i++) {
        if (folks[i].tile.x == x && folks[i].tile.y == y)
        {
            return folks[i];
        }
    }

    return null;
}



/// SHOOT EFFECT

function ShootEffect() {

    this.vspd = 0;
    this.hspd = 1;
    var anim;

    this.start = function () {
        anim = this.modules.attach.spritesheet('shoot_effect_side');
        this.modules.get('render').depth = 7;
        anim.loop = false;
        anim.onAnimationEnd = this.end;
        this.origin.set(0.5, 0.5);
    };

    this.end = function () {
        this.back();
    };

    this.setup = function (pos, direction) {

        switch (direction) {
            case 0:
            case 1:
                {
                    var scale = (direction === 1) ? 1 : -1;
                    anim.animation = 'shoot_effect_side';
                    this.x = pos.x + 15 * scale;
                    this.y = pos.y;
                    this.scale.x = scale;
                    break;
                }

            case 2:
            case 3:
                {
                    anim.animation = 'shoot_effect_updown';
                    var scale = (direction === 2) ? 1 : 0;
                    this.x = pos.x + 4 * scale;
                    this.y = pos.y + 8 * -scale;
                    this.scale.x = 1;
                    break;
                }

        }
        anim.restart();
    };

}

/// BULLET EXPLOSION

function BulletExplosion() {
    this.anim = null;
    this.start = function () {
        this.anim = this.modules.attach.spritesheet('bullet_explosion');
        this.modules.get('render').depth = 8;
        this.anim.loop = false;
        this.anim.onAnimationEnd = this.back;
        this.origin.set(0.5, 0.5);
    };
}

/// BULLET

var BULLET_SPD = 100;

function Bullet() {

    this.vspd = 0;
    this.hspd = 1;
    this.effect = null;
    this.moduleAnim = null;
    this.t = 0;
    this.map = null;
    var spr;
    this.folks = null;

    this.start = function () {
        spr = this.modules.attach.sprite('chars', 64, 48, 16, 16);
        this.origin.set(0.5, 0.5);
        //this.effect = this.scene.entity.create(ShootEffect);


    };

    this.Explode = function(folkToKill) {
        var exp = this.scene.pool.pull('explosion');
        this.scene.audio.playOnce('explosion');
        exp.anim.restart();
        exp.position.set(this.x, this.y);
        

        if (folkToKill !== undefined && !folkToKill.dead) {
            var blood = this.scene.create.spritesheet('blood_explosion');
            blood.modules.get('render').depth = 9;
            var anim = blood.modules.get('animation');
            anim.onAnimationEnd = function() {
                this.scene.entity.destroy(blood);
                folkToKill.Die();
            };
            anim.loop = false;
            blood.position.set(folkToKill.x + 8, folkToKill.y + 8);
            blood.origin.set(0.5,0.5);
            this.scene.audio.playOnce('dead', 0.5);
            var index = this.folks.indexOf(folkToKill);
            //this.folks.splice(index, 1);
          
            
        }
        this.back();
    }

    this.update = function (dt) {

        this.x += this.hspd * BULLET_SPD * dt;
        this.y += this.vspd * BULLET_SPD * dt;

        var tilePos = GetTile(this.x - 8, this.y - 8);
        var folk = CheckCollisionFolk(this.folks, tilePos.x, tilePos.y);

        if (folk === null) {
            if (CheckMapCollision(this.map, tilePos.x, tilePos.y)) {
                this.Explode();
            }
        } else {
            this.Explode(folk);
        }

        
    }

    this.setup = function (pos, direction, map) {

        switch (direction) {
            case 0:
            case 1:
                {
                    let scale = (direction === 1) ? 1 : -1;
                    this.vspd = 0;
                    this.hspd = scale;
                    this.x = pos.x + 8 * scale;
                    this.y = pos.y + 1;
                    this.scale.x = scale;
                    this.angle = 0;
                    break;
                }
            case 2:
            case 3:
                {

                    let scale = (direction === 3) ? 1 : -1;
                    this.vspd = scale;
                    this.hspd = 0;
                    this.x = pos.x;
                    this.y = pos.y + 4 * scale;
                    this.scale.x = 1;
                    this.angle = (scale === 1) ? 90 : 270;
                    break;
                }

        }

        this.map = map;
        spr.depth = 6;
        //this.effect.position.set(pos.x, pos.y);

    }



}

/// FOLK

function Folk() {

    this.animMachine = null;
    this.behavior = null;
    this.spr = null;
    this.tile = null;
    this.dead = false;
    this.id = 0;

    this.start = function () {
        this.animMachine = this.modules.attach.animMachine();
        this.spr = this.modules.get('render');
    };

    this.Setup = function(x, y, id) {
        this.position.set(x, y);
        this.tile = GetTile(x,y);
        this.id = id;
    };

    this.Die = function() {
        this.dead = true;
        this.animMachine.stop();
        var x = (this.id % 2) * 16;
        var y = scintilla.Math.floor(this.id / 2) * 16;
        this.spr.setFrame(96 + x,48 + y,16,16);
    };

}

/// PLAYER


function Player() {

    var anim;
    var spd = 50;
    this.state = 0;
    var isMoving = false;
    var isShooting = false;
    var moveTimer = 0;
    var hspd = 0;
    var vspd = 0;
    var dur = (16 / spd);
    var old = {
        x: 9,
        y: 7
    };
    var destination = {
        x: 0,
        y: 0
    };
    this.dir = 3;
    this.map = null;
    this.folks = null;

    this.ChangeState = function (newState, direction) {

        if (direction === undefined) direction = this.dir;

        this.dir = direction;

        var stateName = "bug_";
        var dirName = "";

        switch (direction) {
            case 0:
            case 1:
                {
                    dirName = "side";
                    break;
                }
            case 2:
                {
                    dirName = "up";
                    break;
                }
            case 3:
                {
                    dirName = "down";
                    break;
                }
        }

        if (newState === 2) {
            stateName += "shoot_";
        }
        stateName += dirName;

        anim.setState(stateName);


        if (this.state !== newState) {

            this.state = newState;
        }

        if (anim.isPlaying === false) {
            anim.play();
        }

    };

    this.ActiveMoving = function (flip) {
        this.scale.x = flip;
        isMoving = true;
        moveTimer = 0;
        old.x = this.x;
        old.y = this.y;
    };


    this.start = function () {
        anim = this.modules.attach.animMachine('bugreiro');
        anim.onAnimationEnd = this.animationEnd;
        this.modules.get('render').depth = 5;
        //anim.setDuration((dur / 2) * 1000);
        this.origin.set(0.5, 0.5);
        SetTile(this, 9, 7);
        anim.stop();
    };

    this.animationEnd = function () {
        if (isShooting) {
            isShooting = false;
            this.ChangeState(1);
        }
    };

    this.scheduleShoot = false;
    this.timeToCreateBullet = 0;
    this.bulletCreated = false;

    this.Shoot = function () {
        this.ChangeState(2);
        isShooting = true;
        this.timeToCreateBullet = 0;
        this.bulletCreated = false;
        var exp = this.scene.pool.pull('bullet_efx');
        this.scene.audio.playOnce('shoot');
        exp.setup(this.position, this.dir);

    }

    this.update = function (dt) {

        if (isShooting === false) {

            var shoot = this.scene.key.pressed(scintilla.KeyCode.Space);
            var horizontal = -this.scene.key.press(scintilla.KeyCode.Left) + this.scene.key.press(scintilla.KeyCode.Right);
            var vertical = -this.scene.key.press(scintilla.KeyCode.Up) + this.scene.key.press(scintilla.KeyCode.Down);

            if (shoot) {

                if (isMoving) {
                    this.scheduleShoot = true;
                } else {
                    this.Shoot();
                }
            }
            if (!isShooting && isMoving === false) {

                if (horizontal !== 0) {
                    hspd = horizontal; // * spd;
                    vspd = 0;
                    this.ChangeState(1, (horizontal === -1) ? 0 : 1);
                    this.ActiveMoving(-horizontal);
                } else if (vertical !== 0) {
                    vspd = vertical; // * spd;
                    hspd = 0;

                    this.ChangeState(1, (vertical == -1) ? 2 : 3);
                    this.ActiveMoving(1);
                } else {
                    anim.stop();
                    isMoving = false;
                }

                if (isMoving) {
                    destination.x = Math.round(this.x + 16 * hspd);
                    destination.y = Math.round(this.y + 16 * vspd);
                    var tilePos = GetTile(destination.x - 8, destination.y - 8);
                    if (CheckMapCollision(this.map, tilePos.x, tilePos.y) || CheckCollisionFolk(this.folks, tilePos.x, tilePos.y)) {
                        anim.stop();
                        isMoving = false;
                    }
                }
            }

        }

        if (isMoving) {
            moveTimer += dt / dur;
            if (moveTimer >= 1) {

                isMoving = false;
                moveTimer = 1;

                if (this.scheduleShoot == true) {
                    this.Shoot();
                    this.scheduleShoot = false;
                }

            }

            if (hspd !== 0)
                this.x = scintilla.Math.lerp(old.x, destination.x, moveTimer);

            if (vspd !== 0)
                this.y = scintilla.Math.lerp(old.y, destination.y, moveTimer);
            if (!isMoving) {
                this.x = destination.x;
                this.y = destination.y;
                RoundToTile(this);
            }
        }

        if (isShooting === true && this.bulletCreated === false) {
            this.timeToCreateBullet += dt * 1000;

            if (this.timeToCreateBullet >= 120) {
                var bullet = this.scene.pool.pull('bullet');
                bullet.setup(this.position, this.dir, this.map);
                bullet.folks = this.folks;
                this.bulletCreated = true;
                
            }
        }

    }
}

/// IN-GAME


function SceneGame() {

    var camSpeed = 100;
    var player;
    var tilemap;
    var folks = [];

    this.start = function () {
        this.transition.out();
        this.audio.play('gameMusic', 0.3, true);
        this.pool.create("bullet", Bullet, 10);
        this.pool.create("bullet_efx", ShootEffect, 10);
        this.pool.create('explosion', BulletExplosion, 10);
    
        var map = this.create.tilemap('tilemap');
        tilemap = map.modules.get('render');
        player = this.entity.create(Player);
        player.map = tilemap;

        var objlayer = tilemap.getObjectsLayer('FolkSpawn');
        var objs = objlayer.objects;

        var size = objs.length;

        var alreadySpawned = [];
        var folk;
        for (var i = 0; i < 6; i++) {
            folk = this.entity.create(Folk);
            folk.animMachine.machine = 'folk_' + i.toString();

            var objPos;

            while (true) {
                var allEqual = false;
                var rng = scintilla.Random.integerRange(0, size);

                if (alreadySpawned.length !== 0) {
                    for (var j = 0; j < alreadySpawned.length; j++) {
                        if (alreadySpawned[j] === rng) {
                            allEqual = true;
                            break;
                        }
                    }
                }

                if (allEqual === false) {
                    objPos = objs[rng];
                    alreadySpawned.push(rng);
                    break;
                }

            }

            folk.Setup(objPos.x, objPos.y, i);
            folks.push(folk);
        }

        player.folks = folks;

    };

    this.update = function (dt) {

        CameraFollowPlayer(this.camera, player);

    };

    this.gui = function (drawer) {
        drawer.color = '#000';
        drawer.rect(0, 0, 320, 16);
        //draw.font('Press Start 2P', 7, 'normal');
        drawer.text('SCORE: 999', 8, 12, 'white', 'left');
    };
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



  scene.gui = function(draw) {
    
    draw.color = '#000'
    draw.rect(0, 0, 640, 16);
    draw.font('Press Start 2P', 7, 'normal');
    draw.text('SCORE: 999',8, 12,'white','left');
    
    
    
}*/