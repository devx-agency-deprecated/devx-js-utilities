'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var humanizeNumber = exports.humanizeNumber = function humanizeNumber(x, locales) {
  if (typeof x === 'string') {
    var number = parseInt(x, 10);
    if (number) {
      return x;
    }
    return humanizeNumber(number, locales);
  } else if (x && typeof x.toLocaleString === 'function') {
    return x.toLocaleString(locales);
  }
  return x;
};

var csNumber = exports.csNumber = function csNumber(x) {
  return humanizeNumber(x, 'cs-CZ');
};

exports.default = {
  humanizeNumber: humanizeNumber,
  csNumber: csNumber
};