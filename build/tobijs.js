/**
* @author       Tobias Beise Ulrich
* @license     Thinking about
*
* @overview
*
* --- tobiJS ---
*
* v1.0.0
*
* tobiasbu.wordpress.com
*
* tobiJS is simple 2D game engine for HTML5 games.
* The first version is only for browsers based in canvas.
*
* Actually I learning Javascript language and this is my start point.
*
*/

/**
* @namespace tobiJS
*/
var tobi = tobi || {
  VERSION: '1.0'
};

tobi.ShapeType = {
Rect : 1,
Circle : 2,
Polygon : 3
}
;/*
	ExtendJS 0.2.3
	More info at http://extendjs.org
	Copyright (c) 2013+ ChrisBenjaminsen.com
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/

// Little modifications (child can automatic call father class constructor)

(function(global){
    "use strict";
	//Helper method for creating an super copied object clone
	function initialize(method){
		//Recursivly execute parent methods.
		if(method.parent instanceof Function){
			initialize.apply(this,[method.parent]);
			this.super = cloneCopy(this,
				_(this,this.constructor)
			);
		}
		method.apply(this, arguments);
	}

	//Helper method which allows for super referances.
	function cloneCopy(from, to){
		for(var x in from){
			if(
				x !== "super" && //Never clone the super referance
				from[x] instanceof Function && //Only overwrite functions
				!(from[x].prototype instanceof Class) //Never overwrite referances to classes
			){
				//Never create circular super referances.
				to[x] = from[x].super || _(from, from[x]);
			}
		}
		return to;
	}

	function _(scope, method){ // superCopy
		var scopeSuper = scope.super;
		return method.super = function(){
			var oldScope = scope.super;
			scope.super = scopeSuper;
			var methodReturn = method.apply(scope, arguments);
			scope.super = oldScope;
			return methodReturn;
		}
	}

	//Create Class object
	global.Class = function(){};

	global.Class.extend = function ext(to){
		function child(){
			//Prevent the prototype scope set executing the constructor.
			if(initialize !== arguments[0]){
				//Create inhereted object
				initialize.apply(this,[to]);
				//Setup scope for class instance method calls
				cloneCopy(this,this);
				if(this.init instanceof Function)
					this.init.apply(this);
				this.constructor.apply(this,arguments);
			}
		}

		//Set prototype and constructor enabeling propper type checking.
		child.prototype = new this(initialize);
		child.prototype.constructor = child;

		//Return expected result from toString
		child.toString = function(){
			return to.toString()
		}

		//Allow the child to be extended.
		child.extend = function(target){
			//Create parent referance and inherentence path.
			target.parent = to;
			return ext.apply(child,arguments);
		}

		return child
	}
	//Bootstrap Class by inheriting itself with empty constructor.
	global.Class = global.Class.extend(function() {
        this.constructor=function(){
          if (this['super'])
          this.super(); // automatic call father
        }

    });
})(this)
;
tobi.Transform = Class.extend(function(){

// private:
var _id = -1;
var _cosSin = new tobi.Vector(0,0);
var _oldRotation = -2;

// public:
this.constructor = function() {

  this.parent = null;

  this.rotation = 0;

  this.position = new tobi.Vector(0,0);
  this.scale = new tobi.Vector(1,1);
  this.angle = 0;

  this.matrix = new tobi.Matrix();
  this.worldPosition = new tobi.Vector(0,0);
  this.worldScale =  new tobi.Vector(1,1);
  this.worldRotation = 0;


  this.origin = new tobi.Vector(0,0);
  this.bounds = new tobi.BoundingBox(0,0,1,1); // the full bounds of the node - defined by render
  this.globalBounds = new tobi.BoundingBox(0,0,1,1); // defined by render

  this.rotation = 0; // radians

  //this._cosSin = new tobi.Vector(0,0);

}

this.updateTransform = function() {

var a, b, c, d, x, y;
var wt = this.matrix;
var pt = this.parent.matrix;

//if (!this.customTransform) {

  this.rotation = this.angle * tobi.Math.degToRad;

  if (this.rotation % tobi.Math.PI2)
  {

    if (this.rotation !== this._oldRotation)
     {
         this._oldRotation = this.rotation;
         _cosSin.y = Math.sin(this.rotation);
         _cosSin.x = Math.cos(this.rotation);
     }

    a  =  _cosSin.x * this.scale.x;
    b  = _cosSin.y * this.scale.x;
    c  = -_cosSin.y * this.scale.y;
    d  =  _cosSin.x * this.scale.y;
    x =  this.position.x;
    y =  this.position.y;

   // anchor from image
    //if (this.renderComponent != null) {

      //var anchor = this.renderComponent.origin;

      x -= this.origin.x * a + this.origin.y * c;
      y -= this.origin.x * b + this.origin.y * d;
    //}

      // concat the parent matrix with the objects transform.
      wt.a  = a  * pt.a + b  * pt.c;
      wt.b  = a  * pt.b + b  * pt.d;
      wt.c  = c  * pt.a + d  * pt.c;
      wt.d  = c  * pt.b + d  * pt.d;
      wt.x = x * pt.a + y * pt.c + pt.x;
      wt.y = x * pt.b + y * pt.d + pt.y;


  } else {

    a  = this.scale.x;
    d  = this.scale.y;
    x =  this.position.x;
    y =  this.position.y;

    //if (this.renderComponent != null) {
      //var anchor = this.renderComponent.origin;
      x -= this.origin.x * a;
      y -= this.origin.y * d;
    //}

     wt.a  = a  * pt.a;
     wt.b  = a  * pt.b;
     wt.c  = d  * pt.c;
     wt.d  = d  * pt.d;
     wt.x = x * pt.a + y * pt.c + pt.x;
     wt.y = x * pt.b + y * pt.d + pt.y;


  }

  this.worldPosition.set(wt.x ,wt.y);
  this.worldScale.set(Math.sqrt(wt.a * wt.a + wt.b * wt.b), Math.sqrt(wt.c * wt.c + wt.d * wt.d));
  this.worldRotation = Math.atan2(-wt.c, wt.d);




  }

  //this.customTransform = false;
  /*this.position = null;
  this.scale = null;
  this.angle = 0;
  this.anchor = null;
  this.bounds = null;
  this.matrix = null;
  this._sin = 0;
  this._cos = 0;
  this._rotation = 0;
  this._oldRotation = 0;*/



});

//tobi.Transform.prototype.constructor = tobi.Transform;

/*tobi.Transform.prototype._newTransform = function() {



}*/


/*} else {



  * | a | b | x |
  * | c | d | y |
  * | 0 | 0 | 1 |

  a = scalex
  b = cos
  x = x translate

  c = scaley
  d = sin
  y = y translate



  a  =  this.scale.x; //a
  b  =  this._cosSin.y; // b
  c  =  this._cosSin.x; // c
  d  =  this.scale.y; // d

  x =  this.position.x;
  y =  this.position.y;

  wt.a  = a  * pt.a + b  * pt.c;
  wt.b  = a  * pt.b + b  * pt.d;
  wt.c  = c  * pt.a + d  * pt.c;
  wt.d  = c  * pt.b + d  * pt.d;
  wt.x = x * pt.a + y * pt.c + pt.x;
  wt.y = x * pt.b + y * pt.d + pt.y;

}*/




//tobi.Transform.prototype.updateTransform = tobi.Transform.prototype._updateTransform;
;
// Hierarchy Tree of instances
// Instance is a node of the Hierarchy tree
tobi.Hierarchy = tobi.Transform.extend(function() {

this.nodes = [];
//tobi.Transform.call(this);

//if (newTransform)
//this._newTransform();

this.constructor = function() {

  this.super();

};

this.addNode = function(node) {

  return this.addNodeAt(node,this.nodes.length);

};

this.addNodeAt = function(node,index) {

      if(index >= 0 && index <= this.nodes.length)
      {
          if(node.parent)
          {
              node.parent.removeNode(node);
          }

          node.parent = this;


          this.nodes.splice(index, 0, node);

          // automatic sort depth
          if (this['_updateDepth'])
            this._updateDepth();

          //if(this.stage)child.setStageReference(this.stage);

          return node;
      }
      else
      {
          throw new Error(node + 'addChildAt: The index '+ index +' supplied is out of bounds ' + this.children.length);
      }


};

this.removeNode = function(node)
{
    var index = this.nodes.indexOf( node );

    if(index === -1) return;

    return this.removeNodeAt( index );
};

this.removeNodeAt = function(index)
{
  var node = this.getNodeAt( index );

  node.parent = undefined;
  this.nodes.splice( index, 1 );
  return node;

};

this.getNodeAt = function(index)
{
    if (index < 0 || index >= this.nodes.length)
    {
        throw new Error('getChildAt: Supplied index '+ index +' does not exist in the child list, or the supplied DisplayObject must be a child of the caller');
    }
    return this.nodes[index];

};


this._cycleUpdate = function(time) {

  for (var i = 0; i < this.nodes.length; i++)
  {

      if (this.nodes[i]['_cycleUpdate'])
        this.nodes[i]._cycleUpdate(time);

  }

};

this._cycleUpdateTransform = function() {

  for (var i = 0; i < this.nodes.length; i++)
  {

      this.nodes[i].updateTransform();

      if (this.nodes[i]['_cycleUpdateTransform'])
        this.nodes[i]._cycleUpdateTransform();

  }


};

this._cycleRender = function() {

  for (var i = 0; i < this.nodes.length; i++)
  {

    if (this.nodes[i]['_cycleRender'])
      this.nodes[i]._cycleRender(this.game.context);

  }
};


});


//tobi.Hierarchy.prototype = Object.create( tobi.Transform.prototype );
//tobi.Hierarchy.prototype.constructor = tobi.Hierarchy;

//tobi.Hierarchy.prototype.updateCycle = tobi.Hierarchy.prototype._updateCycle;


      //  if (self.game.world.camera.view.intersects(instance.bounds.box)) {

          /*var transform = {
            x : instance.position.x,
            y : instance.position.y,
            xscale : instance.scale.x,
            yscale : instance.scale.y,
            angle : instance.angle,
          }*/



          //self.view++;
     //}

//}

//tobi.Hierarchy.prototype.renderCycle = tobi.Hierarchy.prototype._renderCycle;
/*
setScene : function(scene) {

this.scene = scene;

},

update : function() {

  var destroyList = [];

  for (var i = 0; i < this.children.length; i++) {
    if (!this.children[i]._selfDestroy) {
      this.children[i].update();
      this.children[i].bounds.setByGameObject(this.children[i]);
      this.children[i].updateTransform();
    } else {
      destroyList.push(i);
    }
  }

  for (var i = destroyList.length-1; i >= 0; i--) {

    var index = destroyList[i];

    if (this.children[index]['destroy'])
      this.children[index].destroy();

      this.children.splice( index, 1 );

  }

},*/

/*


    //self.game.context.fillText("Instances in view: " + this.view,0,36);

//},

/*clear : function() {


}


}*/
;
// instance of gameobjects and transforms in the world
// can be a group of gameobjects
tobi.Instance = tobi.Hierarchy.extend(function() {

// private
this._selfDestroy = false;
this._changeDepth = false;
var _keepAlive = false;

this.constructor = function(game,parent,name) {

//tobi.Hierarchy.call(this,newTransform);

this.super();


this.game = game;
this.name = name;
this.depth = 0;

this.visible = true;

}

this._cycleUpdate = function (time) {



  var destroyList = [];

    for (var i = 0; i < this.nodes.length; i++)
    {

       if (this.nodes[i]['update']) // call update of childrens
        this.nodes[i].update();

        if (this.nodes[i]['_updateComponents'])
          this.nodes[i]._updateComponents(time);

        if (!this.nodes[i]._selfDestroy) {

        if (this.nodes[i]['_cycleUpdate']) // call the childrens
         this.nodes[i]._cycleUpdate(time);

       } else {
          destroyList.push(this.nodes[i]);
          continue;
       }
     }

     for (var i = 0; i < destroyList.length; i++)
        destroyList[i]._onDestroy();


     if (this._changeDepth) {
       if (this.parent !== undefined || this.parent !== null) {
          this.parent._updateDepth();
        }
        this._changeDepth = false;
      }

};

this._cycleUpdateTransform = function() {

  var minX = Infinity;
  var minY = Infinity;
  var maxX = -Infinity;
  var maxY = -Infinity;

  if (this.name != "_world") {
    minX = this.bounds.min.x;
    minY = this.bounds.min.y;
    maxX = this.bounds.max.x;
    maxY = this.bounds.max.y;
  }

  for (var i = 0; i < this.nodes.length; i++) {

    this.nodes[i].updateTransform();

    if (this.nodes[i]['_cycleUpdateTransform'])
      this.nodes[i]._cycleUpdateTransform();

    if (this.nodes[i].component['render']) {

      // calculate the local bounds of node
        var bb =  this.nodes[i].bounds.setByGameObject(this.nodes[i],false);

       //calculate the global bounds of the group
       minX = minX < bb.min.x ? minX : bb.min.x;
       minY = minY < bb.min.y ? minY : bb.min.y;
       maxX = maxX > bb.max.x ? maxX : bb.max.x;
       maxY = maxY > bb.max.y ? maxY : bb.max.y;


    }


  }

  this.globalBounds.set(minX,minY,maxX,maxY);



}

this._cycleRender = function(context) {

  if (this._selfDestroy) {
    return;
  }

  var i = 0;

   while (i < this.nodes.length)
   {
     if (this.nodes[i]['_cycleRender'])
        this.nodes[i]._cycleRender(context);

        //console.log("asdasd");


        if (this.game.camera.view.intersects(this.nodes[i].bounds.box)) {

          /*if (this.nodes[i].component['collider']) {
             this.nodes[i].component['collider'].debugDraw(context,'red');

          }*/

        if (this.nodes[i].component['render']) { // if is gameobject
            this.nodes[i].component['render'].render(context);
            this.game.camera.instancesInView++;
       }

    }

    if (this.nodes[i]['freelyrender']) {
      context.setTransform(1, 0, 0, 1, 0, 0);
      this.nodes[i].freelyrender(context);
    }

    i++;
   }

};

this._updateDepth = function() { // sort ascending

  var sortProperty = 'depth';

  this.nodes.sort(
    function(a, b) {

      if (a[sortProperty] < b[sortProperty])
      {
          return -1;
      }
      else if (a[sortProperty] > b[sortProperty])
      {
          return 1;
      } else {
          return 0;
      }

    }
  );

  this._changeDepth  = false;


}

this.setDepth = function(depth) {

  this.depth = depth;
  this._changeDepth = true;

};

this.selfDestroy = function(keepalive) {

  if (keepalive === undefined) keepalive = false;

  this._selfDestroy = true;
  _keepAlive = keepalive;

};

this._removeAll = function() {

  if (this.nodes.length === 0)
   {
       return;
   }

   do
    {

      if (this.nodes[0].component['collider'])
          this.game.physics.removeColliderObj(this.nodes[0].component.collider);

        if (!_keepAlive) {
          if (this.nodes[0]['destroy'])
          {
              this.nodes[0].destroy();
          }

          if (this.pool) {

            this.game.pool.pushBack(this.nodes[0]);

          }

        }

         this.removeNode(this.nodes[0]);

    }
    while (this.nodes.length > 0);

}

this._onDestroy = function() {

  if (this.game === null) return;

  if (this.component['collider'])
      this.game.physics.removeColliderObj(this.component.collider);

  // need to destoy me?
  if (!_keepAlive) {

    if (typeof this.destroy == 'function')
    {
      this.destroy();
    }

    // return to pool if gameObject have
    if (this.pool) {

      this.game.pool.pushBack(this);

    }
  }

  this._removeAll();
  //this._selfDestroy = false;
  //this.game = null;

  if (this.parent)
  {
      this.parent.removeNode(this);
  }

   //this.game = null;

  }



});


Object.defineProperty(tobi.Instance.prototype, "length", {

    get: function() {
        return this.nodes.length;
    }

});

/*if (parent === undefined)
{
    parent = game.world;

}
if (parent != null) {
  this.parent = parent;
  this.parent.addNode(this);
}*/

//this.interator = null;






//tobi.Instance.prototype =  Object.create(tobi.Hierarchy.prototype);
//tobi.Instance.prototype.constructor = tobi.Instance;



//tobi.Instance.prototype.renderCycle = function(context) {



   //this.game.draw.boundingbox(this.bounds);


//}
;
/**
 * Create a Canvas object.
 * @function Canvas
 */
tobi.Canvas = {



  create : function (parent,width, height) {



  // default definition
  var defaultDef = {
    width: width,
    height: height,
    id: Math.random().toString(36).substr(2, 9),
    class: "",
    container: "body",
    style: "padding: 0;margin: auto;display: block;top: 0; bottom: 0;left: 0;right: 0;border:1px solid #d3d3d3;background-color: #f1f1f1;"
  };

  //var CO = Object.assign(defaultDef, options);
  var CO = defaultDef;

  var canvas;


  canvas = document.createElement('canvas');
  //canvas.parent = parent;
  canvas.setAttribute("id", CO.id);
  canvas.setAttribute("width", CO.width);
  canvas.setAttribute("height", CO.height);
  canvas.setAttribute("style", CO.style);
  //canvas.style.position = 'absolute';


  this.appendDOM(canvas,parent);
  //document.body.appendChild(canvas);
  //var context = canvas.getContext("2d");


  //tobiJS.Canvas.list.parent = document.body;

  //console.log("Canvas Created!");

  return canvas;
},

appendDOM : function(canvas,parent) {

  var appendTo;
  var overflowHidden = true;

  //if (overflowHidden === undefined) { overflowHidden = true; }

    if (parent)
    {
        if (typeof parent === 'string')
        {
            // hopefully an element ID
            target = document.getElementById(parent);
        }
        else if (typeof parent === 'object' && parent.nodeType === 1)
        {
            // quick test for a HTMLelement
            target = parent;
        }
    }

    // Fallback, covers an invalid ID and a non HTMLelement object
    if (!target)
    {
        target = document.body;
    }

    /*if (overflowHidden && target.style)
    {
        target.style.overflow = 'hidden';
    }*/

    target.appendChild(canvas);

}

}
;
// based in pixi
tobi.CanvasBuffer = function(width,height) {

this.width = width;
this.height = height;
this.canvas = tobi.CanvasList.create(this, this.width, this.height);

this.context = this.canvas.getContext("2d");

this.canvas.width = width;
this.canvas.height = height;

}

