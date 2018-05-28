# Scintilla - HTML5 Game Engine

<div align="center" style="margin:16px 0">
<img src="https://raw.githubusercontent.com/tobiasbu/scintilla/master/resources/scintilla_logo_official.png"/>
</div>
<br/>

Scintilla is a small and Open-Source HTML5 Game Engine canvas based. Inspired by [melonJS](http://melonjs.org/), [Phaser](https://phaser.io/) and [PixiJS](http://www.pixijs.com/) allows you to create fast games from small and big projects.

## Getting Started

Coming soon...

## Current Features

- Sprite and Spritesheet rendering;
- Tilemap from [Tiled](https://www.mapeditor.org/) JSON format;
- Animation Machine;
- Pooling;
- Signals to listen engine events;
- Loads multiple assets format;
- Simple transition effect;
- Math and Utilities functions (Easing, object validation...);
- Data structures (List, Map, Set);
- Input support: keyboard and mouse;

## Building Scintilla

To build **Scintilla** follow the steps below. 

### Download the Repository:

You have two options:

1. Clone this repository via https, ssh using [Git](https://git-scm.com/) or [Github Desktop](https://desktop.github.com/);
2. Download this repository as [zip](https://github.com/tobiasbu/scintilla/archive/master.zip);

### Dependencies:

You also need to install the dependencies: 

1. Make sure to install [node.js](https://nodejs.org/en/) 8.11.1 LTS version. This will guarantee that you will have [npm](https://www.npmjs.com/) installed. 
2. Under you favorite command prompt (such *Git Bash*, Terminal (under Linux), [cmder](http://cmder.net/) and others...) navigate to the Scintilla project directory;
3. On the Scintilla directory run:

```bash
npm install
```
This command will install [Babel](https://babeljs.io/) compiler, [webpack](https://webpack.js.org/) and related plugins.


### Building

After the dependencies installed you can finally build Scintilla!

There is two available configurations *Debug* and *Release* mode. The build configuration for each mode can be found in the files `webpack.config.js` (Release) and `webpack.debug.config.js` (Debug).

As you notice, the engine is written in Javascript ES6 using Babel. We need to transpile to ES5 standard through the webpack bundler. 

Using a command prompt to run the following commands  will reproduce the Scintilla final source to make your games and can be found under `build/` directory.

#### Debug: 

```bash
npm run debug
```

Will reproduce **`scintilla.dev.js`**. 
The debug mode is recommend to use while you are developing your game.

#### Release: 

```bash
npm run build
``` 

Will reproduce **`scintilla.js`** and the minimified version **`scintilla.min.js`**.
The release mode is recommend to use when your game is finished. 

## Change-Log

Version 0.0.1 - **Baby Steps** - _Work in progress._

- 06/12/16 - First release of _'tobiJS'_;
- 03/06/18 - Back to development and refactoring everything to new engine;
- 04/20/18 - Initial scratch version to work in a first game.
- 05/28/18 - Including mouse support and minor fixes.

## About

Scintilla was started when I was learning Javascript on 2016. The result was _tobiJS_ written in pure ECMA5. After two years, I returned to work with much enthusiasm refactoring the entire engine with modern Javascript (ECMA6) and improved architecture and design.

The focus of the engine is the game developers community, from  beginners to advanced. Scintilla provides a entire systems to create prototypes, experiment ideas, art-games, retro games and so on.  

## License

Created by [Tobias Ulrich](mailto:tobiasbulrich@gmail.com) &copy; 2016 - 2018 

[MIT License](https://github.com/tobiasbu/scintilla/blob/master/LICENSE.md) 

[logo]: https://raw.githubusercontent.com/tobiasbu/scintilla/master/resources/scintilla_logo.png
