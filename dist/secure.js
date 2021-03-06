"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureTrie = void 0;
var ethereumjs_util_1 = require("ethereumjs-util");
var checkpointTrie_1 = require("./checkpointTrie");
/**
 * You can create a secure Trie where the keys are automatically hashed
 * using **keccak256** by using `require('merkle-patricia-tree/secure')`.
 * It has the same methods and constructor as `Trie`.
 * @class SecureTrie
 * @extends Trie
 * @public
 */
var SecureTrie = /** @class */ (function (_super) {
    __extends(SecureTrie, _super);
    function SecureTrie() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.apply(this, args) || this;
    }
    SecureTrie.prove = function (trie, key) {
        var hash = ethereumjs_util_1.keccak256(key);
        return _super.prove.call(this, trie, hash);
    };
    SecureTrie.verifyProof = function (rootHash, key, proof) {
        return __awaiter(this, void 0, void 0, function () {
            var hash;
            return __generator(this, function (_a) {
                hash = ethereumjs_util_1.keccak256(key);
                return [2 /*return*/, _super.verifyProof.call(this, rootHash, hash, proof)];
            });
        });
    };
    SecureTrie.prototype.copy = function () {
        var trie = _super.prototype.copy.call(this, false);
        var db = trie.db.copy();
        return new SecureTrie(db._leveldb, this.root);
    };
    SecureTrie.prototype.get = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hash = ethereumjs_util_1.keccak256(key);
                        return [4 /*yield*/, _super.prototype.get.call(this, hash)];
                    case 1:
                        value = _a.sent();
                        return [2 /*return*/, value];
                }
            });
        });
    };
    /**
     * For a falsey value, use the original key
     * to avoid double hashing the key.
     */
    SecureTrie.prototype.put = function (key, val) {
        return __awaiter(this, void 0, void 0, function () {
            var hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!val || val.toString() === '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.del(key)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        hash = ethereumjs_util_1.keccak256(key);
                        return [4 /*yield*/, _super.prototype.put.call(this, hash, val)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SecureTrie.prototype.del = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var hash;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hash = ethereumjs_util_1.keccak256(key);
                        return [4 /*yield*/, _super.prototype.del.call(this, hash)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SecureTrie;
}(checkpointTrie_1.CheckpointTrie));
exports.SecureTrie = SecureTrie;
//# sourceMappingURL=secure.js.map