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
  if (!value) return true;

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

  return (/^((?!([0\W]))[0-9]*[ ,.-]*[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ]+[\wáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ ,.-]*)$/.test(value.trim())
  );
};

/**
 * @description Validate city
 */
var validateCity = exports.validateCity = function validateCity(value) {
  if (!value) return true;

  return (/^[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ]+$/.test(value.trim())
  );
};

/**
 * @description Validate surname
 */
var validateSurname = exports.validateSurname = function validateSurname(value) {
  if (!value) return true;

  return (/^[a-zA-ZáčďéěíňóřšťůúýžÁČĎÉĚÍŇÓŘŠŤŮÚÝŽ]+$/.test(value.trim())
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

exports.default = {
  validateCreditCard: validateCreditCard,
  validateEmail: validateEmail,
  validatePhone: validatePhone,
  validateZipCode: validateZipCode,
  validateStreet: validateStreet,
  validateCity: validateCity,
  validateSurname: validateSurname,
  validateLandRegistryNumber: validateLandRegistryNumber,
  isNumeric: isNumeric
};