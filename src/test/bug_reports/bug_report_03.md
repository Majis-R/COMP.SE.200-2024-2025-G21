# Bug Report 3: castArray with multiple array arguments

**Title:**  
castArray does not handle multiple array arguments and returns an empty array

**Component:**  
castArray

**Severity:**  
Minor

---

## Description
When castArray is called with multiple array arguments, it returns an empty 
array instead of an array containing those arguments. For single values and 
single arrays, the behavior is correct; the bug only appears with multiple 
arguments.

---

## Steps to Reproduce
1.  Import castArray form the utility library.
2.  Run the following:

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const result = castArray(arr1, arr2)

3.  
Check the result or run npm test src/test/castArray.test.js

---

## Expected Result
castArray should return an array containing both input arrays:
[ arr1, arr2 ]

and result[0] and result[1] should be the same references as arr1 and arr2.

## Actual Result
The function returns an empty array:
 []

he expectations expect(arr[0]).toBe(arr1) and expect(arr[1]).toBe(arr2) cannot 
be satisfied because result has no elements.
---

## Impact
If castArray is used with multiple values (especially arrays) to normalize inputs 
into a single array, the result will be empty and all provided values will be lost. 
This can lead to missing data in any functionality that relies on combining multiple 
inputs into a list.

---

## Environment
- Branch / commit: main / commit: 3f8c749
- Node version: v20.17.0
- Operating system : Windows 11
- Test command: npm test src/test/castArray.test.js
