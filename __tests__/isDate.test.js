import isDate from '../src/isDate.js';

describe('isDate', () => {
  test('perustesti', () => {
    expect(typeof isDate).toBe('function');
  });
});
