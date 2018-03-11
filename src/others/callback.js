
Scintilla.Callback = function (contextObject, delegateMethod) {

 return function() {

   return delegateMethod.apply(contextObject, arguments);

 };

};
