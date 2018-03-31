
const Validate = {
    isFunction(value) {
        return (value instanceof Function)
    },

    isClass(value) {
        return !!(value && value.constructor && value.call && value.apply);
    },

    isArray(value) {
        return Array.isArray(value);
    },

    isNumber(value) {
        return !isNaN(value);
    }
}

export default Validate;