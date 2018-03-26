/**
* @author       Tobias Beise Ulrich
* @license      MIT
*
* @overview
*
* --- Scintilla ---
*
* v0.0.1
*
* tobiasbu.github.io
*
* Scintilla is simple 2D game engine for HTML5 games.
* The first version is only for browsers based in canvas.
*
*/

/**
* @namespace scintilla
*/
var scintilla = scintilla || {
  VERSION: '0.0.1',

  Core : require('./core'),

  // DATA STRUCTURES
  Struct : require('./structures'),
  // RENDER
  Render : require('./render'),
  // INPUT
  KeyCode : require('./input/keycode'),
  MouseButton : require('./input/mousebutton'),
  Input : require('./input'),
  // MATH
  MathUtils : require('./math/mathutils'),
  Matrix : require('./math/matrix'),
  // ENTITIES
  Camera : require('./camera/camera'),
  Module : require('./modules'),
  Entity : require('./entities'),
  // CORE
  Cache : require('./cache/CacheManager'),
  Loader : require('./loader'),
  Game : require('./core/game'),
  // UTILITIES
  Color : require('./utils/color')
};

scintilla.ShapeType = {
Rect : 1,
Circle : 2,
Polygon : 3
}


module.exports = scintilla;

global.scintilla = scintilla;