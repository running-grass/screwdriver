"use strict";
exports.__esModule = true;
exports.isXReduced = exports.xForceReduced = exports.xreduced = exports.XReduced = void 0;
var XReduced = /** @class */ (function () {
    function XReduced(val) {
        this['@@transducer/reduced'] = true;
        this["@@transducer/value"] = val;
    }
    return XReduced;
}());
exports.XReduced = XReduced;
function xreduced(val) {
    if (val instanceof XReduced) {
        return val;
    }
    return new XReduced(val);
}
exports.xreduced = xreduced;
function xForceReduced(val) {
    return new XReduced(val);
}
exports.xForceReduced = xForceReduced;
function isXReduced(x) {
    return x && x instanceof XReduced;
}
exports.isXReduced = isXReduced;
//# sourceMappingURL=XReduced.js.map