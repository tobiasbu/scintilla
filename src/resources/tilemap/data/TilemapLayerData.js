
import ObjectGet from '../../../utils/object/ObjectGet'

export default class TilemapLayerData {

    constructor(config) {
        this.width = ObjectGet.value(config,'width', 0);
        this.height = ObjectGet.value(config,'height',0);
        this.x = ObjectGet.value(config,'x', 0);
        this.y = ObjectGet.value(config,'y', 0);
        this.name = ObjectGet.value(config,'name', 'tilemaplayer');
        this.alpha = ObjectGet.value(config,'alpha', 1);
        //this.type ="tilelayer";
        this.visible = ObjectGet.value(config,'visible', true);
        this.tiles =  ObjectGet.value(config,'tiles', []);
        this.hasAnimatedTiles = false;
    }

}