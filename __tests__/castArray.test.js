import castArray from '../src/castArray.js';

describe('castArray', () => {
  test('perustesti', () => {
    expect(typeof castArray).toBe('function');
  });
});