tobi.CanvasBuffer.prototype.constructor = tobi.CanvasBuffer;

tobi.CanvasBuffer.prototype.clear = function() {

  this.context.setTransform(1, 0, 0, 1, 0, 0);
  this.context.clearRect(0,0, this.width, this.height);

}

tobi.CanvasBuffer.prototype.resize = function(width, height) {

  this.width = this.canvas.width = width;
  this.height = this.canvas.height = height;

}

tobi.CanvasBuffer.prototype.destroy = function() {

  tobiJS.CanvasList.remove(this);

}
;
// based in pixi
tobi.CanvasList = {

create : function(parent, width, height) {

  var index = tobi.CanvasList.first();
  var canvas;

  // no parent found
  if (index === -1)
  {
     var tag = {
         parent: parent,
         canvas: document.createElement('canvas')
     }

     tobi.CanvasList.list.push(tag);

     canvas = tag.canvas;

  } else {

      tobi.CanvasList[index].parent = parent;

      canvas = tobiJS.CanvasList[index].canvas;
  }

  if (width !== undefined)
  {
            canvas.width = width;
            canvas.height = height;
  }

  return canvas;


},

appendDOM : function() {


},


filter : function(parent) { // functional programming

  var list = tobi.CanvasList.list;

  return list.parent === parent;

},


first : function() {

  var list = tobi.CanvasList.list;

    for (var i = 0; i < list.length; i++)
    {
        if (list[i].parent === null)
        {
            return i;
        }
    }

    return -1;


},

remove : function(parent) {

  var list = tobi.CanvasList.list;

    for (var i = 0; i < list.length; i++)
    {
        if (list[i].parent === parent)
        {
            list[i].parent = null;
        }
    }

}






}

// list of canvas
tobi.CanvasList.list = [];
;
// storage of animation state
tobi.Animation = function(sprite) {

this.source = sprite;
this.frames = [];

}

tobi.Animation.prototype = {

addFrame : function(x,y,width,height) {

this.frames.push(new tobi.Rect(x,y,width,height));

},

addStrip : function(xinit,yinit,frameWidth,frameHeight,numberOfFrames,imagesPerRow) {

  var y = 0;
  var x = 0;

	for (var i = 0; i < numberOfFrames; i++) {

			this.addFrame(xinit + (frameWidth*x),
                    yinit + (frameHeight*y),
                    frameWidth,
                    frameHeight
                  );
    x++;

    if (i % imagesPerRow ==  (imagesPerRow-1)) {
      x = 0;
      y++;
    }

	}

},

duplicateFrame : function(index,at) {

  if (at === undefined)
    this.frames.push(this.frames[index]);
  else
    this.frames.splice(at,0,this.frames[index]);


},

getFrame : function(index) {

  return this.frames[index];

}

}

Object.defineProperty(tobi.Animation.prototype, "length", {

get : function() {
  return this.frames.length;
}

});
;
tobi.AnimationCache = function(game) {

this.game = game;
this.map = new tobi.Multimap();

}

tobi.AnimationCache.prototype = {

add : function(spritesheet,container,name) {

  var sprite = this.game.cache.getAsset('images',spritesheet);

  if (sprite == null) {
    console.warn("tobiJS.animationCache: Can not create Animation: sprite: " + spritesheet);
    return null;
  }

  var animation = new tobi.Animation(sprite);



  return this.map.set(container,name,animation);

},

get : function(container,name) {

  return this.map.getValue(container,name);

}

}
;
tobi.AnimationControl = function(game) {

this.game = game;
this.animations = {};

this.currentAnimation = null;

this.loop = false;
this.destroyOnEnd = false;
this.isPlaying = false;
this.isPaused = true;

this.currentFrame = 0;
this._gameObject = null;
this._currentAnimObj = null;

this.frameSpeed = 1; // frame rate 1 / 60

}

tobi.AnimationControl.prototype = {

  add : function(name, image) {



    return this.animations[name] = new tobi.Animation(name,image);

  },

  addFromCache : function(container,name) {

    var anim = this.game.animationCache.get(container,name);

    if (anim) {

      this.animations[name] = anim;

      if (this.currentAnimation == null) {
        this.setState(name);
      }

      return anim;
  } else
    return null;


  },


  remove : function(name) {

    if (this.animations[name])
    delete this.animations[name];


  },

  setState : function(name) {

    if (this.animations[name]) {
      this.currentAnimation = name;
      this._currentAnimObj = this.animations[name];
      this.setFrame(0,true);
    }



  },

  setFrame : function(index,resetTimer) {

      if (resetTimer === undefined) resetTimer = true;

      if (index >= this._currentAnimObj.length)
        index = this._currentAnimObj.length-1
      else if (index < 0)
        index = 0;

      this.currentFrame = index;

      // set in sprite

        this._gameObject.component['render'].setFrameRect(this._currentAnimObj.getFrame(this.currentFrame));
        this._gameObject.component['render'].setImage(this._currentAnimObj.source);


      if (resetTimer)
        this._timer = 0;

  },

  setSpeed : function(time) {

    this.frameSpeed = time;

  },

  play : function(loop) {

    this.loop = loop;
    this.isPlaying = true;
    this.isPaused = false;


  },

  playAndDestroy : function() {

    this.loop = false;
    this.isPlaying = true;
    this.isPaused = false;
    this.destroyOnEnd = true;

  },

  pause : function() {

    this.isPaused = true;

  },

  stop : function() {

    this.isPaused = true;
	  this.currentFrame = 0;
	  this.setFrame(this.currentFrame);

  },

  _update : function(time) {

    // if not paused and we have a valid animation
	if (!this.isPaused && this._currentAnimObj != null)	{


		// add delta time
		this._timer += time*this.frameSpeed;

		// if current time is bigger then the frame time advance one frame
		if (this._timer >= this.game.clock.timeStep_mili) {

			// reset time, but keep the remainder
			this._timer =  0;

			// get next Frame index
			if (this.currentFrame + 1 < this._currentAnimObj.length)
				this.currentFrame++;
			else
			{

        // animation has ended
        this.currentFrame = 0; // reset to start

        if (!this.loop)
        {
          this.isPaused = true;
        }

        if (this.destroyOnEnd) {


          this._gameObject.selfDestroy();

        }

			}

			// set the current frame, not reseting the time
			   this.setFrame(this.currentFrame, false);
		}

  }



}
}
;
tobi.Collider = Class.extend( function() {

  this.shape = null;
  this.isTrigger = false;
  this.bounds = null;
  this.offset = null
  this._gameObject = null;
  this.position = null;
  var _oldScale = new tobi.Vector(1,1);
  var _oldRotation = 0;


  this.constructor = function(shape) {

    this.position = new tobi.Vector();
    this.offset = new tobi.Vector();
    this.bounds = new tobi.BoundingBox(0,0,1,1);
    this.setShape(shape);

  }

  this.setShape = function(shape) {

    this.shape = shape;
    this._updateBounds();

  }

  this.setPosition = function(position) {

    this.position.x = position.x - this.shape.centroid.x + this.offset.x;
    this.position.y = position.y - this.shape.centroid.y + this.offset.y;
    this.bounds.box.x = this.bounds.min.x + this.position.x;
    this.bounds.box.y = this.bounds.min.y + this.position.y;

  }

  this.scale = function(scale) {

    if (this.shape.getType() == "Polygon") {

      var points = this.shape.getPoints();

      for (var i = 0; i < points.length; i++) {
          points[i].scale(scale.x, scale.y);
      }

      this.shape._recalc();

    }

    this._updateBounds();

  }

  this.rotate = function(radians) {

    if (this.shape.getType() == "Polygon") {



      //if (radians % tobi.Math.PI2) {

        var points = this.shape.getPoints();
        var pivot = this.shape.centroid;

        for (var i = 0; i <  points.length; i++) {
            //points[i].move(-this.bounds.x,-this.bounds.y);
            points[i].rotateAround(radians,pivot);
            //points[i].move(this.bounds.x,this.bounds.y);
        }
        this.shape._recalc();
        this._updateBounds();
      //}
    }

  }

  this._updateBounds = function() {

    this.bounds.setByShape(this.shape);

    //this.bounds.box.x = this.bounds.min.x + this.position.x;
    //this.bounds.box.y = this.bounds.min.y + this.position.y;

  };

  this._update = function() {

    var calc = false;



    if (_oldRotation != this._gameObject.rotation) {
        this.rotate(this._gameObject.rotation-_oldRotation);
        _oldRotation = this._gameObject.rotation;
        calc = true;
    }

    /*if (_oldScale != this._gameObject.scale) {

        this.scale(_oldScale.sub(this._gameObject.scale));
        _oldScale.copy(this._gameObject.scale);

        calc = true;
    }*/

      this.setPosition(this._gameObject.position);

  }

this.debugDraw = function(context, color) {

  if (color === undefined) color = 'black';

  var points = this.shape.getPoints();
  var i = points.length;

  var xx = this.bounds.x;
  var yy = this.bounds.y;



  context.setTransform(1,0,0,1,0,0)



  //if (i == 3)

  context.fillStyle = color;

  context.save();
  context.translate(this.position.x, this.position.y);

  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  while (i--) context.lineTo(points[i].x, points[i].y);
  context.closePath();
  context.fill();
  context.fillStyle = "black";
  context.fillRect(this.shape.centroid.x-2, this.shape.centroid.y-2, 4, 4);
  context.restore();


  context.strokeStyle = "lime";
  context.strokeRect(this.bounds.box.x, this.bounds.box.y, this.bounds.box.width, this.bounds.box.height);



}


});
;
tobi.GameComponents = function(game) {

this.game = game;

}

tobi.GameComponents.prototype = {

sprite : function(tag) {


    var sprite;

    if (tag === undefined)
      sprite = null;
    else
      sprite = this.game.cache.getAsset('images',tag);

    return new tobi.Sprite(sprite);


},

tiledSprite : function(args) { //tag,width,height

  var sprite = this.game.cache.getAsset('images',args[0]);

  if (sprite == null) {
    console.warn("tobiJS.component: Can not create Component: tiledsprite: " + args[0]);
    return null;
  }



    return new tobi.TiledSprite(sprite,args[1],args[2]);

},

animationControl : function() {

    return new tobi.AnimationControl(this.game);

},

collider : function(args) { // type, shape

    var s;
    var type = args[0];


    if (type == "triangle")
      s = tobi.Polygon.makeTriangle(args[1],args[2]);
    else if (type == "rectangle")
      s = tobi.Polygon.makeRectangle(args[1],args[2]);

      var col = new tobi.Collider(s);


    return col;

},

body : function(shapeType, width, height) {

  /*var body = new tobi.Body();

  if (shapeType == ShapeType.Triangle)
    body.setShape(tobi.Polygon.makeTriangle(0,0,width,height));
  else if (shapeType == ShapeType.Rectangle)
    body.setShape(tobi.Polygon.makeRectangle(0,0,width,height));*/
},

}

tobi.GameComponents.prototype.constructor = tobi.GameComponents;
;
tobi.RenderType = {
Sprite : 1,
TiledSprite : 2,
CSSText : 3
}

tobi.Renderable = Class.extend(function() {

this._gameObject = null;

this.constructor = function() {
  this.type = null;
  this.source = null;
  this.frame = new tobi.Rect(0,0,0,0);
  this.alpha = 1;
}

this.setFrameRect = function(rect) {

  this.frame = rect;

}

this.setFrame = function(x,y,width,height) {

  this.frame.set(x,y,width,height);

}

this.setImage = function(image,changeFrame) {

  this.source = image;

  if (changeFrame) {
      this.setFrame(0,0,this.source.width,this.source.height);
  }

}

this.render = function(context) { // matrix,origin

  if (this.source != null) {

  var resolution = 1;
  var matrix = this._gameObject.matrix;
  var origin = this._gameObject.origin;

  // destination
  var dx = origin.x * -this.frame.width / resolution;
  var dy = origin.y * -this.frame.height / resolution;



  context.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.x * resolution, matrix.y * resolution);

  context.globalAlpha = this.alpha;

  context.drawImage(
        this.source, // image
        this.frame.x, // sx - pos crop x
        this.frame.y, // sy - pos crop y
        this.frame.width, // sWidth - crop width
        this.frame.height, // sHeight - crop height
        dx, // destination x
        dy, // destination y
        this.frame.width / resolution,
        this.frame.height / resolution
       );

  }

}


});
;


tobi.Sprite = tobi.Renderable.extend(function() {

this.constructor = function(source) {

  this.super();

  this.type = tobi.RenderType.Sprite;
  this.source = source;

  if (source != null)
    this.setFrame(0,0,source.width,source.height);

}

this.setSprite = function(tag) {

  var sprite = this._gameObject.game.cache.getAsset('images',tag);

  if (sprite != null)
    this.setImage(sprite);

}

});
;
tobi.Text = tobi.Renderable.extend(function() {

this.constructor = function(text, style) {

  this.super();


  this.type = tobi.RenderType.CSSText;

  this.bounds = 0;
  this.canvas = tobi.CanvasList.create(this);
  this.context = this.canvas.getContext('2d');
  this.texture = new tobi.Texture();


  this.fontStyle = "12px Verdana";
  this.strokeColor = "black";
  this.color = "white";
  this.text = text;
  this.style = null;
  this.fontObj = null;

  this.setStyle(style);

};

this.setStyle = function(style) {

  style = style || {};
  style.font = style.font || '20px Verdana';
  style.backgroundColor = style.backgroundColor || null;
  style.fill = style.fill || 'black';
  style.align = style.align || 'left';
  style.boundsAlignH = style.boundsAlignH || 'left';
  style.boundsAlignV = style.boundsAlignV || 'top';
  style.stroke = style.stroke || 'black'; //provide a default, see: https://github.com/GoodBoyDigital/pixi.js/issues/136
  style.strokeThickness = style.strokeThickness || 0;
  style.wordWrap = style.wordWrap || false;
  style.wordWrapWidth = style.wordWrapWidth || 100;
  style.shadowOffsetX = style.shadowOffsetX || 0;
  style.shadowOffsetY = style.shadowOffsetY || 0;
  style.shadowColor = style.shadowColor || 'rgba(0,0,0,0)';
  style.shadowBlur = style.shadowBlur || 0;
  style.tabs = style.tabs || 0;

  var fontObj = this.checkFont(style.font);

  if (style.fontStyle)
   {
       fontObj.fontStyle = style.fontStyle;
   }

   if (style.fontVariant)
   {
       fontObj.fontVariant = style.fontVariant;
   }

   if (style.fontWeight)
   {
       fontObj.fontWeight = style.fontWeight;
   }

   if (style.fontSize)
   {
       if (typeof style.fontSize === 'number')
       {
           style.fontSize = style.fontSize + 'px';
       }

       fontObj.fontSize = style.fontSize;
   }

   this.fontObj = fontObj;
   this.style = style;

}

this.checkFont = function(font) {

  var m = font.match(/^\s*(?:\b(normal|italic|oblique|inherit)?\b)\s*(?:\b(normal|small-caps|inherit)?\b)\s*(?:\b(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit)?\b)\s*(?:\b(xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller|0|\d*(?:[.]\d*)?(?:%|[a-z]{2,5}))?\b)\s*(.*)\s*$/);

 if (m)
 {
     return {
         font: font,
         fontStyle: m[1] || 'normal',
         fontVariant: m[2] || 'normal',
         fontWeight: m[3] || 'normal',
         fontSize: m[4] || 'medium',
         fontFamily: m[5]
     };
 }

}

this.updateText = function() {


  var maxLineWidth = 0;
  var outputText = this.text;

  var lines = outputText.split(/(?:\r\n|\r|\n)/);

  //  Calculate text width
  var tabs = this.style.tabs;
  var lineWidths = [];
  var maxLineWidth = 0;
  var fontProperties = this.determineFontProperties(this.style.font);

  for (var i = 0; i < lines.length; i++)
  {

    if (tabs === 0)
    {
        //  Simple layout (no tabs)
        var lineWidth = this.context.measureText(lines[i]).width + this.style.strokeThickness + this.padding.x;

        // Adjust for wrapped text
        if (this.style.wordWrap)
        {
            lineWidth -= this.context.measureText(' ').width;
        }
    }
    else
    {

      var line = lines[i].split(/(?:\t)/);
    var lineWidth = this.padding.x + this.style.strokeThickness;

           if (Array.isArray(tabs))
           {
               var tab = 0;

               for (var c = 0; c < line.length; c++)
               {
                   var section = Math.ceil(this.context.measureText(line[c]).width);

                   if (c > 0)
                   {
                       tab += tabs[c - 1];
                   }

                   lineWidth = tab + section;
               }
           }
           else
           {
               for (var c = 0; c < line.length; c++)
               {
                   //  How far to the next tab?
                   lineWidth += Math.ceil(this.context.measureText(line[c]).width);

                   //var diff = this.game.math.snapToCeil(lineWidth, tabs) - lineWidth;

                   lineWidth += diff;
               }
           }
       }

       lineWidths[i] = Math.ceil(lineWidth);
       maxLineWidth = Math.max(maxLineWidth, lineWidths[i]);


}


  this.canvas.width = maxLineWidth

  //  Calculate text height
    var lineHeight = fontProperties.fontSize + this.style.strokeThickness + this.padding.y;
    var height = lineHeight * lines.length;
    var lineSpacing = this._lineSpacing;

    if (lineSpacing < 0 && Math.abs(lineSpacing) > lineHeight)
    {
        lineSpacing = -lineHeight;
    }

    //  Adjust for line spacing
    if (lineSpacing !== 0)
    {
        height += lineSpacing * lines.length;
    }

    this.canvas.height = height;

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.style.backgroundColor)
    {
        this.context.fillStyle = this.style.backgroundColor;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.context.fillStyle = this.style.fill;
    this.context.font = this.style.font;
    this.context.strokeStyle = this.style.stroke;
    this.context.textBaseline = 'alphabetic';

    this.context.lineWidth = this.style.strokeThickness;
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';

}

this.render = function(context) {


}

});
;
tobi.TiledSprite = tobi.Renderable.extend(function() {


this.constructor = function(source,width,height) {

  this.super();

  this.type = tobi.RenderType.TiledSprite;

this.source = source;
this.setFrame(0,0,width,height);

this.tilePosition = new tobi.Vector(0,0);
this.tileScale = new tobi.Vector(1,1);
this.offset = new tobi.Vector(1,1);

this.tilePattern = null;

this.refresh = true;
this.canvasBuffer = null;
this.tiledTexture = null;

}

this.render = function(context) { //matrix,origin

  var wt = this._gameObject.matrix;
  var origin = this._gameObject.origin;
  var resolution = 1;

  context.setTransform(wt.a, wt.b, wt.c, wt.d, wt.x * resolution, wt.y * resolution);

  if (this.refresh) {

    this.createTilling();

    if (this.tiledTexture)
    {
        this.tilePattern = context.createPattern(this.tiledTexture.source, 'repeat');
    }
    else
    {
            return;
    }

  }

    var tilePosition = this.tilePosition;
    var tileScale = this.tileScale;

    tilePosition.x %= this.tiledTexture.source.width;
    tilePosition.y %= this.tiledTexture.source.height;

    context.scale(tileScale.x, tileScale.y);
    context.translate(tilePosition.x + (origin.x * -this.frame.width), tilePosition.y + (origin.y * -this.frame.height));

    context.fillStyle = this.tilePattern;
    context.globalAlpha = this.alpha;

      var tx = -tilePosition.x;
      var ty = -tilePosition.y;
      var tw = this.frame.width / tileScale.x;
      var th = this.frame.height / tileScale.y;

    context.fillRect(tx, ty, tw, th);

   //  Translate back again
   context.scale(1 / tileScale.x, 1 / tileScale.y);
   context.translate(-tilePosition.x + (origin.x * this.frame.width), -tilePosition.y + (origin.y * this.frame.height));

   this.refresh = false;

}

this.createTilling = function() {

  var source = this.source;

  var targetWidth = this.source.width;
  var targetHeight = this.source.height;

  if (this.canvasBuffer)
    {
        this.canvasBuffer.resize(targetWidth, targetHeight);
        this.tiledTexture.width = targetWidth;
        this.tiledTexture.height = targetHeight;
        this.tiledTexture.needsUpdate = true;
    }
    else
    {
        this.canvasBuffer = new tobi.CanvasBuffer(targetWidth, targetHeight);
        this.tiledTexture = tobi.Texture.createFromCanvas(this.canvasBuffer.canvas);
        this.tiledTexture.isTiling = true;
        this.tiledTexture.needsUpdate = true;
    }


    this.canvasBuffer.context.drawImage(this.source,
                          0,
                          0,
                          targetWidth,
                          targetWidth
                        );

    //this.tileScaleOffset.x = texture.width / targetWidth;
    //this.tileScaleOffset.y = texture.height / targetHeight;

}




});
;
/**
* Cache manager - holds file data
* @class Cache
* @constructor
*/
tobi.Cache = function(game) {

this.game = game;
this._cache = {
    images : {},
    sounds : {}
};

}

