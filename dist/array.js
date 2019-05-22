"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var unique = exports.unique = function unique(array) {
  return array.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
};

var closest = exports.closest = function closest(arr, target) {
  if (!arr || arr.length === 0) return 0;
  if (arr.length === 1) return parseFloat(arr[0]);

  for (var i = 1; i < arr.length; i++) {
    if (parseFloat(arr[i]) > target) {
      var p = parseFloat(arr[i - 1]);
      var c = parseFloat(arr[i]);
      return Math.abs(p - target) < Math.abs(c - target) ? p : c;
    }
  }
  return parseFloat(arr[arr.length - 1]);
};

exports.default = {
  closest: closest,
  unique: unique
};