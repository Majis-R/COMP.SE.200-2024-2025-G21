// ChatGPT-generated test suite for eq.js

import eq from '../eq';

describe('eq', () => {
  test('returns true for identical references', () => {
    const obj = { a: 1 };
    expect(eq(obj, obj)).toBe(true);
  });

  test('returns false for different objects with same content', () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    expect(eq(obj1, obj2)).toBe(false);
  });

  test('compares primitive values correctly', () => {
    expect(eq(1, 1)).toBe(true);
    expect(eq(1, 2)).toBe(false);
    expect(eq('a', 'a')).toBe(true);
    expect(eq('a', 'b')).toBe(false);
  });

  test('distinguishes between primitive and wrapper objects', () => {
    expect(eq('a', Object('a'))).toBe(false);
    expect(eq(1, Object(1))).toBe(false);
  });

  test('handles null and undefined properly', () => {
    expect(eq(null, null)).toBe(true);
    expect(eq(undefined, undefined)).toBe(true);
    expect(eq(null, undefined)).toBe(false);
  });

  test('treats NaN as equal to NaN (SameValueZero)', () => {
    expect(eq(NaN, NaN)).toBe(true);
  });

  test('compares booleans correctly', () => {
    expect(eq(true, true)).toBe(true);
    expect(eq(false, false)).toBe(true);
    expect(eq(true, false)).toBe(false);
  });

  test('compares mixed types', () => {
    expect(eq(1, '1')).toBe(true);  // allowed because eq uses `==`
    expect(eq(false, 0)).toBe(true);
    expect(eq(true, 1)).toBe(true);
    expect(eq([], '')).toBe(true);
  });
});
