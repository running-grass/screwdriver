import * as sd from 'screwdriver-js'


test("test map for array", () => {
    let array = [1,2,3];
    expect(sd.map(a => a as number + 1, array)).toEqual([2, 3, 4]);
})

