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

    // It is not clear what is supposed to happen when the function is provided with 
    // multiple arguments but gut feeing says that they should be cast into a single array
    test('casts multiple inputs to a single array correctly', () => {
        expect(castArray(null, undefined,)).toEqual([null, undefined])
    })

    // This one fails because the function does not handle multiple input arays with the 
    // same logic that it does singular values
    test('casts multiple input arrays into a single array', () => {
        const arr1 = [1, 2, 3]
        const arr2 = [4, 5, 6]
        const arr = castArray(arr1, arr2)
        expect(arr).toEqual([arr1, arr2])
        expect(arr[0]).toBe(arr1)
        expect(arr[1]).toBe(arr2)
    })
}) 






