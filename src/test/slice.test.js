import slice from "../slice";

describe("slice", () => {
    test("slices an array from start to end", () => {
        expect(slice([1, 2, 3, 4, 5], 1, 4)).toEqual([2, 3, 4]);
    });

    test("handles negative start index", () => {
        expect(slice([1, 2, 3, 4, 5], -3, 5)).toEqual([3, 4, 5]);
    });

    test("handles negative end index", () => {
        expect(slice([1, 2, 3, 4, 5], 1, -1)).toEqual([2, 3, 4]);
    });

    test("returns empty array when start is greater than end", () => {
        expect(slice([1, 2, 3, 4, 5], 4, 2)).toEqual([]);
    });

    test("returns empty array for null or undefined input", () => {
        expect(slice(null, 0, 2)).toEqual([]);
        expect(slice(undefined, 0, 2)).toEqual([]);
    });

    test("handles empty array input", () => {
        expect(slice([], 0, 2)).toEqual([]);
    });

    test("defaults to start=0 and end=array.length", () => {
        expect(slice([1, 2, 3])).toEqual([1, 2, 3]);
        expect(slice([1, 2, 3], 1)).toEqual([2, 3]);
        expect(slice([1, 2, 3], undefined, 2)).toEqual([1, 2]);
    });

    test("returns a dense array", () => {
        const sparseArray = [];
        sparseArray[0] = 1;
        sparseArray[2] = 3;
        expect(slice(sparseArray, 0, 3)).toEqual([1, undefined, 3]);
    });
});