import isBuffer from '../src/isBuffer.js';

describe('isBuffer', () => {
  test('perustesti', () => {
    expect(typeof isBuffer).toBe('function');
  });
});
