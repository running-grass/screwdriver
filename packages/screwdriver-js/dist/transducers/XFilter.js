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
exports.xfilter = exports.XFilter = void 0;
var XBase_1 = require("./XBase");
var XFilter = /** @class */ (function (_super) {
    __extends(XFilter, _super);
    function XFilter(predicate, xf) {
        var _this = _super.call(this, xf) || this;
        _this['@@transducer/step'] = function (acc, item) {
            return (_this.predicate(item))
                ? _this.xf["@@transducer/step"](acc, item)
                : acc;
        };
        _this.predicate = predicate;
        return _this;
    }
    return XFilter;
}(XBase_1.XBase));
exports.XFilter = XFilter;
exports.xfilter = function (predicate) {
    return function (xf) {
        return new XFilter(predicate, xf);
    };
};
//# sourceMappingURL=XFilter.js.map