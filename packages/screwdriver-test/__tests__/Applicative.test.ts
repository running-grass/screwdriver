import { maybe, Maybe, Mapper } from "screwdriver-js";


describe("test Applicative laws by Maybe", () => {
  const nums = [
    // 算术运算不支持null的正确期待
    null,
    undefined,
    0,
    1,
    -1,
    995,
    211,
    -18,
  ]
  const fs: Array<Mapper<number, number>> = [
    a => a && a + 5,
    a => a && a - 8,
    a => a && a * -17,
    a => a &&a / -25,
  ]


  describe.each(nums)("for (Maybe %p)", (num) => {
    test("for identity", () => {
      const mb = maybe(num);
      expect(Maybe.of(null)).toEqual(maybe(null))
      expect(mb.ap(Maybe.of(x => x))).toEqual(mb);
    });

    test.each(fs)("for homomorphism (%#)", f => {
      expect(Maybe.of(num).ap(Maybe.of(f))).toEqual(Maybe.of(f(num)))
    })
    test.each(fs)("for interchange (%#)", f => {
      const u = maybe(f);
      expect(Maybe.of(num).ap(u)).toEqual(u.ap(Maybe.of(f => f(num))))
    })
  })
})