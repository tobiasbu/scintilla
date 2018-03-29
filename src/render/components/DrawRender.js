
import DrawRenderLayer from './DrawRenderLayer'

export default function DrawRender(render, camera, delta) {
        
    if (!render._enable)
        return;

        let clip = (camera.x !== 0 ||
             camera.y !== 0 ||
             camera.width !== render.context.canvas.width ||
             camera.height !== render.context.canvas.height);

    // alpha
    if (render._alpha !== 1)
    {
        render.context.globalAlpha = 1;
        render._alpha = 1;
    }

    // blend
    render.context.globalCompositeOperation = 'source-over';
   
    
    /*if (clip)
    {
        let resolution = 1;
        this.context.save();
        this.context.beginPath();
        this.context.rect(
            0,
            0,
            320 * resolution,
            240 * resolution);
        this.context.clip();
    }*/

         

    for (let i = 0; i < render.layer.renderLayers.length; i++)
    {
        let layer = render.layer.renderLayers.at(i);

        if (!layer.enable)
            continue;

        let drawCalls = 0;   
        drawCalls += DrawRenderLayer(layer,camera, render.context);

        render.drawCalls += drawCalls;
    }

    camera.game.system.draw.bounds(camera.bounds);

    render.context.setTransform(1, 0, 0, 1, 0, 0);

    

    render.game.scene.render();

    if (render.game.debug != null) {

        
        render.game.debug.test();
  
    }

    
}