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

import Defines from './Define';
import Extend from './utils/object/Extend';

/**
* @namespace scintilla
*/
var scintilla = scintilla || {
  
  Environment : require('./system/PlatformEnvironment').default,
  Core : require('./core'),

  // DATA STRUCTURES
  Structure : require('./structures'),

  // RENDER
  Render : require('./render'),
  Color : require('./render/color/Color'),
  Transition : require('./render/transition'),

  // INPUT
  KeyCode : require('./input/keyboard/KeyCode').default,
  MouseButton : require('./input/mouse/MouseButton').default,
  Input : require('./input'),

  // MATH
  Math : require('./math/MathUtils').default,
  Random : require('./math/random/RandomGenerator').default,
  BoundingBox : require('./math/BoundingBox').default,
  Matrix3 : require('./math/Matrix3').default,
  Vector2 : require('./math/Vector2').default,
  Rect : require('./math/Rect').default,
  Ease : require('./math/easing').Ease,

  // ENTITIES
  Scene : require('./scene/'),
  Camera : require('./camera/Camera'),
  Module : require('./modules'),
  Entity : require('./entities'),
  Pool : require('./entities/pool'),


  // EVENTS
  Event : require('./event'),

  // AUDIO
  Audio : require('./audio'),

  // CACHE AND LOADER
  Resource : require('./resources'),
  Cache : require('./cache/CacheManager'),
  AssetType : require('./loader/AssetsType'),
  Loader : require('./loader'),
  Game : require('./core/Game'),

  // UTILITIES
  Path : require('./utils/Path'),
  WrapMode : require('./resources/animation/WrapMode').default
};

Extend(Defines, scintilla);

module.exports = scintilla;

global.scintilla = scintilla;