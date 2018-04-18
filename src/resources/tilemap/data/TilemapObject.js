import ObjectGet from '../../../utils/object/ObjectGet';
import ObjectType from './ObjectType';



export default class TilemapObject {

    constructor(config) {

        this.x = ObjectGet.value(config, 'x', 0);
        this.y = ObjectGet.value(config, 'y', 0);
        this.width = ObjectGet.value(config, 'width', 0);
        this.height = ObjectGet.value(config, 'height', 0);
        this.rotation = ObjectGet.value(config, 'rotation', 0);
        this.name = ObjectGet.value(config, 'name', "");
        this.id = ObjectGet.value(config, 'id', null);
        this.visible = ObjectGet.value(config, 'visible', true);
        this.type = ObjectGet.value(config, 'type', "");

        this.objectType = ObjectType.Rect;

        if (config['ellipse'] === true) {
            this.objectType = ObjectType.Ellipse;
        } else if (config['point'] === true) {
            this.objectType = ObjectType.Point;
        } else if (config['polygon'] === true) {
            this.objectType = ObjectType.Polygon;
        } else if (config['polyline'] === true) {
            this.objectType = ObjectType.Polyline;
        }
    }

    contains(x, y) {

        if (this.width <= 0 && this.height <= 0)
            return false;

        return (x > this.x &&
            x < this.x + this.width &&
            y >= this.y &&
            y < this.y + this.height);
    }

    intersects(x, y, width, height) {

        if (width <= 0 || height <= 0 || this.width <= 0 || this.height <= 0)
            return false;

        return !(x > this.x + this.width ||
            x + width < this.x ||
            y > this.y + this.height ||
            y + height < this.y);

    }


}