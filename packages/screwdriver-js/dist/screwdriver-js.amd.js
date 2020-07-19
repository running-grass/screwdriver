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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
define("add", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.dec = exports.inc = void 0;
    var add = function (a, b) {
        return a + b;
    };
    exports["default"] = add;
    exports.inc = function (a) { return a + 1; };
    exports.dec = function (a) { return a - 1; };
});
define("typeclass/Foldable", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.reduce = void 0;
    function reduce(reducer, initVal, foldable) {
        return foldable.reduce(reducer, initVal);
    }
    exports.reduce = reduce;
});
define("naitve/index", ["require", "exports"], function (require, exports) {
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
});
define("type/Provider", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("transducers/XReduced", ["require", "exports"], function (require, exports) {
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
});
define("transducers/Transformer", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("typeclass/Semigroupoid", ["require", "exports", "typeclass/Foldable"], function (require, exports, Foldable_1) {
    "use strict";
    exports.__esModule = true;
    exports.pipe = exports.compose = void 0;
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
});
define("transducers/Transducer", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("typeclass/Category", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.id = void 0;
    /**
     * 返回参数自身
     * @category 常用函数
     */
    exports.id = function (x) {
        return x;
    };
});
define("transducers/XWrap", ["require", "exports", "typeclass/Category"], function (require, exports, Category_1) {
    "use strict";
    exports.__esModule = true;
    exports.xwrap = exports.XWrap = void 0;
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
});
define("transducers/transduce", ["require", "exports", "index", "transducers/XWrap", "transducers/XReduced"], function (require, exports, __1, XWrap_1, XReduced_1) {
    "use strict";
    exports.__esModule = true;
    exports.transduce = void 0;
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
});
define("transducers/XBase", ["require", "exports", "typeclass/Category"], function (require, exports, Category_2) {
    "use strict";
    exports.__esModule = true;
    exports.XBase = void 0;
    var XBase = /** @class */ (function () {
        function XBase(xf) {
            this['@@transducer/result'] = Category_2.id;
            this['@@transducer/init'] = function () {
                throw new Error("没有定义init函数");
            };
            this.xf = xf;
        }
        ;
        return XBase;
    }());
    exports.XBase = XBase;
});
define("transducers/XMap", ["require", "exports", "transducers/XBase"], function (require, exports, XBase_1) {
    "use strict";
    exports.__esModule = true;
    exports.xmap = exports.XMap = void 0;
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
});
define("type/Predicate", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("transducers/XFilter", ["require", "exports", "transducers/XBase"], function (require, exports, XBase_2) {
    "use strict";
    exports.__esModule = true;
    exports.xfilter = exports.XFilter = void 0;
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
    }(XBase_2.XBase));
    exports.XFilter = XFilter;
    exports.xfilter = function (predicate) {
        return function (xf) {
            return new XFilter(predicate, xf);
        };
    };
});
define("type/Consumer", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    ;
});
define("transducers/XTap", ["require", "exports", "transducers/XBase"], function (require, exports, XBase_3) {
    "use strict";
    exports.__esModule = true;
    exports.xlog = exports.xtap = exports.XTap = void 0;
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
    }(XBase_3.XBase));
    exports.XTap = XTap;
    exports.xtap = function (tapFn) {
        return function (xf) {
            return new XTap(tapFn, xf);
        };
    };
    exports.xlog = exports.xtap(console.log);
});
define("transducers/XTake", ["require", "exports", "transducers/XBase", "transducers/XReduced"], function (require, exports, XBase_4, XReduced_2) {
    "use strict";
    exports.__esModule = true;
    exports.xtake = exports.XTake = void 0;
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
                return _this.takeOver() ? XReduced_2.xreduced(ret) : ret;
            };
            _this.takeWant = takeWant;
            return _this;
        }
        XTake.prototype.takeOver = function () {
            return this.takeCount >= this.takeWant;
        };
        return XTake;
    }(XBase_4.XBase));
    exports.XTake = XTake;
    exports.xtake = function (takeWant) {
        return function (xf) {
            return new XTake(takeWant, xf);
        };
    };
});
define("transducers/XDrop", ["require", "exports", "transducers/XBase"], function (require, exports, XBase_5) {
    "use strict";
    exports.__esModule = true;
    exports.xdrop = exports.XDrop = void 0;
    var XDrop = /** @class */ (function (_super) {
        __extends(XDrop, _super);
        function XDrop(dropTotal, xf) {
            var _this = _super.call(this, xf) || this;
            _this.dropCount = 0;
            _this['@@transducer/step'] = function (acc, item) {
                if (_this.isDropOver()) {
                    return _this.xf["@@transducer/step"](acc, item);
                }
                else {
                    _this.dropCount++;
                    return acc;
                }
            };
            _this.dropTotal = dropTotal;
            return _this;
        }
        XDrop.prototype.isDropOver = function () {
            return this.dropTotal <= 0 || this.dropCount >= this.dropTotal;
        };
        return XDrop;
    }(XBase_5.XBase));
    exports.XDrop = XDrop;
    exports.xdrop = function (dropTotal) {
        return function (xf) {
            return new XDrop(dropTotal, xf);
        };
    };
});
define("typeclass/Flattenable", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.flatten = void 0;
    // 目前借用实例对象的具体函数实现
    // TODO 需要使用#5增强
    /**
     * 把指定的数据扁平化处理
     *
     * @param fa 例如多维数组等
     *
     * @returns 例如，对于数组来说，返回一维数组
     *
     * @category 常用函数
     */
    function flatten(fa) {
        return fa.flatten();
    }
    exports.flatten = flatten;
});
define("typeclass/Functor", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.map = void 0;
    /**
     * @category 常用函数
     */
    function map(mapper, fa) {
        return fa.map(mapper);
    }
    exports.map = map;
});
define("typeclass/Apply", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.ap = void 0;
    /**
     * @category 常用函数
     */
    function ap(fmapper, apply) {
        return apply.ap(fmapper);
    }
    exports.ap = ap;
});
define("typeclass/Applicative", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("typeclass/Semigroup", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.concat = void 0;
    /**
     * @category 常用函数
     */
    function concat(sg1, sg2) {
        return sg1.concat(sg2);
    }
    exports.concat = concat;
});
define("typeclass/Monoid", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.empty = void 0;
    /**
     * @category 常用函数
     */
    function empty(monoid) {
        return monoid.empty();
    }
    exports.empty = empty;
});
define("typeclass/Group", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.invert = void 0;
    /**
     * @category 常用函数
     */
    function invert() {
    }
    exports.invert = invert;
});
define("type/Mapper", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    ;
});
define("type/Reducer", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("type/Maybe", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.maybe = exports.nothing = exports.just = exports.Nothing = exports.Just = exports.Maybe = void 0;
    /**
     * Maybe代表一种可能性，可有可无
     *
     * 他有两种状态，一种是Nothing，类比于js中的null
     *
     * 另外一种是Just，里面包装这一个值
     *
     * @category 数据类型
     */
    var Maybe = /** @class */ (function () {
        function Maybe() {
        }
        Maybe.prototype['fantasy-land/map'] = function (mapper) {
            return this.map(mapper);
        };
        Maybe.prototype['fantasy-land/ap'] = function (fmapper) {
            return this.ap(fmapper);
        };
        ;
        Maybe.prototype['fantasy-land/of'] = function (a) {
            return this.of(a);
        };
        Maybe.of = function (a) {
            return a == null || a == undefined ? Nothing.of() : Just.of(a);
        };
        Maybe['fantasy-land/of'] = function (a) {
            return Maybe.of(a);
        };
        Maybe.prototype['fantasy-land/concat'] = function (mb) {
            return this.concat(mb);
        };
        // Monoid
        Maybe.empty = function () {
            return Nothing.of();
        };
        Maybe['fantasy-land/empty'] = function () {
            return Nothing.of();
        };
        Maybe.prototype.empty = function () {
            return Nothing.of();
        };
        Maybe.prototype['fantasy-land/empty'] = function () {
            return Nothing.of();
        };
        Maybe.prototype['fantasy-land/reduce'] = function (reducer, initVal) {
            return this.reduce(reducer, initVal);
        };
        return Maybe;
    }());
    exports.Maybe = Maybe;
    /**
     * Just是有值的一种Maybe状态
     * @category 数据类型构造器
     */
    var Just = /** @class */ (function (_super) {
        __extends(Just, _super);
        function Just(a) {
            var _this = _super.call(this) || this;
            _this.isJust = true;
            _this.isNothing = false;
            _this._value = a;
            return _this;
        }
        Just.prototype.of = function (a) {
            return new Just(a);
        };
        Just.of = function (x) {
            return new Just(x);
        };
        Just['fantasy-land/of'] = function (x) {
            return Just.of(x);
        };
        Just.prototype.flatten = function () {
            if (this._value instanceof Just) {
                return this._value.flatten();
            }
            else if (this._value instanceof Nothing) {
                return this._value;
            }
            return this;
        };
        Just.prototype.map = function (mapper) {
            return Maybe.of(mapper(this._value));
        };
        Just.prototype.ap = function (fmapper) {
            if (fmapper.isNothing) {
                return Nothing.of();
            }
            var justMapper = fmapper;
            return Maybe.of(justMapper._value(this._value));
        };
        Just.prototype.concat = function (mb) {
            if (mb.isNothing) {
                return this;
            }
            var that = mb._value;
            // TODO 可能会报错
            return this._value.concat(that);
        };
        Just.prototype.reduce = function (reducer, initVal) {
            return reducer(initVal, this._value);
        };
        return Just;
    }(Maybe));
    exports.Just = Just;
    /**
     * Nothing是Maybe的没有值得状态
     * @category 数据类型构造器
     */
    var Nothing = /** @class */ (function (_super) {
        __extends(Nothing, _super);
        function Nothing() {
            var _this = _super.call(this) || this;
            _this.isJust = false;
            _this.isNothing = true;
            return _this;
        }
        Nothing.prototype.of = function (a) {
            return Nothing._nothing;
        };
        Nothing.of = function (b) {
            return Nothing._nothing;
        };
        Nothing['fantasy-land/of'] = function (b) {
            return Nothing.of(b);
        };
        Nothing.prototype.flatten = function () {
            return Nothing._nothing;
        };
        Nothing.prototype.map = function (mapper) {
            return Nothing._nothing;
        };
        Nothing.prototype.ap = function (fmapper) {
            return Nothing._nothing;
        };
        Nothing.prototype.concat = function (mb) {
            return Nothing._nothing;
        };
        Nothing.prototype.reduce = function (reducer, initVal) {
            return initVal;
        };
        /**
         * 单例模式的Nothing
         */
        Nothing._nothing = new Nothing();
        return Nothing;
    }(Maybe));
    exports.Nothing = Nothing;
    /**
     * Just的构造函数
     * @category 类型构造函数
     */
    exports.just = Just.of;
    /**
     * Nothing的构造函数
     * @category 类型构造函数
     */
    exports.nothing = Nothing.of;
    /**
     * 自动判断的Maybe构造函数
     * @category 类型构造函数
     */
    exports.maybe = Maybe.of;
});
define("type/ArrayList", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.ArrayList = void 0;
    var AbstractList = /** @class */ (function () {
        function AbstractList() {
        }
        AbstractList.prototype['fantasy-land/map'] = function (mapper) {
            return this.map(mapper);
        };
        // 抽象类中的粗劣实现，具体类重新实现覆盖一次
        AbstractList.prototype.toArray = function () {
            var arr = [];
            for (var idx = 0; idx < this.size(); idx++) {
                arr.push(this.get(idx));
            }
            return arr;
        };
        return AbstractList;
    }());
    var ArrayList = /** @class */ (function (_super) {
        __extends(ArrayList, _super);
        // 外部能使用到的几率很小，作为内部实现来隐藏
        function ArrayList(array) {
            var _this = _super.call(this) || this;
            // 使用数组来存储List的数据
            _this._data = [];
            _this._data = array;
            return _this;
        }
        ArrayList.fromArray = function (array) {
            return new ArrayList(array);
        };
        ArrayList.prototype.size = function () {
            return this._data.length;
        };
        ArrayList.prototype.add = function (item) {
            return ArrayList.fromArray(__spreadArrays(this._data, [item]));
        };
        ArrayList.prototype.get = function (idx) {
            var a = this._data[idx];
            return a;
        };
        ArrayList.prototype.map = function (mapper) {
            var newArr = this._data.map(mapper);
            return ArrayList.fromArray(newArr);
        };
        ArrayList.prototype.toArray = function () {
            return this._data;
        };
        return ArrayList;
    }(AbstractList));
    exports.ArrayList = ArrayList;
    exports["default"] = ArrayList;
});
define("type/SingleLinked", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.SingleLinked = void 0;
    var SingleLinkedNode = /** @class */ (function () {
        function SingleLinkedNode(data, next) {
            this.data = data;
            this.next = next;
        }
        SingleLinkedNode.prototype.getData = function () {
            return this.data;
        };
        SingleLinkedNode.prototype.getNext = function () {
            return this.next;
        };
        return SingleLinkedNode;
    }());
    var AbstractLinked = /** @class */ (function () {
        function AbstractLinked(node, last, size) {
            this._size = 0;
            this._headNode = node;
            this._lastNode = last;
            this._size = size;
        }
        AbstractLinked.prototype.add = function (item) {
            return this.addLast(item);
        };
        AbstractLinked.prototype.size = function () {
            return this._size;
        };
        AbstractLinked.prototype.getHead = function () {
            return this._headNode;
        };
        AbstractLinked.prototype['fantasy-land/map'] = function (mapper) {
            return this.map(mapper);
        };
        // 抽象类中的粗劣实现，具体类重新实现覆盖一次
        AbstractLinked.prototype.toArray = function () {
            var node = this.getHead();
            if (!node) {
                return [];
            }
            var arr = [];
            do {
                arr.push(node.data);
                node = node.getNext();
            } while (!!node);
            return arr;
        };
        return AbstractLinked;
    }());
    var SingleLinked = /** @class */ (function (_super) {
        __extends(SingleLinked, _super);
        function SingleLinked(node, last, size) {
            return _super.call(this, node, last, size) || this;
        }
        SingleLinked.fromArray = function (array) {
            var headNode, lastNode;
            var size = array.length;
            lastNode = headNode = new SingleLinkedNode(array[size - 1], null);
            for (var idx = size - 2; idx >= 0; idx--) {
                var data = array[idx];
                var currNode = new SingleLinkedNode(data, headNode);
                headNode = currNode;
            }
            return new SingleLinked(headNode, lastNode, size);
        };
        // Linked接口
        SingleLinked.prototype.addLast = function (item) {
            var arr = this.toArray();
            arr.push(item);
            return SingleLinked.fromArray(arr);
        };
        SingleLinked.prototype.addHead = function (item) {
            var currNode = new SingleLinkedNode(item, this._headNode);
            return new SingleLinked(currNode, this._lastNode, this._size + 1);
        };
        SingleLinked.prototype.map = function (mapper) {
            var arr = this.toArray();
            var arr1 = arr.map(mapper);
            return SingleLinked.fromArray(arr1);
        };
        return SingleLinked;
    }(AbstractLinked));
    exports.SingleLinked = SingleLinked;
    exports["default"] = SingleLinked;
});
define("type/Collection", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("index", ["require", "exports", "add", "transducers/transduce", "transducers/XWrap", "transducers/XMap", "transducers/XFilter", "transducers/XTap", "transducers/XTake", "transducers/XDrop", "typeclass/Flattenable", "typeclass/Functor", "typeclass/Apply", "typeclass/Semigroupoid", "typeclass/Category", "typeclass/Semigroup", "typeclass/Monoid", "typeclass/Group", "typeclass/Foldable", "type/Maybe", "type/ArrayList", "type/SingleLinked", "naitve/index"], function (require, exports, add_1, transduce_1, XWrap_2, XMap_1, XFilter_1, XTap_1, XTake_1, XDrop_1, Flattenable_1, Functor_1, Apply_1, Semigroupoid_1, Category_3, Semigroup_1, Monoid_1, Group_1, Foldable_2, Maybe_1, ArrayList_1, SingleLinked_1) {
    "use strict";
    exports.__esModule = true;
    __createBinding(exports, add_1, "default", "add");
    __createBinding(exports, add_1, "inc");
    __createBinding(exports, add_1, "dec");
    __createBinding(exports, transduce_1, "transduce");
    __createBinding(exports, XWrap_2, "xwrap");
    __createBinding(exports, XMap_1, "xmap");
    __createBinding(exports, XFilter_1, "xfilter");
    __createBinding(exports, XTap_1, "xtap");
    __createBinding(exports, XTap_1, "xlog");
    __createBinding(exports, XTake_1, "xtake");
    __createBinding(exports, XDrop_1, "xdrop");
    __createBinding(exports, Flattenable_1, "flatten");
    __createBinding(exports, Functor_1, "map");
    __createBinding(exports, Apply_1, "ap");
    __createBinding(exports, Semigroupoid_1, "compose");
    __createBinding(exports, Category_3, "id");
    __createBinding(exports, Semigroup_1, "concat");
    __createBinding(exports, Monoid_1, "empty");
    __createBinding(exports, Group_1, "invert");
    __createBinding(exports, Foldable_2, "reduce");
    __createBinding(exports, Maybe_1, "Maybe");
    __createBinding(exports, Maybe_1, "maybe");
    __createBinding(exports, Maybe_1, "just");
    __createBinding(exports, Maybe_1, "nothing");
    __createBinding(exports, ArrayList_1, "ArrayList");
    __createBinding(exports, SingleLinked_1, "SingleLinked");
});
define("internal/_isNumber", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var isNumber = function (num) { return typeof num === 'number'; };
    exports["default"] = isNumber;
});
//# sourceMappingURL=screwdriver-js.amd.js.map