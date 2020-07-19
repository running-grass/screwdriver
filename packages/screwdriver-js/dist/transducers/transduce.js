"use strict";
exports.__esModule = true;
exports.transduce = void 0;
var __1 = require("..");
var XWrap_1 = require("./XWrap");
var XReduced_1 = require("./XReduced");
function transduce(xd, reducer, initVal, list) {
    var xf = reducer instanceof XWrap_1.XWrap ? reducer : __1.xwrap(reducer);
    return arrayReduce(xd(xf), initVal, list);
}
exports.transduce = transduce;
function arrayReduce(xf, acc, list) {
    var ret = acc;
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var item = list_1[_i];
        ret = xf['@@transducer/step'](ret, item);
        if (XReduced_1.isXReduced(ret)) {
            ret = ret["@@transducer/value"];
            break;
        }
    }
    return xf['@@transducer/result'](ret);
}
//# sourceMappingURL=transduce.js.map