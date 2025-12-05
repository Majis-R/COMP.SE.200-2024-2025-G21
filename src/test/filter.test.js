import filter from "../filter";

describe("filter", () => {
    test("filters an array based on a predicate function", () => {
        const users = [
            { user: "barney", active: true },
            { user: "fred", active: false },
            { user: "pebbles", active: true }
        ];

        const result = filter(users, ({ active }) => active);
        expect(result).toEqual([
            { user: "barney", active: true },
            { user: "pebbles", active: true }
        ]);
    });

    test("returns an empty array when no elements match the predicate", () => {
        const numbers = [1, 2, 3, 4, 5];
        const result = filter(numbers, (n) => n > 10);
        expect(result).toEqual([]);
    });

    test("returns an empty array when input array is null or undefined", () => {
        expect(filter(null, () => true)).toEqual([]);
        expect(filter(undefined, () => true)).toEqual([]);
    });

    test("handles an empty array input", () => {
        const result = filter([], () => true);
        expect(result).toEqual([]);
    });

    test("predicate function receives correct arguments", () => {
        const array = [10, 20, 30];
        const mockPredicate = jest.fn((value) => value > 15);

        filter(array, mockPredicate);

        expect(mockPredicate).toHaveBeenCalledTimes(3);
        expect(mockPredicate).toHaveBeenNthCalledWith(1, 10, 0, array);
        expect(mockPredicate).toHaveBeenNthCalledWith(2, 20, 1, array);
        expect(mockPredicate).toHaveBeenNthCalledWith(3, 30, 2, array);
    });
});