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

/**
 * @description generate GUID identifier
 * @return {string}
 */
export const guid = (): string => {
  const s4 = (): string =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}


export default {
  randomIntFromInterval,
  generateUniqueKey,
  generateUniqueNumberFromTwoNumbers,
  guid,
}
