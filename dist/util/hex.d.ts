import { Nibbles } from '../trieNode';
/**
 * Prepends hex prefix to an array of nibbles.
 * @method addHexPrefix
 * @param {Nibbles} key - Array of nibbles
 * @returns {Nibbles} - returns buffer of encoded data
 **/
export declare function addHexPrefix(key: Nibbles, terminator: boolean): Nibbles;
/**
 * Removes hex prefix of an array of nibbles.
 * @method removeHexPrefix
 * @param {Nibbles} val - Array of nibbles
 * @private
 */
export declare function removeHexPrefix(val: Nibbles): Nibbles;
/**
 * Returns true if hex-prefixed path is for a terminating (leaf) node.
 * @method isTerminator
 * @param {Nibbles} key - a hex-prefixed array of nibbles
 * @private
 */
export declare function isTerminator(key: Nibbles): boolean;
