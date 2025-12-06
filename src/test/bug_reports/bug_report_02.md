# Bug Report 2: get empty path handling

**Title:**  
get returns default value for empty path instead of the whole object

**Component:**  
get

**Severity:**  
Minor

---

## Description
When get is called with an empty array as the path ([]), the function 
returns the provided default value instead of the original object. This 
makes it impossible to use an empty path to retrieve the entire object, 
which is the behavior documented and tested.

---

## Steps to Reproduce
1.  Import get from the utility library.
2.  Run the following code:
const object = { a: [{ b: { c: 3 } }] }

const result = get(object, [], 'default')
3.  
Check the result or run npm test src/test/get.test.js

---

## Expected Result
Calling get(object, [], 'default') should return the entire object:

{ a: [{ b: { c: 3 } }] }

## Actual Result
The function returns the default value:

'default'

---

## Impact
This breaks the expected behavior that an empty path returns the full object. 
Code that relies on treating “no path” as “return the whole object” cannot use 
get safely in this way and may get unexpected default values instead.

---

## Environment
- Branch / commit: main / commit: 3f8c749
- Node version: v20.17.0
- Operating system Windows 11
- Test command: npm test src/test/get.test.js
