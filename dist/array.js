"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var unique = exports.unique = function unique(array) {
  return array.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
};

exports.default = {
  unique: unique
};