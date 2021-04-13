// @flow
export const createCookie = (name: string, value: string, minutes?: number, secure?: boolean, samesite?: 'strict' | 'lax'): void => {
  let params = ['path=/']
  if (typeof minutes === 'number') {
    let date = new Date()
    if (minutes <= 0) {
      date = new Date(null)
    } else {
      date.setTime(date.getTime() + (minutes * 60 * 1000))
    }
    params.push(`expires=${date.toUTCString()}`)
  }
  if (secure) {
    params.push('secure')
  }
  if (typeof samesite === 'string' && ['strict', 'lax'].includes(samesite)) {
    params.push(`samesite=${samesite}`)
  }
  document.cookie = `${name}=${value};${params.join(';')}`
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
