import 'screwdriver-js';
import map from "screwdriver-js/src/map";

test("test array for functor", () => {
  let array = [1,2,3];
  let mapper = a => a + 1;
  expect(map(mapper, array)).toEqual([2, 3, 4]);
  expect(array.map(mapper)).toEqual([2, 3, 4]);
  expect(array['fantasy-land/map'](mapper)).toEqual([2, 3, 4]);
})

test('test array for nest', () => {
  expect([].flatten()).toEqual([])
  expect([1].flatten()).toEqual([1])
  expect([1,2].flatten()).toEqual([1,2])
  expect([1,[2]].flatten()).toEqual([1,2])
  expect([1,[2, []]].flatten()).toEqual([1,2])
  expect([1,[2, [ [3] ]]].flatten()).toEqual([1,2,3])
})