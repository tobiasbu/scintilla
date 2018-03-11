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

    scintilla.Class = Jay;

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
scintilla._extend = function(dest,source) {
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
  scintilla.Class = function() {};

  // Check if a class is 'instance of'
  scintilla.Class.prototype.is = function(className) {
      return this.className === className;
  }

  // Create a new Class that inherits from this class
  scintilla.Class.extend = function(className, prop, classMethods) {

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
    Class.prototype.constructor = scintilla.Class;

    // And make this class extendable
    scintilla.Class.extend = scintilla.Class.extend;//arguments.callee;

    // If there are class-level Methods, add them to the class
    if(classMethods) {
        scintilla._extend(Class,classMethods);
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
