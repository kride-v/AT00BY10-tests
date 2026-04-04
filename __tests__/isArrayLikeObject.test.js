import isArrayLikeObject from '../src/isArrayLikeObject.js';

describe('isArrayLikeObject', () => {
  test('perustesti', () => {
    expect(typeof isArrayLikeObject).toBe('function');
  });
});
