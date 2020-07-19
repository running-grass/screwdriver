import { Maybe, just, nothing, maybe } from "../src";


test("test maybe new", () => {
  const m1 = maybe('3');
  const m2 = maybe(null);

  expect(m1).toEqual(just('3'))
  expect(m2).toEqual(nothing())
})


test("test maybe for map", () => {
  const m1 = maybe(3);
  const m2 = maybe(null);

  expect(m1.map(a => a + 1)).toEqual(just(4))
  expect(m2.map(a => a + 1)).toEqual(nothing())
})

test("test maybe for nest", () => {
  const m1 = maybe(3);
  const m2 = maybe(m1);


  const m3 = maybe(null);
  const m4 = maybe(m3);

  expect(m2.flatten()).toEqual(just(3))
  expect(m4.flatten()).toEqual(nothing())
})
