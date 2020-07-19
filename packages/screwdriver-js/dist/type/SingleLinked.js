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
//# sourceMappingURL=SingleLinked.js.map