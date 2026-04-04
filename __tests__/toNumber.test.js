import toNumber from '../src/toNumber.js';

describe('toNumber', () => {
  test('perustesti', () => {
    expect(typeof toNumber).toBe('function');
  });
});
