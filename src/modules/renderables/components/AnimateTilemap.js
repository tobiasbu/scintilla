
export default function AnimateTilemap(tilemap, time) {

    let animator = tilemap.animator;

    if (animator === undefined)
        return;

    //console.log(time.hiDeltaTime);

    let len = animator.animatedTiles.size;

    if (len === 0)
        return;

    let delta = time.hiDeltaTime;


    for (let i = 0; i < len; i++) {

        let animatedTile = animator.animatedTiles.at(i); 

        animatedTile.t += delta;
        
        let GID = animatedTile.tileGID;
        let currentKeyFrame = GID.keyFrames[animatedTile.frame];

        if (animatedTile.t >= currentKeyFrame.duration) {

            animatedTile.t = 0;
           

            if (animatedTile.frame + 1 < GID.keyFrames.length)
                animatedTile.frame++;
            else 
                animatedTile.frame = 0;
            

            let nextGID = GID.keyFrames[animatedTile.frame].tileID;//GID.tileset.getTile(GID.keyFrames[animatedTile.frame].tileID).id;
            
            GID.currentFrame = nextGID;

            
        }

    }

}