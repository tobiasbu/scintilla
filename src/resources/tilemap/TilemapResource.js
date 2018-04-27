
import Resource from "../Resource";
import ResourceType from '../ResourceType';
import ObjectGet from "../../utils/object/ObjectGet";

export default class TilemapResource extends Resource {

    constructor(name, metadata, config) {

        super(name, ResourceType.Tilemap);

        this.metadata = metadata || null;
        this.tilesets =  ObjectGet.value(config, 'tilesets', null);
        this.tileLayers = ObjectGet.value(config, 'tilelayers', null);
        this.objectLayers = ObjectGet.value(config, 'objectlayers', null);
        
    }

    getObjectsLayer(name) {
        return this.objectLayers.find(function(a) {
            if (a.name === name) 
                return a;
        }) || null;
    }

    getTileLayer(name) {
        return this.tileLayers.find(function(layer) {
            if (layer.name === name) 
                return layer;
        }) || null;
    }

    getTilesetByGID(gid) {

        return this.tilesets.each((set)=>{
            if (set.hasGID(gid)) {
                return set;
            }
        }) || null;

    }

    getTileGID(gid) {
        return this.tilesets.each((set)=>{

            let tileGID = set.getTileGID(gid);

            if (tileGID !== undefined) {
                return tileGID;
            }
        }) || null;
    }

}
