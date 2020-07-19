"use strict";
exports.__esModule = true;
exports.pipe = exports.compose = void 0;
var Foldable_1 = require("./Foldable");
/**
 * 可以提供函数的组合
 * @category 常用函数
 */
// export function compose<A, B, C>(f: Semigroupoid<B, C>, ...fns: Semigroupoid<any, any>[]): Semigroupoid<A, C> {
function compose(f) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    var fnLen = fns.length;
    if (fnLen === 0) {
        throw new Error("compose的参数至少为两个");
    }
    if (fnLen === 1) {
        var ret = void 0;
        var init_1 = fns[0];
        if (init_1.compose) {
            ret = init_1.compose(f);
        }
        else if (typeof f === 'function' && typeof init_1 === 'function') {
            ret = function () {
                var x = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    x[_i] = arguments[_i];
                }
                return f(init_1.apply(void 0, x));
            };
        }
        else {
            throw new Error("参数类型不能进行compose");
        }
        return ret;
    }
    return Foldable_1.reduce(compose, fns[0], fns.slice(1));
}
exports.compose = compose;
function pipe(f, g) {
    return f.compose(g);
}
exports.pipe = pipe;
//# sourceMappingURL=Semigroupoid.js.map