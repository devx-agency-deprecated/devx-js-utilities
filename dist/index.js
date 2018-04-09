'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.humanizer = exports.validate = exports.random = exports.cookie = undefined;

var _cookie = require('./cookie');

var _cookie2 = _interopRequireDefault(_cookie);

var _random = require('./random');

var _random2 = _interopRequireDefault(_random);

var _validate = require('./validate');

var _validate2 = _interopRequireDefault(_validate);

var _humanizer = require('./humanizer');

var _humanizer2 = _interopRequireDefault(_humanizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookie = exports.cookie = _cookie2.default;
var random = exports.random = _random2.default;
var validate = exports.validate = _validate2.default;
var humanizer = exports.humanizer = _humanizer2.default;

exports.default = {
  cookie: cookie,
  random: random,
  validate: validate,
  humanizer: humanizer
};