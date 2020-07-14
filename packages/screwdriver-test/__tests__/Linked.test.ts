import { add, SingleLinked } from 'screwdriver-js';

test("test linked", () => {
    const l1 = SingleLinked.fromArray([2,1,4]);
    expect(l1.size()).toBe(3);
    expect(l1.getHead().getData()).toBe(2);

    const l2 = l1.add(10);
    expect(l2.size()).toBe(4)
    expect(l1.size()).toBe(3);
    expect(l2.toArray()).toEqual([2,1,4,10])

    expect(l2.getHead()).not.toBe(l1.getHead())
    expect(l2.getHead().getData()).toEqual(l1.getHead().getData())


    const l3 = l2.map(a => a+1) as SingleLinked<number>;
    expect(l3.toArray()).toEqual([3,2,5,11]);
    expect(l3.size()).toBe(4);

});