tobi.Cache.prototype = {

  addImage : function (tag, url, data) {

    if (this.tagExists('images',tag)) {

      this.removeTagAt('images',tag);

    }

    var img = {
            tag: tag,
            url: url,
            data: data,
    };

    this._cache.images[tag] = img;

  },

  addSound : function(tag, url,data,webAudio) {

    var decoded = false;

    if (!webAudio)
    {
        decoded = true;
    }

    var audio = {
            tag: tag,
            url: url,
            data: data,
            usingWebAudio: webAudio,
            decoded: decoded,
            isDecoding: false
    };

    this._cache.sounds[tag] = audio;

  },

  soundDecoded : function(tag, data) {

    var sound = this.getAssetInfo("sounds",tag);

    sound.data = data;
    sound.decoded = true;
    sound.isDecoding = false;

  },

  tagExists : function(cacheType, tag) {

    if (this._cache[cacheType][tag])
      return true;

    return false;

  },

  removeTagAt : function(cacheType, tag) {

    delete this._cache[cacheType][tag];

  },

  getAsset : function(cacheType, tag) { // return the cache container

    if (this.tagExists(cacheType,tag)) {

      var asset = this._cache[cacheType][tag];

        return asset.data;


    } else {
      return null;
    }

  },

  getAssetInfo : function(cacheType, tag) { // return the raw data

    if (this.tagExists(cacheType,tag)) {

      var asset = this._cache[cacheType][tag];

      //if (cacheType == 'images')
        return asset;


    } else {
      return null;
    }

  },

  clear : function() {

    //console.log(this._cache[property][tag]);

    for (var property in this._cache) {

         for (var tag in this._cache[property]) {

            delete this._cache[property][tag];

         }
    }

  }

  // SOUND STUFF

}
;
/* Base Class
*
* explanation: why?
* i'm in fact a OO programmer and I fall in big problem right now (01/04/2016)
* i learning javascript but i really want the 'class' and 'inheritance'.
* yes, i can do this in js using 'prototypes'. but...
* since i created the GameObject class, a generic class for the user create his game entities
* i noticed that will we have a problem when instantiate the GameObjects in the world game.
* need to change everything
*
*
* Update: 02/04/2016
*
*/


/**
 * Extend a class prototype with the provided mixin descriptors.
 * Designed as a faster replacement for John Resig's Simple Inheritance.
 * @name extend
 * @memberOf Jay
 * @function
 * @param {Object[]} mixins... Each mixin is a dictionary of functions, or a
 * previously extended class whose methods will be applied to the target class
 * prototype.
 * @return {Object}
 * @example
 * var Person = Jay.extend({
 *     "init" : function (isDancing) {
 *         this.dancing = isDancing;
 *     },
 *     "dance" : function () {
 *         return this.dancing;
 *     }
 * });
 *
 * var Ninja = Person.extend({
 *     "init" : function () {
 *         // Call the super constructor, passing a single argument
 *         this._super(Person, "init", [false]);
 *     },
 *     "dance" : function () {
 *         // Call the overridden dance() method
 *         return this._super(Person, "dance");
 *     },
 *     "swingSword" : function () {
 *         return true;
 *     }
 * });
 *
 * var Pirate = Person.extend(Ninja, {
 *     "init" : function () {
 *         // Call the super constructor, passing a single argument
 *         this._super(Person, "init", [true]);
 *     }
 * });
 *
 * var p = new Person(true);
 * console.log(p.dance()); // => true
 *
 * var n = new Ninja();
 * console.log(n.dance()); // => false
 * console.log(n.swingSword()); // => true
 *
 * var r = new Pirate();
 * console.log(r.dance()); // => true
 * console.log(r.swingSword()); // => true
 *
 * console.log(
 *     p instanceof Person &&
 *     n instanceof Ninja &&
 *     n instanceof Person &&
 *     r instanceof Pirate &&
 *     r instanceof Person
 * ); // => true
 *
 * console.log(r instanceof Ninja); // => false
 */
(function () {

    function extend() {
        var methods = {};
        var mixins = new Array(arguments.length);
        for (var i = 0; i < arguments.length; i++) {
            mixins.push(arguments[i]);
        }

        /**
         * The class constructor which calls the user `init` constructor.
         * @ignore
         */
        function Class() {
            // Call the user constructor
            this.init.apply(this, arguments);
            return this;
        }

        // Apply superClass
        Class.prototype = Object.create(this.prototype);

        // Apply all mixin methods to the class prototype
        mixins.forEach(function (mixin) {
            apply_methods(Class, methods, mixin.__methods__ || mixin);
        });

        // Verify constructor exists
        if (!("init" in Class.prototype)) {
            throw new TypeError(
                "extend: Class is missing a constructor named `init`"
            );
        }

        Object.defineProperty(Class.prototype, "_superClass", {
            "value" : this.prototype
        });

        // Apply syntactic sugar for accessing methods on super classes
        Object.defineProperty(Class.prototype, "_super", {
            "value" : _super
        });

        // Create a hidden property on the class itself
        // List of methods, used for applying classes as mixins
        Object.defineProperty(Class, "__methods__", {
            "value" : methods
        });

        // Make this class extendable
        Class.extend = extend;

        return Class;
    }

    /**
     * Apply methods to the class prototype.
     * @ignore
     */
    function apply_methods(Class, methods, descriptor) {
        Object.keys(descriptor).forEach(function (method) {
            methods[method] = descriptor[method];

            if (typeof(descriptor[method]) !== "function") {
                throw new TypeError(
                    "extend: Method `" + method + "` is not a function"
                );
            }

            Object.defineProperty(Class.prototype, method, {
                "configurable" : true,
                "value" : descriptor[method]
            });
        });
    }

    /**
     * Special method that acts as a proxy to the super class.
     * @name _super
     * @ignore
     */
    function _super(superClass, method, args) {
        return superClass.prototype[method].apply(this, args);
    }

    /**
     * The base class from which all jay-extend classes inherit.
     * @ignore
     */
    var Jay = function () {
        Object.apply(this, arguments);
    };
    Jay.prototype = Object.create(Object.prototype);
    Jay.prototype.constructor = Jay;

    Object.defineProperty(Jay, "extend", {
        "value" : extend
    });

    tobi.Class = Jay;

})();

/**
* Old: that if from Quintus + John Resig;
*
* The following implementation is created by John Resig and described here:
* http://ejohn.org/blog/simple-javascript-inheritance/
*
*
* Simple JavaScript Inheritance
* By John Resig http://ejohn.org/
* MIT Licensed.
*  Inspired by base2 and Prototype
*/


/*
tobi._extend = function(dest,source) {
    if(!source) { return dest; }
    for (var prop in source) {
      dest[prop] = source[prop];
    }
    return dest;
};




(function(){

  var initializing = false,
  // fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /. */;
  /*

  // The base Class implementation (does nothing)
  tobi.Class = function() {};

  // Check if a class is 'instance of'
  tobi.Class.prototype.is = function(className) {
      return this.className === className;
  }

  // Create a new Class that inherits from this class
  tobi.Class.extend = function(className, prop, classMethods) {

    var _super = this.prototype, self = this;

    // Instantiate a base class (but only create the instance,
    // don't run the init constructor)
    initializing = true;
    var prototype = new self();
    initializing = false;

    // Copy the properties over onto the new prototype
    for (var name in prop) {
      // Check if we're overwriting an existing function
      prototype[name] = typeof prop[name] == "function" &&
        typeof _super[name] == "function" &&
        fnTest.test(prop[name]) ?
        (function(name, fn){
          return function() {
            var tmp = this._super;

            // Add a new ._super() method that is the same method
            // but on the super-class
            this._super = _super[name];

            // The method only need to be bound temporarily, so we
            // remove it when we're done executing
            var ret = fn.apply(this, arguments);
            this._super = tmp;

            return ret;
          };
        })(name, prop[name]) :
        prop[name];
    }

    // The dummy class constructor
    function Class() {
      // All construction is actually done in the init method
      if ( !initializing && this.init )
        this.init.apply(this, arguments);
    }

    // Populate our constructed prototype object
    Class.prototype = prototype;

    // Enforce the constructor to be what we expect
    Class.prototype.constructor = tobi.Class;

    // And make this class extendable
    tobi.Class.extend = tobi.Class.extend;//arguments.callee;

    // If there are class-level Methods, add them to the class
    if(classMethods) {
        tobi._extend(Class,classMethods);
    }

    if(className) {
       // Save the class onto
       tobi[className] = Class;

       // Let the class know its name
       Class.prototype.className = className;
       Class.className = className;
     }

    return Class;
  };
})();
*/
;
tobi.Dispatcher = Class.extend(function() {


this.dispatch = function() {


}

});
;
/**
* Main class of engine. Holds all main data.
* @class Game
* @constructor
*/
tobi.Game = function (width, height, parent, timeOutMode, debugMode ) {

  /**
  * @property {string|HTMLElement} parent - The Games DOM parent.
  * @default
  */
  this.parent = 'body';
  this.width = 800;
  this.height = 600;

  // object
  this.config = null;

  // boolean
  this.systemInited = false;
  this.isRunning = false;
  this.debugMode = false;

  // float
  this.timeMode = false;
  this.deltaTime = 0;


  //objects
  this.debug = null;
  this.cache = null;
  this.load = null;
  this.canvas = null;
  this.scene = null;
  this.sound = null;
  this.draw = null;
  this.universe = null;
  this.world = null;
  this.input = null;
  this.clock = null;
  this.component = null;
  this.instance = null;
  this.animationCache = null;
  this.updateGameMethod = null;
  this.pool = null;

  this.context = null;

  //parse config
  if (arguments.length === 1 && typeof arguments[0] === 'object')
   {

     this.parseConfiguration(arguments[0]);

   }
   else
   {
       if (typeof width !== 'undefined')
        this.width = width;

       if (typeof height !== 'undefined')
        this.height = height;

      if (typeof timeOutMode !== 'undefined')
        this.timeMode = timeOutMode;

        if (typeof debugMode !== 'undefined')
        this.debugMode = debugMode;
   }


  this.init();

  return this;

}


tobi.Game.prototype = {



  parseConfiguration : function(config) {

    this.config = config;

    if (config['debug'] === undefined)
    {
        this.config.debugMode = false;
    }

    if (config['width'])
    {
        this.width = config['width'];
    }

    if (config['height'])
    {
        this.height = config['height'];
    }

        /*if (config['renderer'])
        {
            this.renderType = config['renderer'];
        }*/

    if (config['parent'])
    {
        this.parent = config['parent'];
    }

        /*if (config['transparent'] !== undefined)
        {
            this.transparent = config['transparent'];
        }*/

        /*if (config['antialias'] !== undefined)
        {
            this.antialias = config['antialias'];
        }

        if (config['resolution'])
        {
            this.resolution = config['resolution'];
        }

        if (config['preserveDrawingBuffer'] !== undefined)
        {
            this.preserveDrawingBuffer = config['preserveDrawingBuffer'];
        }

        if (config['physicsConfig'])
        {
            this.physicsConfig = config['physicsConfig'];
        }*/

    /*var seed = [(Date.now() * Math.random()).toString()];

    if (config['seed'])
    {
        seed = config['seed'];
    }

    this.rnd = new Phaser.RandomDataGenerator(seed);*/



  },
  /**
    * Initialize engine
    *
    * @method tobiJS.Game#init()
    * @protected
    */
  init : function() {

    if (this.systemInited)
        return;



    this.canvas = tobi.Canvas.create(this.parent,this.width,this.height);
    this.context = this.canvas.getContext("2d", { alpha: false });

    this.cache = new tobi.Cache(this);
    this.load = new tobi.LoadManager(this);
    this.clock = new tobi.Clock(this);
    this.universe = new tobi.Universe(this);
    this.world = new tobi.World(this);
    this.draw = new tobi.Draw(this);
    this.scene = new tobi.SceneManager(this);
    this.input = new tobi.Input(this);
    this.instance = new tobi.Creator(this,this.world);
    this.component = new tobi.GameComponents(this);
    this.animationCache = new tobi.AnimationCache(this);
    this.sound = new tobi.SoundManager(this);
    this.pool = new tobi.Pool(this);
    this.physics = new tobi.Physics(this);

    if (this.debugMode)
      this.debug = new tobi.Debug(this);

    this.clock.init();
    this.input.init();
    this.sound.start();
    this.world.start();

    this.updateGameMethod = new tobi.UpdateGame(this,this.timeMode);
    this.updateGameMethod.init();



    this.systemInited = true;
    this.isRunning = true;


    console.log("tobiJS Created!");

  },

  /*run : function() {


  //  if (  this.load.checkAssets()) {
      //this.interval = setInterval(function(){ me.update() },1000/60);
    //  this.interval = setTimeout(function(){me.update()}, 1000/60);
    //} else {
    //  console.log("Can not initialize the game. Failed to download game assets.");
    //}

  },*/


  /**
    * core game loop
    *
    * @method tobiJS.Game#update()
    * @protected
    */
  update : function(time) {

    if (this.systemInited) {



      this.clock.update(time);

      var numUpdateSteps = 0;

      while (this.clock._lag >= this.clock.accumulatorUpdateDelta) {
          //update(timestep);

          this.clock.updateStart = window.performance.now();

          this.scene.preUpdate();


          this.scene.update(this.clock.timeStep_mili);
          this.world.camera.update();

          this.universe._cycleUpdate(this.clock.timeStep_mili);
          this.physics.update();
          this.sound.update();
          this.input.update();
          this.universe._cycleUpdateTransform();


          //this.clock._lag -= this.clock.timeStep;

          this.clock.updateLast =  window.performance.now();
          this.clock.updateAverage = this.clock.updateLast - this.clock.updateStart;

          this.clock._lag -= this.clock.accumulatorUpdateDelta;

          if (++numUpdateSteps >= 240) { // SPIRAL
              //panic();
              this.clock._lag = 0;
              break;
          }
      }

      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.globalCompositeOperation = 'source-over';
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.fillStyle = this.universe.backgroundColor;
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.scene.render();
      this.universe._cycleRender();

      if (this.debug) {

        this.context.setTransform(1, 0, 0, 1, 0, 0);
        this.debug.test();

      }
      //this.instance.draw();

    }

      //GI.context.fillRect(0, 0, GI.current_room.width, GI.current_room.height);

        /*var instances = this.current_scene.instances;

        //

        instances.forEach( function(instance, value) {

            instance.draw();
            //console.log("asdasd");


        })*/






  },


  destroy : function() {

    this.updateGameMethod.destroy();
    this.physics.destroy();
    this.universe.destroy();
    this.sound.destroy();
    this.input.destroy();

    this.debug = null;
    this.cache = null;
    this.load = null;
    this.canvas = null;
    this.scene = null;
    this.sound = null;
    this.draw = null;
    this.universe = null;
    this.world = null;
    this.input = null;
    this.clock = null;
    this.component = null;
    this.instance = null;
    this.animationCache = null;
    this.updateGameMethod = null;


  },

}

tobi.Game.prototype.constructor = tobi.Game;
;
// Class AssetManager
tobi.LoadManager = function(game) {

  this.game = game;
  this.cache = game.cache;

  this._fileQueue = [];
  this._fileCount = 0;
  this._fileLoadedCount = 0;
  this._fileErrorCount = 0;
  this.isDownloading = false;

  this.progress = 0;

};

