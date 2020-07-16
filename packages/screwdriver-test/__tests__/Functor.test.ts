import { map } from "screwdriver-js";

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


