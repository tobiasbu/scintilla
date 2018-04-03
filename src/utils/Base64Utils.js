
const Base64Utils = {
    decode(str) {
        return window.atob(str);
        // Base64.decode(encodedString);
    },

    decodeToUint32(str) {
        let bin = window.atob(str);
        let len = bin.length;
        let bytes = new Array(len);

        for (let i = 0; i < len; i += 4) {
            bytes[i / 4] = (
                bin.charCodeAt(i) |
                bin.charCodeAt(i + 1) << 8 |
                bin.charCodeAt(i + 2) << 16 |
                bin.charCodeAt(i + 3) << 24
            ) >>> 0;
        }

        return bytes;
    },

    encode(str) {
        return window.btoa(str);
        // Base64.encode(string);
    }
}

module.exports = Base64Utils;