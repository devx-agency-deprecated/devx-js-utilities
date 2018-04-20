'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformAllKeys = exports.toSnakeCase = exports.toCamelCase = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description Transform string without leading underscore using transform function
 */
var transformWithoutLeadingUnderscore = function transformWithoutLeadingUnderscore(value, transform) {
  return value.charAt(0) === '_' ? '_' + transform(value.substr(1)) : transform(value);
};

var capitalize = function capitalize(string) {
  return '' + string[0].toUpperCase() + string.slice(1).toLowerCase();
};

var camelCase = function camelCase(string) {
  return ('' + string).split('_').reduce(function (result, word, index) {
    word = word.toLowerCase();
    return result + (index ? capitalize(word) : word);
  }, '');
};

var snakeCase = function snakeCase(string) {
  return ('' + string).split(/(?=[A-Z])/).reduce(function (result, word, index) {
    return result + (index ? '_' : '') + word.toLowerCase();
  }, '');
};

var toCamelCase = exports.toCamelCase = function toCamelCase(value) {
  return transformWithoutLeadingUnderscore(value, camelCase);
};

var toSnakeCase = exports.toSnakeCase = function toSnakeCase(value) {
  return transformWithoutLeadingUnderscore(value, snakeCase);
};

var transformAllKeys = exports.transformAllKeys = function transformAllKeys(data, transform) {
  var newData = Array.isArray(data) ? [] : {};

  (0, _keys2.default)(data).forEach(function (key) {
    var value = data[key];
    var newKey = transform(key);

    if (value instanceof Object) {
      newData[newKey] = transformAllKeys(value, transform);
    } else {
      newData[newKey] = value;
    }
  });

  return newData;
};

exports.default = {
  toCamelCase: toCamelCase,
  toSnakeCase: toSnakeCase,
  transformAllKeys: transformAllKeys
};