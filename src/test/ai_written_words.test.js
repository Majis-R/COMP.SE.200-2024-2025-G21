import words from '../words'

describe('words', () => {
    test('splits a string into words using default behavior', () => {
        expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles'])
    })

    test('splits a string into words using a custom pattern', () => {
        expect(words('fred, barney, & pebbles', /[^, ]+/g)).toEqual(['fred', 'barney', '&', 'pebbles'])
    })

    test('returns an empty array for an empty string', () => {
        expect(words('')).toEqual([])
    })

    test('handles strings with only special characters', () => {
        expect(words('!@#$%^&*()')).toEqual([])
    })

    test('handles strings with numbers and letters', () => {
        expect(words('abc123 def456')).toEqual(['abc123', 'def456'])
    })

    test('handles strings with unicode characters', () => {
        expect(words('你好，世界')).toEqual(['你好', '世界'])
    })

    test('returns an empty array for a string with no matches for the custom pattern', () => {
        expect(words('12345', /[a-zA-Z]+/g)).toEqual([])
    })

    test('handles strings with mixed unicode and ASCII characters', () => {
        expect(words('hello 世界')).toEqual(['hello', '世界'])
    })
})