"use strict";
exports.__esModule = true;
// 附加函数
Array.prototype['fantasy-land/map'] = function (mapper) {
    return this.map(mapper);
};
// 附加函数
Array.prototype.flatten = function () {
    var res = [];
    for (var _i = 0, _a = this; _i < _a.length; _i++) {
        var item = _a[_i];
        if (item instanceof Array) {
            for (var _b = 0, _c = item.flatten(); _b < _c.length; _b++) {
                var it2 = _c[_b];
                res.push(it2);
            }
        }
        else {
            res.push(item);
        }
    }
    return res;
};
// Function
Function.prototype["fantasy-land/compose"] = function (f) {
    return Function.compose(f);
};
Function.prototype.compose = function (f) {
    var _this = this;
    return function (x) { return f(_this(x)); };
};
//# sourceMappingURL=index.js.map