import isObject from '../src/isObject.js';

describe('isObject', () => {
  test('perustesti', () => {
    expect(typeof isObject).toBe('function');
  });
});
