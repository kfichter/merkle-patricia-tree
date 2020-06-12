/// <reference types="node" />
import { Nibbles } from '../trieNode';
/**
 * Converts a buffer to a nibble array.
 * @method bufferToNibbles
 * @param {Buffer} key
 * @private
 */
export declare function bufferToNibbles(key: Buffer): Nibbles;
/**
 * Converts a nibble array into a buffer.
 * @method nibblesToBuffer
 * @param {Nibbles} arr - Nibble array
 * @private
 */
export declare function nibblesToBuffer(arr: Nibbles): Buffer;
/**
 * Returns the number of in order matching nibbles of two give nibble arrays.
 * @method matchingNibbleLength
 * @param {Nibbles} nib1
 * @param {Nibbles} nib2
 * @private
 */
export declare function matchingNibbleLength(nib1: Nibbles, nib2: Nibbles): number;
/**
 * Compare two nibble array keys.
 * @param {Nibbles} keyA
 * @param {Nibbles} keyB
 */
export declare function doKeysMatch(keyA: Nibbles, keyB: Nibbles): boolean;
