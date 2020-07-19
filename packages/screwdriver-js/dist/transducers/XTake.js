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
exports.xtake = exports.XTake = void 0;
var XBase_1 = require("./XBase");
var XReduced_1 = require("./XReduced");
var XTake = /** @class */ (function (_super) {
    __extends(XTake, _super);
    function XTake(takeWant, xf) {
        var _this = _super.call(this, xf) || this;
        _this.takeCount = 0;
        _this['@@transducer/step'] = function (acc, item) {
            _this.takeCount++;
            var ret = _this.takeWant <= 0
                ? acc
                : _this.xf['@@transducer/step'](acc, item);
            return _this.takeOver() ? XReduced_1.xreduced(ret) : ret;
        };
        _this.takeWant = takeWant;
        return _this;
    }
    XTake.prototype.takeOver = function () {
        return this.takeCount >= this.takeWant;
    };
    return XTake;
}(XBase_1.XBase));
exports.XTake = XTake;
exports.xtake = function (takeWant) {
    return function (xf) {
        return new XTake(takeWant, xf);
    };
};
//# sourceMappingURL=XTake.js.map