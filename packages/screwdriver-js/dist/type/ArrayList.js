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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ArrayList = void 0;
var AbstractList = /** @class */ (function () {
    function AbstractList() {
    }
    AbstractList.prototype['fantasy-land/map'] = function (mapper) {
        return this.map(mapper);
    };
    // 抽象类中的粗劣实现，具体类重新实现覆盖一次
    AbstractList.prototype.toArray = function () {
        var arr = [];
        for (var idx = 0; idx < this.size(); idx++) {
            arr.push(this.get(idx));
        }
        return arr;
    };
    return AbstractList;
}());
var ArrayList = /** @class */ (function (_super) {
    __extends(ArrayList, _super);
    // 外部能使用到的几率很小，作为内部实现来隐藏
    function ArrayList(array) {
        var _this = _super.call(this) || this;
        // 使用数组来存储List的数据
        _this._data = [];
        _this._data = array;
        return _this;
    }
    ArrayList.fromArray = function (array) {
        return new ArrayList(array);
    };
    ArrayList.prototype.size = function () {
        return this._data.length;
    };
    ArrayList.prototype.add = function (item) {
        return ArrayList.fromArray(__spreadArrays(this._data, [item]));
    };
    ArrayList.prototype.get = function (idx) {
        var a = this._data[idx];
        return a;
    };
    ArrayList.prototype.map = function (mapper) {
        var newArr = this._data.map(mapper);
        return ArrayList.fromArray(newArr);
    };
    ArrayList.prototype.toArray = function () {
        return this._data;
    };
    return ArrayList;
}(AbstractList));
exports.ArrayList = ArrayList;
exports["default"] = ArrayList;
//# sourceMappingURL=ArrayList.js.map