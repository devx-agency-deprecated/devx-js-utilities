// @flow
export const createCookie = (name: string, value: string, minutes: number): void => {
  let expires = ''
  if (minutes) {
    const date = new Date()
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    expires = 'expires=' + date.toUTCString()
  }
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

export const readCookie = (name: string): null | string => {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length)
    }
    if (c.indexOf(nameEQ) === 0)
      return c.substring(nameEQ.length, c.length)
  }
  return null
}

export default {
  createCookie,
  readCookie,
}