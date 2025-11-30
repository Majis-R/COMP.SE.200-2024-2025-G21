// unit tests for get.js
// verify the three behaviors explicitly defined in the function documentation:
// - Resolving a nested value using a string path
// - Resolving a nested value using an array path
// - Returning the provided defaultValue when the resolved value is undefined
// Additionally, test edge cases such as null values and empty paths

import get from '../get.js'

describe('get unit tests', () => {

    const object = { 'a': [{ 'b': { 'c': 3 } }] }

    test('resolves value using a string path', () => {
        expect(get(object, 'a[0].b.c')).toBe(3)
    })

    test('resolves value using an array path', () => {
        expect(get(object, ['a', '0', 'b', 'c'])).toBe(3)
    })

    test('returns defaultValue for undefined resolved values', () => {
    expect(get(object, 'a[0].b.d', 'default')).toBe('default')
    })

    test('does not use defaultValue when value is null', () => {
    const obj = { a: { b: null } }
    expect(get(obj, 'a.b', 'default')).toBeNull()
    })

    // This one fails because the current implementation of get does not handle empty paths
    test('returns the whole object when path is empty array', () => {
    expect(get(object, [], 'default')).toBe(object)
    })

})