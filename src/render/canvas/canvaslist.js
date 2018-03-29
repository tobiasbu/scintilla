
// based in pixi
scintilla.CanvasList = {

create : function(parent, width, height) {

  var index = scintilla.CanvasList.first();
  var canvas;

  // no parent found
  if (index === -1)
  {
     var tag = {
         parent: parent,
         canvas: document.createElement('canvas')
     }

     scintilla.CanvasList.list.push(tag);

     canvas = tag.canvas;

  } else {

      scintilla.CanvasList[index].parent = parent;

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

  var list = scintilla.CanvasList.list;

  return list.parent === parent;

},


first : function() {

  var list = scintilla.CanvasList.list;

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

  var list = scintilla.CanvasList.list;

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
scintilla.CanvasList.list = [];
