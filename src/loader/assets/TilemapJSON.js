import File from '../File'
import JSONFile from './JSONFile';
import LoaderState from '../LoaderState';
import Path from '../../utils/Path';
import AssetsType from '../AssetsType';
import AddAsset from '../components/AddAsset';
import AssetTypeHandler from './AssetTypeHandler';


function CheckImagesSources(loader, source, fullPath) {

    if (source === undefined)
        return;

      

    let size = source.length;

   

    if (size <= 0)
        return;

    for (let i = 0; i < size; i++) {

        let tileset = source[i];

        if (tileset.image) {
            let name = Path.getFilenameWithoutExtension(tileset.image) || tileset.name;
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

        this.state = LoaderState.PROCESSING;
        this.data = JSON.parse(xhrLoader.responseText);

        // check tileset images and pipe to the loader
        CheckImagesSources(loader, this.data.tilesets, this.url);
    }

    onProcessing(processingCallback) {
        this.onDone();
        processingCallback(this);
    }


}

AssetTypeHandler.register('tilemapJSON', function (tag, url, path, xhrSettings) {
    //this.addAsset(new TilemapFileJSON(tag, url, this.path, xhrSettings));
    AddAsset.call(this, new TilemapFileJSON(tag, url, this.path, xhrSettings));
    return this;
});