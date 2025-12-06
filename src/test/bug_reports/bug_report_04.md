# Bug Report 4: compact drops the first truthy element

**Title:**  
compact drops the first truthy value from the result

**Component:**  
compact

**Severity:**  
Major

---

## Description
The compact function removes falsey values from an array, but due 
to an incorrect starting index (write index initialized to -1), it 
also drops the first truthy value. As a result, all outputs are 
missing their first valid element when the input contains any truthy 
values.

---

## Steps to Reproduce
1.  Import compact from the utility library
2.  Run for example:

compact([0, 1, false, 2, '', 3])
compact([1, 'a', true, {}, [], 42])
compact([1, 2, 3])

3.  
Or run npm test src/test/compact.test.js and check for failing test outputs

---

## Expected Result
compact([0, 1, false, 2, '', 3])   // [1, 2, 3]
compact([null, 'hello', undefined, 42, NaN, 'world']) // ['hello', 42, 'world']
compact([1, 'a', true, {}, [], 42])  // [1, 'a', true, {}, [], 42]
compact([1, 2, 3])       // [1, 2, 3]

## Actual Result
The first truthy element is lost in each case
The 1 is missing from [0, 1, false, 2, '', 3]
The first 1 is missing from [1, 'a', true, {}, [], 42]
The first element is missing from [1, 2, 3]

---

## Impact
compact is typically used to clean up data by removing falsey values. 
Dropping the first truthy value corrupts the data and can lead to 
data loss in any logic that relies on compact to filter out only falsey entries.

---

## Environment
- Branch / commit: main / commit: 3f8c749
- Node version: v20.17.0
- Operating system : Windows 11
- Test command: npm test src/test/compact.test.js