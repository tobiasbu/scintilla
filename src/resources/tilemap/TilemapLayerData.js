
import ObjectUtils from '../../utils/ObjectUtils'

export default class TilemapLayerData {
    constructor(config) {
        this.width = ObjectUtils.getValue(config,'width', 0);
        this.height = ObjectUtils.getValue(config,'height',0);
        this.x = ObjectUtils.getValue(config,'x', 0);
        this.y = ObjectUtils.getValue(config,'y', 0);
        this.name = ObjectUtils.getValue(config,'name', 'tilemaplayer');
        this.alpha = ObjectUtils.getValue(config,'alpha', 1);
        //this.type ="tilelayer";
        this.visible = ObjectUtils.getValue(config,'visible', true);
        this.tiles =  ObjectUtils.getValue(config,'tiles', []);
        
    }
}