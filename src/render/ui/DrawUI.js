import UpdateUIMatrix from "./UpdateUIMatrix";
import RenderScene from "../../scene/components/RenderScene";

export default function DrawUI(gui, sceneManager) {

    UpdateUIMatrix(gui);

 
    // blend
    //gui.context.globalCompositeOperation = 'source-over';

    let clip = (gui.viewport.x !== 0 || gui.viewport.x !== 0 || gui.viewport.width !== gui.canvas.clientWidth || gui.viewport.height !== gui.canvas.clientHeight);

    if (clip)
    {
        
    

        gui.context.save();
        gui.context.beginPath();
        gui.context.rect(
            0,
            0,
            gui.viewport.width,
            gui.viewport.height);
        gui.context.clip();
    }

    gui.context.setTransform(
        gui.matrix.a[0], gui.matrix.a[1], 
        gui.matrix.a[3], gui.matrix.a[4], 
        gui.matrix.a[6], gui.matrix.a[7]);

   
    if (gui.backgroundAlpha > 0)
    {
        gui.context.globalAlpha = gui.backgroundAlpha;
        gui.context.fillStyle = gui.backgroundColor;  
        gui.context.fillRect(0, 0, gui.width, gui.height);
    }

    // alpha
    if (gui._alpha !== 1)
    {
        gui.context.globalAlpha = 1;
        gui._alpha = 1;
    }


        RenderScene(sceneManager, gui.draw);


    if (clip)
        gui.context.restore();


       

}

