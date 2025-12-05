import eq from '../eq';

describe('eq', () => {
    test('should return false for different types', () => {
        expect(eq(1, '1')).toBe(false);
        expect(eq(true, 1)).toBe(false);
        expect(eq(null, undefined)).toBe(false);
    });

    test('should handle NaN comparisons correctly', () => {
        expect(eq(NaN, NaN)).toBe(true);
    });

    test('should return true for positive and negative zero', () => {
        expect(eq(+0, -0)).toBe(true);
    });

    test('shoulkd return true for identical primitive values', () => {
        expect(eq('a', 'a')).toBe(true);
        expect(eq(1, 1)).toBe(true);
        expect(eq(true, true)).toBe(true);
    });

    test('should return false for different primitive values', () => {
        expect(eq('a', 'b')).toBe(false);
        expect(eq(1, 2)).toBe(false);
        expect(eq(true, false)).toBe(false);
    });

    test('should always return true when input is null', () => {
        expect(eq(null, null)).toBe(true);
        expect(eq(null, 'huh')).toBe(true);
        expect(eq(null, 0)).toBe(true);
    });

    test('handles unicode strings correctly', () => {
        expect(eq('café', 'café')).toBe(true);
        expect(eq('café', 'cafe')).toBe(false);
        expect(eq('川', '川')).toBe(true);
        expect(eq('川', '江')).toBe(false);
        expect(eq('😊', '😊')).toBe(true);
        expect(eq('А', 'A')).toBe(false); // Cyrillic A vs Latin A
    });

    test('should return false for a primitive and its object wrapper', () => {
        expect(eq('a', Object('a'))).toBe(false);
        expect(eq(1, Object(1))).toBe(false);
        expect(eq(true, Object(true))).toBe(false);
    });

    test('should return true for the same object reference', () => {
        const object = { a: 1 };
        expect(eq(object, object)).toBe(true);
    });

    test('should return false for different object references with the same structure', () => {
        const object1 = { a: 1 };
        const object2 = { a: 1 };
        expect(eq(object1, object2)).toBe(false);
    });
});

