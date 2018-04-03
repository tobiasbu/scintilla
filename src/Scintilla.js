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

import Defines from './Define'
import ObjectExtend from './utils/ObjectExtend';

/**
* @namespace scintilla
*/
var scintilla = scintilla || {
  
  Core : require('./core'),

  // DATA STRUCTURES
  Structures : require('./structures'),
  // RENDER
  Render : require('./render'),
  // INPUT
  KeyCode : require('./input/keyboard/KeyCode'),
  MouseButton : require('./input/mouse/MouseButton'),
  Input : require('./input'),
  // MATH
  Math : require('./math/MathUtils'),
  Matrix : require('./math/Matrix'),
  Ease : require('./math/easing/Easing'),
  EasingType : require('./math/easing/EasingType'),
  // ENTITIES
  SceneManager : require('./scene/SceneManager'),
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

ObjectExtend(Defines, scintilla);

/*
scintilla.ShapeType = {
Rect : 1,
Circle : 2,
Polygon : 3
}*/


module.exports = scintilla;

global.scintilla = scintilla;