tobi.LoadManager.prototype = {

  queueAsset : function(type, tag, path, elements) {

    var file = {
      type:type,
      tag:tag,
      url:path,
      data:null,
      loaded: false,
      error: false,
      loading:false,
    };

    if (elements)
    {
        for (var prop in elements)
        {
            file[prop] = elements[prop];
        }
    }

    var fileIndex = this.getAssetQueueIndex(type, tag);

    if (fileIndex > -1)
    {
           var currentFile = this._fileQueue[fileIndex];

           if (!currentFile.loading && !currentFile.loaded)
           {
               this._fileQueue[fileIndex] = file;
           }
           else
           {
               this._fileQueue.push(file);
               this._fileCount++;
           }
    }
    else if (fileIndex === -1)
    {
      this._fileQueue.push(file);
      this._fileCount++;
    }

  },

  image : function(tag,path) {

      this.queueAsset('image',tag,path);

  },

  audio : function(tag,path) {

      this.queueAsset('audio',tag,path,{ buffer: null, autoDecode: true });

  },

  getAssetQueueIndex : function(type,tag) {

    var found = -1;

        for (var i = 0; i < this._fileQueue.length; i++)
        {
            var file = this._fileQueue[i];

            if (file.type === type && file.name === tag)
            {
                found = i;

                // An already loaded/loading file may be superceded.
                if (!file.loaded && !file.loading)
                {
                    break;
                }
            }
        }

        return found;

  },

  reset : function() {

    this.isDownloading = false;
    this._fileCount = 0;
    this._fileLoadedCount = 0;
    this._fileQueue.length = 0;
    this._fileErrorCount = 0;
    this.progress = 0


  },

  startDownload : function() {

    if (this.isDownloading)
    {
           return;
    }

    this.isDownloading = true;

    this.processFileQueue();

  },

  endDownload : function() {

    this.isDownloading = false;
    this.updateProgress();
    this.game.scene.preloadComplete();

  },

  processFileQueue : function() {

    for (var i = 0; i < this._fileQueue.length; i++) {

      var file = this._fileQueue[i];
      file.loading = true;

      this.downloadFile(file);



    }

  },

  downloadFile : function(file) {

    switch (file.type) {

      case 'image': this.loadImageFile(file); break;
      case 'audio': {

        // must check if audio tag or webaudio
        if (this.game.sound.webAudio)
          this.loadAudioFile(file);


        break;
      }

    }

  },

  loadImageFile : function(file) {



    var self = this;

    file.data = new Image();
    file.data.name = file.tag;

    file.data.addEventListener("load", function() {
          self.fileLogComplete(file);
    }, false);

    file.data.addEventListener("error", function() {
          self.fileLogError(file);
    }, false);

    file.data.src = file.url;

  /*  file.data.onload = function () {
           if (file.data.onload)
           {
               file.data.onload = null;
               file.data.onerror = null;
               self.fileLogComplete(file);
           }
    };

    file.data.onerror = function () {
            if (file.data.onload)
            {
                file.data.onload = null;
                file.data.onerror = null;
                self.fileLogError(file);
            }
    };*/



    /*if (file.data.complete && file.data.width && file.data.height)
    {
            //file.data.onload = null;
            //file.data.onerror = null;
            this.fileLogComplete(file);
            if (this.downloadIsDone()) {
                this.endDownload();
            }
    }*/



  },

  loadAudioFile : function(file) {

    var self = this;
    var request = new XMLHttpRequest();
    request.open('GET', file.url, true);
    request.responseType = 'arraybuffer';

    request.onload = function () {

       if (request.readyState == 4 && request.status >= 400 && request.status <= 599) {
         self.fileLogError(file);
       } else {
          self.fileLogComplete(file,request);
        }

    }

    request.onerror = function () {
          self.fileLogError(file);
    }

    request.send();


  },

  fileLogError: function (file) {
      console.warn("tobiJS.load: Error to load asset from " + file.url);
      this.dowloadComplete(file,true);
  },

  fileLogComplete: function (file, requestXHR) {



    switch (file.type)
    {
      case 'image': {
        this.cache.addImage(file.tag,file.url,file.data);
        break;
      }
      case 'audio': {

        file.data = requestXHR.response;

        this.cache.addSound(file.tag,file.url,file.data,true);

        if (file.autoDecode)
        {
            this.game.sound.decode(file.tag);
        }

        break;
      }
    }

    this.dowloadComplete(file,false);

  },

  dowloadComplete : function(file, error) {

    if (error == true) {
      file.error = true;
      this._fileErrorCount++;
    } else {
      file.loaded = true;
      this._fileLoadedCount++;
    }

    this.updateProgress();

    if (this.downloadIsDone()) {
        this.endDownload();
    }

  },

  downloadIsDone : function() {


    return (this._fileQueue.length == (this._fileLoadedCount + this._fileErrorCount));

  },

  updateProgress : function() {

    var progress = 0;



    if (this._fileCount != 0)
     progress = parseFloat(this._fileLoadedCount) / parseFloat(this._fileCount);



    this.progress = progress;

  },


  totalQueuedFiles: function () {

        return this._fileCount - this._fileLoadedCount;

  }


};

tobi.LoadManager.prototype.constructor = tobi.LoadManager;
;

tobi.Scene = function(game) {

  var myGame = null;

  if (typeof game === 'undefined')
    myGame = null;
  else {
    myGame = game;
  }


  this.game = myGame;
  this.camera = null;
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;
  this.view = 0;


  if (myGame != null) {
    this.width = myGame.width;
    this.height = myGame.height;
  }


};

tobi.Scene.prototype = {


preload : function() {},
loading : function() {},
loadingRender : function() {},
start : function() {},
update : function() {},
render : function() {},
destroy : function() {},

_update : function() {

  //this.quadtree.clear();
  //this.quadtree.insert(this.viewBox);
  //this.quadtree.insert(this.instances);


  /*var destroyList = [];


  for (var i = 0; i < this.instances.length; i++) {
    if (!this.instances[i]._selfDestroy) {
      this.instances[i].update();
      this.instances[i].bounds.setByGameObject(this.instances[i]);
    } else {
      destroyList.push(i);
    }
  }

  for (var i = destroyList.length-1; i >= 0; i--) {

    var index = destroyList[i];

    if (this.instances[index]['destroy'])
      this.instances[index].destroy();

      this.instances.splice( index, 1 );

  }*/

  /*for (var i = this.instances.length-1; i >= 0; i--) {

    if (this.instances[i]._selfDestroy) {
        if (this.instances[i]['destroy'])
          this.instances[i].destroy();

      this.instances.splice( i, 1 );
      //this.instanceDestroy(this.instances[i]);
    }

  }*/



},

_draw : function() {

  self.game.context.font ="12px Verdana";
  self.game.context.fillText("FPS: " + Math.round(this.game.clock.fps) + " / 60",0,12);
  self.game.context.fillText("Instances Count: " + this.instances.length,0,24);
  self.game.context.fillText("Instances in view: " + this.view,0,36);



},

instanceDestroy : function(gameObject) {

  if (gameObject['destroy'])
    gameObject.destroy();

    //console.log("deleted " + gameObject._id)

  var index = this.instances.indexOf( gameObject);

  this.instances.splice( index, 1 );

},

 addGameObject : function(gameObject, clone) {

   var obj;
   var cl = false;

   if (arguments.length == 0)
     obj = new tobi.GameObject();
   else {

     if (clone === undefined)
      cl = false;
    else
      cl = clone;


      if (cl)
        obj = gameObject.clone();
      else
        obj = gameObject;

   }

   obj._id = this.instances.length;
   obj._game = this.game;
   this.instances.push(obj);

   obj.start();
   return obj;

},


}

tobi.Scene.prototype.constructor = tobi.Scene;

tobi.Scene.prototype.setBounds = function(x,y,width,height) {

this.x = x;
this.y = y;
this.width = width;
this.height = height;

}
;
tobi.SceneManager = function(game) {

this.game = game;
this.scenes = {};

this.current_scene_name = '';
this.change_scene = null;

this._setup = false;
this._clearCache = false;

// callbacks
this.current_scene = null;
this.onStartCallback = null;
this.onLoadingCallback = null;
this.onLoadingRenderCallback = null;
this.onPreloadCallback = null;
this.onUpdateCallback = null;
this.onRenderCallback = null;
this.onDestroyCallback = null;


}

tobi.SceneManager.prototype = {

add : function (sceneName,scene) {

  var newScene;

  if (tobi.Scene.prototype.isPrototypeOf(scene)) {
    newScene = scene;
    newScene.game = this.game;
  } else
    newScene = null;


  if (newScene != null)
    this.scenes[sceneName] = newScene;

},

set : function (sceneName, clearCache) {

  if (clearCache === undefined) { clearCache = false; }

  this.change_scene = sceneName;
  this._clearCache = clearCache;



},

restart : function(clearCache) {

  if (clearCache === undefined) { clearCache = false; }

  this.change_scene = this.current_scene_name;
  this._clearCache = clearCache;

},

remove : function(sceneName) {

  if (this.current_scene_name === sceneName) {

    this.current_scene = null;

    this.onStartCallback = null;
    this.onLoadingCallback = null;
    this.onLoadingRenderCallback = null;
    this.onPreloadCallback = null;
    this.onUpdateCallback = null;
    this.onRenderCallback = null;
    this.onDestroyCallback = null;


  }

  delete this.scenes[sceneName];

},

setupScene : function(sceneName) {



  this.current_scene = this.scenes[sceneName];
  this.onStartCallback = this.scenes[sceneName]['start'] || null;
  this.onLoadingCallback = this.scenes[sceneName]['loading'] || null;
  this.onLoadingRenderCallback = this.scenes[sceneName]['loadingRender'] || null;
  this.onPreloadCallback = this.scenes[sceneName]['preload'] || null;
  this.onUpdateCallback = this.scenes[sceneName]['update'] || null;
  this.onRenderCallback = this.scenes[sceneName]['render'] || null;
  this.onDestroyCallback = this.scenes[sceneName]['destroy'] || null;
  this.current_scene_name = sceneName;

  this.current_scene.camera = this.game.world.camera;

  this.game.instance.scene = this.current_scene;

  this._setup = false;

},

clearCurrentScene : function() {

  if (this.current_scene_name)
  {

    if (this.onDestroyCallback)
    {
        this.onDestroyCallback.call(this.current_scene, this.game);
    }

    if (this._clearCache)
    {
          this.game.cache.clear();
    }

    this.game.world._removeAll();

  }

},

preUpdate : function() {

  if (this.game.systemInited && this.change_scene != null)
  {

    this.clearCurrentScene();

    this.setupScene(this.change_scene);

    if (this.current_scene_name !== this.change_scene)
    {
        return;
    }
    else
    {
        this.change_scene = null;
    }

    if (this.onPreloadCallback) {

      this.game.load.reset();
      this.onPreloadCallback.call(this.current_scene, this.game);

      if (this.game.load.totalQueuedFiles() === 0)
      {
            this.preloadComplete();

      } else {


          this.game.load.startDownload();

      }

    } else {

        this.preloadComplete();

    }

  }

},

    preloadComplete: function () {

      //this.current_scene.quadtree = new tobiJS.Quadtree({x: 0, y: 0, width: 640,height: 480});

        if (this._setup === false && this.onLoadingCallback)
        {
            this.onLoadingCallback.call(this.current_scene, this.game);
        }

        if (this._setup === false && this.onStartCallback)
        {
            this._setup  = true;
            this.onStartCallback.call(this.current_scene, this.game);
        }
        else
        {
            this._setup = true;

        }
    },

    update : function() {

      if (this._setup) {

        if (this.onUpdateCallback)
        {
            this.onUpdateCallback.call(this.current_scene, this.game);
        }

        this.current_scene._update();

      } else {

        if (this.onLoadingCallback)
        {
            this.onLoadingCallback.call(this.current_scene, this.game);
        }

      }

    },

    render : function () {

      if (this._setup) {


          if (this.onRenderCallback)
          {
              this.onRenderCallback.call(this.current_scene, this.game);
          }

      } else {

        if (this.onLoadingRenderCallback)
        {
            this.onLoadingRenderCallback.call(this.current_scene, this.game);
        }


      }

    }


}

tobi.SceneManager.prototype.constructor = tobi.SceneManager;
;
tobi.BoundingBox = function(x,y,width,height) {

this.center = new tobi.Vector(x+width/2,y+height/2);
this.size = new tobi.Vector(width,height);
this.min = new tobi.Vector(x,y);
this.max = new tobi.Vector(x+width,y+height);
this.box = new tobi.Rect(x,y,width,height);

}

