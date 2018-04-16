
export default function ParseTileProperties(tileset, tileProperties) {

    for (let tileIndex in tileProperties) {

        let tileData = tileset.getTile(tileIndex);

        if (tileData === null || tileData === undefined) continue;


        let props = tileProperties[tileIndex];
        tileData.properties = props;

        // check properties
        /*for (let property in props) {
        
            let propertyContent = tileProperties[property];
            tileData.properties = propertyContent;
        }*/

    }

}