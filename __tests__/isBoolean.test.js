import isBoolean from '../src/isBoolean.js';

describe('isBoolean', () => {
  test('perustesti', () => {
    expect(typeof isBoolean).toBe('function');
  });
});
