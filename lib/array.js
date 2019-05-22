// @flow

export const unique = (array: Array<any>) => array.filter((value, index, self) => self.indexOf(value) === index)

export const closest = (arr: string[] | number[], target: number): number => {
  if (!arr || arr.length === 0) return 0
  if (arr.length === 1) return parseFloat(arr[0])

  for (let i = 1; i < arr.length; i++) {
    if (parseFloat(arr[i]) > target) {
      const p = parseFloat(arr[i - 1])
      const c = parseFloat(arr[i])
      return Math.abs(p - target) < Math.abs(c - target) ? p : c
    }
  }
  return parseFloat(arr[arr.length - 1])
}

export default {
  closest,
  unique,
}
