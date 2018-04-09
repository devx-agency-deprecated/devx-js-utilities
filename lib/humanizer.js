// @flow
export const humanizeNumber = (x: number, locales?: string) => {
  if (typeof x === 'string') {
    const number = parseInt(x, 10)
    if (number) {
      return x
    }
    return humanizeNumber(number, locales)
  } else if (typeof x.toLocaleString === 'function') {
    return x.toLocaleString(locales)
  }
  return x
}

export const csNumber = (x: number) => humanizeNumber(x, 'cs-CZ')

export default {
  humanizeNumber,
  csNumber,
}
