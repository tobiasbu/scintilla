

Scintilla.CanvasInterpolation = {

    crisp : function(canvas)
    {
        var types = [ 'optimizeSpeed', 'crisp-edges', '-moz-crisp-edges', '-webkit-optimize-contrast', 'optimize-contrast', 'pixelated' ];
        types.forEach(function (type)
        {
            canvas.style['image-rendering'] = type;
        });
        canvas.style.msInterpolationMode = 'nearest-neighbor';
        return canvas;
    },

    bicubic : function(canvas)
    {
        canvas.style['image-rendering'] = 'auto';
        canvas.style.msInterpolationMode = 'bicubic';
        return canvas;
    }
}