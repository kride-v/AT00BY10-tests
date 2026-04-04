import isSymbol from '../src/isSymbol.js';

describe('isSymbol', () => {
  test('perustesti', () => {
    expect(typeof isSymbol).toBe('function');
  });
});
