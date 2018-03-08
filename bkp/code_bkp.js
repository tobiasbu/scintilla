/* 
this.render = function(context) {


        if (!this.visible || this._selfDestroy)
          return;
      
        if (this.component['render']) {
          if (this.game.camera.view.intersects(this.bounds.box)) {
      
            //  if (this.component['collider'])
              //  this.component['collider'].debugDraw(context,'red');
      
                this.component['render'].render(context);
                this.game.camera.instancesInView++;
          }
        }
      
        if (this['freelyrender']) {
          context.setTransform(1, 0, 0, 1, 0, 0);
          this.freelyrender(context);
        }
      
        if (this.children.length === 0)
          return;
      
      
        var i = 0;
      
         while (i < this.children.length)
         {
      
           this.children[i].render(context);
      
          i++;
         }
      
      }
      */

      /*this.render = function() {

  for (var i = 0; i < this.children.length; i++)
  {

      this.children[i].render(this.game.context);

  }
};*/
