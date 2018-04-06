'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var createCookie = exports.createCookie = function createCookie(name, value, minutes) {
  var expires = '';
  if (minutes) {
    var date = new Date();
    date.setTime(date.getTime() + minutes * 60 * 1000);
    expires = 'expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
};

var readCookie = exports.readCookie = function readCookie(name) {
  var nameEQ = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

exports.default = {
  createCookie: createCookie,
  readCookie: readCookie
};