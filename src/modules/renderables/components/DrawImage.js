

function DrawImage(context, source, frame, transform, destination)
{
    

    if (context === undefined) return false;

    if (source === undefined || source == null) return false;

    let matrix = transform.matrix;

    context.setTransform(
        matrix.a[0], matrix.a[1], // 2
        matrix.a[3], matrix.a[4], // 5
        matrix.a[6],
        matrix.a[7]);
    
    //context.globalAlpha = this.alpha;
    
    context.drawImage(
            source, // image
            frame.x, // sx - pos crop x
            frame.y, // sy - pos crop y
            frame.width, // sWidth - crop width
            frame.height, // sHeight - crop height
            -destination.x, // destination x
            -destination.y, // destination y
            frame.width,
            frame.height
            );
      
        return true;
        
}


export default DrawImage;