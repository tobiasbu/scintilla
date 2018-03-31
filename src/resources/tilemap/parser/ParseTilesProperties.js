
export default function ParseTilesProperties(tileset, tilesetTilesProperties) {

    for (let tileIndex in tilesetTilesProperties) {

        let tileData = tileset.getTile(tileIndex);

        if (tileData === null || tileData === undefined) continue;


        let tileProperties = tilesetTilesProperties[tileIndex];

        // check properties
        for (let property in tileProperties) {
        
            let propertyContent = tileProperties[property];

            if (property == 'animation') {

                let animationSize = propertyContent.length;

                if (animationSize > 1) {
                    tileData.isAnimated = true;

                    let keyFrames = [];

                    for (let i = 0; i < animationSize; i++) {
                        let anim = propertyContent[i];
                        keyFrames.push({
                            duration: anim.duration,
                            tileID : anim.tileid 
                        });
                    }
                    
                    tileData.keyFrames = keyFrames;
                }

            }
        }

    }

  
}