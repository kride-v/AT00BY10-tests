import isObjectLike from '../src/isObjectLike.js';

describe('isObjectLike', () => {
  test('perustesti', () => {
    expect(typeof isObjectLike).toBe('function');
  });
});
