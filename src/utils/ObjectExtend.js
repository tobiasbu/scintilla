

export default function ObjectExtend(source, target, deepCopy) {

    let argsLength = arguments.length;
    target = arguments[1] || {},
    deepCopy = deepCopy || false;

    for(let property in source){

        
        let src = source[property];
        let dst = target[property];

        if (deepCopy) {

            // TODO
            /*
            if(	
            x !== "super" && //Never clone the super referance
            from[x] instanceof Function && //Only overwrite functions
            !(from[x].prototype instanceof Class) //Never overwrite referances to classes
        ){
            //Never create circular super referances.
            to[x] = from[x].super || superCopy(from, from[x]);
        }
            */

        } else if (dst === undefined) {
            target[property] = src;
        }



        
    }

}