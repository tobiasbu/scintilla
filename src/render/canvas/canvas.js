
/**
 * Create a Canvas object.
 * @class Canvas
 */
export default (
    class Canvas {

  static create (parent,width, height) {

  // default definition
  let defaultDef = {
    width: width,
    height: height,
    id: Math.random().toString(36).substr(2, 9),
    class: "",
    container: "body",
    style: "padding: 0;margin: auto;display: block;top: 0; bottom: 0;left: 0;right: 0;border:1px solid #d3d3d3;background-color: #f1f1f1;"
  };

  //var CO = Object.assign(defaultDef, options);
  let CO = defaultDef;
  let canvas;


  canvas = document.createElement('canvas');
  //canvas.parent = parent;
  canvas.setAttribute("id", CO.id);
  canvas.setAttribute("width", CO.width);
  canvas.setAttribute("height", CO.height);
  canvas.setAttribute("style", CO.style);
  //canvas.style.position = 'absolute';


  Canvas.appendDOM(canvas,parent);
  //document.body.appendChild(canvas);
  //var context = canvas.getContext("2d");


  //tobiJS.Canvas.list.parent = document.body;

  //console.log("Canvas Created!");

  return canvas;
}

static appendDOM(canvas,parent) {

  let appendTo;
  let overflowHidden = true;
  let target = null;

  //if (overflowHidden === undefined) { overflowHidden = true; }

    if (parent)
    {
        if (typeof parent === 'string')
        {
            // hopefully an element ID
            target = document.getElementById(parent);
        }
        else if (typeof parent === 'object' && parent.nodeType === 1)
        {
            // quick test for a HTMLelement
            target = parent;
        }
    }

    // Fallback, covers an invalid ID and a non HTMLelement object
    if (!target)
    {
        target = document.body;
    }

    /*if (overflowHidden && target.style)
    {
        target.style.overflow = 'hidden';
    }*/

    target.appendChild(canvas);

}

})
