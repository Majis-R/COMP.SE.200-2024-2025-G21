// The following tests are human-written tests for the `words` function.
// The some of the tescases were modified from test case design as the 
// functionality of the words function became more clear to the tester.
import words from "../words";

describe("words", () => {
    test("should split a string into words", () => {
        expect(words("fred, barney, & pebbles")).toEqual(["fred", "barney", "pebbles"]);
        expect(words("hello world!")).toEqual(["hello", "world"]);
    });

    test("should use the provided pattern to match words", () => {
        expect(words("fred, barney, & pebbles", /[^, ]+/g)).toEqual(["fred", "barney", "&", "pebbles"]);
        expect(words("one-two three_four", /[a-z]+/g)).toEqual(["one", "two", "three", "four"]);
    });

    test("should handle empty strings", () => {
        expect(words("")).toEqual([]);
    });

    test("should handle falsy values", () => {
        expect(() => words(null)).toThrow(TypeError);
        expect(() => words(undefined)).toThrow(TypeError);
        expect(() => words(0)).toThrow(TypeError);
        expect(() => words(false)).toThrow(TypeError);
    });

    test("should handle unicode strings", () => {
        expect(words("café naïve façade")).toEqual(["café", "naïve", "façade"]);
        expect(words("川 の 流れ")).toEqual(["川", "の", "流れ"]);
    });
    
    test("should return an empty array when no words are found", () => {
        expect(words("!!!")).toEqual([]);
        expect(words("   ")).toEqual([]);
    });

    test("should handle custom regular expressions", () => {
        expect(words("banana bread", /[^a]+/g)).toEqual(["b", "n", "n", " bre", "d"]); 
    });

    test("should handle regular expession that does not match anything", () => {
        expect(words("banana bread", /z+/g)).toEqual([]);
    });

    test("should handle regular expession that matches the entire string", () => {
        expect(words("banana bread", /[^z]+/g)).toEqual(['banana bread']);
    });

    test("should handle strings with mixed scripts", () => {
        expect(words("hello 世界")).toEqual(["hello", "世界"]);
    });

    test("should handdle words with numbers", () => {
        expect(words("123 456 7890")).toEqual(["123", "456", "7890"]);
        expect(words("room 101")).toEqual(["room", "101"]);
        expect(words("version 2.0 is out", /[^ ]+/g)).toEqual(["version", "2.0", "is", "out"]);
    });
});