import countBy from '../src/countBy.js';

describe('countBy', () => {
  test('perustesti', () => {
    expect(typeof countBy).toBe('function');
  });
});
