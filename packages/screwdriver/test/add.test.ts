import add from '../src/add';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, '3')).toBe(3);
  expect(add(3, 4)).toBe(7);
});