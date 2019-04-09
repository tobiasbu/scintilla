
import StringReader from './StringReader';
import DataMap from './../../structures/Map';
import Cache from './../../cache/CacheManager';
import BitmapFontResource from './BitmapFontResource';

/**
 * 
 * @param {string} tag 
 * @param {[]} assets 
 * @param {Cache} cache 
 */
export default function ParseFontFile(tag, assets, cache) {

  if (assets.length === 0) {
    return null;
  }

  let images = [];
  for (let i = 1; i < assets.length; i += 1) {
    images.push(cache.image.add(assets[i].tag, assets[i].data));
  }

  const fntFile = assets[0];
  /**
   * @type {string[]}
   */
  //let lines = fnt.split('\n');
  let info = {};
  let glyphs = new DataMap();

  const perf = performance.now();

  const reader = new StringReader({
    obj: fntFile,
    name: 'data',
  });

  reader.addRule('into', {
    char: '"',
    ignore: ' ',
  });

  reader.addRule('split', {
    char: '=',
  });

  //while (current = lines.shift()) {

  let key;
  let keyEditing;
  /**
   * @type {string}
   */
  let value;
  let currentObj;

  while (!reader.eof()) {
    const str = reader.read();
    if (str) {

      if (Array.isArray(str)) {
        key = str[0];
        value = str[1];
        if (keyEditing === 'char') {

          if (!currentObj) {
            currentObj = {}
          }

          currentObj[key] = parseInt(value, 10);

        } else {

          switch (key) {
            case 'face':
              info.fontName = value;
              break;
            case 'size': {
              try {
                info.fontSize = parseInt(value, 10);
              } catch (e) {
                info.fontSize = null;
              }
              break;
            }
            case 'outline': {
              info.outline = parseInt(value, 10);
              break;
            }
            case 'lineHeight': {
              info.lineHeight = parseInt(value, 10);
              break;
            }
            case 'base': {
              info.baseLine = parseInt(value, 10);
              break;
            }
          }
        }
      } else {
        if (str === 'char') { // new char
          if (currentObj) {
            glyphs.insert(String.fromCharCode(currentObj.id), currentObj);
            currentObj = null;
          }
        }
        keyEditing = str;
      }

    } else {
      keyEditing = str;
    }

  }

  reader.clear();

  const bitmapFont = new BitmapFontResource(tag, info, glyphs, images);

  cache.bitmapFont.add(tag, bitmapFont);

  return bitmapFont;
}