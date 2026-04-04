import defaultToAny from '../src/defaultToAny.js';

describe('defaultToAny', () => {
  test('perustesti', () => {
    expect(typeof defaultToAny).toBe('function');
  });
});
