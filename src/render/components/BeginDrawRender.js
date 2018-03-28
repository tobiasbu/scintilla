
export default function BeginDrawRender(render) {

    if (render.clear)
    {
        render.context.clearRect(0, 0, render.canvas.width, render.canvas.height);
    }

    render.context.fillStyle = render._backgroundColor;  
    render.context.fillRect(0, 0, render.canvas.width, render.canvas.height);

    render.drawCalls = 0;

}