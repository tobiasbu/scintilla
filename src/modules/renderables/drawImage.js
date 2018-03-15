
export default DrawImage = function(context, source, transform, frame)
{
    if (context === undefined) return;

    if (source === undefined || source == null) return;


    let resolution = 1;
    let matrix = transform.matrix;
    let origin = transform.origin;
    
    // destination
    let dx = origin.x * -frame.width / resolution;
    let dy = origin.y * -frame.height / resolution;

    context.setTransform(
        matrix.a[0], matrix.a[1], // 2
        matrix.a[3], matrix.a[4], // 5
        matrix.a[6] * resolution,
        matrix.a[7] * resolution);
    
    context.globalAlpha = this.alpha;
    
    context.drawImage(
            source, // image
            frame.x, // sx - pos crop x
            frame.y, // sy - pos crop y
            frame.width, // sWidth - crop width
            frame.height, // sHeight - crop height
            dx, // destination x
            dy, // destination y
            frame.width / resolution,
            frame.height / resolution
            );
      
        
}