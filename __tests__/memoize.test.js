import memoize from '../src/memoize.js';

describe('memoize', () => {
  test('perustesti', () => {
    expect(typeof memoize).toBe('function');
  });
});
