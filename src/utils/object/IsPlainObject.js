
/// From jQuery

function HasOwn(classToType) {
    return classToType.hasOwnProperty;
}

export default function IsPlainObject(obj) {

    // Detect obvious negatives
    if (typeof(obj) !== 'object' || obj.nodeType || obj === obj.window) {
        return false;
    }

    // Objects with no prototype (e.g., `Object.create( null )`) are plain
    /*let proto = obj.getPrototypeOf;

    if (!proto)
        return true;*/

    try
    {
        // Objects with prototype are plain if they were constructed by a global Object function
        //  //!HasOwn.call(proto, 'constructor');
        if ( obj.constructor && !({}).hasOwnProperty.call(obj.constructor.prototype, 'isPrototypeOf')) {
            return false;
        }
    }
    catch (e)
    {
        return false;
    }

    return true;
}