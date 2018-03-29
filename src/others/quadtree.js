
/*
Source http://gamedevelopment.tutsplus.com/tutorials/quick-tip-use-quadtrees-to-detect-likely-collisions-in-2d-space--gamedev-374
*/
scintilla.Quadtree = function(x,y,width,height,maxObjects,maxLevels,level) {


this.maxObjects = 0;
this.maxLevels =  0;
this.level = 0;
this.objects = [];
this.nodes = [];
this.bounds = {}

  this.reset(x,y,width,height,maxObjects,maxLevels,level);
}


scintilla.Quadtree.prototype.constructor = scintilla.Quadtree;

scintilla.Quadtree.prototype.reset = function(x,y,width,height,maxObjects,maxLevels,level) {

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
scintilla.Quadtree.prototype.insert = function(obj) {

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

scintilla.Quadtree.insertArray = function(arr) {

  // is an Array
  if (obj instanceof Array) {
			for (var i = 0, len = obj.length; i < len; i++) {
				this.insert(obj[i]);
			}
			return;
	}

}

// get index of quadrant
scintilla.Quadtree.prototype.getIndex = function(obj) {

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
scintilla.Quadtree.prototype.split = function() {
  // Bitwise or [html5rocks]
	var subWidth = (this.bounds.width / 2) | 0;
	var subHeight = (this.bounds.height / 2) | 0;
  var nextLevel = this.level+1;

	this.nodes[0] = new scintilla.Quadtree(
		this.bounds.x + subWidth,
		this.bounds.y,
	  subWidth,
		subHeight,
	  nextLevel);

	this.nodes[1] = new scintilla.Quadtree(
		this.bounds.x,
		this.bounds.y,
		subWidth,
		subHeight,
	  nextLevel);

	this.nodes[2] = new scintilla.Quadtree(
		this.bounds.x,
		this.bounds.y + subHeight,
		subWidth,
		subHeight,
	  nextLevel);

	this.nodes[3] = new scintilla.Quadtree(
		this.bounds.x + subWidth,
		this.bounds.y + subHeight,
		subWidth,
		subHeight,
	  nextLevel);

}

// return all objects
scintilla.Quadtree.prototype.getAllObjects = function(returnedObjects) {
  for (var i = 0; i < this.nodes.length; i++) {
  			this.nodes[i].getAllObjects(returnedObjects);
  		}
  		for (var i = 0, len = this.objects.length; i < len; i++) {
  			returnedObjects.push(this.objects[i]);
  		}
  		return returnedObjects;
}

// return all objects that can collide with obj
scintilla.Quadtree.prototype.retrieve = function (obj) {

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
scintilla.Quadtree.prototype.clear = function() {

    this.objects.length = 0;

		for (var i = 0; i < this.nodes.length; i++) {
			this.nodes[i].clear();
      this.nodes.splice(i, 1);
		}

		this.nodes.length = 0;

};
