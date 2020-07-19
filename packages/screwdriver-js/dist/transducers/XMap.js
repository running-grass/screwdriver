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
exports.xmap = exports.XMap = void 0;
var XBase_1 = require("./XBase");
var XMap = /** @class */ (function (_super) {
    __extends(XMap, _super);
    function XMap(mapper, xf) {
        var _this = _super.call(this, xf) || this;
        _this['@@transducer/step'] = function (acc, item) {
            return _this.xf["@@transducer/step"](acc, _this.mapper(item));
        };
        _this.mapper = mapper;
        return _this;
    }
    return XMap;
}(XBase_1.XBase));
exports.XMap = XMap;
exports.xmap = function (mapper) {
    return function (xf) {
        return new XMap(mapper, xf);
    };
};
//# sourceMappingURL=XMap.js.map