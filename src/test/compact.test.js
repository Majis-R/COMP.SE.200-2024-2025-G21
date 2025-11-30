// unit tests for compact.js
// Validate that compact correctly removes falsey values from arrays
// compact is useful for cleaning up data arrays by filtering out unwanted falsey entries

import compact from '../compact.js'

describe('compact', () => {

    // this fails because the implementation incorrectly starts
    // the write index at -1, causing the first truthy element to be dropped.
    test('removes falsey values from an array', () => {
        expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3])
        expect(compact([null, 'hello', undefined, 42, NaN, 'world'])).toEqual(['hello', 42, 'world'])
    })

    test('returns an empty array when given only falsey values ', () => {
        expect(compact([0, false, '', null, undefined, NaN])).toEqual([])
    })

    // this test also fails due to the same indexing bug:
    // the first truthy value is written to index -1 and effectively lost.
    test('keeps all truthy values unchanged', () => {
    expect(compact([1, 'a', true, {}, [], 42])).toEqual([1, 'a', true, {}, [], 42])
    })

    test('handles an empty array input', () => {
        expect(compact([])).toEqual([])
    })

    // this one fails because the first truthy element (1) is lost
    // due to the resIndex = -1 starting point
    test('handles arrays with no falsey values', () => {
        expect(compact([1, 2, 3])).toEqual([1, 2, 3])
    })

})

