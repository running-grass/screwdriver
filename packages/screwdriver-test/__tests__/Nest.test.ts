import { flatten } from "screwdriver-js"

test('test array for nest', () => {
  expect([].flatten()).toEqual([])
  expect([1].flatten()).toEqual([1])
  expect([1,2].flatten()).toEqual([1,2])
  expect([1,[2]].flatten()).toEqual([1,2])
  expect([1,[2, []]].flatten()).toEqual([1,2])
  expect([1,[2, [ [3] ]]].flatten()).toEqual([1,2,3])
  expect(flatten([1,[2, [ [3] ]]])).toEqual([1,2,3])
})