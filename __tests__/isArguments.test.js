import isArguments from '../src/isArguments.js';

describe('isArguments', () => {
  test('perustesti', () => {
    expect(typeof isArguments).toBe('function');
  });
});
