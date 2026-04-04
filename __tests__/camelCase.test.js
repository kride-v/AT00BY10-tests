import camelCase from '../src/camelCase.js';

describe('camelCase', () => {
  test('perustesti', () => {
    expect(typeof camelCase).toBe('function');
  });
});
