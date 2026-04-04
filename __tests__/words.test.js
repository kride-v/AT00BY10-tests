import words from '../src/words.js';

describe('words', () => {
  test('perustesti', () => {
    expect(typeof words).toBe('function');
  });
});
