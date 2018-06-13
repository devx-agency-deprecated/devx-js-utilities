// @flow

export const unique = (array: Array<any>) => array.filter((value, index, self) => self.indexOf(value) === index)

export default {
  unique,
}
