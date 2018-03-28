// @flow
/**
 * @description Returns random int number in given interval
 */
export const randomIntFromInterval = (min: number, max: number): number =>
    Math.floor((Math.random() * ((max - min) + 1)) + min)

/**
 * @returns {string}
 */
export const generateUniqueKey = (length: number = 36, indexStart: number = 2, indexEnd: number = 15): string =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(length)
    .substring(indexStart, indexEnd)

/**
 * @param n1
 * @param n2
 * @returns {number}
 */
export const generateUniqueNumberFromTwoNumbers = (n1: number, n2: number): number =>
    (0.5 * (n1 + n2) * (n1 + n2 + 1)) + n2

/**
 * @description generate GUID identifier
 * @return {string}
 */
export const guid = (): string =>
  `${generateUniqueKey(16, 1, 5)}${generateUniqueKey(16, 1, 5)}-${generateUniqueKey(16, 1, 5)}-` +
  `${generateUniqueKey(16, 1, 5)}-${generateUniqueKey(16, 1, 5)}-${generateUniqueKey(16, 1, 5)}` +
  `${generateUniqueKey(16, 1, 5)}${generateUniqueKey(16, 1, 5)}`


export default {
  randomIntFromInterval,
  generateUniqueKey,
  generateUniqueNumberFromTwoNumbers,
  guid,
}
