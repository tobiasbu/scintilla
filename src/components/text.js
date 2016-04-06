
tobi.Text = tobi.Renderable.extend(function() {

this.constructor = function(text, style) {

  this.super();


  this.type = tobi.RenderType.CSSText;

  this.bounds = 0;
  this.canvas = tobi.CanvasList.create(this);
  this.context = this.canvas.getContext('2d');
  this.texture = new tobi.Texture();


  this.fontStyle = "12px Verdana";
  this.strokeColor = "black";
  this.color = "white";
  this.text = text;
  this.style = null;
  this.fontObj = null;

  this.setStyle(style);

};

this.setStyle = function(style) {

  style = style || {};
  style.font = style.font || '20px Verdana';
  style.backgroundColor = style.backgroundColor || null;
  style.fill = style.fill || 'black';
  style.align = style.align || 'left';
  style.boundsAlignH = style.boundsAlignH || 'left';
  style.boundsAlignV = style.boundsAlignV || 'top';
  style.stroke = style.stroke || 'black'; //provide a default, see: https://github.com/GoodBoyDigital/pixi.js/issues/136
  style.strokeThickness = style.strokeThickness || 0;
  style.wordWrap = style.wordWrap || false;
  style.wordWrapWidth = style.wordWrapWidth || 100;
  style.shadowOffsetX = style.shadowOffsetX || 0;
  style.shadowOffsetY = style.shadowOffsetY || 0;
  style.shadowColor = style.shadowColor || 'rgba(0,0,0,0)';
  style.shadowBlur = style.shadowBlur || 0;
  style.tabs = style.tabs || 0;

  var fontObj = this.checkFont(style.font);

  if (style.fontStyle)
   {
       fontObj.fontStyle = style.fontStyle;
   }

   if (style.fontVariant)
   {
       fontObj.fontVariant = style.fontVariant;
   }

   if (style.fontWeight)
   {
       fontObj.fontWeight = style.fontWeight;
   }

   if (style.fontSize)
   {
       if (typeof style.fontSize === 'number')
       {
           style.fontSize = style.fontSize + 'px';
       }

       fontObj.fontSize = style.fontSize;
   }

   this.fontObj = fontObj;
   this.style = style;

}

this.checkFont = function(font) {

  var m = font.match(/^\s*(?:\b(normal|italic|oblique|inherit)?\b)\s*(?:\b(normal|small-caps|inherit)?\b)\s*(?:\b(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit)?\b)\s*(?:\b(xx-small|x-small|small|medium|large|x-large|xx-large|larger|smaller|0|\d*(?:[.]\d*)?(?:%|[a-z]{2,5}))?\b)\s*(.*)\s*$/);

 if (m)
 {
     return {
         font: font,
         fontStyle: m[1] || 'normal',
         fontVariant: m[2] || 'normal',
         fontWeight: m[3] || 'normal',
         fontSize: m[4] || 'medium',
         fontFamily: m[5]
     };
 }

}

this.updateText = function() {


  var maxLineWidth = 0;
  var outputText = this.text;

  var lines = outputText.split(/(?:\r\n|\r|\n)/);

  //  Calculate text width
  var tabs = this.style.tabs;
  var lineWidths = [];
  var maxLineWidth = 0;
  var fontProperties = this.determineFontProperties(this.style.font);

  for (var i = 0; i < lines.length; i++)
  {

    if (tabs === 0)
    {
        //  Simple layout (no tabs)
        var lineWidth = this.context.measureText(lines[i]).width + this.style.strokeThickness + this.padding.x;

        // Adjust for wrapped text
        if (this.style.wordWrap)
        {
            lineWidth -= this.context.measureText(' ').width;
        }
    }
    else
    {

      var line = lines[i].split(/(?:\t)/);
    var lineWidth = this.padding.x + this.style.strokeThickness;

           if (Array.isArray(tabs))
           {
               var tab = 0;

               for (var c = 0; c < line.length; c++)
               {
                   var section = Math.ceil(this.context.measureText(line[c]).width);

                   if (c > 0)
                   {
                       tab += tabs[c - 1];
                   }

                   lineWidth = tab + section;
               }
           }
           else
           {
               for (var c = 0; c < line.length; c++)
               {
                   //  How far to the next tab?
                   lineWidth += Math.ceil(this.context.measureText(line[c]).width);

                   //var diff = this.game.math.snapToCeil(lineWidth, tabs) - lineWidth;

                   lineWidth += diff;
               }
           }
       }

       lineWidths[i] = Math.ceil(lineWidth);
       maxLineWidth = Math.max(maxLineWidth, lineWidths[i]);


}


  this.canvas.width = maxLineWidth

  //  Calculate text height
    var lineHeight = fontProperties.fontSize + this.style.strokeThickness + this.padding.y;
    var height = lineHeight * lines.length;
    var lineSpacing = this._lineSpacing;

    if (lineSpacing < 0 && Math.abs(lineSpacing) > lineHeight)
    {
        lineSpacing = -lineHeight;
    }

    //  Adjust for line spacing
    if (lineSpacing !== 0)
    {
        height += lineSpacing * lines.length;
    }

    this.canvas.height = height;

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.style.backgroundColor)
    {
        this.context.fillStyle = this.style.backgroundColor;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.context.fillStyle = this.style.fill;
    this.context.font = this.style.font;
    this.context.strokeStyle = this.style.stroke;
    this.context.textBaseline = 'alphabetic';

    this.context.lineWidth = this.style.strokeThickness;
    this.context.lineCap = 'round';
    this.context.lineJoin = 'round';

}

this.render = function(context) {


}

});
