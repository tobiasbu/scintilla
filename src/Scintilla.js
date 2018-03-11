/**
* @author       Tobias Beise Ulrich
* @license      MIT
*
* @overview
*
* --- Scintilla ---
*
* v0.0.2
*
* tobiasbu.github.io
*
* Scintilla is simple 2D game engine for HTML5 games.
* The first version is only for browsers based in canvas.
*
*/

/**
* @namespace Scintilla
*/
var Scintilla = Scintilla || {
  VERSION: '0.0.1',
  Game : require('./core/game.js'),
};

Scintilla.ShapeType = {
Rect : 1,
Circle : 2,
Polygon : 3
}


module.exports = Scintilla;

global.Scintilla = Scintilla;