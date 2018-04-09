import PreloadSceneComplete from "../../scene/components/PreloadSceneComplete";
import LoaderState from "../LoaderState";
import AssetsType from "../AssetsType";

export default function ProcessDoneAssets() {

    this._successFiles.clear();
    this._filesQueue.clear();

    let cache = this.cache;

    if (this._processedFiles.size > 0)
    {

      // sort the assets by type priority 
      this._processedFiles.sort((a, b) => {
        return (a.type > b.type);
      });

      // add assets to cache
      this._processedFiles.each(function(file) {

        switch (file.type)
        {
          default:
            break;

          case AssetsType.svg: 
          case AssetsType.image: {
            cache.image.add(file.tag,file.data);
            break;
          }

          case AssetsType.audio: {
            cache.audio.add(file.tag, file.data);
            break;
          }
          case AssetsType.json: {
            cache.json.add(file.tag, file.data);
            break;
          }
          

          case AssetsType.tilemapJSON: {
            cache.tilemap.add(file.tag, file.data);
            break;
          }
        }

      })

      this._processedFiles.clear();
    }

    this.state = LoaderState.DONE;

    //this.game.scene.preloadComplete();
    PreloadSceneComplete.call(this.game.scene);
  }