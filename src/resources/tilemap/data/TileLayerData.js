
import ObjectGet from '../../../utils/object/ObjectGet';

export default class TileLayerData {

    constructor(config) {
        this.width = ObjectGet.value(config,'width', 0);
        this.height = ObjectGet.value(config,'height',0);
        this.x = ObjectGet.value(config,'x', 0);
        this.y = ObjectGet.value(config,'y', 0);
        this.name = ObjectGet.value(config, 'name', '');
        this.alpha = ObjectGet.value(config,'alpha', 1);
        //this.type ="tilelayer";
        this.visible = ObjectGet.value(config,'visible', true);
        this.tiles =  ObjectGet.value(config,'tiles', []);
        this.hasAnimatedTiles = false;
    }

    getTile(x, y) {
        let index = x + y * this.width;

        return this.tiles[index];
    }

}