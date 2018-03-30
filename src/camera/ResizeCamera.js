
export default function ResizeCamera(camera, canvas, width, height) {

    camera.width = width;
    camera.height = height;
    camera._aspectRatio = width / height;
    camera._pixelUnit.x = canvas.width / camera.width;
    camera._pixelUnit.y = canvas.height / camera.height;
}