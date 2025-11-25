// unit test for isLength
// Validate that invalid length values are rejected in product form

import isLength from '../isLength.js'

const MAX_SAFE_INTEGER = 9007199254740991

describe('isLength', () => {
    test('should return `true` for valid lengths', () => {
        expect(isLength(0)).toBe(true)
        expect(isLength(1)).toBe(true)
        expect(isLength(1000)).toBe(true)
        expect(isLength(MAX_SAFE_INTEGER)).toBe(true)
    })

    test('should return false for non-number values', () => {
        expect(isLength('3')).toBe(false)
        expect(isLength(null)).toBe(false)
        expect(isLength(undefined)).toBe(false)
        expect(isLength([])).toBe(false)
        expect(isLength(true)).toBe(false)
        expect(isLength({})).toBe(false)
    })

    test('should return false for non-integer numbers (decimals)', () => {
        expect(isLength(3.14)).toBe(false)
        expect(isLength(-2.5)).toBe(false)
        expect(isLength(0.0001)).toBe(false)
    })

    test('should return false for negative numbers', () => {
        expect(isLength(-1)).toBe(false)
        expect(isLength(-10)).toBe(false)
        expect(isLength(-9007199254740991)).toBe(false)
    })

    test('should return false for numbers greater than `MAX_SAFE_INTEGER`', () => {
        expect(isLength(MAX_SAFE_INTEGER + 1)).toBe(false)
        expect(isLength(Infinity)).toBe(false)
    })

})








