"use strict";
exports.__esModule = true;
exports.xwrap = exports.XWrap = void 0;
var Category_1 = require("../typeclass/Category");
// type xfOrFn<A, B> = XBase<A, B> | Reducer<A, B>
/**
 * Xwrap 是用来封装Reducer的xf
 * @template A
 * @template B
 */
var XWrap = /** @class */ (function () {
    function XWrap(reducer) {
        var _this = this;
        this['@@transducer/init'] = function () {
            throw new Error("未提供init");
        };
        this['@@transducer/result'] = Category_1.id;
        this['@@transducer/step'] = function (acc, item) {
            return _this.reducer(acc, item);
        };
        this.reducer = reducer;
    }
    return XWrap;
}());
exports.XWrap = XWrap;
exports.xwrap = function (reducer) {
    return new XWrap(reducer);
};
//# sourceMappingURL=XWrap.js.map