// __tests__/add.test.js
import add from '../src/add.js'; // Huomaa: default export, ei {}

describe('add function', () => {
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test('adds zero', () => {
    expect(add(0, 5)).toBe(5);
  });

  test('adds decimals', () => {
    expect(add(2.5, 3.1)).toBeCloseTo(5.6);
  });

  test('adds positive and negative number', () => {
    expect(add(7, -2)).toBe(5);
  });
});
