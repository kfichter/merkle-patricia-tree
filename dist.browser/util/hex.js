"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTerminator = exports.removeHexPrefix = exports.addHexPrefix = void 0;
/**
 * Prepends hex prefix to an array of nibbles.
 * @method addHexPrefix
 * @param {Nibbles} key - Array of nibbles
 * @returns {Nibbles} - returns buffer of encoded data
 **/
function addHexPrefix(key, terminator) {
    // odd
    if (key.length % 2) {
        key.unshift(1);
    }
    else {
        // even
        key.unshift(0);
        key.unshift(0);
    }
    if (terminator) {
        key[0] += 2;
    }
    return key;
}
exports.addHexPrefix = addHexPrefix;
/**
 * Removes hex prefix of an array of nibbles.
 * @method removeHexPrefix
 * @param {Nibbles} val - Array of nibbles
 * @private
 */
function removeHexPrefix(val) {
    if (val[0] % 2) {
        val = val.slice(1);
    }
    else {
        val = val.slice(2);
    }
    return val;
}
exports.removeHexPrefix = removeHexPrefix;
/**
 * Returns true if hex-prefixed path is for a terminating (leaf) node.
 * @method isTerminator
 * @param {Nibbles} key - a hex-prefixed array of nibbles
 * @private
 */
function isTerminator(key) {
    return key[0] > 1;
}
exports.isTerminator = isTerminator;
//# sourceMappingURL=hex.js.map