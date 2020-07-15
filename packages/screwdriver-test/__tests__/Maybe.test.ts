import { Maybe, just, nothing, Nothing } from "screwdriver-js/src/fantasy/Nest"


test("test maybe new", () => {
  const m1 = Maybe.of('3');
  const m2 = Maybe.of(null);

  expect(m1).toEqual(just('3'))
  expect(m2).toEqual(nothing())
})


test("test maybe for map", () => {
  const m1 = Maybe.of(3);
  const m2 = Maybe.of(null);

  expect(m1.map(a => a + 1)).toEqual(just(4))
  expect(m2.map(a => a + 1)).toEqual(nothing())
})

test("test maybe for nest", () => {
  const m1 = Maybe.of(3);
  const m2 = Maybe.of(m1);


  const m3 = Maybe.of(null);
  const m4 = Maybe.of(m3);

  expect(m2.flatten()).toEqual(just(3))
  expect(m4.flatten()).toEqual(nothing())
})