tobi.BoundingBox.prototype = {

set : function(minX,minY,maxX,maxY) {

this.min.set(minX,minY);
this.max.set(maxX,maxY);
this.box.set(this.min.x,this.min.y,this.max.x-this.min.x,this.max.y-this.min.y);
this.center.x = (this.max.x-this.min.x)/2;
this.center.y = (this.max.y-this.min.y)/2;

},


// position (vector)
// scale (vector)
// rotation (vector x = cos, y = sin)
setup : function(pos, scale, rotation, anchor, width, height) {

  var coords = [];
  var negx = 1;
  var negy = 1;

  if (scale.x < 0)
        negx = -1;
  if (scale.y < 0)
        negy = -1;



  this.size.x = width*scale.x*negx;
  this.size.y = height*scale.y*negy;
  anchor.x *= scale.x*negx;
  anchor.y *= scale.y*negy;
  pos.x -= anchor.x;
  pos.y -= anchor.y;
  anchor.x += pos.x;
  anchor.y += pos.y;

  var callback = null;

  if (rotation instanceof  tobi.Vector)
      callback = this['calcCoordsCosSin'];
    else
      callback = this['calcCoords'];

  coords[0] = callback( pos.x, pos.y, anchor, rotation);
  coords[1] = callback( pos.x + this.size.x,  pos.y, anchor,rotation);

  coords[2] = callback( pos.x , pos.y + this.size.y, anchor,rotation);
  coords[3] = callback( pos.x + this.size.x , pos.y + this.size.y,anchor, rotation);



  this.min.x = Math.min(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
  this.min.y = Math.min(coords[0].y,coords[1].y,coords[2].y,coords[3].y);

  this.max.x = Math.max(coords[0].x,coords[1].x,coords[2].x,coords[3].x);
  this.max.y = Math.max(coords[0].y,coords[1].y,coords[2].y,coords[3].y);
  this.center.x = pos.x+(this.max.x-this.min.x)/2;
  this.center.y = pos.y+(this.max.y-this.min.y)/2;
  this.box.set(this.min.x,this.min.y,this.max.x-this.min.x,this.max.y-this.min.y);

},

setBySprite : function(sprite, position, scale, rotation) {

    this.set(x,y,sprite.width,sprite.height,sprite.xorigin,sprite.yorigin,xscale,yscale,theta);

},

setByGameObject : function(gameObject, local) {

  //if (gameObject.render != null) {

    if (local) {
      this.setup(gameObject.position,
              gameObject.scale,
              gameObject._cosSin,
              gameObject.render.origin,
              gameObject.render.width,
              gameObject.render.height
            );
    } else {

      var frame = gameObject.component['render'].frame;

      var pos = {x:gameObject.worldPosition.x, y:gameObject.worldPosition.y};
      var org = {
        x:gameObject.origin.x * frame.width,
        y:gameObject.origin.y * frame.height};

      pos.x += gameObject.game.camera.view.x;
      pos.y += gameObject.game.camera.view.y;

      this.setup(pos,
              gameObject.worldScale,
              gameObject.worldRotation,
              org,
              frame.width,
              frame.height
            );
    }


  return this;


},

setByShape : function(shape,position) {


  var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  var type = shape.getType();

  if (type == "Polygon") {

    var points = shape.getPoints();

    points.forEach(function (point) {
        minX = Math.min(minX, point.x);
        minY = Math.min(minY, point.y);
        maxX = Math.max(maxX, point.x);
        maxY = Math.max(maxY, point.y);

    });



  }

  if (position !== undefined) {
    minX += position.x;
    minY += position.y;
    maxX += position.x;
    maxY += position.y;
  }


  this.min.set(minX,minY);
  this.max.set(maxX,maxY)
  this.box.set(minX,minY,maxX-minX,maxY-minY);

},

calcCoordsCosSin : function(x, y, anchor, cos_and_sin) {

  var coord = {x:0,y:0};

  coord.x = anchor.x + ((x-anchor.x) * cos_and_sin.x) - ((y-anchor.y) * cos_and_sin.y);
  coord.y = anchor.y - ((x-anchor.x) * cos_and_sin.y) - ((y-anchor.y) * cos_and_sin.x);

    return coord;

},

calcCoords : function(x,y,anchor,rotation) {

  var coord = {x:0,y:0};

  coord.x = anchor.x + ((x-anchor.x) * Math.cos(rotation)) - ((y-anchor.y) * Math.sin(rotation));
  coord.y = anchor.y - ((x-anchor.x) * Math.sin(rotation)) - ((y-anchor.y) * Math.cos(rotation));

    return coord;

}



}
;
/*


* | a | b | x |
* | c | d | y |
* | 0 | 0 | 1 |

a = scalex
b = cos
x = x translate

c = scaley
d = sin
y = y translate


*/

tobi.Matrix = function(a,b,c,d,x,y) {

   a = a || 1;
   b = b || 0;
   c = c || 0;
   d = d || 1;
   x = x || 0;
   y = y || 0;

   this.a = a
   this.b = b;
   this.c = c;
   this.d = d;
   this.x = x;
   this.y = y;

}

tobi.Matrix.prototype = {

  set : function(a,b,c,d,x,y) {

    this.a = a
    this.b = b;
    this.c = c;
    this.d = d;
    this.x = x;
    this.y = y;

  },

  translate : function(x, y) {

    this.x += x;
    this.y += y;

  },

  scale : function(x, y) {

    this.a *= x;
    this.d *= y;
    this.c *= x;
    this.b *= y;
    this.x *= x;
    this.y *= y;

  },

  rotate : function(angle) {

    var cos = Math.cos(angle);
    var sin = Math.sin(angle);

    var a1 = this.a;
    var c1 = this.c;
    var x1 = this.x;

   this.a = a1 * cos-this.b * sin;
   this.b = a1 * sin+this.b * cos;
   this.c = c1 * cos-this.d * sin;
   this.d = c1 * sin+this.d * cos;
   this.x = x1 * cos - this.y * sin;
   this.y = x1 * sin + this.y * cos;

 },

 identity : function() {

   return this.set(1, 0, 0, 1, 0, 0);

 }

}

tobi.Matrix.identity = new tobi.Matrix();
;

tobi.ShapeType = {
Triangle : 0,
Rectangle : 1,
Polygon : 2,
Circle : 3
}

tobi.Polygon = Class.extend(function() {

var _points = null;
var _normals = null;
var _edges = null;
var type = null;
var _area = false;
this.centroid = new tobi.Vector();
this.area = 0;

this.constructor = function(points) {

type = "Polygon";
this.setShape(points);

}

this.setShape = function(points) {

_points = points;
_area = false;
this._recalc();


}

this.getType = function() {

  return type;

}

this.getPoints = function() {

  return _points;

}

this.getNormals = function() {

  return _normals;

}

this._recalc = function() {

  var i;
  // The edges here are the direction of the `n`th edge of the polygon, relative to
  // the `n`th point. If you want to draw a given edge from the edge value, you must
  // first translate to the position of the starting point.
  var edges = _edges = [];
  // The normals here are the direction of the normal for the `n`th edge of the polygon, relative
  // to the position of the `n`th point. If you want to draw an edge normal, you must first
  // translate to the position of the starting point.
  var normals = _normals = [];
  // Copy the original points array and apply the offset/angle
  var points = _points;
  var len = _points.length;

  if (len < 3) {
    //throw new me.Polygon.Error("Requires at least 3 points");
  }

  var a = 0;

  if (!_area) {
    this.area = 0;
    this.centroid.x = 0;
    this.centroid.y = 0;
  }

  // Calculate the edges/normals
  for (i = 0; i < len; i++) {

    var p1 = points[i];
    var p2 = i < len - 1 ? points[i + 1] : points[0];
    var e = new tobi.Vector().copy(p2).sub(p1);
    //e.copy(points[(i + 1) % len]).sub(points[i]);

    var n = new tobi.Vector().copy(e).perp().normalize();

    if (!_area) {
      a = p1.x*p2.y - p2.x*p1.y;
      this.area += a;
      this.centroid.x += (p1.x+p2.x) * a;
      this.centroid.y += (p1.y+p2.y) * a;
    }


    _edges.push(e);
    _normals.push(n);
  }

  if (!_area) {
    this.area *= 0.5;
    this.centroid.x /= (6.0*this.area);
    this.centroid.y /= (6.0*this.area);
    _area = true;
  }


  return this;


}

});

tobi.Polygon.makeTriangle = function(width,height) {

  if (height === undefined) height = width;

 return new tobi.Polygon([
   new tobi.Vector(-width/2,height/2),
   new tobi.Vector(0,-height/2),
   new tobi.Vector(width/2,height/2),
 ]);

};

tobi.Polygon.makeRectangle = function(width,height) {

  if (height === undefined) height = width;

 return new tobi.Polygon([
   new tobi.Vector(-width/2,-height/2),
   new tobi.Vector(width/2,-height/2),
   new tobi.Vector(width/2,height/2),
   new tobi.Vector(-width/2,height/2)
 ]);

}
;
/**
* Simple class for rectangle. Usage for collision.
* @class Rect
* @constructor
*/
tobi.Rect = function(x,y,width,height) {

  x = x || 0;
  y = y || 0;
  width = width || 0;
  height = height || 0;

  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}


tobi.Rect.prototype = {

  intersects : function(rect) {

      return tobi.Rect.intersects(this, rect);

  },

  contains : function(x,y) {

    return tobi.Rect.contains(this,x,y);

  },

  set : function(x,y,width,height) {

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

  }

};

tobi.Rect.prototype.constructor = tobi.Rect;

tobi.Rect.intersects = function(rect1, rect2) {

  if (rect1.width <= 0 || rect1.height <= 0 || rect2.width <= 0 || rect2.height <= 0)
    return false;

  return    !(rect1.x > rect2.x + rect2.width ||
             rect1.x + rect1.width < rect2.x ||
             rect1.y > rect2.y + rect2.height ||
             rect1.y + rect1.height < rect2.y);
};

tobi.Rect.contains = function(rect, x, y) {

  if (rect.width <= 0 && rect.height <= 0 )
    return false;

  return (x > rect.x &&
          x < rect.x + rect.width &&
          y >= rect.y &&
          y < rect.y + rect.height);

};

tobi.Rect.intersectionArea = function(rect1,rect2) {

    var out = new tobi.Rect();

    if (tobi.Rect.intersects(rect1,rect2)) {

       out.y = Math.max(a.y, b.y);
       out.x = Math.max(a.x, b.x);
       out.width = Math.min(a.x + a.width, b.x + b.width) - out.x;
       out.height = Math.min(a.y + a.height, b.y + b.height) - out.y;

    }

    return out;

}

tobi.Rect.centerPoint = function() {

  var vec2 = {};
  vec.x = this.x + this.width / 2;
  vec.y = this.y + this.height / 2;
  return vec2;

}
;

/**
* Class for points and vectors.
* @class Vector
* @constructor
*/
tobi.Vector = function(x,y) {

  this.x = x || 0;
  this.y = y || 0;

}

tobi.Vector.prototype = {

set : function(x,y) {

  this.x = x;
  this.y = y || x

},

move : function(x,y) {

  this.x += x;
  this.y += y;

},

scale : function(x, y) {

  this.x *= x;
  this.y *= y || x;
  return this;

},

rotate : function(radians) {

  var x = this.x;
  var y = this.y;
  this.x = x * Math.cos(radians) - y * Math.sin(radians);
  this.y = x * Math.sin(radians) + y * Math.cos(radians);
  return this;

},

rotateAround : function(radians, other) {

  /*var x = this.x;
  var y = this.y;*/
  var dx = this.x-other.x;
  var dy = this.y-other.y;

  var c = Math.cos(radians);
  var s = Math.sin(radians);

  /*this.x = c * (x-other.x) - s * (y-other.y) + other.x;
  this.y = s * (x-other.x) + c * (y-other.y) + other.y;*/


  this.x =  other.x + (c * dx - s * dy);
  this.y =  other.y + (s * dx + c * dy);

  return this;

},

copy : function(other) {

  this.x = other.x;
  this.y = other.y;
  return this;

},

normalize : function() {

  var mag = this.length();
  if (mag > 0) {
    this.x = this.x / mag;
    this.y = this.y / mag;
  }
  return this;

},

reverse : function() {
  this.x = -this.x;
  this.y = -this.y;
  return this;
},

add : function(other) {

  this.x += other.x;
  this.y += other.y;
  return this;

},

sub : function(other) {

  this.x -= other.x;
  this.y -= other.y;
  return this;

},

perp : function() {

  var x = this.x;
  this.x = this.y;
  this.y = -x;
  return this;

},

dot : function(other) {

  return tobi.Vector.dot(this,other);

},

project : function(other) {

  return tobi.Vector.project(this,other);

},

clone : function() {

  return new tobi.Vector(this.x,this.y);

},

length : function() {

  return Math.sqrt(this.squaredLenght());

},

squaredLenght : function() {

  return tobi.Vector.dot(this,this);

},



}

tobi.Vector.prototype.constructor = tobi.Vector;

// static functions

tobi.Vector.scalar = function(a, b) {

   return a.x * b.y - a.y * b.x;

};

tobi.Vector.distance = function(a, b) {

  return tobi.Math.distance(a.x,a.y,b.x,b.y);

};

tobi.Vector.angleBetween = function(a, b) {

  return tobi.Math.angleBetween(a.x,a.y,b.x,b.y);

};

tobi.Vector.dot = function(a, b) {

  return (a.x * b.x) + (a.y * b.y);

};

tobi.Vector.project = function(a,b) {

  var dp = tobi.Vector.dot(a,b);
  var proj = new tobi.Vector(
   ( dp / (b.x*b.x + b.y*b.y) ) * b.x,
   ( dp / (b.x*b.x + b.y*b.y) ) * b.y
 );
 return proj;


};

// project for unit vector
tobi.Vector.projectNormal = function(a,b) {

  var dp = tobi.Vector.dot(a,b);
  var proj = new tobi.Vector(   dp / b.x,   dp / b.y );
 return proj;

};

tobi.Vector.reflect = function(vec,axis) {

  var r = tobi.Vector.project(vec,axis);
  r.scale(2);
  r.sub(vec);
  return r;

};

tobi.Vector.reflectNormal = function(vec,axis) {

  var r = tobi.Vector.projectNormal(vec,axis);
  r.scale(2);
  r.sub(vec);
  return r;


};


tobi.Vector.lerp = function(a, b, t) {

  var vec = new tobi.Vector(
    tobi.Math.lerp(a.x,b.x,t),
    tobi.Math.lerp(a.y,b.y,t)
  );

  return vec;
}



Object.defineProperty(tobi.Vector.prototype, "magnitude", {

get : function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
}

});

Object.defineProperty(tobi.Vector.prototype, "normal", {

get : function() {
  var mag = this.magnitude;
  var vec = new tobiJS.Vector(this.x / mag,this.y / mag);
  return vec;
}

});
;
tobi.Draw = function(game) {

this.game = game;
this.cache = game.cache;
this.context = game.context;

}

tobi.Draw.prototype = {

font : function(fontname,size) {

this.context.font = size + "px " + fontname;

},

text : function(text,x,y,color) {

  if (color === undefined) color = 'black';

  this.context.fillStyle = color;
  this.context.fillText(text, x, y);

},

sprite : function(tag, x, y, anchor) {

    var img = this.cache.getAsset('images',tag);

    if (img != null) {


      if (anchor === undefined) {
        anchor[0] = 0;
        anchor[1] = 0;
      }



      var ctx = this.context;

    ctx.save();

    ctx.translate(x-img.width*anchor[0], y-img.height*anchor[1]);

   ctx.drawImage(img,
          0,
          0,
          img.width,
          img.height);


    ctx.restore();

  }

},

spriteTransformed : function(tag, x, y, xscale, yscale, angle) {


},

rectangle : function (x, y, width, height, color) {

  this.context.fillStyle=color;
  this.context.fillRect(x,y,width,height);

},

outlineRectangle : function (x,y,width,height,color,outlineWidth) {

  this.context.beginPath();
  this.context.lineWidth=outlineWidth;
  this.context.setLineDash([6]);
  this.context.strokeStyle=color;
  this.context.rect(x,y,width,height);
  this.context.stroke();

},

alpha : function(a) {

  this.context.globalAlpha = a;

},

color : function(color) {

  this.context.fillStyle = color;

},

boundingbox : function(bb,color) {

if (color === undefined)
  color = 'black';
  this.context.setTransform(1,0,0,1,0,0);
 this.outlineRectangle(bb.min.x,bb.min.y,bb.max.x-bb.min.x,bb.max.y-bb.min.y,color,2);

}



}

tobi.Draw.prototype.constructor = tobi.Draw;
;
/**
* Image that holds image data.
* @class Image
* @constructor
*/
tobi.Image = function(source) {

  this.width = 100;
  this.height = 100;
  this.isLoaded = false;
  this.source = source;
  this.imageUrl = null;

  if (!source) {
    return;
  }

  if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height) {

      this.isLoaded = true;
      this.width = this.source.naturalWidth || this.source.width;
      this.height = this.source.naturalHeight || this.source.height;

  }

    return this;
}

tobi.Image.prototype = {



}

tobi.Image.prototype.constructor = tobi.Image;

tobi.Image.load = function(path) {




}

tobi.Image.onload = function(image) {

}
;
tobi.textureCache = {};
tobi.textureCacheID = 0;

tobi.Texture = function(source,scaleMode) {

this.source = source;
this.loaded = false;
this.width = source.width;
this.height = source.height;
this.isTiling = false;


  if (!source)
  {
      return;
  }


/*if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height)
{
    this.loaded = true;
    this.width = this.source.naturalWidth || this.source.width;
    this.height = this.source.naturalHeight || this.source.height;
}*/

}

tobi.Texture.prototype.constructor = tobi.Texture;

tobi.Texture.createFromCanvas = function(canvas) {

  if (!canvas._id)
    {
        canvas._id = 'canvas_' + tobi.textureCacheID++;
    }

  if (canvas.width === 0)
  {
        canvas.width = 1;
  }

  if (canvas.height === 0)
  {
        canvas.height = 1;
  }

  var texture = tobi.textureCache[canvas._id];

  if (!texture)
  {
      texture = new tobi.Texture(canvas);
      tobi.textureCache[canvas._id] = texture;
  }

    return texture;

}
;

tobi.Input = function(game) {

this.game = game;
this.mouse = null;
this.keyboard = null;

}

tobi.Input.prototype = {

init : function() {

  //this.mouse = new tobiJS.Mouse(this.game);
  this.keyboard = new tobi.Keyboard(this.game);
  this.mouse = new tobi.Mouse(this.game);
  this.keyboard.init();
  this.mouse.init();

},

update : function() {

  this.keyboard.update();
  this.mouse.update();

}


}

tobi.Input.prototype.constructor = tobi.Input;
;

tobi.Keyboard = function(game) {

this.game = game;
this.context = game.context;
this.active = true;
this._keys = [];
this._keyLock = [];
this._keyLockPressed = [];
this._keyDownDuration = [];
this.lastkey = null;

//callbacks
this._onKeyDown = null;
this._onKeyUp = null;
this._onKeyPress = null;

this.reset();

}

tobi.Keyboard.prototype = {

reset : function() {

  for (var prop in tobi.KeyCode){
    if (tobi.KeyCode.hasOwnProperty(prop)) {

          var value = tobi.KeyCode[prop];
          this._keys[value] = false;
          this._keyLock[value] = tobi.KeyEvent.NONE;
          this._keyLockPressed[value] = tobi.KeyEvent.NONE;
          this._keyDownDuration[value] = 0;
    }
  }

},

init : function() {

  var self = this;

    this._onKeyDown = function (event) {
           return self.processKeyDown(event);
   };

   this._onKeyUp = function (event) {
       return self.processKeyUp(event);
   };

   /*this._onKeyPress = function (event) {
       return self.processKeyPress(event);
   };*/

  window.addEventListener('keydown', this._onKeyDown, false);
  window.addEventListener('keyup', this._onKeyUp, false);
  //window.addEventListener('keypress', this._onKeyPress, false);

},

stop : function() {

  window.removeEventListener('keydown', this._onKeyDown);
  window.removeEventListener('keyup', this._onKeyUp);
  //window.removeEventListener('keypress', this._onKeyPress);

  this._onKeyDown = null;
  this._onKeyUp = null;
  this._onKeyPress = null;

},

processKeyUp : function(event) {

   var key = event.keyCode;

   if (!this.active)
    return;

    this._keyLock[key] = tobi.KeyEvent.RELEASE;
    this._keyLockPressed[key] = tobi.KeyEvent.NONE;
    this._keys[key] = false;

},

processKeyPress : function(event) { // commom characters

   var key = event.keyCode;

   if (!this.active)
    return;


    this._keyLock[key] = tobiJS.KeyEvent.PRESS;
    this._keys[key] = true;



},

processKeyDown : function(event) { // commom characters

   var key = event.keyCode;

   if (!this.active)
    return;

    if (this._keyLockPressed[key] != tobi.KeyEvent.PRESSED && this._keyLockPressed[key] != tobi.KeyEvent.PRESS) {
      this._keyLockPressed[key] = tobi.KeyEvent.PRESSED;
      this._keyDownDuration[key] = 1;
    }

    this._keyLock[key] = tobi.KeyEvent.PRESS;
    this._keys[key] = true;
    this.lastkey = key;

},

update : function() {

  for (var prop in tobi.KeyCode){
    if (tobi.KeyCode.hasOwnProperty(prop)) {

      var value = tobi.KeyCode[prop];

        if (this._keyLockPressed[value] ==  tobi.KeyEvent.PRESSED) {
            if (this._keyDownDuration[value] > 0)
              this._keyDownDuration[value]--;
            else {
              this._keyLockPressed[value] = tobi.KeyEvent.PRESS;
            }
        } else {
          continue;
        }
    }
  }



},

pressed : function(keycode) {

  var keyLock = false;

if (this._keyLockPressed[keycode] == tobi.KeyEvent.PRESSED) {
		keyLock = true;
    this._keyLockPressed[keycode] = tobi.KeyEvent.PRESS;
  }

	var hit = this._keys[keycode] && keyLock;

	return hit;

},

release : function(keycode) {

  var keyLock = false;

	if (this._keyLock[keycode] ==  tobi.KeyEvent.PRESSED ||
    this._keyLock[keycode] ==  tobi.KeyEvent.PRESS ||
    this._keyLock[keycode] ==  tobi.KeyEvent.NONE)
		keyLock = false;
	else
		keyLock = true;

	var hit = !this._keys[keycode] && keyLock;

	this._keyLock[keycode] = tobi.KeyEvent.NONE;

	return hit;

},

press : function(keycode) {

  var keyLock = false;

  if (this._keyLock[keycode] ==  tobi.KeyEvent.RELEASE ||
    this._keyLock[keycode] ==  tobi.KeyEvent.NONE)
    keyLock = false;
  else
    keyLock = true;

  var hit = this._keys[keycode] && keyLock;

  return hit;

}



}

tobi.Keyboard.prototype.constructor = tobi.Keyboard;

tobi.KeyEvent = {
  NONE : 0,
  PRESS : 1,
  PRESSED : 2,
  RELEASE : 3,
};

tobi.KeyCode = {
Backspace: 8,
Tab: 9,
Enter: 13,
Shift: 16,
Ctrl: 17,
Alt: 18,
Pause: 19,
CapsLock: 20,
Escape: 27,
Space:32,
PageUp: 33,
PageDown: 34,
End: 35,
Home: 36,
Left: 37,
Up: 38,
Right: 39,
Down: 40,
Insert: 45,
Delete:	46,
Num0: 48,
Num1: 49,
Num2: 50,
Num3: 51,
Num4: 52,
Num5:	53,
Num6: 54,
Num7: 55,
Num8: 56,
Num9: 57,
A: 65,
B: 66,
C: 67,
D: 68,
E: 69,
F: 70,
G: 71,
H: 72,
I: 73,
J: 74,
K: 75,
L: 76,
M: 77,
N: 78,
O: 79,
P: 80,
Q: 81,
R: 82,
S: 83,
T: 84,
U: 85,
V: 86,
W: 87,
X: 88,
Y: 89,
Z: 90,
LSystem: 91,
RSystem: 92,
SelectK:	93,
Numpad0: 96,
Numpad1: 97,
Numpad2: 98,
Numpad3: 99,
Numpad4: 100,
Numpad5: 101,
Numpad6: 102,
Numpad7: 103,
Numpad8: 104,
Numpad9: 105,
Multiply: 106,
Add: 107,
Subtract: 109,
DecimalPoint: 110,
Divide: 111,
F1:	112,
F2:	113,
F3:	114,
F4:	115,
F5:	116,
F6:	117,
F7:	118,
F8:	119,
F9:	120,
F10: 121,
F11: 122,
F12: 123,
NumLock: 144,
ScrollLock: 145,
SemiColon: 186,
Equal: 187,
Comma: 188,
Dash: 189,
Period:	190,
Slash: 191,
LBraket: 219,
BackSlash: 220,
RBracket: 221,
Quote: 222,
};
;

