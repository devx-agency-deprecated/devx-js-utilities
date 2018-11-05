'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @description Validate card number by Luhn algorithm
 */
var validateCreditCard = exports.validateCreditCard = function validateCreditCard(value) {
  if (/[^0-9-\s]+/.test(value)) return false;

  var nCheck = 0;
  var nDigit = 0;
  var bEven = false;
  value = value.replace(/\D/g, '');

  for (var n = value.length - 1; n >= 0; n--) {
    var cDigit = value.charAt(n);
    nDigit = parseInt(cDigit, 10);

    if (bEven) {
      var b = nDigit *= 2;
      if (b > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 === 0;
};

/**
 * @description Validate email address
 */
var validateEmail = exports.validateEmail = function validateEmail(value) {
  if (!value) return true;

  return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
  );
};

/**
 * @description Validate phone format
 */
var validatePhone = exports.validatePhone = function validatePhone(value) {
  var prefixRequired = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!value) return true;

  if (prefixRequired) {
    return (/^((00|\+)\d{3})+ ?[1-9]\d{2} ?\d{3} ?\d{3}$/.test(value.trim())
    );
  }
  return (/^((00|\+)\d{3})? ?[1-9]\d{2} ?\d{3} ?\d{3}$/.test(value.trim())
  );
};

/**
 * @description Validate zip code
 */
var validateZipCode = exports.validateZipCode = function validateZipCode(value) {
  if (!value) return true;

  var regexValid = /^[1-9]{1}\d{2}[ ]?\d{2}$/.test(value.trim());
  if (regexValid) {
    var firstChar = value[0];

    for (var index = 1; index < value.length; index++) {
      var char = value[index];
      if (char !== firstChar) return true;
    }

    return false;
  }

  return false;
};

/**
 * @description Validate street
 */
var validateStreet = exports.validateStreet = function validateStreet(value) {
  if (!value) return true;

  return (/^[0-9a-žA-Ž-,.\/ ]+$/.test(value.trim())
  );
};

/**
 * @description Validate city
 */
var validateCity = exports.validateCity = function validateCity(value) {
  if (!value) return true;

  return (/^[0-9a-žA-Ž- ]+$/.test(value.trim())
  );
};

/**
 * @description Validate surname
 */
var validateSurname = exports.validateSurname = function validateSurname(value) {
  if (!value) return true;

  return (/^[a-žA-Ž]+$/.test(value.trim())
  );
};

/**
 * @description validateLandRegistryNumber
 */
var validateLandRegistryNumber = exports.validateLandRegistryNumber = function validateLandRegistryNumber(value) {
  if (!value) return true;

  return (/^((?!(\W))[0]*[0\W]*[a-zA-Z1-9]+.*)$/.test(value.trim())
  );
};

/**
 * @description Validate if value is numeric
 */
var isNumeric = exports.isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var isRCValid = exports.isRCValid = function isRCValid(identificationNumber) {
  var match = /^(\d{2})(\d{2})(\d{2})\/?(\d{3})(\d?)$/.exec(identificationNumber);
  if (!match) {
    return false;
  }
  var year = Number(match[1]);
  var month = Number(match[2]);
  var day = Number(match[3]);
  var ext = match[4];
  var c = match[5];

  if (!c) {
    if (ext === '000') {
      return false;
    }
    year += year > 53 ? 1800 : 1900;
  } else {
    var mod = Number(match[0]) % 11;
    if (mod !== 0) {
      return false;
    }
    year += year > 53 ? 1900 : 2000;
  }
  if (month > 50) {
    month -= 50;
  } else if (month > 20) {
    month -= 20;
  }

  return month > 0 && month <= 12 && day > 0 && day <= new Date(year, month, 0).getDate();
};

var isICOValid = exports.isICOValid = function isICOValid(ico) {
  var match = /^\d{8}$/.exec(ico);
  if (!match) {
    return false;
  }

  var control = 0;
  for (var index = 0; index < 7; index++) {
    control += Number(match[0][index]) * (8 - index);
  }

  var mod = control % 11;
  return (11 - mod) % 10 === Number(match[0][7]);
};

exports.default = {
  validateCreditCard: validateCreditCard,
  validateEmail: validateEmail,
  validatePhone: validatePhone,
  validateZipCode: validateZipCode,
  validateStreet: validateStreet,
  validateCity: validateCity,
  validateSurname: validateSurname,
  validateLandRegistryNumber: validateLandRegistryNumber,
  isNumeric: isNumeric,
  isRCValid: isRCValid,
  isICOValid: isICOValid
};