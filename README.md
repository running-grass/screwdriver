# Screwdriver
一个灵巧的js类库

文档请查看
https://screwdriver-js.github.io/screwdriver/

一共分为三个子项目
- Screwdriver-js 类库的源码
- screwdriver-test 编写的测试用例，主要在node下进行测试
- screwdriver-demo 写的demo，方便在浏览器上面进行debug


## Usage

```
yarn add screwdriver-js
```

## Fantasy-land
实现了一部分Fantasy-land中的类型类
- Maybe
  - Functor
  - Apply
  - Applicative
  - Foldable
- Array
  - Functor
  - Foldable

## 主要函数
- map
- compose
- reduce

## Transducers
遵循了`transducers-js`中的[The Transducer Protocol](https://github.com/cognitect-labs/transducers-js#the-transducer-protocol)
目前支持的操作
- xtap
- xmap
- xfilter
- xtake
- xdrop


