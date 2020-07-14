import * as sd from 'screwdriver-js';
import ArrayList from 'screwdriver-js/src/data-structure/ArrayList';

test("test map for List22", () => {
    let list = ArrayList.fromArray([1, 2]);
    expect(sd.map(a => a as number + 1, list)).toEqual(ArrayList.fromArray([2, 3]));
});
