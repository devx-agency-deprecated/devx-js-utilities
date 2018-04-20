// @flow
/**
 * @description Transform string without leading underscore using transform function
 */
const transformWithoutLeadingUnderscore = (value: string, transform: any) => (
  (value.charAt(0) === '_') ? `_${transform(value.substr(1))}` : transform(value)
)

const capitalize = (string: string): string => `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`

const camelCase = (string: string): string =>
  `${string}`.split('_').reduce((result, word, index) => {
    word = word.toLowerCase()
    return result + (index ? capitalize(word) : word)
  }, '')

const snakeCase = (string: string): string => (
  `${string}`.split(/(?=[A-Z])/).reduce((result, word, index) => (
    result + (index ? '_' : '') + word.toLowerCase()
  ), '')
)

export const toCamelCase = (value: string): string => (
  transformWithoutLeadingUnderscore(value, camelCase)
)

export const toSnakeCase = (value: string): string => (
  transformWithoutLeadingUnderscore(value, snakeCase)
)

export const transformAllKeys = (data: any, transform: any): any => {
  const newData = Array.isArray(data) ? [] : {}

  Object.keys(data).forEach((key) => {
    const value = data[key]
    const newKey = transform(key)

    if (value instanceof Object) {
      newData[newKey] = transformAllKeys(value, transform)
    } else {
      newData[newKey] = value
    }
  })

  return newData
}

export default {
  toCamelCase,
  toSnakeCase,
  transformAllKeys,
}
