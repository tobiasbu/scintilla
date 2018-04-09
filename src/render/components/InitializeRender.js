import CanvasManager from "../canvas/CanvasListManager";
import CanvasInterpolation from "../canvas/CanvasInterpolation";
import CanvasSmoothing from "../canvas/CanvasSmoothing";
import { RenderingType } from "../Define";
import Render from "../Render";
import Environment from '../../system/PlatformEnvironment';

export default function InitializeRender(game, config) {

  if (!Environment.features.canvas) {
    throw new Error('Game.CreateRender: Could not create Canvas element. Canvas is not supported in your platform.');
  }


  let render = new Render(game);

  render.imageRendering = (config.pixelated) ? RenderingType.NEAREST : RenderingType.LINEAR;

    if (config.canvas) {
      render.canvas = config.canvas;
    } else {
      render.canvas = CanvasManager.create(game, config.width, config.height);
    }

    // create context
    render.context = render.canvas.getContext("2d", { alpha: false });  
    render.smoothing = new CanvasSmoothing(render.context);

    // set pixelated
    if (config.pixelated) {
      
      CanvasInterpolation.crisp(render.canvas);
      render.smoothing.set(render.imageRendering);
    }

    if (config.doubleBuffer) {
      render.doubleBuffer = true;
      render._domCanvas = CanvasManager.create(game, config.width, config.height);
      render._domContext = render._domCanvas.getContext("2d", { alpha: false });  
    }

    return render;



    // default definition
    /*let defaultDef = {
      tabindex: '1',
      width: width,
      height: height,
      id: Math.random().toString(36).substr(2, 9),
      class: "",
      container: "body",
      style: "padding: 0;margin: auto;display: block;top: 0; bottom: 0;left: 0;right: 0;border:1px solid #d3d3d3;background-color: #f1f1f1;"
    };
  
    let CO = defaultDef;
    let canvas;

    canvas = document.createElement('canvas');
    //canvas.parent = parent;
    canvas.setAttribute("id", CO.id);
    canvas.setAttribute("width", CO.width);
    canvas.setAttribute("height", CO.height);
    canvas.setAttribute("style", CO.style);*/
}