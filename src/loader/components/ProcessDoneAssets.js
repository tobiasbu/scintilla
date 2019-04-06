import PreloadSceneComplete from "../../scene/components/PreloadSceneComplete";
import LoaderState from "../LoaderState";
import AssetsType from "../AssetsType";
import ParseTiledJSON from "../../resources/tilemap/parser/ParseTiledJSON";
import ParseFontFile from '../../resources/bitmapfont/ParseFontFile'

export default function ProcessDoneAssets() {

  this._successFiles.clear();
  this._filesQueue.clear();

  let cache = this.cache;


  if (this._processedFiles.size > 0) {

    // sort the assets by type priority 
    this._processedFiles.sort((a, b) => {
      return (a.type > b.type);
    });

    let self = this;

    // add assets to cache
    this._processedFiles.each(function (file) {

      let asset;

      switch (file.type) {
        default:
          break;

        case AssetsType.svg:
        case AssetsType.image: {
          asset = cache.image.add(file.tag, file.data);
          break;
        }

        case AssetsType.audio: {
          asset = cache.audio.add(file.tag, file.data);
          break;
        }
        case AssetsType.json: {
          asset = cache.json.add(file.tag, file.data);
          break;
        }

        case AssetsType.tilemapJSON: {
          asset = ParseTiledJSON(file.tag, file.data, cache);
          cache.tilemap.add(file.tag, asset);
          break;
        }

        case AssetsType.spritesheet: {
          asset = cache.animation.add(file.tag, file.data);
          break;
        }

        case AssetsType.animMachine: {
          asset = cache.animMachine.add(file.tag, file.data);
          break;
        }

        case AssetsType.bitmapFont: {
          // cache.image.add(file.tag, file.image);
          console.log('parsing');
          asset = ParseFontFile(file.tag, file.assets, cache);
          break;
        }
      }

      if (asset !== undefined)
        self.game.events.dispatch('asset_complete', asset, file.type);

    });

    //
  }
  this._processedFiles.clear();
  this.state = LoaderState.DONE;

  //this.game.scene.preloadComplete();
  PreloadSceneComplete.call(this.game.scene);
}