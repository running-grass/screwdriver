import { map, Mapper, maybe } from "../src";

const id: Mapper<any, any> = a => a;

describe.each([
  [1],
  [null],
  [undefined],
  [100],
  [2000],
  [30000],
  [-200],
  [-1],
  [0],
])("test Functor laws by Maybe number (Maybe %p)", (maybeValue) => {
  const mb = maybe(maybeValue);

  test("for identity", () => {
    expect(mb.map(id)).toEqual(mb)
  })

  describe.each([
    [a => a + 2],
    [a => a - 2],
    [a => a * 2],
    [a => a / 2],
  ])("for compositions", (f) => {
    test.each([
      [a => a + 20],
      [a => a - 20],
      [a => a * 20],
      [a => a / 20],
    ])("for composition (%#)", (g) => {
      expect(mb.map(x => f(g(x)))).toEqual(mb.map(g).map(f))
    })
  })
})


test("test map for array", () => {
  let array = [1, 2, 3];
  expect(map(a => a as number + 1, array)).toEqual([2, 3, 4]);
})


test("test array for functor", () => {
  let array = [1, 2, 3];
  let mapper = a => a + 1;
  expect(map(mapper, array)).toEqual([2, 3, 4]);
  expect(array.map(mapper)).toEqual([2, 3, 4]);
  expect(array['fantasy-land/map'](mapper)).toEqual([2, 3, 4]);
})


