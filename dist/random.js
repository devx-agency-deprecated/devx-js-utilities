"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @description Returns random int number in given interval
 */
var randomIntFromInterval = exports.randomIntFromInterval = function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * @returns {string}
 */
var generateUniqueKey = exports.generateUniqueKey = function generateUniqueKey() {
  var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 36;
  var indexStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var indexEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 15;
  return Math.floor((1 + Math.random()) * 0x10000).toString(base).substring(indexStart, indexEnd);
};

/**
 * @param n1
 * @param n2
 * @returns {number}
 */
var generateUniqueNumberFromTwoNumbers = exports.generateUniqueNumberFromTwoNumbers = function generateUniqueNumberFromTwoNumbers(n1, n2) {
  return 0.5 * (n1 + n2) * (n1 + n2 + 1) + n2;
};

/**
 * @description generate GUID identifier
 * @return {string}
 */
var guid = exports.guid = function guid() {
  return "" + generateUniqueKey(16, 1, 5) + generateUniqueKey(16, 1, 5) + "-" + generateUniqueKey(16, 1, 5) + "-" + (generateUniqueKey(16, 1, 5) + "-" + generateUniqueKey(16, 1, 5) + "-" + generateUniqueKey(16, 1, 5)) + ("" + generateUniqueKey(16, 1, 5) + generateUniqueKey(16, 1, 5));
};

exports.default = {
  randomIntFromInterval: randomIntFromInterval,
  generateUniqueKey: generateUniqueKey,
  generateUniqueNumberFromTwoNumbers: generateUniqueNumberFromTwoNumbers,
  guid: guid
};