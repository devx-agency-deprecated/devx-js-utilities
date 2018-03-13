# DevX JS utilities
Javascript functions to help with development.

## Install
```git
yarn add https://github.com/devx-agency/devx-js-utilities
```

## Usage
### Cookie
```javascript
import { cookie } from 'devx-js-utilities'
```
function | specification
---|---
createCookie | (name: string, value: string, minutes: number) => void
readCookie | (name: string) => null / string

### Random
```javascript
import { random } from 'devx-js-utilities'
```
function | specification
---|---
randomIntFromInterval | (min: number, max: number) => number
generateUniqueKey | () => string
generateUniqueNumberFromTwoNumbers | (n1: number, n2: number) => number

### Validate
```javascript
import { validate } from 'devx-js-utilities'
```
function | specification
---|---
validateCreditCard | (value: string) => boolean 
validateEmail | (value: string) => boolean
validatePhone | (value: string) => boolean
validateZipCode | (value: string) => boolean
validateStreet | (value: string) => boolean
validateCity | (value: string) => boolean
validateSurname | (value: string) => boolean
validateLandRegistryNumber | (value: string) => boolean
isNumeric | (n: string \ number) => boolean

## Thanks to T & M & V!