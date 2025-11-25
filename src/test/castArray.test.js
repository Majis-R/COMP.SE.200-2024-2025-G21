// unit test for castArray
// Validate that castArray correctly casts values to arrays or returns the same array if already an array
// castArray ensures consistent array formatting for fields such as categories, tags, and multi-value inputs

import castArray from '../castArray.js'

describe('castArray', () => {

    test('casts a primitive value to an array', () => {
        expect(castArray(1)).toEqual([1])
        expect(castArray('abc')).toEqual(['abc'])
        expect(castArray(true)).toEqual([true])
    })

    test('casts an object to an array containing that object', () => {
        const obj = { a: 1 }
        expect(castArray(obj)).toEqual([obj])
    })

    test('casts null and undefined to arrays in a correct way', () => {
        expect(castArray(null)).toEqual([null])
        expect(castArray(undefined)).toEqual([undefined])
    })

    test('returns the same array if an array is passed', () => {
        const arr = [1, 2, 3]
        expect(castArray(arr)).toBe(arr)
    })

    test('returns the same array instance when input is already an array', () => {
        const arr = [1, 2, 3]
        const result = castArray(arr)

        // identity check — must be the same reference
        expect(result).toBe(arr)
    })

}) 






