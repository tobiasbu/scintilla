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
  
  Platform : require('./system/PlatformEnvironment'),
  Core : require('./core'),

  // DATA STRUCTURES
  Structures : require('./structures'),

  // RENDER
  Render : require('./render'),
  Color : require('./render/color/Color'),
  Transition : require('./render/transition'),

  // INPUT
  KeyCode : require('./input/keyboard/KeyCode'),
  MouseButton : require('./input/mouse/MouseButton'),
  Input : require('./input'),

  // MATH
  Math : require('./math/MathUtils'),
  Matrix : require('./math/Matrix'),
  Ease : require('./math/easing'),

  // ENTITIES
  Scene : require('./scene/'),
  Camera : require('./camera/Camera'),
  Module : require('./modules'),
  Entity : require('./entities'),

  // EVENTS
  Event : require('./event'),

  // AUDIO
  Audio : require('./audio'),

  // CORE
  Resources : require('./resources'),
  Cache : require('./cache/CacheManager'),
  Loader : require('./loader'),
  Game : require('./core/Game'),

  // UTILITIES
  Path : require('./utils/Path')
};

Extend(Defines, scintilla);

module.exports = scintilla;

global.scintilla = scintilla;