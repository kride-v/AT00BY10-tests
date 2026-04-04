import isTypedArray from '../src/isTypedArray.js';

describe('isTypedArray', () => {
  test('perustesti', () => {
    expect(typeof isTypedArray).toBe('function');
  });
});
