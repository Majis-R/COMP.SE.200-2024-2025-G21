# Software Testing Project – Group 21  
Tampere University – COMP.SE.200  
Unit Testing Project Repository

---

## Purpose of this repository

This repository is part of the Software Testing course at Tampere University.  
The goal of the assignment is to design, implement, and execute unit tests for a provided JavaScript utility library, integrate automated testing with GitHub Actions, and generate code coverage reports via Coveralls.

Our group is **Group 21**.

---

## Project description

The repository contains:

- A pre-provided utility library (source code under test)
- Our own unit tests targeting 10 selected functions:
  - `countBy`
  - `castArray`
  - `compact`
  - `filter`
  - `get`
  - `isLength`
  - `reduce`
  - `slice`
  - `words`
  - `eq`

The tests check correctness and expected behaviour based on specification and documentation.  
Defects discovered by the tests are reported as GitHub Issues and with Bug Reports (src/test/bug_reports) structured bug report template.

---

## Continuous Integration (CI)

The repository uses **GitHub Actions** for continuous integration.

The CI pipeline performs the following steps on each push:

1. Installs dependencies  
2. Runs the full unit test suite  
3. Collects coverage information using Jest  
4. Uploads the coverage results to Coveralls  
   (using `continue-on-error` to allow coverage upload even when some tests fail due to real defects in the library)

---

## Coveralls integration

A dynamic coverage badge:
[![Coverage Status](https://coveralls.io/repos/github/Majis-R/COMP.SE.200-2024-2025-G21/badge.svg?branch=main)](https://coveralls.io/github/Majis-R/COMP.SE.200-2024-2025-G21?branch=main)

Coverage is based on 10 selected functions from the provided utility library.
The .internal directory and other non-tested helpers were excluded from the coverage calculation using Jest’s collectCoverageFrom and coveragePathIgnorePatterns configuration.

This ensures that the coverage percentage reflects only the functions that were actually tested (countBy, castArray, compact, filter, get, eq, isLength, reduce, slice, and words) rather than the entire library.

Coverage reports are available publicly at:

**Coveralls URL:**  
[https://coveralls.io/github/<username>/<repo>](https://coveralls.io/github/Majis-R/COMP.SE.200-2024-2025-G21)


---

## Important notes

The `src` directory contains a LICENSE file belonging to the original utility library.  
**This license file must NOT be removed or modified.**  
Removing or altering the file would violate the terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.

