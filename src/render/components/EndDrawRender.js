
export default function EndDrawRender(render) {
    render.context.globalAlpha = 1;
    render.context.globalCompositeOperation = 'source-over';
}
