import ObjectGet from "../../../utils/object/ObjectGet";

export default class TilemapMetadata {

    constructor(config) {

        this.name = ObjectGet.value(config,'name','tilemap');
        this.width =  ObjectGet.value(config,'width',0);
        this.height =  ObjectGet.value(config,'height',0);
        this.tileWidth =  ObjectGet.value(config,'tileWidth',16);
        this.tileHeight =  ObjectGet.value(config,'tileHeight',16);
        this.pixelsWidth = ObjectGet.value(config,'pixelsWidth',this.width * this.tileWidth);
        this.pixelsHeight = ObjectGet.value(config,'pixelsHeight',this.height * this.tileHeight);
        this.orientation = ObjectGet.value(config, 'orientation', 'orthogonal');
    }


}