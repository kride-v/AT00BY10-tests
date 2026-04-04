import keys from '../src/keys.js';

describe('keys', () => {
  test('perustesti', () => {
    expect(typeof keys).toBe('function');
  });
});
