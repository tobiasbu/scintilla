
export default function IndexOfListener(signal, listener, context) {
 
    let r = signal._bindings.each((element, index) => {
        if (element._listener === listener && element._context === context) {
            return index;
        }
    })

    return r || -1;
}