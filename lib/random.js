// @flow
/**
 * @description Returns random int number in given interval
 */
export const randomIntFromInterval = (min: number, max: number): number =>
    Math.floor((Math.random() * ((max - min) + 1)) + min)

/**
 * @returns {string}
 */
export const generateUniqueKey = (): string => Math.random().toString(36).substring(2, 15)

/**
 * @param n1
 * @param n2
 * @returns {number}
 */
export const generateUniqueNumberFromTwoNumbers = (n1: number, n2: number): number =>
    (0.5 * (n1 + n2) * (n1 + n2 + 1)) + n2

export default {
  randomIntFromInterval,
  generateUniqueKey,
  generateUniqueNumberFromTwoNumbers,
}