import File from '../File'
import JSONFile from './JSONFile';
import { AssetTypeHandler, LOADER_STATE } from '../LoaderState';
import Path from '../../utils/Path';
import AssetsType from '../AssetsType';


function CheckImagesSources(loader, source, fullPath) {

    if (source === undefined)
        return;

      

    let size = source.length;

   

    if (size <= 0)
        return;

    for (let i = 0; i < size; i++) {

        let tileset = source[i];

        if (tileset.image) {
            let name = tileset.name || Path.getFilenameWithoutExtension(tileset.image);
            let path = Path.getPathWithoutRoot(fullPath).concat(Path.getFilename(tileset.image));
            loader.image(name, path, undefined, undefined, false);
        }
    }

}

export default class TilemapFileJSON extends JSONFile {

    constructor(tag, url, path, xhrSettings) {

        super(tag, url, path, xhrSettings);
        this.type = AssetsType.tilemapJSON;

    }

    onPostLoad(loader, xhrLoader) {

        this.state = LOADER_STATE.PROCESSING;
        this.data = JSON.parse(xhrLoader.responseText);

        // check tileset images and pipe to the loader
        CheckImagesSources(loader, this.data.tilesets, this.url);
    }

    onProcess(processingCallback) {
        this.onDone();
        callback(this);
    }


}

AssetTypeHandler.register('tilemapJSON', function (tag, url, path, xhrSettings) {
    this.addAsset(new TilemapFileJSON(tag, url, this.path, xhrSettings));
    return this;
});