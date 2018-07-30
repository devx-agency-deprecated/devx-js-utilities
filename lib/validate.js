/**
 * @description Validate card number by Luhn algorithm
 */
export const validateCreditCard = (value: string): boolean => {
  if (/[^0-9-\s]+/.test(value)) return false

  let nCheck = 0
  let nDigit = 0
  let bEven = false
  value = value.replace(/\D/g, '')

  for (let n = value.length - 1; n >= 0; n--) {
    const cDigit = value.charAt(n)
    nDigit = parseInt(cDigit, 10)

    if (bEven) {
      const b = nDigit *= 2
      if (b > 9) nDigit -= 9
    }

    nCheck += nDigit
    bEven = !bEven
  }

  return (nCheck % 10) === 0
}

/**
 * @description Validate email address
 */
export const validateEmail = (value: string): boolean => {
  if (!value)
    return true

  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}

/**
 * @description Validate phone format
 */
export const validatePhone = (value: string): boolean => {
  if (!value)
    return true

  return /^((00|\+)\d{3})? ?[1-9]\d{2} ?\d{3} ?\d{3}$/.test(value.trim())
}

/**
 * @description Validate zip code
 */
export const validateZipCode = (value: string): boolean => {
  if (!value)
    return true

  const regexValid = /^[1-9]{1}\d{2}[ ]?\d{2}$/.test(value.trim())
  if (regexValid) {
    const firstChar = value[0]

    for (let index = 1; index < value.length; index++) {
      const char = value[index]
      if (char !== firstChar)
        return true
    }

    return false
  }

  return false
}

/**
 * @description Validate street
 */
export const validateStreet = (value: string): boolean => {
  if (!value)
    return true

  return /^[0-9a-žA-Ž-,.\/ ]+$/.test(value.trim())
}

/**
 * @description Validate city
 */
export const validateCity = (value: string): boolean => {
  if (!value)
    return true

  return /^[0-9a-žA-Ž- ]+$/.test(value.trim())
}

/**
 * @description Validate surname
 */
export const validateSurname = (value: string): boolean => {
  if (!value)
    return true

  return /^[a-žA-Ž]+$/.test(value.trim())
}

/**
 * @description validateLandRegistryNumber
 */
export const validateLandRegistryNumber = (value: string): boolean => {
  if (!value)
    return true

  return /^((?!(\W))[0]*[0\W]*[a-zA-Z1-9]+.*)$/.test(value.trim())
}

/**
 * @description Validate if value is numeric
 */
export const isNumeric = (n: string | number): boolean => (!isNaN(parseFloat(n)) && isFinite(n))

export const isRCValid = (identificationNumber: string) => {
  const match = /^(\d{2})(\d{2})(\d{2})(\d{3})(\d?)$/.exec(identificationNumber)
  if (!match) {
    return false
  }
  let year = Number(match[1])
  let month = Number(match[2])
  const day = Number(match[3])
  const ext = match[4]
  const c = match[5]

  if (!c) {
    if (ext === '000') {
      return false
    }
    year += year > 53 ? 1800 : 1900
  }
  else {
    const mod = Number(match[0]) % 11
    if (mod !== 0) {
      return false
    }
    year += year > 53 ? 1900 : 2000
  }
  if (month > 50) {
    month -= 50
  } else if (month > 20) {
    month -= 20
  }

  return (month > 0 && month <= 12 && day > 0 && day <= (new Date(year, month, 0)).getDate())
}

export const isICOValid = (ico: string) => {
  const match = /^\d{8}$/.exec(ico)
  if (!match) {
    return false
  }

  let control = 0
  for (let index = 0; index < 7; index++) {
    control += Number(match[0][index]) * (8 - index)
  }

  const mod = control % 11
  return ((11 - mod) % 10) === Number(match[0][7])
}

export default {
  validateCreditCard,
  validateEmail,
  validatePhone,
  validateZipCode,
  validateStreet,
  validateCity,
  validateSurname,
  validateLandRegistryNumber,
  isNumeric,
  isRCValid,
  isICOValid
}
