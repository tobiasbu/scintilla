
export default function ParseTilesConfig(tileset, tilesetTilesConfig) {

    for (let tileIndex in tilesetTilesConfig) {

        let index = parseInt(tileIndex);
        let tileData = tileset.getTile(index);
       

        if (tileData === null || tileData === undefined) continue;


        let tileProperties = tilesetTilesConfig[tileIndex];

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