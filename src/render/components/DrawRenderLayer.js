import SortDepth from "../layer/SortDepth";


export default function DrawRenderLayer(layer, camera, context)
{
    
    if (!layer.__enable)
        return 0;

    let drawCalls = 0;

    if (layer.__isDirty)
    {
        layer.renderList.sort(SortDepth);

        layer.__isDirty = false;
    }

    var self = this;
    let size = layer.renderList.size;

    for (let i = 0; i < size; i++)
    {
        let element = layer.renderList.at(i);

        if (camera.bounds.intersects(element.bounds))
        {
            drawCalls += element.render(context);

        //camera.game.system.draw.bounds(element.bounds);
        }
    }

    return drawCalls;

}