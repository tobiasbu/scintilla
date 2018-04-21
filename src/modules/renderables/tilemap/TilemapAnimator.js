import DataList from "../../../structures/List";

export default class TilemapAnimator {

    constructor(tilemap, layers) {

        this.tilemap = tilemap;
        this.animatedTiles = new DataList();



        for (let i = 0; i < layers.length; i++) {

            if (!layers.at(i).data.hasAnimatedTiles) continue;

            let animatedSet = layers.at(i).data.animatedTiles;



            for (let j = 0; j < animatedSet.size; j++) {

                let animID = animatedSet.at(j);

                let tileGID = tilemap.resource.getTileGID(animID)

                let hasGid = this.animatedTiles.find(
                    (tileData) => {
                        return tileData.tileGID.gid === tileGID.gid;
                    });

                if (hasGid !== null)
                    continue;




                this.animatedTiles.push({
                    t: 0, // frameTime
                    frame: 0,
                    tileGID: tileGID
                });
            }

        }

    }

    update() {

    }

}