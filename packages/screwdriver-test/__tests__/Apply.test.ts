import { maybe, Mapper } from "screwdriver-js";


describe("test Apply laws by Maybe", () => {
  const nums = [
    null,
    undefined,
    0,
    1,
    -1,
    995,
    211,
    -18,
  ]
  describe.each(nums)("for number1 (%p)", (num1) => {
    const mb1 = maybe(num1);
    const fs = [
      a => a + 5,
      a => a - 8,
      a => a * -17,
      a => a / -25,
    ]

    describe.each(fs)("for f (%#)", (f1: Mapper<number, number>) => {
      const mb2 = maybe(f1);
      test.each(fs)("for g (%#)", (g2: Mapper<number, number>) => {
        const mb3 = maybe(g2);
        expect(mb1.ap(mb2.ap(mb3.map(f => g => x => f(g(x)))))).toEqual(mb1.ap(mb2).ap(mb3));
      })
    })
  })
})