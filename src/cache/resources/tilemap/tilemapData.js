import ObjectUtils from "../../../utils/objectutils";
import DataList from "../../../structures/list";

export default class TilemapData {

    constructor(config) {

       // this.name = ObjectUtils.getValue(config,'name','tilemap');
        this.width =  ObjectUtils.getValue(config,'width',0);
        this.height =  ObjectUtils.getValue(config,'height',0);
        this.tileWidth =  ObjectUtils.getValue(config,'tileWidth',0);
        this.tileHeight =  ObjectUtils.getValue(config,'tileHeight',0);
        this.widthPixels = ObjectUtils.getValue(config,'pixelsWidth',this.width * this.tileWidth);
        this.heightPixels = ObjectUtils.getValue(config,'heightPixels',this.height * this.tileHeight);
        this.orientation = ObjectUtils.getValue(config, 'orientation', 'orthogonal');
        this.layers = null; //ObjectUtils.getValue(config, 'layers', new DataList());
        this.tilesets = null; //GetFastValue(config, 'tilesets', []);
    }

}