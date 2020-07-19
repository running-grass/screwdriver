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
exports.xlog = exports.xtap = exports.XTap = void 0;
var XBase_1 = require("./XBase");
var XTap = /** @class */ (function (_super) {
    __extends(XTap, _super);
    function XTap(tapFn, xf) {
        var _this = _super.call(this, xf) || this;
        _this['@@transducer/step'] = function (acc, item) {
            _this.tapFn(item);
            return _this.xf["@@transducer/step"](acc, item);
        };
        _this.tapFn = tapFn;
        return _this;
    }
    return XTap;
}(XBase_1.XBase));
exports.XTap = XTap;
exports.xtap = function (tapFn) {
    return function (xf) {
        return new XTap(tapFn, xf);
    };
};
exports.xlog = exports.xtap(console.log);
//# sourceMappingURL=XTap.js.map