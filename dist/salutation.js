'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @description salutation
 */
var salutation = exports.salutation = function salutation(name) {
  var convertName = void 0;
  var replaceName = void 0;
  var character = void 0;
  convertName = ' ' + name.toLowerCase();
  switch (convertName.charAt(convertName.length - 1)) {
    case 'a':
      replaceName = convertName.charAt(convertName.length - 2) == 'i' ? ['a', 'e'] : ['a', 'o'];
      break;
    case 'n':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'o':
          if (convertName.charAt(convertName.length - 3) == 'i') {
            replaceName = convertName.charAt(convertName.length - 5) == 'y' ? ['', 'e'] : ['', ''];
          } else {
            replaceName = ['', 'e'];
          }
          break;
        case 'i':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'r':
              if (convertName.charAt(convertName.length - 4) == 'a') {
                replaceName = convertName.charAt(convertName.length - 5) == 'm' ? ['', 'e'] : ['', ''];
              } else {
                replaceName = ['', ''];
              }
              break;
            case 'l':
              replaceName = convertName.charAt(convertName.length - 4) == 'r' ? ['', 'e'] : ['', ''];
              break;
            default:
              replaceName = ['', 'e'];
          }
          break;
        case 'í':
          replaceName = convertName.charAt(convertName.length - 3) == 'r' ? ['', ''] : ['', 'e'];
          break;
        case 'e':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'm':
              replaceName = convertName.charAt(convertName.length - 4) == 'm' ? ['', 'e'] : ['', ''];
              break;
            case 'r':
              replaceName = convertName.charAt(convertName.length - 4) == 'o' ? ['', 'e'] : ['', ''];
              break;
            default:
              replaceName = ['', 'e'];
          }
          break;
        case 'y':
          replaceName = convertName.charAt(convertName.length - 3) == 'r' ? ['', 'e'] : ['', ''];
          break;
        default:
          replaceName = convertName.charAt(convertName.length - 2) == 'u' ? ['', 'o'] : ['', 'e'];
      }
      break;
    case 'l':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'e':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'i':
              if (convertName.charAt(convertName.length - 4) == 'r') {
                replaceName = convertName.charAt(convertName.length - 5) == 'u' ? ['', ''] : ['', 'i'];
              } else {
                replaceName = ['', 'i'];
              }
              break;
            case 'r':
              replaceName = convertName.charAt(convertName.length - 4) == 'a' ? ['el', 'le'] : ['', 'i'];
              break;
            case 'v':
              replaceName = convertName.charAt(convertName.length - 5) == 'p' ? ['el', 'le'] : ['el', 'li'];
              break;
            case 'k':
              replaceName = convertName.charAt(convertName.length - 4) == 'a' ? ['', ''] : ['', 'i'];
              break;
            default:
              replaceName = convertName.charAt(convertName.length - 3) == 'h' ? ['', ''] : ['', 'i'];
          }
          break;
        case 'i':
          replaceName = convertName.charAt(convertName.length - 3) == 'a' ? ['', 'o'] : ['', 'e'];
          break;
        case 'ě':
        case 'á':
        case 's':
          replaceName = ['', 'i'];
          break;
        case 'ů':
          replaceName = ['ůl', 'ole'];
          break;
        default:
          replaceName = ['', 'e'];
      }
      break;
    case 'm':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'a':
          if (convertName.charAt(convertName.length - 3) == 'i') {
            replaceName = convertName.charAt(convertName.length - 4) == 'r' ? ['', ''] : ['', 'e'];
          } else {
            replaceName = ['', 'e'];
          }
          break;
        default:
          replaceName = convertName.charAt(convertName.length - 2) == 'ů' ? ['ům', 'ome'] : ['', 'e'];
      }
      break;
    case 'c':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'e':
          if (convertName.charAt(convertName.length - 3) == 'v') {
            replaceName = convertName.charAt(convertName.length - 4) == 'š' ? ['vec', 'evče'] : ['ec', 'če'];
          } else {
            replaceName = ['ec', 'če'];
          }
          break;
        case 'i':
          replaceName = convertName.charAt(convertName.length - 4) == 'o' ? ['', 'i'] : ['', 'u'];
          break;
        default:
          replaceName = convertName.charAt(convertName.length - 2) == 'a' ? ['', 'u'] : ['', 'i'];
      }
      break;
    case 'e':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'n':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'n':
              replaceName = convertName.charAt(convertName.length - 7) == 'b' ? ['', ''] : ['e', 'o'];
              break;
            default:
              replaceName = convertName.charAt(convertName.length - 3) == 'g' ? ['e', 'i'] : ['', ''];
          }
          break;
        case 'c':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'i':
              replaceName = convertName.charAt(convertName.length - 4) == 'r' ? ['e', 'i'] : ['', ''];
              break;
            default:
              replaceName = convertName.charAt(convertName.length - 3) == 'v' ? ['', ''] : ['e', 'i'];
          }
          break;
        case 'd':
          replaceName = convertName.charAt(convertName.length - 3) == 'l' ? ['e', 'o'] : ['', ''];
          break;
        case 'g':
          if (convertName.charAt(convertName.length - 3) == 'r') {
            replaceName = convertName.charAt(convertName.length - 4) == 'a' ? ['', ''] : ['e', 'i'];
          } else {
            replaceName = ['e', 'i'];
          }
          break;
        case 'l':
          if (convertName.charAt(convertName.length - 3) == 'l') {
            switch (convertName.charAt(convertName.length - 4)) {
              case 'e':
                replaceName = ['e', 'o'];
                break;
              case 'o':
                replaceName = ['', ''];
                break;
              default:
                replaceName = ['e', 'i'];
            }
          } else {
            replaceName = ['', ''];
          }
          break;
        case 's':
          replaceName = convertName.charAt(convertName.length - 3) == 's' ? ['e', 'i'] : ['e', 'o'];
          break;
        case 'h':
          replaceName = convertName.charAt(convertName.length - 3) == 't' ? ['', ''] : ['e', 'i'];
          break;
        default:
          replaceName = convertName.charAt(convertName.length - 2) == 'k' ? ['', 'u'] : ['', ''];
      }
      break;
    case 's':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'e':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'n':
              switch (convertName.charAt(convertName.length - 4)) {
                case 'e':
                  replaceName = ['s', ''];
                  break;
                case 'á':
                  replaceName = ['', 'i'];
                  break;
                default:
                  replaceName = ['', ''];
              }
              break;
            case 'l':
              switch (convertName.charAt(convertName.length - 4)) {
                case 'u':
                  replaceName = convertName.charAt(convertName.length - 5) == 'j' ? ['', 'i'] : ['s', ''];
                  break;
                default:
                  character = convertName.charAt(convertName.length - 4);
                  replaceName = character == 'o' || character == 'r' ? ['', 'i'] : ['s', ''];
              }
              break;
            case 'd':
            case 't':
            case 'm':
              replaceName = ['s', ''];
              break;
            case 'r':
              replaceName = ['s', 'ro'];
              break;
            case 'u':
              replaceName = ['s', 'u'];
              break;
            case 'x':
              replaceName = ['es', 'i'];
              break;
            default:
              replaceName = ['', 'i'];
          }
          break;
        case 'i':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'r':
              if (convertName.charAt(convertName.length - 4) == 'a') {
                replaceName = convertName.charAt(convertName.length - 5) == 'p' ? ['s', 'de'] : ['s', 'to'];
              } else {
                replaceName = ['', 'i'];
              }
              break;
            case 'n':
              replaceName = convertName.charAt(convertName.length - 4) == 'f' ? ['s', 'de'] : ['', 'i'];
              break;
            default:
              replaceName = convertName.charAt(convertName.length - 3) == 'm' ? ['s', 'do'] : ['', 'i'];
          }
          break;
        case 'o':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'r':
              replaceName = ['os', 'e'];
              break;
            case 'k':
              replaceName = ['', 'e'];
              break;
            case 'x':
              replaceName = ['os', 'i'];
              break;
            default:
              replaceName = ['', 'i'];
          }
          break;
        case 'a':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'r':
              replaceName = convertName.charAt(convertName.length - 4) == 'a' ? ['', 'i'] : ['as', 'e'];
              break;
            case 'l':
              replaceName = convertName.charAt(convertName.length - 4) == 'l' ? ['s', 'do'] : ['', 'i'];
              break;
            default:
              replaceName = convertName.charAt(convertName.length - 3) == 'y' ? ['as', 'e'] : ['', 'i'];
          }
          break;
        case 'r':
          replaceName = convertName.charAt(convertName.length - 3) == 'a' ? ['s', 'te'] : ['', 'i'];
          break;
        case 'u':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'n':
              switch (convertName.charAt(convertName.length - 4)) {
                case 'e':
                  replaceName = convertName.charAt(convertName.length - 5) == 'v' ? ['us', 'ero'] : ['', 'i'];
                  break;
                default:
                  replaceName = convertName.charAt(convertName.length - 4) == 'g' ? ['', 'i'] : ['us', 'e'];
              }
              break;
            case 'e':
              replaceName = convertName.charAt(convertName.length - 4) == 'z' ? ['zeus', 'die'] : ['us', 'e'];
              break;
            case 'm':
              replaceName = convertName.charAt(convertName.length - 4) == 't' ? ['us', 'e'] : ['', 'i'];
              break;
            case 'g':
            case 'a':
              replaceName = ['', 'i'];
              break;
            case 'h':
              replaceName = ['', 'e'];
              break;
            case 'c':
            case 'k':
              replaceName = ['s', ''];
              break;
            default:
              replaceName = ['us', 'e'];
          }
          break;
        case 'y':
          replaceName = convertName.charAt(convertName.length - 4) == 'a' ? ['', 'i'] : ['', ''];
          break;
        default:
          replaceName = ['', 'i'];
      }
      break;
    case 'o':
      replaceName = convertName.charAt(convertName.length - 2) == 'l' ? ['', 'i'] : ['', ''];
      break;
    case 'x':
      replaceName = convertName.charAt(convertName.length - 2) == 'n' ? ['x', 'go'] : ['', 'i'];
      break;
    case 'i':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'n':
          replaceName = convertName.charAt(convertName.length - 4) == 'e' ? ['', ''] : ['', 'o'];
          break;
        case 'm':
          replaceName = convertName.charAt(convertName.length - 3) == 'a' ? ['', ''] : ['', 'o'];
          break;
        case 'r':
          replaceName = convertName.charAt(convertName.length - 3) == 'i' ? ['', 'o'] : ['', ''];
          break;
        default:
          character = convertName.charAt(convertName.length - 2);
          replaceName = character == 's' || character == 'a' || character == 'o' || character == 'c' || character == 't' ? ['', 'i'] : ['', ''];
      }
      break;
    case 't':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'i':
          replaceName = convertName.charAt(convertName.length - 3) == 'l' ? ['', 'e'] : ['', ''];
          break;
        case 'u':
          replaceName = convertName.charAt(convertName.length - 3) == 'r' ? ['', ''] : ['', 'e'];
          break;
        default:
          replaceName = ['', 'e'];
      }
      break;
    case 'r':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'e':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'd':
              if (convertName.charAt(convertName.length - 4) == 'i') {
                replaceName = convertName.charAt(convertName.length - 5) == 'e' ? ['', 'e'] : ['', 'i'];
              } else {
                replaceName = ['er', 're'];
              }
              break;
            case 't':
              switch (convertName.charAt(convertName.length - 4)) {
                case 'e':
                  replaceName = convertName.charAt(convertName.length - 5) == 'p' ? ['', 'e'] : ['', 'o'];
                  break;
                case 's':
                  replaceName = convertName.charAt(convertName.length - 5) == 'o' ? ['', 'e'] : ['', ''];
                  break;
                default:
                  replaceName = convertName.charAt(convertName.length - 4) == 'n' ? ['', 'i'] : ['', 'e'];
              }
              break;
            default:
              character = convertName.charAt(convertName.length - 3);
              replaceName = character == 'g' || character == 'k' ? ['er', 'ře'] : ['', 'e'];
          }
          break;
        case 'a':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'm':
              replaceName = convertName.charAt(convertName.length - 4) == 'g' ? ['', ''] : ['', 'e'];
              break;
            case 'l':
              replaceName = convertName.charAt(convertName.length - 5) == 'p' ? ['', ''] : ['', 'e'];
              break;
            default:
              replaceName = ['', 'e'];
          }
          break;
        case 'o':
          replaceName = convertName.charAt(convertName.length - 3) == 'n' ? ['', 'o'] : ['', 'e'];
          break;
        default:
          character = convertName.charAt(convertName.length - 2);
          replaceName = character == 'd' || character == 't' || character == 'b' ? ['r', 'ře'] : ['', 'e'];
      }
      break;
    case 'j':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'o':
          replaceName = convertName.charAt(convertName.length - 3) == 't' ? ['oj', 'ý'] : ['', 'i'];
          break;
        case 'i':
          replaceName = convertName.charAt(convertName.length - 3) == 'd' ? ['', 'i'] : ['ij', 'ý'];
          break;
        default:
          replaceName = convertName.charAt(convertName.length - 2) == 'y' ? ['yj', 'ý'] : ['', 'i'];
      }
      break;
    case 'd':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'i':
          replaceName = convertName.charAt(convertName.length - 3) == 'r' ? ['', ''] : ['', 'e'];
          break;
        case 'u':
          replaceName = convertName.charAt(convertName.length - 3) == 'a' ? ['', ''] : ['', 'e'];
          break;
        default:
          replaceName = ['', 'e'];
      }
      break;
    case 'y':
      character = convertName.charAt(convertName.length - 2);
      replaceName = character == 'a' || character == 'g' || character == 'o' ? ['', 'i'] : ['', ''];
      break;
    case 'h':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'c':
          switch (convertName.charAt(convertName.length - 3)) {
            case 'r':
              replaceName = ['', 'i'];
              break;
            case 'ý':
              replaceName = ['', ''];
              break;
            default:
              replaceName = ['', 'u'];
          }
          break;
        case 't':
          replaceName = convertName.charAt(convertName.length - 3) == 'e' ? ['', 'e'] : ['', 'i'];
          break;
        case 'a':
          replaceName = convertName.charAt(convertName.length - 3) == 'o' ? ['', 'u'] : ['', ''];
          break;
        default:
          replaceName = convertName.charAt(convertName.length - 2) == 'ů' ? ['ůh', 'ože'] : ['', 'i'];
      }
      break;
    case 'v':
      replaceName = convertName.charAt(convertName.length - 2) == 'ů' ? ['', ''] : ['', 'e'];
      break;
    case 'u':
      replaceName = convertName.charAt(convertName.length - 2) == 't' ? ['', ''] : ['', 'i'];
      break;
    case 'k':
      switch (convertName.charAt(convertName.length - 2)) {
        case 'ě':
          replaceName = ['k', 'če'];
          break;
        case 'e':
          replaceName = ['ek', 'ku'];
          break;
        default:
          replaceName = ['', 'u'];
      }
      break;
    case 'g':
      if (convertName.charAt(convertName.length - 2) == 'i') {
        replaceName = convertName.charAt(convertName.length - 3) == 'e' ? ['', ''] : ['', 'u'];
      } else {
        replaceName = ['', 'u'];
      }
      break;
    case 'ň':
      replaceName = convertName.charAt(convertName.length - 2) == 'o' ? ['ň', 'ni'] : ['ůň', 'oni'];
      break;
    case 'f':
    case 'p':
    case 'b':
      replaceName = ['', 'e'];
      break;
    case 'w':
    case 'í':
    case 'á':
    case 'ý':
    case 'ů':
    case 'é':
      replaceName = ['', ''];
      break;
    default:
      replaceName = ['', 'i'];
  }

  if (replaceName[0] == '' && replaceName[1] == '') {
    return name;
  }
  if (replaceName[1] == '') {
    return name.substr(0, -replaceName[0].length);
  }
  if (replaceName[0] == '') {
    return name + (name.charAt(name.length).toLowerCase() == name.charAt(name.length) ? replaceName[1] : replaceName[1].toUpperCase());
  }
  var replaceending = void 0;
  replaceending = name.substr(name.length - replaceName[0].length);
  if (replaceending.toUpperCase() == replaceending) {
    return name.substr(0, name.length - replaceName[0].length) + replaceName[1].toUpperCase();
  }
  if (replaceending.match(/^[A-Z\xC1\xC9\xCD\xD3\xDA\xDD\u010C\u010E\u0147\u0158\u0160\u0164\u017D][a-z\xE1\xE9\xED\xF3\xFA\xFD\u010D\u010F\u011B\u0148\u0159\u0161\u0165\u016F\u017E]*$/)) {
    return name.substr(0, name.length - replaceName[0].length) + replaceName[1].replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  if (name.charAt(name.length - 1).toUpperCase() == name.charAt(name.length - 1)) {
    return name.substr(0, name.length - replaceName[0].length) + replaceName[1].toUpperCase();
  }
  return name.substr(0, name.length - replaceName[0].length) + replaceName[1];
};

exports.default = {
  salutation: salutation
};