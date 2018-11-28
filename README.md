# DevX JS utilities
Javascript functions to help with development.

## Install
```git
yarn add devx-js-utilities
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
guid | () => string (xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx)

### Validate
```javascript
import { validate } from 'devx-js-utilities'
```
function | specification
---|---
validateCreditCard | (value: string) => boolean
validateEmail | (value: string) => boolean
validatePhone | (value: string, prefixRequired?: string = false) => boolean
validateZipCode | (value: string) => boolean
validateStreet | (value: string) => boolean
validateCity | (value: string) => boolean
validateSurname | (value: string) => boolean
validateLandRegistryNumber | (value: string) => boolean
isNumeric | (n: string \ number) => boolean
isRCValid | (identificationNumber: string) => boolean
isICOValid | (ico: string) => boolean

### Humanizer
```javascript
import { humanizer } from 'devx-js-utilities'
```

function | specification
---|---
humanizeNumber | (x: number, locales?: string) => string
csNumber | (value: string) => string

### Convert
```javascript
import { convert } from 'devx-js-utilities'
```

function | specification
---|---
dataURItoBlob | (dataURI: string) => Blob

### Transform
```javascript
import { transform } from 'devx-js-utilities'
```

function | specification
---|---
toCamelCase | (word: string) => string
toSnakeCase | (word: string) => string
transformAllKeys | (data: Array \ Object) => Array \ Object


### Array
```javascript
import { array } from 'devx-js-utilities'
```

function | specification
---|---
unique | (array) => array

## Thanks to T & M & V!
