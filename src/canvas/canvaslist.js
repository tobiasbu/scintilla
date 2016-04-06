
// based in pixi
tobi.CanvasList = {

create : function(parent, width, height) {

  var index = tobi.CanvasList.first();
  var canvas;

  // no parent found
  if (index === -1)
  {
     var tag = {
         parent: parent,
         canvas: document.createElement('canvas')
     }

     tobi.CanvasList.list.push(tag);

     canvas = tag.canvas;

  } else {

      tobi.CanvasList[index].parent = parent;

      canvas = tobiJS.CanvasList[index].canvas;
  }

  if (width !== undefined)
  {
            canvas.width = width;
            canvas.height = height;
  }

  return canvas;


},

appendDOM : function() {


},


filter : function(parent) { // functional programming

  var list = tobi.CanvasList.list;

  return list.parent === parent;

},


first : function() {

  var list = tobi.CanvasList.list;

    for (var i = 0; i < list.length; i++)
    {
        if (list[i].parent === null)
        {
            return i;
        }
    }

    return -1;


},

remove : function(parent) {

  var list = tobi.CanvasList.list;

    for (var i = 0; i < list.length; i++)
    {
        if (list[i].parent === parent)
        {
            list[i].parent = null;
        }
    }

}






}

// list of canvas
tobi.CanvasList.list = [];
