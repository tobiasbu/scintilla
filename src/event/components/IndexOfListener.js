
export default function IndexOfListener(signal, listener, context) {
 
    let r = signal._bindings.each(function (element, index) {
        
        if (element._listener === listener && element._context === context) {
            return index;
        }
        
    });


    if (r === undefined)
        r = -1;

    return r;
}