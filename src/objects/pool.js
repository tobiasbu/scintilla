
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

    var container = obj.pool;

    // register if necessary
    if (this.poolList[container] === undefined)
      this.poolList[container] = [];

    this.poolList[container].push(obj);


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

  this.poolList = {};

}


});