tobi.Mouse = function(game) {

this.x = 0;
this.y = 0;
this.game = game;
this.canvas = game.canvas;
this.button = 0;
this.wheelDelta = 0;
this.active = true;

this._mouseButtons = [];
this._mouseButtonsLocks = [];
this._mouseButtonsLocksPressed = [];
this._mouseDownDuration = [];

//callbacks
this._onMouseDown = null;
this._onMouseMove = null;

this.reset();

}

tobi.Mouse.prototype = {

  reset : function() {

    for (var i = 0; i < 3; i++){


            this._mouseButtons[i] = false;
            this._mouseButtonsLocks[i] = tobi.MouseEvent.NONE;
            this._mouseButtonsLocksPressed[i] = tobi.MouseEvent.NONE;
            this._mouseDownDuration[i] = 0;

    }

  },

  init : function() {


    var self = this;

    this._onMouseDown = function (event) {
            return self.onMouseDown(event);
    };

    this._onMouseUp = function (event) {
            return self.onMouseUp(event);
    };

    this._onMouseMove = function (event) {
            return self.onMouseMove(event);
    };

    this.canvas.addEventListener('mousedown', this._onMouseDown, true);
    this.canvas.addEventListener('mousemove', this._onMouseMove, true);
    this.canvas.addEventListener('mouseup', this._onMouseUp, true);
    this.canvas.addEventListener('mouseover', this._onMouseOver, true);
    this.canvas.addEventListener('mouseout', this._onMouseOut, true);

  },

  onMouseMove: function (event) {

    if (!this.active)
      return;


    var rect = this.canvas.getBoundingClientRect();


    this.x = Math.floor((event.clientX-rect.left)/(rect.right-rect.left)*this.canvas.width);
    this.y = Math.floor((event.clientY-rect.top)/(rect.bottom-rect.top)*this.canvas.height);
    //this.x = event.clientX - rect.left;
    //this.y = event.clientY - rect.top;

  },

  onMouseDown : function(event) {

    if (!this.active)
      return;



    var value = event.button;

    if (this._mouseButtonsLocksPressed[value] != tobi.KeyEvent.PRESSED && this._mouseButtonsLocksPressed[value] != tobi.KeyEvent.PRESS) {
      this._mouseButtonsLocksPressed[value] = tobi.MouseEvent.PRESSED;
      this._mouseDownDuration[value] = 1;
    }

    this._mouseButtons[value] = true;
    this._mouseButtonsLocks[value] = tobi.MouseEvent.PRESS;

    event.preventDefault();

  },

  onMouseUp : function(event) {

    if (!this.active)
      return;

    var value = event.button;

    this._mouseButtons[value] = false;
    this._mouseButtonsLocks[value] = tobi.MouseEvent.RELEASE;
    this._mouseButtonsLocksPressed[value] = tobi.MouseEvent.NONE;

    event.preventDefault();


  },

  pressed : function(button) {

    var buttonLock = false;

    if (this._mouseButtonsLocksPressed[button] == tobi.MouseEvent.PRESSED) {
      buttonLock = true;
      this._mouseButtonsLocksPressed[button] = tobi.MouseEvent.PRESS;
    }

    var hit = this._mouseButtons[button] && buttonLock;

    return hit;

  },

  release : function(button) {

    var buttonLock = false;

  	if (this._mouseButtonsLocks[button] ==  tobi.MouseEvent.PRESSED ||
        this._mouseButtonsLocks[button] ==  tobi.MouseEvent.PRESS ||
        this._mouseButtonsLocks[button] ==  tobi.MouseEvent.NONE)
  		buttonLock = false;
  	else
  		buttonLock = true;

  	var hit = !this._mouseButtons[button] && buttonLock;

  	this._mouseButtonsLocks[button] = tobi.MouseEvent.NONE;

  	return hit;

  },

  press : function(button) {

    var buttonLock = false;

    if (this._mouseButtonsLocks[button] ==  tobi.MouseEvent.RELEASE ||
      this._mouseButtonsLocks[button] ==  tobi.MouseEvent.NONE)
      buttonLock = false;
    else
      buttonLock = true;

    var hit = this._mouseButtons[button] && buttonLock;

    return hit;


  },

  update : function() {

    for (var i = 0; i < this._mouseButtons.length; i++) {

          if (this._mouseButtonsLocksPressed[i] ==  tobi.MouseEvent.PRESSED) {
              if (this._mouseDownDuration[i] > 0)
                this._mouseDownDuration[i]--;
              else
                this._mouseButtonsLocksPressed[i] = tobi.MouseEvent.PRESS;
          } else
            continue;


    }

  },

  posRelativeTo : function(object) {

    var vec2 = {x:0,y:0};

    vec2.x = this.x - object.x;
    vec2.y = this.y - object.y;


    return vec2;


  }


}

tobi.Mouse.prototype.constructor = tobi.Mouse;

tobi.MouseButton = {
LEFT_BUTTON : 0,
MIDDLE_BUTTON : 1,
RIGHT_BUTTON : 2,
WHEEL_UP : 3,
WHEEL_DOWN : 4
};

tobi.MouseEvent = {
NONE : 0,
PRESS : 1,
PRESSED : 2,
RELEASE : 3
};
;
tobi.Camera = function(game,x,y,width,height) {

this.game = game;
this.view = new tobi.Rect(x,y,width,height);
this.root = null; // who is the node (world)
this.instancesInView = 0;

this.target = null;
this.scale = new tobi.Vector(1,1);
this.angle = 0;

this._width = width;
this._height = height;

}



tobi.Camera.prototype = {

  update : function() {

  this.instancesInView = 0;
  this.root.position.x = -this.view.x;
  this.root.position.y = -this.view.y;
  this.root.scale = this.scale;
  this.root.angle = this.angle;

},

setScale : function(x,y) {

  this.scale.set(x,y);
  //this.view.width = this._width * x;
  //this.view.height = this._height * y;

},

setPosition : function(x,y) {

  this.view.x = x;
  this.view.y = y;

},

setFocus : function(vector) {

  this.setPosition(Math.round(vector.x - (this.view.width/2)), Math.round(vector.y - (this.view.height/2)));

},

setFocusXY : function(x,y) {

  this.setPosition(Math.round(x - (this.view.width/2)), Math.round(y - (this.view.height/2)));

},

setTarget : function(target) {

  this.target = target;

},

reset: function () {

       this.target = null;
       this.view.x = 0;
       this.view.y = 0;
       this.angle = 0;
       this.scale.set(1,1)
}

}

tobi.Camera.prototype.constructor = tobi.Camera;
;
// simple helper class -
// game instances creator
tobi.Creator = function(game, root) {

this.game = game;
this.root = root;

}

tobi.Creator.prototype = {

addFromPool : function(containerName, node) {

  if (node === undefined || node === null) { node = this.root; }

  var obj = this.game.pool.pull(containerName);

  if (obj.component['collider'])
    this.game.physics.addColliderObj(obj.component.collider);

  obj._selfDestroy = false;

  if (obj != null)
    return node.addNode(obj);
  else
      return null;

},

add : function(gameObject, node) {

  if (node === undefined || node === null) { node = this.root; }

  if (tobi.Utils.isFunction(gameObject)) {
    this.create(gameObject);
    return;
  }

  gameObject = node.addNode(gameObject);


  return gameObject;


},

create : function(gameObject, x, y, node) {


  if (node === undefined || node === null) { node = this.root; }

  var obj = gameObject;

  if (tobi.Utils.isFunction(obj)) {

    obj = new gameObject();

  }

  //obj.depth = node.nodes.length;
  obj.game = this.game;

   obj = node.addNode(obj);



  var xx = 0;
  var yy = 0;

  if (typeof x != 'undefined')
    xx = x;

  if (typeof y !== 'undefined')
    yy = y;

    obj.position.x = xx;
    obj.position.y = yy;

    if (obj['start'])
      obj.start();

      if (obj.component['collider'])
        this.game.physics.addColliderObj(obj.component.collider);


  console.log(obj);

  return obj;

},

createClone : function(gameObject, x, y, node) {

    var obj = cloner.shallow.copy(gameObject);
    return this.create(obj,x,y,node);

}






}
;
tobi.GameObject = tobi.Instance.extend(function() {

  this.game = null;
  this.pool = null;
  this.component = {}

  this.constructor = function(name) {

    if (name === undefined) name = 'gameobject';

    this.super(null,null,name);
    //tobi.Instance.call(this,null,null,name,false);


    this.origin.set(0.5,0.5);

  }

  this.start = function() {};
  this.update = function() {};
  this.destroy = function() {};


  this.addComponent = function(name, args) {

    switch (name) {

      case 'sprite': {
          if (!this.component['render']) {
              this.component['render'] = this.game.component.sprite(args);
          }
          this.component['render']._gameObject = this;
          return this.component['render'];
        break;
      }

      case 'tiledSprite': {
          if (!this.component['render']) {
              this.component['render'] = this.game.component.tiledSprite(args);
          }
          this.component['render']._gameObject = this;
          return this.component['render'];
        break;
      }

      case 'animation': {

          if (!this.component['render']) {
            this.component['render'] = this.game.component.sprite();
            this.component['render']._gameObject = this;
          }

          if (!this.component['animation']) {
              this.component['animation'] = this.game.component.animationControl();
              this.component['animation']._gameObject = this;
          }
          return this.component['animation'];
        break;
      }

      case 'collider': {

        if (!this.component['collider']) {
            this.component['collider'] = this.game.component.collider(args);
            this.component['collider']._gameObject = this;
        }
        return this.component['collider'];

      }

    }


  }

  this.getComponent = function(name) {

    var comp = this.component[name]

    if (this.component[name])
      return comp;
    else
      return null;


  }

  this._updateComponents = function(time) {

    // update animation
      if (this.component['animation']) {
          this.component['animation']._update(time);
      }

    // update collider
    if (this.component['collider']) {
        this.component['collider']._update();
    }

  }





  //return this;

});


  //this.game = game;
  //this.context = game.canvas.getContext("2d");




    //draw self on canvas;
    //intended only to be called from update, should never
    //need to be deliberately called by user


 /*GI.context.drawImage(instance.sprite_index.image,
   instance.sprite_index.frameWidth*wLevel,
   instance.sprite_index.frameHeight*hLevel,
   instance.sprite_index.frameWidth,
   instance.sprite_index.frameHeight,
   instance.x-instance.sprite_index.xOrigin,
   instance.y-instance.sprite_index.yOrigin,
   instance.sprite_index.frameWidth,
   instance.sprite_index.frameHeight);*/

   // end draw function







//tobi.GameObject.prototype = Object.create(tobi.Instance.prototype);
//tobi.GameObject.prototype.constructor = tobi.GameObject;
/*
tobi.GameObject.prototype.start = function() {};
tobi.GameObject.prototype.update = function() {};
tobi.GameObject.prototype.destroy = function() {};

tobi.GameObject.prototype.draw = function(context) {

  if (this.renderComponent != null) {



      this.renderComponent.draw(context,this.matrix);

      //this.game.draw.boundingbox(this.bounds);

  }

}*/







/*  clone : function() {


    var me = this;

    var clone =  Object.assign({}, me);
    //var clone = Object.assign({ __proto__: me.__proto__ }, me);
    return clone;

  },*/
;
tobi.Pool = Class.extend(function() {

this.poolList = {};
this.game = null;

this.constructor = function(game) {

this.game = game;

}

// add objects to pool
this.add = function(container,gameObject,size) {

  if (gameObject === undefined || gameObject === null) return;

  if (size === undefined) size = 1;

  // register the container
  if (this.poolList[container] === undefined)
    this.poolList[container] = [];




  // add objects to the pool
  for (var i = 0; i < size; i++) {

    var obj = new gameObject();



    obj.game = this.game;

    if (obj['start'])
      obj.start();

    obj.pool = container;

    this.poolList[container].push(obj);

  }

  return this.poolList[container];

};

// get a obj
this.pull = function(container) {

  if (this.poolList[container]) {

    var obj;

    if (this.poolList[container].length > 0) {

      obj = this.poolList[container].pop();


        if (obj['reset'])
          obj.reset();

          return obj;

    }

    console.warn("tobiJS.pool: Pool container " + container + " is empty.");

  return null;

  } else {

    console.warn("tobiJS.pool: The specified container don't exists: " + container);

    return null;

  }

}

this.pushBack = function(obj) {

  if (obj.pool != null) {

    this.poolList[obj.pool].push(obj);


  } else
    return;

}

this.getContainer = function(container) {

  if (this.poolList[container]) {
    return this.poolList[container]
  } else
    return null;


}

this.clearAll = function() {

  for (var property in this.poolList) {

       for (var tag in this.poolList[property]) {

          delete this.poolList[property][tag];

       }
  }

}


});
;

// display and update everything
tobi.Universe = tobi.Hierarchy.extend(function() {

this.backgroundColor = "rgb(231, 231, 231)";

  this.constructor = function(game) {

    this.super();

    this.game = game;
    this.name = "__universe";
    //tobi.Hierarchy.call(this,true);

  }


});

//tobi.Universe.prototype = Object.create(tobi.Hierarchy.prototype);
//tobi.Universe.prototype.constructor = tobi.Universe;
;
// is the root node of the game
tobi.World = tobi.Instance.extend(function() {

  this.game = null;


  this.constructor = function(game) {

    this.super(game,null,"__world",true);

    this.camera = new tobi.Camera(this.game,0,0,this.game.width,this.game.height);
    this.worldBounds = new tobi.Rect(0,0,this.game.width,this.game.height);
  //tobi.Instance.call(this,game,null,"__world",true);

  // this._new();
    this.game = game;

  }

});

//tobi.World.prototype = Object.create(tobi.Instance.prototype);
//tobi.World.prototype.constructor = tobi.World;

tobi.World.prototype.start = function() {



  this.camera.root = this;
  this.game.camera = this.camera;

  this.game.universe.addNode(this);

  //console.log(this.game.universe);



}

//tobiJS.World.prototype.

tobi.World.prototype.reset = function() {

  this.camera.reset();

}
//this.root.children.push(obj);
;
tobi.Callback = function (contextObject, delegateMethod) {

 return function() {

   return delegateMethod.apply(contextObject, arguments);

 };

};
;
tobi.Color = {

webRGB : function(r,g,b,a) {

  return 'rgba(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ',' + (a / 255).toString() + ')';

},

/*
Source code: https://github.com/mjackson/mjijackson.github.com/blob/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.txt
*/
HSLtoRGB : function(h,s,l,a) {

  var alp = 255;

  if (a !== undefined || a !== null)
    alp = a;

  h = h / 255.0;
  s = s / 255.0;
  l = l / 255.0;

  var result = {r:l,b:l,g:l};

  if (s !== 0)
  {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      result.r = this.hueToColor(p, q, h + 1 / 3);
      result.g = this.hueToColor(p, q, h);
      result.b = this.hueToColor(p, q, h - 1 / 3);
  }

  result.r = Math.floor((result.r * 255));
  result.g = Math.floor((result.g * 255));
  result.b = Math.floor((result.b * 255));


  return this.webRGB(result.r,result.g,result.b,alp);

},

/*
Source code: https://github.com/mjackson/mjijackson.github.com/blob/master/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript.txt
*/
hueToColor : function(p, q, t) {

  if (t < 0)
    t += 1;

  if (t > 1)
    t -= 1;

  if (t < 1 / 6)
      return p + (q - p) * 6 * t;

  if (t < 1 / 2)
      return q;

  if (t < 2 / 3)
      return p + (q - p) * (2 / 3 - t) * 6;

  return p;

},

/*
Source code: http://jsfiddle.net/mushigh/myoskaos/
*/
RGBtoHex : function(r,g,b) {

  return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);

},

/*
Source code: http://jsfiddle.net/mushigh/myoskaos/
*/
componentToHex : function(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

}
;
tobi.Debug = function(game) {

this.game = game;
this.context = game.context;
this.x = 8;
this.y = 12;
this.lineHeight = 14;
this.column = 100;
this.font ="12px Verdana";
this.textColor = 'white';
this.bgcolor = 'black';
this.textShadow = 'black';

}

tobi.Debug.prototype = {

test : function() {

  this.context.setTransform(1, 0, 0, 1, 0, 0);
  this.context.strokeStyle = this.bgcolor;
  this.context.font = this.font;
  this.game.draw.alpha(0.5);
  this.game.draw.rectangle(0,0,this.game.width,(14 * 4)+ 16,this.bgcolor);
  this.game.draw.alpha(1);
  this.drawLine("FPS: " + Math.round(this.game.clock.fps) + " / 60");
  this.drawLine("Instances in view: " + this.game.camera.instancesInView);
  this.drawLine("Instances count " + this.game.world.length);
  this.drawLine("Colliders count " + this.game.physics.length);
  this.x += this.game.width / 2;
  this.y = 12+8;
  this.drawLine("Sounds count " + this.game.sound.length);
  this.x = 8;
  this.y = 12+8;

},

drawLine : function(text) {

  var xx = this.x;

          this.context.fillStyle = this.textShadow;
          this.context.fillText(text, xx + 1, this.y + 1);
          this.context.fillStyle = this.textColor;

      this.context.fillText(text, xx, this.y);


  this.y += this.lineHeight;

},



}
;



tobi.Math = {

randomRange : function(min, max) {

  return Math.random() * (max - min) + min;

},

irandomRange : function(min, max) {

  return Math.floor(Math.random() * (max - min + 1)) + min;

},

lerp : function(fromValue,toValue,t) {

  return (1.0-t) * fromValue + t * toValue;

},

lerpAngle : function(fromValue,toValue,t) {

  /*var shortest_angle = ((((toValue - fromValue) % 360) + 540) % 360) - 180;
  return shortest_angle * t;*/

  var end = toValue;
  var start = fromValue;

  var difference = Math.abs(end - start);
  if (difference > 180)
  {
      // We need to add on to one of the values.
      if (end > start)
      {
          // We'll add it on to start...
          start += 360;
      }
      else
      {
          // Add it on to end.
          end += 360;
      }
  }

        // Interpolate it.
      var value = (start + ((end - start) * t));

        // Wrap it..
        var rangeZero = 360;

        if (value >= 0 && value <= 360)
            return value;

        return (value % rangeZero);


},

distance : function(x0,y0,x1,y1) {

   return Math.sqrt((x0 -= x1) * x0 + (y0 -= y1) * y0);

},

angleBetween : function(x0,y0,x1,y1) {

  var angle = this.toDegree(Math.atan2(y1 - y0, x1 - x0));

  if (angle < 0 && angle >= -180)
    angle = 360 + angle;


   return angle;

}



}

