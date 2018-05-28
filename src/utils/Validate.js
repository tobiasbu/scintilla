
const Validate = {
    isFunction(value) {
       // return (value instanceof Function);
       return  typeof value === "function" && typeof value.nodeType !== "number";
    },

    isClass(value) {
        return !!(value && value.constructor && value.call && value.apply);
    },

    isArray(value) {
        return Array.isArray(value);
    },

    isNumber(value) {
        return !isNaN(value);
    },

    isString(value) {
        return typeof value === 'string' || value instanceof String;
    }

    
};

Object.freeze(Validate);

export default Validate;