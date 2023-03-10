# time-utils

_Time-related utilities_

![GitHub CI](https://github.com/giancosta86/time-utils/actions/workflows/publish-to-npm.yml/badge.svg)
[![npm version](https://badge.fury.io/js/@giancosta86%2Ftime-utils.svg)](https://badge.fury.io/js/@giancosta86%2Ftime-utils)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)

## Introduction

**time-utils** is a TypeScript library providing time-related types and functions.

## Installation

```bash
npm install @giancosta86/time-utils
```

or

```bash
yarn add @giancosta86/time-utils
```

The public API entirely resides in the root package index, so one shouldn't reference specific modules.

## Usage

Please, refer to:

- the `IsoDate` class

- the `Seconds` and `Milliseconds` type aliases

- `delay()` and `epsilonDelay()` (especially for tests)

- the `Timestamp` alias - and `getNowTimestamp()`
