import get from '../src/get.js';

describe('get', () => {
  test('perustesti', () => {
    expect(typeof get).toBe('function');
  });
});
