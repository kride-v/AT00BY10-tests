import toFinite from '../src/toFinite.js';

describe('toFinite', () => {
  test('perustesti', () => {
    expect(typeof toFinite).toBe('function');
  });
});
