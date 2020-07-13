import * as sd from 'screwdriver-js'

test("api count is 1", () => {
    expect(Object.keys(sd).length).toBe(1);
})