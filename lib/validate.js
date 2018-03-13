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

  return /^((?!([0\W]))[0-9]*[ ,.-]*[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ]+[\wáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ ,.-]*)$/.test(value.trim())
}

/**
 * @description Validate city
 */
export const validateCity = (value: string): boolean => {
  if (!value)
    return true

  return /^[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ]+$/.test(value.trim())
}

/**
 * @description Validate surname
 */
export const validateSurname = (value: string): boolean => {
  if (!value)
    return true

  return /^[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ]+$/.test(value.trim())
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
}