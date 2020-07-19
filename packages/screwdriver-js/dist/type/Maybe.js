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
exports.__esModule = true;
exports.maybe = exports.nothing = exports.just = exports.Nothing = exports.Just = exports.Maybe = void 0;
/**
 * Maybe代表一种可能性，可有可无
 *
 * 他有两种状态，一种是Nothing，类比于js中的null
 *
 * 另外一种是Just，里面包装这一个值
 *
 * @category 数据类型
 */
var Maybe = /** @class */ (function () {
    function Maybe() {
    }
    Maybe.prototype['fantasy-land/map'] = function (mapper) {
        return this.map(mapper);
    };
    Maybe.prototype['fantasy-land/ap'] = function (fmapper) {
        return this.ap(fmapper);
    };
    ;
    Maybe.prototype['fantasy-land/of'] = function (a) {
        return this.of(a);
    };
    Maybe.of = function (a) {
        return a == null || a == undefined ? Nothing.of() : Just.of(a);
    };
    Maybe['fantasy-land/of'] = function (a) {
        return Maybe.of(a);
    };
    Maybe.prototype['fantasy-land/concat'] = function (mb) {
        return this.concat(mb);
    };
    // Monoid
    Maybe.empty = function () {
        return Nothing.of();
    };
    Maybe['fantasy-land/empty'] = function () {
        return Nothing.of();
    };
    Maybe.prototype.empty = function () {
        return Nothing.of();
    };
    Maybe.prototype['fantasy-land/empty'] = function () {
        return Nothing.of();
    };
    Maybe.prototype['fantasy-land/reduce'] = function (reducer, initVal) {
        return this.reduce(reducer, initVal);
    };
    return Maybe;
}());
exports.Maybe = Maybe;
/**
 * Just是有值的一种Maybe状态
 * @category 数据类型构造器
 */
var Just = /** @class */ (function (_super) {
    __extends(Just, _super);
    function Just(a) {
        var _this = _super.call(this) || this;
        _this.isJust = true;
        _this.isNothing = false;
        _this._value = a;
        return _this;
    }
    Just.prototype.of = function (a) {
        return new Just(a);
    };
    Just.of = function (x) {
        return new Just(x);
    };
    Just['fantasy-land/of'] = function (x) {
        return Just.of(x);
    };
    Just.prototype.flatten = function () {
        if (this._value instanceof Just) {
            return this._value.flatten();
        }
        else if (this._value instanceof Nothing) {
            return this._value;
        }
        return this;
    };
    Just.prototype.map = function (mapper) {
        return Maybe.of(mapper(this._value));
    };
    Just.prototype.ap = function (fmapper) {
        if (fmapper.isNothing) {
            return Nothing.of();
        }
        var justMapper = fmapper;
        return Maybe.of(justMapper._value(this._value));
    };
    Just.prototype.concat = function (mb) {
        if (mb.isNothing) {
            return this;
        }
        var that = mb._value;
        // TODO 可能会报错
        return this._value.concat(that);
    };
    Just.prototype.reduce = function (reducer, initVal) {
        return reducer(initVal, this._value);
    };
    return Just;
}(Maybe));
exports.Just = Just;
/**
 * Nothing是Maybe的没有值得状态
 * @category 数据类型构造器
 */
var Nothing = /** @class */ (function (_super) {
    __extends(Nothing, _super);
    function Nothing() {
        var _this = _super.call(this) || this;
        _this.isJust = false;
        _this.isNothing = true;
        return _this;
    }
    Nothing.prototype.of = function (a) {
        return Nothing._nothing;
    };
    Nothing.of = function (b) {
        return Nothing._nothing;
    };
    Nothing['fantasy-land/of'] = function (b) {
        return Nothing.of(b);
    };
    Nothing.prototype.flatten = function () {
        return Nothing._nothing;
    };
    Nothing.prototype.map = function (mapper) {
        return Nothing._nothing;
    };
    Nothing.prototype.ap = function (fmapper) {
        return Nothing._nothing;
    };
    Nothing.prototype.concat = function (mb) {
        return Nothing._nothing;
    };
    Nothing.prototype.reduce = function (reducer, initVal) {
        return initVal;
    };
    /**
     * 单例模式的Nothing
     */
    Nothing._nothing = new Nothing();
    return Nothing;
}(Maybe));
exports.Nothing = Nothing;
/**
 * Just的构造函数
 * @category 类型构造函数
 */
exports.just = Just.of;
/**
 * Nothing的构造函数
 * @category 类型构造函数
 */
exports.nothing = Nothing.of;
/**
 * 自动判断的Maybe构造函数
 * @category 类型构造函数
 */
exports.maybe = Maybe.of;
//# sourceMappingURL=Maybe.js.map