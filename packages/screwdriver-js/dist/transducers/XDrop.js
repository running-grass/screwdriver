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
exports.xdrop = exports.XDrop = void 0;
var XBase_1 = require("./XBase");
var XDrop = /** @class */ (function (_super) {
    __extends(XDrop, _super);
    function XDrop(dropTotal, xf) {
        var _this = _super.call(this, xf) || this;
        _this.dropCount = 0;
        _this['@@transducer/step'] = function (acc, item) {
            if (_this.isDropOver()) {
                return _this.xf["@@transducer/step"](acc, item);
            }
            else {
                _this.dropCount++;
                return acc;
            }
        };
        _this.dropTotal = dropTotal;
        return _this;
    }
    XDrop.prototype.isDropOver = function () {
        return this.dropTotal <= 0 || this.dropCount >= this.dropTotal;
    };
    return XDrop;
}(XBase_1.XBase));
exports.XDrop = XDrop;
exports.xdrop = function (dropTotal) {
    return function (xf) {
        return new XDrop(dropTotal, xf);
    };
};
//# sourceMappingURL=XDrop.js.map