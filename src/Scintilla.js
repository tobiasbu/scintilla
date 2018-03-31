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
  KeyCode : require('./input/keyboard/KeyCode'),
  MouseButton : require('./input/MouseButton'),
  Input : require('./input'),
  // MATH
  MathUtils : require('./math/MathUtils'),
  Matrix : require('./math/Matrix'),
  // ENTITIES
  Camera : require('./camera/Camera'),
  Module : require('./modules'),
  Entity : require('./entities'),
  // EVENTS
  Event : require('./event'),
  // CORE
  Resources : require('./resources'),
  Cache : require('./cache/CacheManager'),
  Loader : require('./loader'),
  Game : require('./core/Game'),
  // UTILITIES
  Color : require('./utils/Color')
};

scintilla.ShapeType = {
Rect : 1,
Circle : 2,
Polygon : 3
}


module.exports = scintilla;

global.scintilla = scintilla;