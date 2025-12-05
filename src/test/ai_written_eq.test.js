// AI written test file

import eq from '../eq';

describe('eq', () => {
    test('should return true for the same object reference', () => {
        const object = { a: 1 };
        expect(eq(object, object)).toBe(true);
    });

    test('should return false for different object references with the same structure', () => {
        const object1 = { a: 1 };
        const object2 = { a: 1 };
        expect(eq(object1, object2)).toBe(false);
    });

    test('should return true for identical primitive values', () => {
        expect(eq('a', 'a')).toBe(true);
        expect(eq(1, 1)).toBe(true);
        expect(eq(true, true)).toBe(true);
    });

    test('should return false for a primitive and its object wrapper', () => {
        expect(eq('a', Object('a'))).toBe(false);
        expect(eq(1, Object(1))).toBe(false);
        expect(eq(true, Object(true))).toBe(false);
    });

    test('should return true for NaN compared to NaN', () => {
        expect(eq(NaN, NaN)).toBe(true);
    });

    test('should return false for different types', () => {
        expect(eq(1, '1')).toBe(false);
        expect(eq(true, 1)).toBe(false);
        expect(eq(null, undefined)).toBe(false);
    });

    test('should return true for undefined compared to undefined', () => {
        expect(eq(undefined, undefined)).toBe(true);
    });

    test('should return true for null compared to null', () => {
        expect(eq(null, null)).toBe(true);
    });
});