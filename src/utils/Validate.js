
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

Object.freeze(Validate);

export default Validate;

module.exports = Validate;