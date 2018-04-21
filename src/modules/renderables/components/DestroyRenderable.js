import TilemapLayer from "../tilemap/TilemapLayer";
import Tilemap from "../tilemap/Tilemap";

export default function DestroyRenderable(renderable, render) {

    if (renderable instanceof Tilemap) {
        for (let i = 0; i < renderable.layers.length; i++) {
            let layer = renderable.layers.at(i);
            DestroyRenderable(layer, render);
        }
        renderable.layers.clear();
    }

    render.layer.removeRenderable(renderable);

    renderable._bounds = null;
    renderable.resource = null;
    renderable.frame = null;

   

}