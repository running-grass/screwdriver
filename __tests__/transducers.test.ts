import { xmap, inc, xfilter, transduce, add, compose, xtake, xdrop } from "../src";

describe("test array", () => {
  const m1 = xmap(inc);
  const arr = [1, 2, 3, 4];

  const fEven = xfilter((x: number) => x % 2 == 0)

  test("test xmap", () => {
    expect(transduce(m1, add, 0, arr)).toEqual(14)
  })

  const xf2 = compose(fEven, m1)

  test('test xfilter', () => {
    expect(transduce(xf2, add, 0, arr)).toEqual(8)
  })

  const xf3 = compose(xtake(2), m1);
  test('test xtake', () => {
    expect(transduce(xf3, add, 0, arr)).toEqual(5)
  })

  test("test tap", () => {
    // expect(transduce(compose(xf3, xtap(console.log)), add, 0, arr)).toEqual(5)
  })

  const xf4 = compose(xdrop(2), m1);
  test('test drop', () => {
    expect(transduce(xf4, add, 0, arr)).toEqual(9)
  })
})