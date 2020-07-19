"use strict";
exports.__esModule = true;
exports.XBase = void 0;
var Category_1 = require("../typeclass/Category");
var XBase = /** @class */ (function () {
    function XBase(xf) {
        this['@@transducer/result'] = Category_1.id;
        this['@@transducer/init'] = function () {
            throw new Error("没有定义init函数");
        };
        this.xf = xf;
    }
    ;
    return XBase;
}());
exports.XBase = XBase;
//# sourceMappingURL=XBase.js.map