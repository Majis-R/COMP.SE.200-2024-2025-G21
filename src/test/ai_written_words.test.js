// ChatGPT-generated test suite for words.js

import words from '../words.js';

// Mock the unicodeWords function imported inside words.js
jest.mock('../.internal/unicodeWords.js', () => {
  return jest.fn((str) => {
    // Example simplistic unicode word splitting for tests
    return str.split(/\s+/).filter(Boolean);
  });
});

import unicodeWords from '../.internal/unicodeWords.js';

describe('words()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('splits simple ASCII words', () => {
    expect(words('fred barney pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  test('uses ASCII matcher when no unicode indicators are present', () => {
    words('hello world');
    expect(unicodeWords).not.toHaveBeenCalled();
  });

  test('returns empty array for empty string', () => {
    expect(words('')).toEqual([]);
  });

  test('handles punctuation with ASCII fallback', () => {
    expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles']);
  });

  test('uses unicodeWords when unicode patterns are detected', () => {
    const input = 'café déjà';
    const result = words(input);

    // unicodeWords should be invoked
    expect(unicodeWords).toHaveBeenCalledWith(input);
    expect(result).toEqual(['café', 'déjà']);
  });

  test('supports custom pattern', () => {
    const input = 'fred, barney, & pebbles';
    const pattern = /[^, ]+/g;
    expect(words(input, pattern)).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  test('returns empty array when pattern yields no matches', () => {
    expect(words('abcdef', /[0-9]+/g)).toEqual([]);
  });

  test('handles alphanumeric combinations with ASCII word regex', () => {
    expect(words('a1 b2c3')).toEqual(['a1', 'b2c3']);
  });
});