import isArrayLike from '../src/isArrayLike.js';

describe('isArrayLike', () => {
  test('perustesti', () => {
    expect(typeof isArrayLike).toBe('function');
  });
});