tobi.Math.degToRad = Math.PI / 180;
tobi.Math.radToDeg = 180 / Math.PI;
tobi.Math.PI2 = Math.PI * 2;

tobi.Math.toDegree = function(radians) {

  return radians * tobiJS.Math.radToDeg;

};

tobi.Math.toRadian = function(degrees) {

  return degrees * tobiJS.Math.degToRad;

};
;
/*
Source http://gamedevelopment.tutsplus.com/tutorials/quick-tip-use-quadtrees-to-detect-likely-collisions-in-2d-space--gamedev-374
*/
tobi.Quadtree = function(x,y,width,height,maxObjects,maxLevels,level) {


this.maxObjects = 0;
this.maxLevels =  0;
this.level = 0;
this.objects = [];
this.nodes = [];
this.bounds = {}

  this.reset(x,y,width,height,maxObjects,maxLevels,level);
}


tobi.Quadtree.prototype.constructor = tobi.Quadtree;

tobi.Quadtree.prototype.reset = function(x,y,width,height,maxObjects,maxLevels,level) {

  this.maxObjects = maxObjects || 4;
  this.maxLevels =  maxLevels || 4;
  this.level = level || 0;

  this.bounds = {
    x:x,
    y:y,
    width:width,
    height:height
  }

  this.objects.length = 0;
  this.nodes.length = 0;

}

// insert node
tobi.Quadtree.prototype.insert = function(obj) {

  // undefined obj
  if (typeof obj === "undefined") {
			return;
	}

  // if we have subondes
  if (this.nodes[0] != null)
  {
      index = this.getIndex(obj);

      // Only add the object to a subnode if it can fit completely
			// within one
       if (index !== -1)
       {
           this.nodes[index].insert(obj);
           return;
       }
  }

   this.objects.push(obj);

   // Prevent infinite splitting
   if (this.objects.length > this.maxObjects && this.level < this.maxLevels)
    {
            //  Split if we don't already have subnodes
            if (this.nodes[0] == null)
            {
                this.split();
            }

            //  Add objects to subnodes
            while (i < this.objects.length)
            {
                index = this.getIndex(this.objects[i]);

                if (index !== -1)
                {
                    //  this is expensive - see what we can do about it
                    this.nodes[index].insert(this.objects.splice(i, 1)[0]);
                }
                else
                {
                    i++;
                }
            }
    }


};

tobi.Quadtree.insertArray = function(arr) {

  // is an Array
  if (obj instanceof Array) {
			for (var i = 0, len = obj.length; i < len; i++) {
				this.insert(obj[i]);
			}
			return;
	}

}

// get index of quadrant
tobi.Quadtree.prototype.getIndex = function(obj) {

  var index = -1;
  var verticalMidpoint = this.bounds.x + this.bounds.width / 2;
  var horizontalMidpoint = this.bounds.y + this.bounds.height / 2;
  var topQuadrant = false;
  var bottomQuadrant = false;
  var leftQuadrant = false;
  var rightQuadrant = false;

  if (obj instanceof tobiJS.BoundingBox) {

    // Object can fit completely within the top quadrant
    topQuadrant = (obj.min.y < horizontalMidpoint && obj.max.y < horizontalMidpoint);
    // Object can fit completely within the bottom quandrant
    bottomQuadrant = (obj.min.y > horizontalMidpoint);
    // Object can fit completely within the left quadrants
    leftQuadrant = (obj.min.x < verticalMidpoint && obj.max.x < verticalMidpoint);
    // Object can fix completely within the right quandrants
    rightQuadrant = (obj.min.x > verticalMidpoint);

  } else {

    if (obj['bounds']) {

      // Object can fit completely within the top quadrant
      topQuadrant = (obj.bounds.min.y < horizontalMidpoint && obj.bounds.min.y + obj.bounds.max.y < horizontalMidpoint);
      // Object can fit completely within the bottom quandrant
      bottomQuadrant = (obj.bounds.min.y > horizontalMidpoint);
      // Object can fit completely within the left quadrants
      leftQuadrant = (obj.bounds.min.x < verticalMidpoint && obj.bounds.min.x + obj.bounds.max.x < verticalMidpoint);
      // Object can fix completely within the right quandrants
      rightQuadrant = (obj.bounds.min.x > verticalMidpoint);

    }
  }



	// Object can fit completely within the left quadrants
	if (leftQuadrant) {
		if (topQuadrant) {
			index = 1;
		}
		else if (bottomQuadrant) {
			index = 2;
		}
	}
	// Object can fix completely within the right quandrants
	else if (rightQuadrant) {
		if (topQuadrant) {
			index = 0;
		}
		else if (bottomQuadrant) {
			index = 3;
		}
	}
	return index;

}

// split into 4 nodes
tobi.Quadtree.prototype.split = function() {
  // Bitwise or [html5rocks]
	var subWidth = (this.bounds.width / 2) | 0;
	var subHeight = (this.bounds.height / 2) | 0;
  var nextLevel = this.level+1;

	this.nodes[0] = new tobi.Quadtree(
		this.bounds.x + subWidth,
		this.bounds.y,
	  subWidth,
		subHeight,
	  nextLevel);

	this.nodes[1] = new tobi.Quadtree(
		this.bounds.x,
		this.bounds.y,
		subWidth,
		subHeight,
	  nextLevel);

	this.nodes[2] = new tobi.Quadtree(
		this.bounds.x,
		this.bounds.y + subHeight,
		subWidth,
		subHeight,
	  nextLevel);

	this.nodes[3] = new tobi.Quadtree(
		this.bounds.x + subWidth,
		this.bounds.y + subHeight,
		subWidth,
		subHeight,
	  nextLevel);

}

// return all objects
tobi.Quadtree.prototype.getAllObjects = function(returnedObjects) {
  for (var i = 0; i < this.nodes.length; i++) {
  			this.nodes[i].getAllObjects(returnedObjects);
  		}
  		for (var i = 0, len = this.objects.length; i < len; i++) {
  			returnedObjects.push(this.objects[i]);
  		}
  		return returnedObjects;
}

// return all objects that can collide with obj
tobi.Quadtree.prototype.retrieve = function (obj) {

  if (typeof obj === "undefined") {
			return;
	}

  var returnedObjects = this.objects;

  //if we have subnodes ...
  if (this.nodes.length > 0) {

          var index = this.getIndex(obj);


       //  If rect fits into a subnode ..
       if (index !== -1)
       {
           returnedObjects = returnedObjects.concat(this.nodes[index].retrieve(obj));
       } else {  //if rect does not fit into a subnode, check it against all subnodes

             for (var i = 0; i < this.objects.length;  i++) {
          			returnObjects = returnObjects.concat(this.nodes[i].retrieve(obj));
          	}
    }

  }


       return returnedObjects;

};


// clear the quad tree
tobi.Quadtree.prototype.clear = function() {

    this.objects.length = 0;

		for (var i = 0; i < this.nodes.length; i++) {
			this.nodes[i].clear();
      this.nodes.splice(i, 1);
		}

		this.nodes.length = 0;

};
;
tobi.Body = Class.extend(function() {

var _gameObject = null;



this.constructor = function(gameObject, shape) {

//_gameObject = gameObject;


//this.setShape(shape);

}





});
;
tobi.Physics = Class.extend( function() {

this.game = null;
this.sat = null;
this.response = null;

var colliadables = [];

this.constructor = function(game) {

  this.game = game;

};

this.init = function() {

  this.sat = new tobi.SAT();
  this.response = new tobi.SAT.Response();

};

this.getColliadables = function() {

  return colliadables;

}

this.addColliderObj = function(obj) {

  colliadables.push(obj);

};

this.removeColliderObj = function(obj) {

  var i = colliadables.indexOf(obj);

  if(i != -1) {
  	colliadables.splice(i, 1);
  }

};

this.clear = function() {

  colliadables = [];
  colliadables.length = 0;

};

this.update = function(time) {


// CHECK COLLISION
if (colliadables.length < 2) // at least we must have 2 objects
  return;

//var collision = 0;


for (var i = 0; i < colliadables.length; i++) {

    var objA = colliadables[i];
    var shapeA = objA.shape;

    var jit = i + 1;

    if (jit >= colliadables.length)
      break;

    for (var j = jit; j < colliadables.length; j++) {

      var objB = colliadables[j];
      var shapeB = objB.shape;

      // AABB check of the shapes
    if (objB.bounds.box.intersects(objA.bounds.box)) {



      // check SAT
      if (this.sat["test" + shapeA.getType() + shapeB.getType()].call(this,
        objA,objB,this.response.clear()) === true) {


          if (objA._gameObject['onCollision'])
          if (objA._gameObject.onCollision(objB._gameObject,this.response) !== false) {


          }

          if (objB._gameObject['onCollision'])
          if (objB._gameObject.onCollision(objA._gameObject,this.response) !== false) {


          }

      } else
        continue;
      } else
        continue;
    }
  }
}
});

Object.defineProperty(tobi.Physics.prototype, "length", {

    get: function() {
        return this.getColliadables().length;
    }

});
;
tobi.SAT = Class.extend(function() {

  var VECTORS = [];
  for (var v = 0; v < 10; v++) { VECTORS.push(new tobi.Vector()); }

  var ARRAYS = [];
  for (var a = 0; a < 5; a++) { ARRAYS.push([]); }

flattenPointsOn = function(points, normal, result) {
        var min = Number.MAX_VALUE;
        var max = -Number.MAX_VALUE;
        var len = points.length;
        for (var i = 0; i < len; i++) {
            // The magnitude of the projection of the point onto the normal
            var dot = points[i].dot(normal);
            if (dot < min) { min = dot; }
            if (dot > max) { max = dot; }
        }
        result[0] = min;
        result[1] = max;
};

isSeparatingAxis = function(posA, posB, pointsA, pointsB, axis, response) {

  var rangeA = ARRAYS.pop();
  var rangeB = ARRAYS.pop();

  // magnitude between the two polygons
  var offsetV = VECTORS.pop().copy(posB).sub(posA);
  var projectedOffset = offsetV.dot(axis);

  // Project the polygons onto the axis.
  flattenPointsOn(pointsA, axis, rangeA);
  flattenPointsOn(pointsB, axis, rangeB);

  // Move B's range to its position relative to A.
  rangeB[0] += projectedOffset;
  rangeB[1] += projectedOffset;

  // Check if there is a gap. If there is, this is a separating axis and we can stop
  if (rangeA[0] > rangeB[1] || rangeB[0] > rangeA[1]) {
      VECTORS.push(offsetV);
      ARRAYS.push(rangeA);
      ARRAYS.push(rangeB);
      return true;
  }



  if (response) {
      var overlap = 0;
      // A starts further left than B
      if (rangeA[0] < rangeB[0]) {

        response.aInB = false;

        // A ends before B does. We have to pull A out of B
        if (rangeA[1] < rangeB[1]) {

          overlap = rangeA[1] - rangeB[0];
          response.bInA = false;

        // B is fully inside A.  Pick the shortest way out.
        } else {

          var option1 = rangeA[1] - rangeB[0];
          var option2 = rangeB[1] - rangeA[0];
          overlap = option1 < option2 ? option1 : -option2;

        }
      // B starts further left than A
      } else {

        response.bInA = false;

        // B ends before A ends. We have to push A out of B
        if (rangeA[1] > rangeB[1]) {

          overlap = rangeA[0] - rangeB[1];
          response.aInB = false;

        // A is fully inside B.  Pick the shortest way out.
        } else {

          var option1 = rangeA[1] - rangeB[0];
          var option2 = rangeB[1] - rangeA[0];
          overlap = option1 < option2 ? option1 : -option2;

        }
      }
      // If this is the smallest amount of overlap we've seen so far, set it as the minimum overlap.
      var absOverlap = Math.abs(overlap);

      if (absOverlap < response.overlap) {

        response.overlap = absOverlap;
        response.overlapN.copy(axis);

        if (overlap < 0)
          response.overlapN.reverse();
      }
    }

    VECTORS.push(offsetV);
    ARRAYS.push(rangeA);
    ARRAYS.push(rangeB);



    return false;

};

this.testPolygonPolygon = function(a,b,response) {

  // collider a

  var pointsA = a.shape.getPoints();
  var normalsA =  a.shape.getNormals();
  var normalsALen = normalsA.length;

  // collider b

  var pointsB = b.shape.getPoints();
  var normalsB =  b.shape.getNormals();
  var normalsBLen = normalsB.length;


  // If any of the edge normals of A is a separating axis, no intersection.
  while (normalsALen--) {
      if (isSeparatingAxis(a.position, b.position, pointsA, pointsB, normalsA[normalsALen],response)) {
          return false;
      }
  }



  // If any of the edge normals of B is a separating axis, no intersection.
  while (normalsBLen--) {
      if (isSeparatingAxis(a.position, b.position, pointsA, pointsB, normalsB[normalsBLen], response)) {
      return false;
    }
  }



  // Since none of the edge normals of A or B are a separating axis, there is an intersection
  // and we've already calculated the smallest overlap (in isSeparatingAxis).  Calculate the
  // final overlap vector.
    if (response) {
        response.a = a;
        response.b = b;
        response.overlapV.copy(response.overlapN).scale(response.overlap);
    }
  return true;

};

});


tobi.SAT.Response = function() {
    this.a = null;
    this.b = null;
    this.overlapN = new tobi.Vector();
    this.overlapV = new tobi.Vector();
    this.aInB = true;
    this.bInA = true;
    this.overlap = Number.MAX_VALUE;
    this.indexShapeA = -1;
    this.indexShapeB = -1;
    this.clear();
};

tobi.SAT.Response.prototype.clear = function() {
  this.aInB = true;
  this.bInA = true;
  this.overlap = Number.MAX_VALUE;
  this.indexShapeA = -1;
  this.indexShapeB = -1;
  return this;
};
;
tobi.Sound = Class.extend(function() {

this.constructor = function(game, tag, volume, loop, connect) {

this.game = game;
this.tag = tag;
this.loop = loop;
this._volume = volume;
this.context = null;
this.isDecoded = false;

this.duration = 0;
this.duration_mili = 0;
this.totalDuration = 0;
this.currentTime = 0;
this.startTime = 0;
this.position = 0;

this.paused = false;
this.isPlaying = false;
this.isFading = false;
this.pendingPlayback = false;


this._oldVolume = 0;
this._fade = false;
this._fadeDuration = 0;
this._fadeVolume = 0;
this._fadeTime = 0;
this._stopFadeEnd = false;

this.webAudio = this.game.sound.webAudio;
this.masterVolumeNode = null;
this.gainNode = null;

this._sound = null;
this._buffer = null;

if (this.webAudio){

    this.context = this.game.sound.context;
    this.masterVolumeNode = this.game.sound.masterVolume;

    if (this.context.createGain === undefined)    {
        this.gainNode = this.context.createGainNode();
    }    else    {
        this.gainNode = this.context.createGain();
    }

    this.gainNode.gain.value = volume * this.game.sound.volume;

    if (connect) // connect to master volume
        this.gainNode.connect(this.masterVolumeNode);

} else {

}


};

this.play = function(position,volume,loop) {

  if (this.isPlaying /*&& !this.allowMultiple && !forceRestart && !this.override*/)
   {
       //  Use Restart instead
       //console.log("as");
       return this;
   }

   if (this._sound && this.isPlaying/* && !this.allowMultiple && (this.override || forceRestart)*/)
  {


  }

  if (this.webAudio) {

    var sound = this.game.cache.getAssetInfo('sounds',this.tag);

    if (sound.decoded)
    {
      /*this.volume = volume;
      this.loop = loop;*/

      this._sound = this.context.createBufferSource();

      // external node...
      this._sound.connect(this.gainNode);

      this._buffer = sound.data;

      this._sound.buffer = this._buffer;

      if (this.loop)
        this._sound.loop = true;
      else
        this._sound.onended = this.onEnd

      this.totalDuration = this._sound.buffer.duration;

      if (this.duration === 0)
       {
           this.duration = this.totalDuration;
           this.duration_mili = Math.ceil(this.totalDuration * 1000);
       }

       // start


       if (this._sound.start === undefined)
        {
            this._sound.noteGrainOn(0, this.position, this.duration);
        } else {

         if (this.loop)
          {
              this._sound.start(0, 0);
          }
          else
          {
              this._sound.start(0, this.position, this.duration);
          }
      }

       // control time
       this.isPlaying = true;
       this.startTime = this.game.clock.time;
       this.currentTime = 0;
       this.stopTime = this.startTime + this.duration_mili;


    } else {

      this.pendingPlayback = true;

      if (!sound.isDecoding) {

          this.game.sound.decode(this.tag,this);


      }


    }



  }

  return this;

}

this.setFade = function(duration, volume, stopOnEnd) {

  if (stopOnEnd === undefined) stopOnEnd = false;

  if (!this.isPlaying || this.paused || volume === this._volume)
   {
       return;
   }

  this._fade = true;
  this._oldVolume = this._volume;
  this._fadeDuration = duration;
  this._fadeVolume = volume;
  this._fadeTime = 0;
  this.isFading = true;
  this._stopFadeEnd = stopOnEnd;

}

this.onEnd = function() {

  this._sound.onended = null;
  this.isPlaying = false;
  this.currentTime = this.duration_mili;
  this.stop();

}

this.stop = function() {

  if (this.isPlaying && this._sound)
   {
       if (this.webAudio)
       {
           if (this._sound.stop === undefined)
           {
               this._sound.noteOff(0);
           }
           else
           {
               try {
                   this._sound.stop(0);
               }
               catch (e)
               {
                   //  Thanks Android 4.4
               }
           }

           //if (this.externalNode)

               this._sound.disconnect(this.gainNode);

       }
     }

  this.isPlaying = false;

}

this.update = function() {

  // check cache
  //console.log("eu");

  if (!this.game.cache.tagExists('sounds',this.tag)) {

    this.destroy();
    return;

  }

  // check if is decoded
  //if (this.isDecoded) {}

  if (this.pendingPlayback && this.game.cache.getAssetInfo('sounds', this.tag).decoded)  {
      this.pendingPlayback = false;
      this.play(this._tempMarker, this._tempPosition, this._tempVolume, this._tempLoop);
  }

  if (this.isPlaying) {

      this.currentTime = this.game.clock.time - this.startTime;

      if (this.currentTime >= this.duration_mili) {

        if (this.webAudio) {

          if (this.loop)
          {

          }

        }

      }

      if (this._fade) {

        this._fadeTime += this.game.clock.deltaTime / this._fadeDuration;

        var t = this._fadeTime;

        if (t >= 1) {

          t = 1;
          this._fadeTime = 0;
          this._fadeDuration = 0;
          this._fade = false;
          this.isFading = false;
          if (this._stopFadeEnd) {
            this.stop();
            this._stopFadeEnd = false;
          }

        }


        var value = tobi.Math.lerp(this._oldVolume,this._fadeVolume,t);

        this.volume = value;

      }

  }


}

this.changeSound = function(tag,volume,loop) {

  if (volume === undefined) { volume = 1; }
  if (loop === undefined) { loop = false; }


  this.tag = tag;
  this.stop();
  this._sound = null;
  this._buffer = null;
  this.volume = volume;
  this.loop = loop;
  this.play(0,volume,loop);


};

this.destroy = function(remove) {

  if (remove === undefined) { remove = true; }

  this.stop();

  if (remove)
  {
      this.game.sound.remove(this);

  } else {

    this.context = null;
    this._buffer = null;


  }

}




});

