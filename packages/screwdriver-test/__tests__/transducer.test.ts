import { xmap, inc, transduce, add, xfilter, compose } from "screwdriver-js"
import { Transducer } from "screwdriver-js/src/transducer/Transducer";

describe("test array", () => {
  const m1 = xmap(inc);
  const arr = [1, 2, 3, 4];

  const fEven = xfilter((x: number) => x % 2 == 0)

  test("test xmap", () => {
    expect(transduce(m1, add, 0, arr)).toEqual(14)
  })

  const xf2 = compose(fEven, m1) as Transducer<any, any, any>;

  test('test xfilter', () => {
    expect(transduce(xf2, add, 0, arr)).toEqual(8)
  })
})