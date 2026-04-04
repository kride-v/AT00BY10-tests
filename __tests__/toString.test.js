import toString from '../src/toString.js';

describe('toString', () => {
  test('perustesti', () => {
    expect(typeof toString).toBe('function');
  });
});
