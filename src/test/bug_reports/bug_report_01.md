# Bug Report 1: countBy off by one

**Title:**  
countBy returns counts that are off by one for each key

**Component:**  
countBy

**Severity:**  
Major

---

## Description
The countBy function initializes the count for the first occurrence of each key to 0 instead of 1. As a result, returned counts are off by one and undercount the actual number of occurrences both for arrays and object collections.

---

## Steps to Reproduce
1.  Import counBy from the utility library
2.  Run the the followig code()

const users = [
  { user: 'barney', active: true },
  { user: 'betty',  active: true },
  { user: 'fred',   active: false },
]

const result = countBy(users, value => value.active)

3. Inspect result, or run npm test src/test/countBy.test.js
---

## Expected Result
countBy should return correct occurrence counts, for example

{ true: 2, false: 1 } for the users array.

Grouping by length: { 0: 1, 3: 2, 5: 1 }
Counting values in object { a: 1, b: 2, c: 1 } -> { 1: 2, 2: 1 }
Counting [1, 1, 2] -> { 1: 2, 2: 1 }


## Actual Result
countBy undercounts by one for each key, for example

{ true: 1, false: 0 }

{ 0: 1, 3: 2, 5: 1 } becomes { 0: 0, 3: 1, 5: 0 }
{ 1: 2, 2: 1 } becomes { 1: 1, 2: 0 }

---

## Impact
Any feature that relies on countBy for aggregation (like counting active vs inactive users, grouping values by category) will produce incorrect statistics. This can lead to misleading analytics.

---

## Environment
- Branch / commit: main / commit: 3f8c749
- Node version: v20.17.0
- Operating system : Windows 11
- Test command: npm test src/test/countBy.test.js