Object.defineProperty(tobi.Sound.prototype, "volume", {

    get: function () {
        return this._volume;
    },

    set: function (value) {

        //  Causes an Index size error in Firefox if you don't clamp the value
        /*if (this.game.device.firefox && this.usingAudioTag)
        {
            value = this.game.math.clamp(value, 0, 1);
        }

        if (this._muted)
        {
            this._muteVolume = value;
            return;
        }

        this._tempVolume = value;
        this._volume = value;*/

        this._volume = value;

        if (this.webAudio)
        {
            this.gainNode.gain.value = value;
        }

        /*else if (this.usingAudioTag && this._sound)
        {
            this._sound.volume = value;
        }*/
    }

});
;
tobi.SoundManager = Class.extend(function() {

this.game = null;

this.webAudio = false;
this.context = false;
this.noAudio = false;

this.channels = 24;


this.masterVolume = null;
this.volume = 1;
var _sounds = [];

this.constructor = function(game) {

  this.game = game;

}

this.getSounds = function() {

  return _sounds;

}

this.start = function() {

    if (!!window['AudioContext'])
    {
        try {
            this.context = new window['AudioContext']();
        } catch (error) {
            this.context = null;
            this.webAudio = false;

        }
    }
    else if (!!window['webkitAudioContext'])
    {
        try {
            this.context = new window['webkitAudioContext']();
        } catch (error) {
            this.context = null;
            this.webAudio = false;
        }
    }

    if (this.context === null)
    {

      this.noAudio = true;

    } else {

      this.webAudio = true;

      if (this.context.createGain === undefined)
      {
          this.masterVolume = this.context.createGainNode();
      }
      else
      {
          this.masterVolume = this.context.createGain();
      }

      this.masterVolume.gain.value = 1;
      this.masterVolume.connect(this.context.destination);

  }

};

this.stopAll = function() {

  if (this.noAudio)
  {
      return;
  }

  for (var i = 0; i < _sounds.length; i++)
  {
      if (_sounds[i])
      {
          _sounds[i].stop();
      }
  }

};

this.pauseAll = function () {

  if (this.noAudio)
  {
      return;
  }

  for (var i = 0; i < _sounds.length; i++)
  {
      if (_sounds[i])
      {
          _sounds[i].pause();
      }
  }

};

this.resumeAll = function () {

  if (this.noAudio)
  {
      return;
  }

  for (var i = 0; i < _sounds.length; i++)
  {
      if (_sounds[i])
      {
          _sounds[i].resume();
      }
  }

};

this.decode = function(tag, sound) {

  sound = sound || null;

  var soundData = this.game.cache.getAssetInfo('sounds',tag);

  if (soundData) {

    if (!soundData.decoded) {
        soundData.isDecoding = true;

        var self = this;

        try {

            this.context.decodeAudioData(soundData.data, function(buffer) {

              if (buffer)
               {
                   self.game.cache.soundDecoded(tag, buffer);
                   console.log("decoded!")
                   //_this.onSoundDecode.dispatch(key, sound);
               }

            })

        } catch(error) {

        }
    }
  }

}

this.add = function(tag, volume, loop, connect) {

  if (volume === undefined) { volume = 1; }
  if (loop === undefined) { loop = false; }
  if (connect === undefined) { connect = true; } // connect to master volume

  var sound = new tobi.Sound(this.game, tag, volume, loop, connect);

  _sounds.push(sound);

  return sound;

}

this.play = function(tag, volume, loop) {

  var sound = this.add(tag, volume, loop);

  sound.play();

  return sound;

}

this.update = function() {

  if (this.noAudio)
  {
      return;
  }

  for (var i = 0; i < _sounds.length; i++)
  {
      _sounds[i].update();
  }

}

this.remove = function(sound) {

  var i = _sounds.length;

   while (i--)
   {
       if (_sounds[i] === sound)
       {
           _sounds[i].destroy(false);
           _sounds.splice(i, 1);
           return true;
       }
   }

   return false;

}


this.destroy = function () {

        this.stopAll();

        for (var i = 0; i < this._sounds.length; i++)
        {
            if (_sounds[i])
            {
                _sounds[i].destroy();
            }
        }

        _sounds = [];

        this.context.close();


}



});

Object.defineProperty(tobi.SoundManager.prototype, "length", {

get : function() {
  return this.getSounds().length;
}

});
;

tobi.Clock = function(game) {

  this.game = game;

  this.startTime = 0;

  this.time = 0;

  this.currentTime = 0;
  this.previousTime = 0;

  this.elapsed = 0;
  this.elapsed_mili = 0;

  this.fps = 60;
  this.fpsDesired = 60;
  this.timeStep_mili = 1.0 / this.fpsDesired;
  this.timeStep = 1000.0 / this.fpsDesired;

  this.accumulatorMax = this.timeStep * 10;
  this.accumulatorUpdateDelta = 0;


  this.updateStart = 0;
  this.updateLast = 0;
  this.updateAverage = 0;

  this.deltaTime = 0;


  this._lag = 0;
  this._lastFpsUpdate = 0;
  this._framesThisSecond = 0;

}

tobi.Clock.prototype = {

init : function() {

  this.startTime = Date.now();
  this.time = Date.now();

},

refresh : function() {

  var previousDateNow = this.time;

  this.time = Date.now();

 this.elapsed_mili = this.time - previousDateNow;

},

update : function(timestamp) {

  // DATE NOW ----------------------------------
  var previousDateNow = this.time;

  this.time = Date.now(); // current time

  this.elapsed_mili = this.time - previousDateNow;

  // timestamp --------------------

  // Throttle the frame rate.
  if (timestamp < this.previousTime + (this.timeStep)) {
         //requestAnimationFrame(mainLoop);
         return false;
  }

  // set prev
  this.previousTime = this.currentTime;

  // set current
  this.currentTime = timestamp;

  // delta time (MILISECONDS)
  this.elapsed = this.currentTime - this.previousTime;

  // delta time in  seconds
  this.deltaTime = this.elapsed / 1000.0;

  // Track acumulate time
  this._lag += this.elapsed; //Math.max(Math.min(this.timeStep * 3, this.elapsed), 0); //timestamp - this._lastTimeStamp;
  this._lag = Math.min(this._lag, this.accumulatorMax);
  this.accumulatorUpdateDelta = Math.max(this.elapsed, this.updateAverage);

  // FPS Update
  this.fpsUpdate(timestamp);

  return true;

  //this.last_time = now;

  /*var elapsed = (this.current_time - this.last_time)/1000.0;
  this.last_time = this.current_time;
  this.delta_time = Math.min(elapsed, 1/60.0);*/

  //console.log(this.delta_time);

  //  Adjust accordingly.
  /*this.time_elapsed_mili = this.current_time - previousDateNow;

  // 'now' is currently still holding the time of the last call, move it into prevTime
  this.prev_time  = this.now_time;

  // update 'now' to hold the current time
  // this.now may hold the RAF high resolution time value if RAF is available (otherwise it also holds Date.now)
  this.now_time = time;

 // elapsed time between previous call and now - this could be a high resolution value
  this.time_elapsed = this.now_time - this.prev_time;*/



  //if (this.game.updateGameMethod._usingTimeout)
  //{
      // console.log('Time isSet', this._desiredFps, 'te', this.timeExpected, 'time', time);

      // time to call this function again in ms in case we're using timers instead of RequestAnimationFrame to update the game
      //this.timeToCall = Math.floor(Math.max(0, (1000.0 / this._desiredFps) - (this.timeExpected - time)));

      // time when the next call is expected if using timers
    //  this.timeExpected = time + this.timeToCall;

      // console.log('Time expect', this.timeExpected);
//  }

        //  Paused but still running?
      /*  if (!this.game.paused)
        {
            //  Our internal Phaser.Timer
            this.events.update(this.time);

            if (this._timers.length)
            {
                this.updateTimers();
            }
        }*/

},

fpsUpdate : function(timestamp) {

  // METHOD 2

        // count the number of time.update calls
  /*this._frameCount++;
  this._elapsedAccumulator += this.elapsed;

  // occasionally recalculate the suggestedFps based on the accumulated elapsed time
  if (this._frameCount >= this._desiredFps * 2)
  {
      // this formula calculates suggestedFps in multiples of 5 fps
      this.suggestedFps = Math.floor(200 / (this._elapsedAccumulator / this._frameCount)) * 5;
      this._frameCount = 0;
      this._elapsedAccumulator = 0;
  }

  this.msMin = Math.min(this.msMin, this.elapsed);
  this.msMax = Math.max(this.msMax, this.elapsed);

  this.frames++;

  if (this.now > this._timeLastSecond + 1000)
  {
      this.fps = Math.round((this.frames * 1000) / (this.now - this._timeLastSecond));
      this.fpsMin = Math.min(this.fpsMin, this.fps);
      this.fpsMax = Math.max(this.fpsMax, this.fps);
      this._timeLastSecond = this.now;
      this.frames = 0;
  }*/

  // METHOD 1
   if (timestamp > this._lastFpsUpdate + 1000) {
       this.fps = 0.25 * this._framesThisSecond + 0.75 * this.fps;

       this._lastFpsUpdate = timestamp;
       this._framesThisSecond = 0;
   }

     this._framesThisSecond++;


}

}

tobi.Clock.prototype.constructor = tobi.Clock;
;

tobi.UpdateGame = function(game, timeout) {

  if (timeout === undefined) { timeout = false; }

this.game = game;
this.isRunning = false;
this.timeOutMode = timeout;
this._usingTimeout = false;

  var vendors = [
       'ms',
       'moz',
       'webkit',
       'o'
   ];

   for (var x = 0; x < vendors.length && !window.requestAnimationFrame; x++)
   {
       window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
       window.cancelAnimationFrame  = window[vendors[x] + 'CancelAnimationFrame'];
   }

//callbacks
this._onLoopingCallback = null;
this._timeOutCallback = null;


}

tobi.UpdateGame.prototype = {

init : function() {

  this.isRunning = true;

  var self = this;

        if (!window.requestAnimationFrame || this.timeOutMode)
        {
            this._usingTimeout = true;

            this._onLoopingCallback = function () {
                return self.updateTimeout();
            };

            this._timeOutCallback = window.setTimeout(this._onLoopingCallback, 1000 / 60);
        }
        else
        {


            this._usingTimeout = false;

            this._onLoopingCallback = function (time) {
                return self.updateRequest(time);
            };

            this._timeOutCallback = window.requestAnimationFrame(this._onLoopingCallback, this.game.canvas);
        }

},

updateRequest : function(time) {

  this.game.update(time);

  this._timeOutCallback = window.requestAnimationFrame(this._onLoopingCallback, this.game.canvas);

},

updateTimeout : function() {

  this.game.update(Date.now());

  //this._timeOutCallback = window.setTimeout(this._onLoopingCallback, this.game.time.timeToCall);

},

stop: function () {

        if (this._usingTimeout)
        {
            clearTimeout(this._timeOutCallback);
        }
        else
        {
            window.cancelAnimationFrame(this._timeOutCallback);
        }

        this.isRunning = false;

}

}
;/*!
Copyright (C) 2015 by Andrea Giammarchi - @WebReflection
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
var cloner = (function (O) {'use strict';

  // (C) Andrea Giammarchi - Mit Style

  var

    // constants
    VALUE   = 'value',
    PROTO   = '__proto__', // to avoid jshint complains

    // shortcuts
    isArray = Array.isArray,
    create  = O.create,
    dP      = O.defineProperty,
    dPs     = O.defineProperties,
    gOPD    = O.getOwnPropertyDescriptor,
    gOPN    = O.getOwnPropertyNames,
    gOPS    = O.getOwnPropertySymbols ||
              function (o) { return Array.prototype; },
    gPO     = O.getPrototypeOf ||
              function (o) { return o[PROTO]; },
    hOP     = O.prototype.hasOwnProperty,
    oKs     = (typeof Reflect !== typeof oK) &&
              Reflect.ownKeys ||
              function (o) { return gOPS(o).concat(gOPN(o)); },
    set     = function (descriptors, key, descriptor) {
      if (key in descriptors) dP(descriptors, key, {
        configurable: true,
        enumerable: true,
        value: descriptor
      });
      else descriptors[key] = descriptor;
    },

    // used to avoid recursions in deep copy
    index   = -1,
    known   = null,
    blown   = null,
    clean   = function () { known = blown = null; },

    // utilities
    New = function (source, descriptors) {
      var out = isArray(source) ? [] : create(gPO(source));
      return descriptors ? Object.defineProperties(out, descriptors) : out;
    },

    // deep copy and merge
    deepCopy = function deepCopy(source) {
      var result = New(source);
      known = [source];
      blown = [result];
      deepDefine(result, source);
      clean();
      return result;
    },
    deepMerge = function (target) {
      known = [];
      blown = [];
      for (var i = 1; i < arguments.length; i++) {
        known[i - 1] = arguments[i];
        blown[i - 1] = target;
      }
      merge.apply(true, arguments);
      clean();
      return target;
    },

    // shallow copy and merge
    shallowCopy = function shallowCopy(source) {
      clean();
      for (var
        key,
        descriptors = {},
        keys = oKs(source),
        i = keys.length; i--;
        set(descriptors, key, gOPD(source, key))
      ) key = keys[i];
      return New(source, descriptors);
    },
    shallowMerge = function () {
      clean();
      return merge.apply(false, arguments);
    },

    // internal methods
    isObject = function isObject(value) {
      /*jshint eqnull: true */
      return value != null && typeof value === 'object';
    },
    shouldCopy = function shouldCopy(value) {
      /*jshint eqnull: true */
      index = -1;
      if (isObject(value)) {
        if (known == null) return true;
        index = known.indexOf(value);
        if (index < 0) return 0 < known.push(value);
      }
      return false;
    },
    deepDefine = function deepDefine(target, source) {
      for (var
        key, descriptor,
        descriptors = {},
        keys = oKs(source),
        i = keys.length; i--;
      ) {
        key = keys[i];
        descriptor = gOPD(source, key);
        if (VALUE in descriptor) deepValue(descriptor);
        set(descriptors, key, descriptor);
      }
      dPs(target, descriptors);
    },
    deepValue = function deepValue(descriptor) {
      var value = descriptor[VALUE];
      if (shouldCopy(value)) {
        descriptor[VALUE] = New(value);
        deepDefine(descriptor[VALUE], value);
        blown[known.indexOf(value)] = descriptor[VALUE];
      } else if (-1 < index && index in blown) {
        descriptor[VALUE] = blown[index];
      }
    },
    merge = function merge(target) {
      for (var
        source,
        keys, key,
        value, tvalue,
        descriptor,
        deep = this.valueOf(),
        descriptors = {},
        i, a = 1;
        a < arguments.length; a++
      ) {
        source = arguments[a];
        keys = oKs(source);
        for (i = 0; i < keys.length; i++) {
          key = keys[i];
          descriptor = gOPD(source, key);
          if (hOP.call(target, key)) {
            if (VALUE in descriptor) {
              value = descriptor[VALUE];
              if (shouldCopy(value)) {
                descriptor = gOPD(target, key);
                if (VALUE in descriptor) {
                  tvalue = descriptor[VALUE];
                  if (isObject(tvalue)) {
                    merge.call(deep, tvalue, value);
                  }
                }
              }
            }
          } else {
            if (deep && VALUE in descriptor) {
              deepValue(descriptor);
            }
            set(descriptors, key, descriptor);
          }
        }
      }
      return dPs(target, descriptors);
    }
  ;

  return {
    deep: {
      copy: deepCopy,
      merge: deepMerge
    },
    shallow: {
      copy: shallowCopy,
      merge: shallowMerge
    }
  };

}(Object));
;


// Multimap simple class
tobi.Multimap = function() {
  this._content = {};
}

tobi.Multimap.prototype = {


  set : function(key, tag, value) {

    if (this._content[key] === undefined) { // create key
        this._content[key] = {};
    }

        this._content[key][tag] = value;

        return this._content[key][tag];

        //console.log("added " + key + " = " + value);
  },

  get : function(key) {
       return this._content[key];
  },

  getValue : function(key,tag) {
    return this._content[key][tag];
  },

  hasKey : function(key) {
      return this._content.hasOwnProperty(key);
  },

  hasTagInKey : function(key,tag) {

    if (this._content[key][tag])
      return true;

    return false;

  },

  delete : function(key) {

    if (!this.hasKey(key))
      return;

      for (var tag in this._content[key]) {

         delete this._content[key][tag];

      }

  },

  deleteAt : function(key,tag) {

    if (!this.hasTagInKey(key,tag))
      return;

     delete this._content[key][tag];

  },

  clear : function() {

    for (var property in this._content) {

         for (var tag in this._content[property]) {

            delete this._content[property][tag];

         }
    }

  }

}
;
tobi.Utils = {

  isFunction : function(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }


};
