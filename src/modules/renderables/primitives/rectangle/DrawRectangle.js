
export default function DrawRectangle(context, transform, rectangle) {

    if (context === undefined) return false;

   let matrix = transform.matrix;

    context.setTransform(
        matrix.a[0], matrix.a[1], // 2
        matrix.a[3], matrix.a[4], // 5
        matrix.a[6], matrix.a[7]);

   /* if (rectangle.outlineWidth > 0) {
        context.lineWidth = rectangle.outlineWidth;
        context.strokeStyle = rectangle.outlineColor;
        context.strokeRect(0, 0, rectangle.width, rectangle.height);
    }*/

    context.fillStyle = rectangle.color._css;
    context.fillRect(0, 0, rectangle.width, rectangle.height);

    return true;
}

