import reduce from "../reduce";

describe("reduce function", () => {
    test("should handle an empty collection with an explicit accumulator", () => {
        expect(reduce([], (acc, val) => acc + val, 0)).toBe(0);
        expect(reduce({}, (acc, val) => acc + val, 0)).toBe(0);
    });

    test("should handle an empty collection without an explicit accumulator", () => {
        expect(reduce([], (acc, val) => acc + val)).toBeUndefined();
        expect(reduce({}, (acc, val) => acc + val)).toBeUndefined();
    });

    test("should reduce a single-element collection", () => {
        expect(reduce([42], (acc, val) => acc + val)).toBe(42);
        expect(reduce({ a: 42 }, (acc, val) => acc + val)).toBe(42);
    });

    test("should reduce a collection with an explicit accumulator", () => {
        expect(reduce([1, 2, 3, 4], (acc, val) => acc + val, 0)).toBe(10);
        expect(reduce({ a: 1, b: 2, c: 3 }, (acc, val) => acc + val, 0)).toBe(6);
    });

    test("should reduce a collection without an explicit accumulator", () => {
        expect(reduce([1, 2, 3, 4], (acc, val) => acc + val)).toBe(10);
        expect(reduce({ a: 1, b: 2, c: 3 }, (acc, val) => acc + val)).toBe(6);
    });

    test("should handle null and undefined collections", () => {
        expect(reduce(null, (acc, val) => acc + val, 0)).toBe(0);
        expect(reduce(undefined, (acc, val) => acc + val, 0)).toBe(0);
    });

    test("should not mutate the original collection", () => {
        const array = [1, 2, 3];
        const object = { a: 1, b: 2 };
        const arrayCopy = [...array];
        const objectCopy = { ...object };

        reduce(array, (acc, val) => acc + val, 0);
        reduce(object, (acc, val) => acc + val, 0);

        expect(array).toEqual(arrayCopy);
        expect(object).toEqual(objectCopy);
    });

    test("should handle sparse arrays", () => {
        const sparseArray = [1, , 3, , 5];
        expect(reduce(sparseArray, (acc, val) => acc + val, 0)).toBe(9);
    });

    test("should reduce an array-like object", () => {
        const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
        expect(reduce(arrayLike, (acc, val) => acc + val, "")).toBe("abc");
    });

    test("should throw TypeError when iteratee is not a function", () => {
        expect(() => reduce([1, 2, 3], null, 0)).toThrow(TypeError);
    });

    test("should handle nested structures", () => {
        const nestedArray = [[1, 2], [3, 4], [5]];
        const nestedObject = { a: { value: 1 }, b: { value: 2 }, c: { value: 3 } };

        expect(reduce(nestedArray, (acc, val) => acc.concat(val), [])).toEqual([1, 2, 3, 4, 5]);
        expect(reduce(nestedObject, (acc, val) => acc + val.value, 0)).toBe(6);
    });
});