import * as sd from 'screwdriver-js';
import { List } from 'screwdriver-js/src/data-structure/List';
test("test map for List22", () => {
    let list = List.fromArray([1, 2]);
    expect(sd.map(a => a as number + 1, list)).toEqual(List.fromArray([2, 3]));
});
