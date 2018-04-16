
export default function DestroyRenderable(renderable, render) {

    render.layer.removeRenderable(renderable);

    renderable._bounds = null;
    renderable.resource = null;
    renderable.frame = null;

   

}