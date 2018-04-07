
import DrawRenderLayer from './DrawRenderLayer';
import RenderScene from '../../scene/components/RenderScene';

export default function DrawRender(render, camera, delta) {
        
    if (!render._enable)
        return;

       /* let clip = (camera.x !== 0 ||
             camera.y !== 0 ||
             camera.width !== render.context.canvas.width ||
             camera.height !== render.context.canvas.height);*/

    // alpha
    if (render._alpha !== 1)
    {
        render.context.globalAlpha = 1;
        render._alpha = 1;
    }

    // blend
    render.context.globalCompositeOperation = 'source-over';
   
   
    if (render.game.scene._setup === true) {
    
        for (let i = 0; i < render.layer.renderLayers.length; i++)
        {
            let layer = render.layer.renderLayers.at(i);

            if (!layer.enable)
                continue;

            let drawCalls = 0;   
            drawCalls += DrawRenderLayer(layer,camera, render.context);

            render.drawCalls += drawCalls;
        }

        //camera.game.system.draw.bounds(camera.bounds);
    }


  

    
}