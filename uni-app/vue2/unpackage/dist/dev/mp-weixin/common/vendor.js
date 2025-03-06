(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 173:
/*!*************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-svg-icon/svg.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _svg = _interopRequireDefault(__webpack_require__(/*! ../../static/svg */ 51));
var Svg2DataUrl = function Svg2DataUrl(svg) {
  // 将被设置到 dataset 中的属性还原出来
  svg = svg.replace(/data-(.*?=(['"]).*?\2)/g, '$1');

  // 将被设置到 data-xlink-href 的属性还原出来
  svg = svg.replace(/xlink-href=/g, 'xlink:href=');

  // 将 dataset 中被变成 kebab-case 写法的 viewBox 还原出来
  svg = svg.replace(/view-box=/g, 'viewBox=');

  // 清除 SVG 中不应该显示的 title、desc、defs 元素
  svg = svg.replace(/<(title|desc|defs)>[\s\S]*?<\/\1>/g, '');

  // 为非标准 XML 的 SVG 添加 xmlns，防止视图层解析出错
  if (!/xmlns=/.test(svg)) svg = svg.replace(/<svg/, "<svg xmlns='http://www.w3.org/2000/svg'");

  // 对 SVG 中出现的浮点数统一取最多两位小数，缓解数据量过大问题
  svg = svg.replace(/\d+\.\d+/g, function (match) {
    return parseFloat(parseFloat(match).toFixed(2));
  });

  // 清除注释，缓解数据量过大的问题
  svg = svg.replace(/<!--[\s\S]*?-->/g, '');

  // 模拟 HTML 的 white-space 行为，将多个空格或换行符换成一个空格，减少数据量
  svg = svg.replace(/\s+/g, " ");

  // 对特殊符号进行转义，这里参考了 https://github.com/bhovhannes/svg-url-loader/blob/master/src/loader.js
  svg = svg.replace(/[{}\|\\\^~\[\]`"<>#%]/g, function (match) {
    return '%' + match[0].charCodeAt(0).toString(16).toUpperCase();
  });

  // 单引号替换为 \'，由于 kbone 的 bug，节点属性中的双引号在生成 outerHTML 时不会被转义导致出错
  // 因此 background-image: url( 后面只能跟单引号，所以生成的 URI 内部也就只能用斜杠转义单引号了
  svg = svg.replace(/'/g, "\\'");

  // 最后添加 mime 头部，变成 Webview 可以识别的 Data URI
  return '"data:image/svg+xml,' + svg.trim() + '"';
};
var newIcons = {};
for (var key in _svg.default) {
  newIcons[key] = Svg2DataUrl(_svg.default[key]);
}
var _default = newIcons;
exports.default = _default;

/***/ }),

/***/ 174:
/*!***************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-svg-icon/index.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeSvgColor = void 0;
// svg更换颜色
var changeSvgColor = function changeSvgColor(url, color) {
  //转义后的#等于%23，利用正则表达式，替换所有%23后6位为新的十六进制六位数。
  var res = url.replace(/%22%23[a-zA-Z0-9]{3,6}/g, color.replace("#", "%22%23"));
  return res;
};
exports.changeSvgColor = changeSvgColor;

/***/ }),

/***/ 175:
/*!**********************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/utils/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.years = exports.seconds = exports.requestAnimationFrame = exports.months = exports.minutes = exports.hours = exports.getNodeInfo = exports.getDicName = exports.getCssSize = exports.createUUID = exports.convertToChinaNum = void 0;
var _configStore = _interopRequireDefault(__webpack_require__(/*! ../utils/config-store */ 34));
/**
 * 生成uuid
 * @return {String} 32位uuid
 */
var createUUID = function createUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
};
exports.createUUID = createUUID;
var china = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
/**
 * 将阿拉伯数字转成中文数字
 * @param {Number} num 阿拉伯数字
 * @return {String} 中文数字
 */
var convertToChinaNum = function convertToChinaNum(num) {
  if (!num || isNaN(num)) {
    return '零';
  }
  var english = num.toString().split('');
  var result = '';
  for (var i = 0; i < english.length; i++) {
    result += china[Number(english[i])];
  }
  return result;
};

/**
 * 根据字典值来获取其字典名，或者根据字典名获取字典值
 * @param {String|Array} dictData 字典值 或 字典名
 * @param {String} dictName 字典分类
 * @param {String} type 获取类型，value：字典值来获取其字典名，name：根据字典名获取字典值
 * @return {String} 字典名
 */
exports.convertToChinaNum = convertToChinaNum;
var getDicName = function getDicName(dictData, dictName) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
  if (typeof dictData === 'string' && dictData.indexOf(',') !== -1) {
    dictData = dictData.split(',');
  }
  var dicMap = _configStore.default.dictionary[dictName];
  var dicNameFormatter = function dicNameFormatter(dicMap) {
    var data;
    if (type === 'value') {
      if (Reflect.toString.call(dictData) === '[object Array]') {
        data = dictData.map(function (item) {
          return dicMap.get(item).dictName;
        }).join(',');
      } else {
        data = dicMap.get(dictData).dictName;
      }
    } else if (type === 'name') {
      var values = Array.from(dicMap.values());
      for (var i = 0; i < values.length; i++) {
        if (values[i].dictName === dictData) {
          data = values[i].dictValue;
          break;
        }
      }
    }
    return data;
  };
  return new Promise(function (resolve, reject) {
    if (dicMap && dicMap.size) {
      resolve(dicNameFormatter(dicMap));
    } else {
      var mapWatch = _configStore.default.$watch(function () {
        return _configStore.default.dictionary[dictName];
      }, function (dicMap) {
        mapWatch();
        resolve(dicNameFormatter(dicMap));
      });
      _configStore.default.getDictMap(dictName);
    }
  });
};
exports.getDicName = getDicName;
var requestAnimationFrame = function requestAnimationFrame(callback) {
  setTimeout(function () {
    callback();
  }, 16);
};

// 时间选择器组件数据
exports.requestAnimationFrame = requestAnimationFrame;
var date = new Date();
var yearArr = [];
var monthArr = [];
var dayArr = [];
var hourArr = [];
var minuteArr = [];
for (var i = 1990; i <= date.getFullYear(); i++) {
  yearArr.push(i.toString());
}
for (var _i = 1; _i <= 12; _i++) {
  monthArr.push(_i < 10 ? '0' + _i : _i.toString());
}
for (var _i2 = 0; _i2 <= 23; _i2++) {
  hourArr.push(_i2 < 10 ? '0' + _i2 : _i2.toString());
}
for (var _i3 = 0; _i3 <= 59; _i3++) {
  minuteArr.push(_i3 < 10 ? '0' + _i3 : _i3.toString());
}
var years = yearArr;
exports.years = years;
var months = monthArr;
exports.months = months;
var hours = hourArr;
exports.hours = hours;
var minutes = minuteArr;
exports.minutes = minutes;
var seconds = minuteArr;
exports.seconds = seconds;
var getCssSize = function getCssSize(val) {
  var reg = /^[0-9]*$/g;
  return typeof val === 'number' || reg.test(val) ? val + 'px' : val;
};

/**
 * 获取第一个匹配选择器 selector 的节点信息
 * @param {String} selector 类似于 CSS 的选择器
 * @param {Object} _this 当前上下文
 * @return {Object} 节点信息
 */
exports.getCssSize = getCssSize;
var getNodeInfo = function getNodeInfo(selector, _this) {
  return new Promise(function (resolve) {
    uni.createSelectorQuery().in(_this).select(selector).boundingClientRect(function (data) {
      resolve(data);
    }).exec();
  });
};
exports.getNodeInfo = getNodeInfo;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 197:
/*!**************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-form/validate.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  email: {
    reg: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    message: '请输入正确的电子邮箱'
  },
  phone: {
    reg: /^1[34578]\d{9}$/,
    message: '请输入正确的手机号码'
  },
  IDcard: {
    reg: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
    message: '请输入正确的身份证'
  }
};
exports.default = _default;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (!res) {
          resolve(res);
          return;
        }
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|rpx2px|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _Object$assign = Object.assign({}, wx.getWindowInfo(), {
      platform: wx.getDeviceInfo().platform
    }),
    windowWidth = _Object$assign.windowWidth,
    pixelRatio = _Object$assign.pixelRatio,
    platform = _Object$assign.platform; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getAppBaseInfo().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getAppBaseInfo().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  rpx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = (language || '').replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__B155830",
    appName: "base",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "4.45",
    uniCompilerVersion: "4.45",
    uniRuntimeVersion: "4.45",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined,
    isUniAppX: false
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = (language || '').replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__B155830",
      appName: "base",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme,
      isUniAppX: false,
      uniPlatform: undefined || "mp-weixin",
      uniCompileVersion: "4.45",
      uniCompilerVersion: "4.45",
      uniRuntimeVersion: "4.45"
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"base","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getAppBaseInfo().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2024 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"base","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"base","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"base","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"base","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!********************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/pages.json ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 294:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 295)();
module.exports = runtime;

/***/ }),

/***/ 295:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 296:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 307:
/*!*****************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/utils/file-handler.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadHandler = downloadHandler;
exports.downloadToTemp = downloadToTemp;
exports.fileSizeFormatter = fileSizeFormatter;
exports.getFileInfo = exports.getFileExtension = void 0;
exports.getFileUrl = getFileUrl;
exports.handleUpload = handleUpload;
exports.shareFile = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 294));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 296));
var _configStore = _interopRequireDefault(__webpack_require__(/*! ../utils/config-store */ 34));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var FileSystemManager = wx.getFileSystemManager();

/**
 * 比如可以根据附件信息的 fileId 拼出文件的下载地址
 * @param {String} fileId 线上服务器的文件id
 * @return {String} 完整的文件地址
 */
function getFileUrl(fileId) {
  return _configStore.default.downloadConfig.getUrlFun(fileId);
}

/**
 * 辅助函数，下载文件方法封装
 * @param {String} url 下载地址
 * @return {Promise} 文件临时路径
 */
function downloadFile(url) {
  return new Promise(function (resolve, reject) {
    wx.downloadFile({
      url: url,
      header: _configStore.default.downloadConfig.header,
      timeout: _configStore.default.downloadConfig.timeout,
      filePath: _configStore.default.downloadConfig.filePath,
      success: function success(res) {
        if (res.tempFilePath.indexOf('.json') !== -1) {
          uni.showToast({
            title: '文件下载失败',
            icon: 'error'
          });
          reject('文件下载失败');
        } else {
          resolve(res.tempFilePath);
        }
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
}

/**
 * 下载文件，保存临时地址
 * @param {String} fileId 文件id，需拼接成url
 * @return {Promise} 文件临时路径
 */
function downloadToTemp(_x) {
  return _downloadToTemp.apply(this, arguments);
}
/**
 * 辅助函数，下载文件并保存到本地
 * @param {String} fileId 线上服务器的文件id
 */
function _downloadToTemp() {
  _downloadToTemp = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(fileId) {
    var _yield$hasTempPath, path, url, _path, fileManager;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            uni.showLoading({
              title: '文件下载中',
              mask: true
            });
            _context2.prev = 1;
            _context2.next = 4;
            return hasTempPath(fileId);
          case 4:
            _yield$hasTempPath = _context2.sent;
            path = _yield$hasTempPath.path;
            uni.hideLoading();
            return _context2.abrupt("return", path);
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            url = getFileUrl(fileId);
            _context2.next = 15;
            return downloadFile(url);
          case 15:
            _path = _context2.sent;
            fileManager = uni.getStorageSync('CONFIGUI_FILE_MANAGER') || {};
            fileManager[fileId] = {
              type: 'temp',
              path: _path
            };
            uni.setStorageSync('CONFIGUI_FILE_MANAGER', fileManager);
            uni.hideLoading();
            return _context2.abrupt("return", _path);
          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return _downloadToTemp.apply(this, arguments);
}
function downloadToStorage(fileId) {
  uni.showLoading({
    title: '文件下载中',
    mask: true
  });
  var fileManager = uni.getStorageSync('CONFIGUI_FILE_MANAGER') || {};
  var url = getFileUrl(fileId);
  downloadFile(url).then(function (path) {
    var storagePath = FileSystemManager.saveFileSync(path);
    fileManager[fileId] = {
      path: storagePath,
      type: 'storage'
    };
    uni.setStorageSync('CONFIGUI_FILE_MANAGER', fileManager);
    uni.showToast({
      title: '下载完成'
    });
  }).catch(function (e) {
    uni.hideLoading();
    console.warn(e);
  });
}

/**
 * 辅助函数，判断是否存在文件临时路径
 * @param {String} fileId 保存在服务器上的文件id
 * @return {Promise}
 */
function hasTempPath(fileId) {
  var fileManager = uni.getStorageSync('CONFIGUI_FILE_MANAGER');
  return new Promise(function (resolve, reject) {
    // 存在临时文件和本地文件的情况下
    if (fileManager && fileManager[fileId]) {
      var info = fileManager[fileId];
      FileSystemManager.getFileInfo({
        filePath: info.path,
        success: function success() {
          resolve(info);
        },
        fail: function fail() {
          // 缓存中存在路径，但手机不存在该临时或本地文件
          delete fileManager[fileId];
          uni.setStorageSync('CONFIGUI_FILE_MANAGER', fileManager);
          reject(false);
        }
      });
    } else {
      reject(false);
    }
  });
}

/**
 * 先判断是否存在临时路径或本地路径；
 * 如果存在路径，先判断是否存在该文件；
 * 如果存在再判断路径类型，如果是临时路径则把文件保存到本地，如果是本地路径则不处理；
 * 如果不存在路径，则直接下载并保存到本地
 * @param {String} fileId 保存在服务器上的文件id
 */
function downloadHandler(fileId) {
  return hasTempPath(fileId).then(function (info) {
    // type - storage：本地文件，temp：临时文件
    if (info.type === 'storage') {
      return uni.showToast({
        title: '该文件已下载',
        icon: 'none'
      });
    } else {
      var fileManager = uni.getStorageSync('CONFIGUI_FILE_MANAGER') || {};
      // 把临时文件保存到本地，传入临时文件路径，返回本地文件路径
      var storagePath = FileSystemManager.saveFileSync(info.path);
      fileManager[fileId] = {
        path: storagePath,
        type: 'storage'
      };
      uni.setStorageSync('CONFIGUI_FILE_MANAGER', fileManager);
      uni.showToast({
        title: '文件下载成功'
      });
    }
  }).catch(function () {
    // 重新下载
    downloadToStorage(fileId);
  });
}

/**
 * 上传文件方法封装
 * @param {Object} data
 * @param {String} data.path 要上传文件资源的路径 (本地路径)
 * @return {Promise} 上传后的结果
 */
function handleUpload() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!data.path) return Promise.reject('上传失败，请传入本地路径');
  var uploadConfig = _configStore.default.uploadConfig;
  if (!uploadConfig.url) throw new Error('请配置上传地址');
  return new Promise(function (resolve, reject) {
    uni.uploadFile({
      url: uploadConfig.url,
      filePath: data.path,
      name: 'file',
      header: _objectSpread({
        'Content-Type': 'multipart/form-data'
      }, uploadConfig.header),
      success: function success(uploadFileRes) {
        var res = JSON.parse(uploadFileRes.data);
        uploadConfig.success({
          res: res,
          resolve: resolve,
          reject: reject
        });
      }
    });
  });
}

/**
 * 将文件大小字节转换成KB，MB，GB，TB
 * @param {Number} size 文件大小字节
 * @return {String} 带单位的大小
 */
function fileSizeFormatter(size) {
  if (!size && size !== 0) return '';
  if (size < Math.pow(1024, 2)) return (size / Math.pow(1024, 1)).toFixed(2) + ' KB';
  if (size < Math.pow(1024, 3)) return (size / Math.pow(1024, 2)).toFixed(2) + ' MB';
  if (size < Math.pow(1024, 4)) return (size / Math.pow(1024, 3)).toFixed(2) + ' GB';
  return (size / Math.pow(1024, 4)).toFixed(2) + ' TB';
}

/**
 * 转发文件到聊天
 * @param {String} fileId 线上服务器的文件id，需拼接成url
 * @param {String} fileName 自定义文件名，若留空则使用文件本身的文件名
 */
var shareFile = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(fileId) {
    var fileName,
      tempFilePath,
      _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fileName = _args.length > 1 && _args[1] !== undefined ? _args[1] : '';
            _context.next = 3;
            return downloadToTemp(fileId);
          case 3:
            tempFilePath = _context.sent;
            _context.next = 6;
            return wx.shareFileMessage({
              filePath: tempFilePath,
              // 要分享的文件地址，必须为本地路径或临时路径
              fileName: fileName
            });
          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return function shareFile(_x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * 获取该小程序下的 本地临时文件 或 本地缓存文件 信息
 * @param {String} path 要读取的文件路径 (本地路径)
 * @return {Promise}
 */
exports.shareFile = shareFile;
var getFileInfo = function getFileInfo(path) {
  var digestAlgorithm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'md5';
  return new Promise(function (resolve, reject) {
    FileSystemManager.getFileInfo({
      filePath: path,
      digestAlgorithm: digestAlgorithm,
      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  });
};

/**
 * 获取文件名的扩展名。
 * 
 * @param {string} filename - 要获取扩展名的文件名。
 * @returns {string} 文件名的扩展名，如果没有扩展名则返回空字符串。
 * 
 * 使用正则表达式匹配文件名中的后缀名。正则表达式解释如下：
 * - \.([^.]+)?: 匹配一个点（.）后面跟着一个或多个非点字符，这部分是可选的。
 * - $: 匹配字符串的结尾。
 * 
 * 如果匹配成功，返回匹配到的扩展名；否则返回空字符串。
 */
exports.getFileInfo = getFileInfo;
var getFileExtension = function getFileExtension(filename) {
  // 使用正则表达式匹配文件名中的后缀名
  var regex = /(?:\.([^.]+))?$/;
  var match = filename.match(regex);
  return match ? match[1] : '';
};
exports.getFileExtension = getFileExtension;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 32:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 33:
/*!**********************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni.promisify.adaptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
uni.addInterceptor({
  returnValue: function returnValue(res) {
    if (!(!!res && (_typeof(res) === "object" || typeof res === "function") && typeof res.then === "function")) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        return res[0] ? reject(res[0]) : resolve(res[1]);
      });
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 34:
/*!*****************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/utils/config-store.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var ConfigStore = new _vue.default({
  data: {
    dictionary: {},
    dictConfig: {
      getFun: undefined,
      // {Function} 获取字典的接口
      key: '' // 字典编码的字段名
    },

    uploadConfig: {
      url: '',
      // 上传接口
      header: {},
      // 请求头
      success: undefined // {Function} 上传成功后的回调，args：res resolve reject，需返回 resolve 或者 reject。
    },

    downloadConfig: {
      getUrlFun: undefined,
      // {Function} 获取下载路径，args：fileId 文件id，需返回 String 类型 url。
      header: {},
      // HTTP 请求的 Header，Header 中不能设置 Referer
      timeout: 1000 * 60 * 5,
      // 5分钟
      filePath: undefined // 指定文件下载后存储的路径 (本地路径)
    },

    geoConfig: {
      getFun: undefined,
      // {Function} 获取地理信息接口, 传参: code 区域编码, 必须返回 Array 类型
      key: '',
      // 地理信息编码的字段名
      value: '' // 地理信息编码对应的中文名的字段名
    },

    province: {},
    // 省份, key: 省份区域编码, value: 省份数据
    city: {},
    // 城市, key: 省份区域编码, value: {Object} 该省份的城市集合
    area: {},
    // 区域, key: 城市区域编码, value: {Object} 该城市的区域集合
    hasNet: true,
    // 是否有网络
    networkType: '',
    // 网络类型
    env: '',
    // 环境类型
    maxZIndex: 10,
    // 默认 z-index 最大索引
    systemInfo: {} // 系统信息
  },

  methods: {
    init: function init(params) {
      // TODO: Fetch dictionary from API
      params.dictConfig && Object.assign(this.dictConfig, params.dictConfig);
      params.uploadConfig && Object.assign(this.uploadConfig, params.uploadConfig);
      params.downloadConfig && Object.assign(this.downloadConfig, params.downloadConfig);
      params.geoConfig && Object.assign(this.geoConfig, params.geoConfig);
      this.systemInfo = this.getSystemInfo();
      this.env = this.getEnv();
      uni.onNetworkStatusChange(this.networkChange);
    },
    networkChange: function networkChange(res) {
      this.hasNet = res.isConnected;
      this.networkType = res.networkType;
    },
    getEnv: function getEnv() {
      var env = '';
      if (this.systemInfo.platform === 'devtools') {
        env = 'devtools';
      }
      // 企微打开小程序，企微登录
      else if (this.systemInfo.environment === 'wxwork') {
        env = 'QW';
      }
      // 微信打开小程序，微信登录
      else if (this.systemInfo.host.env === 'WeChat') {
        env = 'WX';
      }
      // 下面这一行代码，仅调试用
      // env = 'QW'
      return env;
    },
    getSystemInfo: function getSystemInfo() {
      return wx.getSystemInfoSync();
    },
    /**
     * 获取字典并存储到 ConfigStore 中
     * @param {String} code 字典编码
     * @return {Promise} 返回字典Map
     */
    getDictMap: function getDictMap(code) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        var count = 0;
        /**
         * 获取字典。
         * 如果获取失败，则会重新请求，至多请求3次，都失败则返回失败信息。
         */
        var getMap = function getMap() {
          if (count === 3) {
            return reject('字典调用失败：' + dictTypeCodes);
          }
          count += 1;
          _this.dictConfig.getFun(code).then(function (res) {
            // list 字典列表
            var list = res.list;
            if (!list || !list.length) return getMap();
            var dicMap = new Map();
            for (var i = 0; i < list.length; i++) {
              dicMap.set(list[i][_this.dictConfig.key], list[i]);
            }
            _this.dictionary[code] = dicMap;
            resolve(dicMap);
          }).catch(function (err) {
            console.warn(err);
            getMap();
          });
        };
        var dictMap = state[dictTypeCodes];
        // 如果字典已经请求过，则直接返回
        if (dictMap && dictMap.size > 0 || Reflect.has(_this.dictionary, code)) {
          return resolve(_this.dictionary[code]);
        }
        // 创建该字典的key，为了方便判断该字典是否已经请求过
        _this.dictionary[code] = undefined;
        getMap();
      });
    },
    /**
     * 获取省份数据，如果没有获取地理信息的接口，则不会执行获取
     */
    getProvince: function getProvince() {
      var _this2 = this;
      if (!this.geoConfig.getFun) return;
      this.geoConfig.getFun().then(function (res) {
        _this2.province = res;
      });
    },
    /**
     * 缓存已获取的地理信息数据
     * @param {String} type 城市、区域 city area
     * @param {String} code 区域编码
     * @param {Array} list 地理信息列表
     */
    setGeoData: function setGeoData(type, code, list) {
      var data = {};
      for (var i = 0; i < list.length; i++) {
        data[list[i][this.geoConfig.key]] = list[i];
      }
      this[type][code] = data;
    },
    setZIndex: function setZIndex(number) {
      this.maxZIndex = number;
    }
  }
});
var _default = ConfigStore;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 39:
/*!*************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/static/logo.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 395:
/*!*********************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/components/co-datetime-picker/util.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;
exports.addZero = addZero;
exports.checkDate = checkDate;
exports.dateCompare = dateCompare;
exports.fixIosDateFormat = fixIosDateFormat;
exports.getDate = getDate;
exports.getDateTime = getDateTime;
exports.getDefaultSecond = getDefaultSecond;
exports.getTime = getTime;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var Calendar = /*#__PURE__*/function () {
  function Calendar() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      selected = _ref.selected,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      range = _ref.range;
    (0, _classCallCheck2.default)(this, Calendar);
    // 当前日期
    this.date = this.getDateObj(new Date()); // 当前初入日期
    // 打点信息
    this.selected = selected || [];
    // 起始时间
    this.startDate = startDate;
    // 终止时间
    this.endDate = endDate;
    // 是否范围选择
    this.range = range;
    // 多选状态
    this.cleanMultipleStatus();
    // 每周日期
    this.weeks = {};
    this.lastHover = false;
  }
  /**
   * 设置日期
   * @param {Object} date
   */
  (0, _createClass2.default)(Calendar, [{
    key: "setDate",
    value: function setDate(date) {
      var selectDate = this.getDateObj(date);
      this.getWeeks(selectDate.fullDate);
    }

    /**
     * 清理多选状态
     */
  }, {
    key: "cleanMultipleStatus",
    value: function cleanMultipleStatus() {
      this.multipleStatus = {
        before: '',
        after: '',
        data: []
      };
    }
  }, {
    key: "setStartDate",
    value: function setStartDate(startDate) {
      this.startDate = startDate;
    }
  }, {
    key: "setEndDate",
    value: function setEndDate(endDate) {
      this.endDate = endDate;
    }
  }, {
    key: "getPreMonthObj",
    value: function getPreMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      var oldMonth = date.getMonth();
      date.setMonth(oldMonth - 1);
      var newMonth = date.getMonth();
      if (oldMonth !== 0 && newMonth - oldMonth === 0) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }
  }, {
    key: "getNextMonthObj",
    value: function getNextMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      var oldMonth = date.getMonth();
      date.setMonth(oldMonth + 1);
      var newMonth = date.getMonth();
      if (newMonth - oldMonth > 1) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }

    /**
     * 获取指定格式Date对象
     */
  }, {
    key: "getDateObj",
    value: function getDateObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      return {
        fullDate: getDate(date),
        year: date.getFullYear(),
        month: addZero(date.getMonth() + 1),
        date: addZero(date.getDate()),
        day: date.getDay()
      };
    }

    /**
     * 获取上一个月日期集合
     */
  }, {
    key: "getPreMonthDays",
    value: function getPreMonthDays(amount, dateObj) {
      var result = [];
      for (var i = amount - 1; i >= 0; i--) {
        var month = dateObj.month - 1;
        result.push({
          date: new Date(dateObj.year, month, -i).getDate(),
          month: month,
          disable: true
        });
      }
      return result;
    }
    /**
     * 获取本月日期集合
     */
  }, {
    key: "getCurrentMonthDays",
    value: function getCurrentMonthDays(amount, dateObj) {
      var _this = this;
      var result = [];
      var fullDate = this.date.fullDate;
      var _loop = function _loop(i) {
        var currentDate = "".concat(dateObj.year, "-").concat(dateObj.month, "-").concat(addZero(i));
        var isToday = fullDate === currentDate;
        // 获取打点信息
        var info = _this.selected && _this.selected.find(function (item) {
          if (_this.dateEqual(currentDate, item.date)) {
            return item;
          }
        });

        // 日期禁用
        var disableBefore = true;
        var disableAfter = true;
        if (_this.startDate) {
          disableBefore = dateCompare(_this.startDate, currentDate);
        }
        if (_this.endDate) {
          disableAfter = dateCompare(currentDate, _this.endDate);
        }
        var multiples = _this.multipleStatus.data;
        var multiplesStatus = -1;
        if (_this.range && multiples) {
          multiplesStatus = multiples.findIndex(function (item) {
            return _this.dateEqual(item, currentDate);
          });
        }
        var checked = multiplesStatus !== -1;
        result.push({
          fullDate: currentDate,
          year: dateObj.year,
          date: i,
          multiple: _this.range ? checked : false,
          beforeMultiple: _this.isLogicBefore(currentDate, _this.multipleStatus.before, _this.multipleStatus.after),
          afterMultiple: _this.isLogicAfter(currentDate, _this.multipleStatus.before, _this.multipleStatus.after),
          month: dateObj.month,
          disable: _this.startDate && !dateCompare(_this.startDate, currentDate) || _this.endDate && !dateCompare(currentDate, _this.endDate),
          isToday: isToday,
          userChecked: false,
          extraInfo: info
        });
      };
      for (var i = 1; i <= amount; i++) {
        _loop(i);
      }
      return result;
    }
    /**
     * 获取下一个月日期集合
     */
  }, {
    key: "_getNextMonthDays",
    value: function _getNextMonthDays(amount, dateObj) {
      var result = [];
      var month = dateObj.month + 1;
      for (var i = 1; i <= amount; i++) {
        result.push({
          date: i,
          month: month,
          disable: true
        });
      }
      return result;
    }

    /**
     * 获取当前日期详情
     * @param {Object} date
     */
  }, {
    key: "getInfo",
    value: function getInfo(date) {
      var _this2 = this;
      if (!date) {
        date = new Date();
      }
      return this.calendar.find(function (item) {
        return item.fullDate === _this2.getDateObj(date).fullDate;
      });
    }

    /**
     * 比较时间是否相等
     */
  }, {
    key: "dateEqual",
    value: function dateEqual(before, after) {
      before = new Date(fixIosDateFormat(before));
      after = new Date(fixIosDateFormat(after));
      return before.valueOf() === after.valueOf();
    }

    /**
     *  比较真实起始日期
     */
  }, {
    key: "isLogicBefore",
    value: function isLogicBefore(currentDate, before, after) {
      var logicBefore = before;
      if (before && after) {
        logicBefore = dateCompare(before, after) ? before : after;
      }
      return this.dateEqual(logicBefore, currentDate);
    }
  }, {
    key: "isLogicAfter",
    value: function isLogicAfter(currentDate, before, after) {
      var logicAfter = after;
      if (before && after) {
        logicAfter = dateCompare(before, after) ? after : before;
      }
      return this.dateEqual(logicAfter, currentDate);
    }

    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */
  }, {
    key: "geDateAll",
    value: function geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split('-');
      var ae = end.split('-');
      var db = new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
      for (var k = unixDb; k <= unixDe;) {
        k = k + 24 * 60 * 60 * 1000;
        arr.push(this.getDateObj(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }

    /**
     *  获取多选状态
     */
  }, {
    key: "setMultiple",
    value: function setMultiple(fullDate) {
      if (!this.range) return;
      var _this$multipleStatus = this.multipleStatus,
        before = _this$multipleStatus.before,
        after = _this$multipleStatus.after;
      if (before && after) {
        if (!this.lastHover) {
          this.lastHover = true;
          return;
        }
        this.multipleStatus.before = fullDate;
        this.multipleStatus.after = '';
        this.multipleStatus.data = [];
        this.multipleStatus.fulldate = '';
        this.lastHover = false;
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
          this.lastHover = false;
        } else {
          this.multipleStatus.after = fullDate;
          if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
          this.lastHover = true;
        }
      }
      this.getWeeks(fullDate);
    }

    /**
     *  鼠标 hover 更新多选状态
     */
  }, {
    key: "setHoverMultiple",
    value: function setHoverMultiple(fullDate) {
      if (!this.range || this.lastHover) return;
      var before = this.multipleStatus.before;
      if (!before) {
        this.multipleStatus.before = fullDate;
      } else {
        this.multipleStatus.after = fullDate;
        if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
      }
      this.getWeeks(fullDate);
    }

    /**
     * 更新默认值多选状态
     */
  }, {
    key: "setDefaultMultiple",
    value: function setDefaultMultiple(before, after) {
      this.multipleStatus.before = before;
      this.multipleStatus.after = after;
      if (before && after) {
        if (dateCompare(before, after)) {
          this.multipleStatus.data = this.geDateAll(before, after);
          this.getWeeks(after);
        } else {
          this.multipleStatus.data = this.geDateAll(after, before);
          this.getWeeks(before);
        }
      }
    }

    /**
     * 获取每周数据
     * @param {Object} dateData
     */
  }, {
    key: "getWeeks",
    value: function getWeeks(dateData) {
      var _this$getDateObj = this.getDateObj(dateData),
        year = _this$getDateObj.year,
        month = _this$getDateObj.month;
      var preMonthDayAmount = new Date(year, month - 1, 1).getDay();
      var preMonthDays = this.getPreMonthDays(preMonthDayAmount, this.getDateObj(dateData));
      var currentMonthDayAmount = new Date(year, month, 0).getDate();
      var currentMonthDays = this.getCurrentMonthDays(currentMonthDayAmount, this.getDateObj(dateData));
      var nextMonthDayAmount = 42 - preMonthDayAmount - currentMonthDayAmount;
      var nextMonthDays = this._getNextMonthDays(nextMonthDayAmount, this.getDateObj(dateData));
      var calendarDays = [].concat((0, _toConsumableArray2.default)(preMonthDays), (0, _toConsumableArray2.default)(currentMonthDays), (0, _toConsumableArray2.default)(nextMonthDays));
      var weeks = new Array(6);
      for (var i = 0; i < calendarDays.length; i++) {
        var index = Math.floor(i / 7);
        if (!weeks[index]) {
          weeks[index] = new Array(7);
        }
        weeks[index][i % 7] = calendarDays[i];
      }
      this.calendar = calendarDays;
      this.weeks = weeks;
    }
  }]);
  return Calendar;
}();
exports.Calendar = Calendar;
function getDateTime(date, hideSecond) {
  return "".concat(getDate(date), " ").concat(getTime(date, hideSecond));
}
function getDate(date) {
  date = fixIosDateFormat(date);
  date = new Date(date);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return "".concat(year, "-").concat(addZero(month), "-").concat(addZero(day));
}
function getTime(date, hideSecond) {
  date = fixIosDateFormat(date);
  date = new Date(date);
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return hideSecond ? "".concat(addZero(hour), ":").concat(addZero(minute)) : "".concat(addZero(hour), ":").concat(addZero(minute), ":").concat(addZero(second));
}
function addZero(num) {
  if (num < 10) {
    num = "0".concat(num);
  }
  return num;
}
function getDefaultSecond(hideSecond) {
  return hideSecond ? '00:00' : '00:00:00';
}
function dateCompare(startDate, endDate) {
  startDate = new Date(fixIosDateFormat(startDate));
  endDate = new Date(fixIosDateFormat(endDate));
  return startDate <= endDate;
}
function checkDate(date) {
  var dateReg = /((19|20)\d{2})(-|\/)\d{1,2}(-|\/)\d{1,2}/g;
  return date.match(dateReg);
}
var dateTimeReg = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])( [0-5]?[0-9]:[0-5]?[0-9]:[0-5]?[0-9])?$/;
function fixIosDateFormat(value) {
  if (typeof value === 'string' && dateTimeReg.test(value)) {
    value = value.replace(/-/g, '/');
  }
  return value;
}

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 415:
/*!**************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/icons sync ^\.\/.*\.js$ ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./excel.js": 416,
	"./folder.js": 417,
	"./jpg.js": 418,
	"./other.js": 419,
	"./pdf.js": 420,
	"./png.js": 421,
	"./ppt.js": 422,
	"./txt.js": 423,
	"./video.js": 424,
	"./word.js": 425,
	"./zip.js": 426
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 415;

/***/ }),

/***/ 416:
/*!*****************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/icons/excel.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzIzNTE4OTk5NDk5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5ODkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUzNS42MDExMjkgMGg2OC45OTcxNzh2OTUuMjQ3NDEzaDM0OS4yMDAzNzZjMTkuNzQ3ODgzIDAuODQyODk3IDQxLjMwMTk3NiAwIDU4LjQwMDc1MyAxMi4wNDEzOTIgMTIuMDQxMzkyIDE3LjU4MDQzMyAxMC41OTY0MjUgMzkuOTc3NDIyIDEyLjA0MTM5MiA2MC4yMDY5NjJxLTAuOTYzMzExIDMxMC4xODYyNjUgMCA2MTkuODkwODc1YzAgMzQuNjc5MjEgMy4xMzA3NjIgNzAuMDgwOTAzLTMuOTczNjYgMTA0LjE1ODA0My00LjU3NTcyOSAyNC44MDUyNjgtMzMuNzE1ODk4IDI1LjQwNzMzOC01My4xMDI1NCAyNi4yNTAyMzVINjA1LjMyMDc5VjEwMjMuNTE4MzQ0aC03Mi4yNDgzNTNDMzU1LjEwMDY1OSA5OTEuMDA2NTg1IDE3Ny40OTAxMjIgOTYwLjU0MTg2MyAwIDkyOC43NTI1ODdWOTUuMzY3ODI3QzE3OC41NzM4NDggNjMuNTc4NTUxIDM1Ny4xNDc2OTUgMzIuMjcwOTMxIDUzNS42MDExMjkgMHoiIGZpbGw9IiMyMDcyNDUiIHAtaWQ9IjE5OTAiPjwvcGF0aD48cGF0aCBkPSJNNjA0LjU5ODMwNyAxMzEuMDEwMzQ4aDM4My44Nzk1ODZ2NzUwLjA1ODMyNkg2MDQuNTk4MzA3di03MS40MDU0NTdoOTMuMDc5OTYydi04My4zMjY0MzRoLTkzLjA3OTk2MnYtNDguMTY1NTY5aDkzLjA3OTk2MnYtODIuODQ0Nzc5aC05My4wNzk5NjJ2LTQ3LjU2MzVoOTMuMDc5OTYydi04My40NDY4NDhoLTkzLjA3OTk2MnYtNDguMTY1NTdoOTMuMDc5OTYydi04Mi43MjQzNjVoLTkzLjA3OTk2MnYtNDguMTY1NTY5aDkzLjA3OTk2MnYtODIuODQ0Nzc5aC05My4wNzk5NjJ6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIxOTkxIj48L3BhdGg+PHBhdGggZD0iTTc0NC4yNzg0NTcgMjAyLjQxNTgwNGgxNjIuNzk5NjI0djgzLjMyNjQzNUg3NDQuMjc4NDU3eiIgZmlsbD0iIzIwNzI0NSIgcC1pZD0iMTk5MiI+PC9wYXRoPjxwYXRoIGQ9Ik0zNDQuNTA0MjMzIDMxNC4wMzk1MTFxMzkuNjE2MTgxLTIuODg5OTM0IDc5LjExMTk0OC00LjkzNjk3MS00Ni42MDAxODggOTcuNjU1NjkxLTkzLjgwMjQ0NiAxOTUuMTkwOTY5YzMxLjkwOTY5IDY2LjU4ODg5OSA2NC42NjIyNzcgMTMyLjQ1NTMxNSA5Ni4zMzExMzggMTk5LjUyNTg3bC04NC4yODk3NDYtNS40MTg2MjZjLTE5Ljc0Nzg4My00OS43MzA5NS00My44MzA2NjgtOTcuNjU1NjkxLTU4LjAzOTUxMS0xNDkuNjc0NTA3LTE1Ljc3NDIyNCA0OC4xNjU1NjktMzguNDEyMDQxIDk0LjA0MzI3NC01Ni41OTQ1NDQgMTQxLjM2NTk0Ni0yNS40MDczMzggMC01MC45MzUwODktMS40NDQ5NjctNzYuMzQyNDI3LTIuNTI4NjkyIDI5Ljg2MjY1My02MC4yMDY5NjEgNTguNzYxOTk0LTEyMC40MTM5MjMgODkuNTg3OTU5LTE3OS43Nzc5ODctMjYuMjUwMjM1LTYxLjI5MDY4Ny01NC45MDg3NDktMTIxLjM3NzIzNC04MS44ODE0NjgtMTgyLjQyNzA5M2w3Ni43MDM2NjktNC40NTUzMTZjMTcuMzM5NjA1IDQ2LjYwMDE4OCAzNi4xMjQxNzcgOTIuNDc3ODkzIDUwLjU3Mzg0OCAxNDAuMjgyMjIxIDE2LjEzNTQ2Ni01MC42OTQyNjIgMzkuMjU0OTM5LTk4LjI1Nzc2MSA1OC42NDE1OC0xNDcuMTQ1ODE0eiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iMTk5MyI+PC9wYXRoPjxwYXRoIGQ9Ik03NDQuMjc4NDU3IDMzMy40MjYxNTJoMTYyLjc5OTYyNHY4My4zMjY0MzVINzQ0LjI3ODQ1N3pNNzQ0LjI3ODQ1NyA0NjQuMzE2MDg3aDE2Mi43OTk2MjR2ODMuNDQ2ODQ4SDc0NC4yNzg0NTd6TTc0NC4yNzg0NTcgNTk1LjMyNjQzNWgxNjIuNzk5NjI0djgzLjMyNjQzNEg3NDQuMjc4NDU3ek03NDQuMjc4NDU3IDcyNi4zMzY3ODNoMTYyLjc5OTYyNHY4My4zMjY0MzRINzQ0LjI3ODQ1N3oiIGZpbGw9IiMyMDcyNDUiIHAtaWQ9IjE5OTQiPjwvcGF0aD48L3N2Zz4=';
exports.default = _default;

/***/ }),

/***/ 417:
/*!******************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/icons/folder.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzIzNTE5ODE1MTI0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEzMjM0IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik05NzkuMDk2NDkzIDk4MC45NTA0ODZINDQuOTA0MDYxQzE5LjgyOTg5OCA5ODAuOTUwNDg2IDAuMDAwMjc3IDk2MC40NDI4MTEgMC4wMDAyNzcgOTM1LjgzOTEzNXYtNzQwLjA0NzU2N2MwLTI1LjE4NDg2NSAyMC40MTA4MTEtNDUuMTExMzUxIDQ0LjkwMzc4NC00NS4xMTEzNTJoOTM0LjE5MjQzMmMyNS4wNzQxNjIgMCA0NC45MDM3ODQgMjAuNTA3Njc2IDQ0LjkwMzc4NCA0NS4xMTEzNTJ2NzQwLjA0NzU2N2MwIDI1LjE4NDg2NS0yMC40MTA4MTEgNDUuMTExMzUxLTQ0LjkwMzc4NCA0NS4xMTEzNTF6IiBmaWxsPSIjRkZBMDAwIiBwLWlkPSIxMzIzNSI+PC9wYXRoPjxwYXRoIGQ9Ik01MTIuMDAwMjc3IDM0NC40MDk5NDZIMC4wMDAyNzdWMTEyLjkwMjkxOWE0NS4wOTc1MTQgNDUuMDk3NTE0IDAgMCAxIDQ0LjkwMzc4NC00NS4yNDk3M2gzNTAuNDcwOTE4YzE5LjgyOTYyMiAwIDM3LjMyMDY0OSAxMi45MjQ1NDEgNDMuMTQ2Mzc5IDMyLjMxMTM1Mkw1MTIuMDAwMjc3IDM0NC40MjM3ODR6IiBmaWxsPSIjRkZBMDAwIiBwLWlkPSIxMzIzNiI+PC9wYXRoPjxwYXRoIGQ9Ik05MDkuNjk5NzM2IDkyNS41OTkxMzVIMTE0LjMwMDgxN2MtMjUuMTg0ODY1IDAtNDUuMTExMzUxLTIwLjEzNDA1NC00NS4xMTEzNTEtNDQuMjgxMDgxdi02MDMuMzI5NzNjMC0yNC43MjgyMTYgMjAuNDkzODM4LTQ0LjI4MTA4MSA0NS4xMTEzNTEtNDQuMjgxMDgxaDc5NS4zOTg5MTljMjUuMTg0ODY1IDAgNDUuMTExMzUxIDIwLjEzNDA1NCA0NS4xMTEzNTIgNDQuMjgxMDgxdjYwMy4zMjk3M2MwLjU2NzM1MSAyNC4xNDcwMjctMTkuOTI2NDg2IDQ0LjI4MTA4MS00NS4xMTEzNTIgNDQuMjgxMDgxeiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iMTMyMzciPjwvcGF0aD48cGF0aCBkPSJNOTc5LjA5NjQ5MyA5ODAuOTUwNDg2SDQ0LjkwNDA2MUMxOS44Mjk4OTggOTgwLjk1MDQ4NiAwLjAwMDI3NyA5NjAuODAyNTk1IDAuMDAwMjc3IDkzNi42Mjc4OTJWMzYxLjA1Njg2NWMwLTI0Ljc1NTg5MiAyMC40MTA4MTEtNDQuMzIyNTk1IDQ0LjkwMzc4NC00NC4zMjI1OTVoOTM0LjE5MjQzMmMyNS4wNzQxNjIgMCA0NC45MDM3ODQgMjAuMTQ3ODkyIDQ0LjkwMzc4NCA0NC4zMjI1OTV2NTc1LjU3MTAyN2MwIDI0Ljc1NTg5Mi0yMC40MTA4MTEgNDQuMzIyNTk1LTQ0LjkwMzc4NCA0NC4zMjI1OTR6IiBmaWxsPSIjRkZDQTI4IiBwLWlkPSIxMzIzOCI+PC9wYXRoPjxwYXRoIGQ9Ik0zNjQuNDYxMjUgNDg1LjcwODEwOEgxMDYuNjM0NjU1QzkzLjkxNzY4MiA0ODUuNzA4MTA4IDgzLjAyNzMwNCA0NzYuMDIxNjIyIDgzLjAyNzMwNCA0NjMuNTEyMjE2YzAtMTEuOTY5NzMgMTAuMjk1MzUxLTIyLjIyMzU2OCAyMy42MDczNTEtMjIuMjIzNTY3aDI1Ny4yMTc3M2MxMi43MTY5NzMgMCAyMy42MDczNTEgOS42ODY0ODYgMjMuNjA3MzUxIDIyLjIyMzU2NyAwIDExLjk1NTg5Mi0xMC4yOTUzNTEgMjIuMjIzNTY4LTIyLjk5ODQ4NiAyMi4yMjM1Njh6IG0wIDE0OS4yOTY0MzNIMTA2LjYzNDY1NWMtMTIuNzE2OTczIDAtMjMuNjA3MzUxLTkuNjg2NDg2LTIzLjYwNzM1MS0yMi4yMjM1NjggMC0xMi41MzcwODEgMTAuMjk1MzUxLTIyLjIyMzU2OCAyMy42MDczNTEtMjIuMjIzNTY4aDI1Ny4yMTc3M2MxMi43MTY5NzMgMCAyMy42MDczNTEgOS42ODY0ODYgMjMuNjA3MzUxIDIyLjIyMzU2OCAwIDEyLjUzNzA4MS0xMC4yOTUzNTEgMjIuMjIzNTY4LTIyLjk5ODQ4NiAyMi4yMjM1Njh6IiBmaWxsPSIjRkZGOEUxIiBwLWlkPSIxMzIzOSI+PC9wYXRoPjwvc3ZnPg==';
exports.default = _default;

/***/ }),

/***/ 418:
/*!***************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/icons/jpg.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzIzNTE5MzMxNTMwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxNDciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTYwNS4zMjA3OSAxNDIuNjkwNDk5aDM4My44Nzk1ODZ2NzI2LjMzNjc4Mkg2MDUuMzIwNzl6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIyMTQ4Ij48L3BhdGg+PHBhdGggZD0iTTEwMjIuNzk1ODYxIDE1My44ODg5OTNBNDAuNjk5OTA2IDQwLjY5OTkwNiAwIDAgMCA5NzcuNzYxMDU0IDEwOC4zNzI1MzFjLTEyNC4xNDY3NTQtMS45MjY2MjMtMjQ4LjY1NDc1MSAwLTM3My4yODMxNjEgMFYwaC02NS43NDYwMDJDMzU5LjA3NDMxOCAzMS4zMDc2MiAxNzkuNTM3MTU5IDYzLjY5ODk2NSAwIDk1LjQ4ODI0MXY4MzMuMjY0MzQ2YzE3Ny40OTAxMjIgMzEuOTA5NjkgMzU1LjEwMDY1OSA2Mi4xMzM1ODQgNTMyLjM0OTk1MyA5NC43NjU3NTdoNzIuMjQ4MzU0di0xMTguNjA3NzE0aDM0OS4yMDAzNzZjMTkuOTg4NzExLTAuOTYzMzExIDQyLjAyNDQ1OSAwLjcyMjQ4NCA1OS4wMDI4MjItMTIuMDQxMzkyIDEzLjQ4NjM1OS0yMS4zMTMyNjQgOS45OTQzNTYtNDguMTY1NTY5IDExLjE5ODQ5NS03Mi4yNDgzNTQtMS42ODU3OTUtMjIxLjgwMjQ0NiAwLjg0Mjg5Ny00NDQuMzI3Mzc1LTEuMjA0MTM5LTY2Ni43MzE4OTF6IG0tMzQuMTk3NTU0IDcxNS4yNTg3MDJINjA0LjcxODcyMVYxNDIuOTMxMzI2SDk4OC41OTgzMDd6IiBmaWxsPSIjNzMzNzgxIiBwLWlkPSIyMTQ5Ij48L3BhdGg+PHBhdGggZD0iTTcwNS4xNDM5MzIgMjUwLjIyMDEzMnY2My45Mzk3OTNhMzEuNDI4MDM0IDMxLjQyODAzNCAwIDAgMS04LjY2OTgwMiAyNC4wODI3ODQgNDguMTY1NTY5IDQ4LjE2NTU2OSAwIDAgMS0zMS4xODcyMDYgOC4zMDg1NjEgNDMuMjI4NTk4IDQzLjIyODU5OCAwIDAgMS0yOC4xNzY4NTgtNy45NDczMTkgMjYuODUyMzA1IDI2Ljg1MjMwNSAwIDAgMS05Ljg3Mzk0Mi0yMS45MTUzMzR2LTMuMDEwMzQ4aDIwLjEwOTEyNXYyLjg4OTkzNGMwIDEwLjgzNzI1MyA2LjAyMDY5NiAxNi4yNTU4OCAxOC4zMDI5MTcgMTYuMjU1ODhhMjAuNzExMTk1IDIwLjcxMTE5NSAwIDAgMCAxNC44MTA5MTItNC41NzU3MjkgMjAuMjI5NTM5IDIwLjIyOTUzOSAwIDAgMCA0LjU3NTcyOS0xNC42OTA0OTl2LTYzLjMzNzcyM3pNNzgwLjE2MTgwNiAyNTAuMjIwMTMyYzI5LjUwMTQxMSAwIDQ0LjU1MzE1MSA5LjYzMzExNCA0NC41NTMxNTIgMjkuMDE5NzU1cy0xNS4wNTE3NCAyOS4yNjA1ODMtNDQuOTE0Mzk0IDI5LjI2MDU4M2gtMzAuNDY0NzIydjM2LjEyNDE3N2gtMjAuMTA5MTI1di05NC40MDQ1MTV6IG0tMzAuODI1OTY0IDQ1LjAzNDgwN2gyOS4yNjA1ODNhNDAuNjk5OTA2IDQwLjY5OTkwNiAwIDAgMCAxOS42Mjc0Ny0zLjczMjgzMiAxMy4zNjU5NDUgMTMuMzY1OTQ1IDAgMCAwIDYuMTQxMTEtMTIuMDQxMzkyIDEyLjc2Mzg3NiAxMi43NjM4NzYgMCAwIDAtNi4zODE5MzgtMTIuMDQxMzkyIDM4LjI5MTYyNyAzOC4yOTE2MjcgMCAwIDAtMTkuMzg2NjQyLTMuNzMyODMyaC0yOS4yNjA1ODN6TTkzMi40ODU0MTkgMjU2LjQ4MTY1NmEzNC45MjAwMzggMzQuOTIwMDM4IDAgMCAxIDE2LjQ5NjcwNyAyNC4wODI3ODRoLTIwLjM0OTk1M2EyMi4wMzU3NDggMjIuMDM1NzQ4IDAgMCAwLTEwLjk1NzY2Ny0xMy42MDY3NzMgNDguMTY1NTY5IDQ4LjE2NTU2OSAwIDAgMC0yMi41MTc0MDMtNC40NTUzMTUgMzguODkzNjk3IDM4Ljg5MzY5NyAwIDAgMC0yNy4zMzM5NjEgOS4wMzEwNDQgMzIuOTkzNDE1IDMyLjk5MzQxNSAwIDAgMC0xMS4wNzgwODEgMjYuODUyMzA1IDMzLjExMzgyOSAzMy4xMTM4MjkgMCAwIDAgMTAuMjM1MTg0IDI1LjE2NjUxIDQ4LjE2NTU2OSA0OC4xNjU1NjkgMCAwIDAgMzIuOTkzNDE0IDkuNjMzMTE0IDc5LjcxNDAxNyA3OS43MTQwMTcgMCAwIDAgMTYuNDk2NzA4LTEuNjg1Nzk1IDYzLjIxNzMxIDYzLjIxNzMxIDAgMCAwIDEzLjI0NTUzMS00LjMzNDkwMnYtMTkuNTA3MDU1aC0zMi41MTE3NTl2LTEzLjI0NTUzMmg1Mi42MjA4ODV2NDAuMDk3ODM3YTc2Ljk0NDQ5NyA3Ni45NDQ0OTcgMCAwIDEtMjIuMjc2NTc2IDguOTEwNjMgMTI2LjQzNDYxOSAxMjYuNDM0NjE5IDAgMCAxLTI5Ljc0MjIzOSAzLjI1MTE3NiA2Ni44Mjk3MjcgNjYuODI5NzI3IDAgMCAxLTQ1LjYzNjg3Ny0xNC4zMjkyNTcgNDMuNzEwMjU0IDQzLjcxMDI1NCAwIDAgMS0xNS4xNzIxNTQtMzQuNDM4MzgyIDQ0LjY3MzU2NSA0NC42NzM1NjUgMCAwIDEgMTUuMTcyMTU0LTM0LjkyMDAzNyA2MS40MTExMDEgNjEuNDExMTAxIDAgMCAxIDQzLjM0OTAxMi0xNC41NzAwODUgNzMuMDkxMjUxIDczLjA5MTI1MSAwIDAgMSAzNi45NjcwNzUgOC4wNjc3MzN6IiBmaWxsPSIjNzMzNzgxIiBwLWlkPSIyMTUwIj48L3BhdGg+PHBhdGggZD0iTTM3MC4yNzI4MTMgMzI5LjY5MzMyMXYyNTQuNjc1NDQ3YzAgMzcuNjg5NTU4LTkuNTEyNyA2NS44NjY0MTYtMjguMjk3MjcyIDg0LjI4OTc0NnMtNDYuNzIwNjAyIDI4LjE3Njg1OC04My40NDY4NDkgMjguMTc2ODU4cS03OS41OTM2MDMgMC0xMDQuNjM5Njk5LTQ2LjYwMDE4OWMtMTAuMTE0NzctMTguMzAyOTE2LTE1LjA1MTc0LTUxLjA1NTUwMy0xNS4wNTE3NC05OC4xMzczNDdoNzAuMDgwOTAzYTE4Ny42MDQ4OTIgMTg3LjYwNDg5MiAwIDAgMCA2Ljk4NDAwOCA2My4wOTY4OTZBMzYuMTI0MTc3IDM2LjEyNDE3NyAwIDAgMCAyNTIuODY5MjM4IDYzNi43NDg4MjRhMzguMTcxMjE0IDM4LjE3MTIxNCAwIDAgMCAzNi4xMjQxNzctMTYuMDE1MDUyIDc1LjYxOTk0NCA3NS42MTk5NDQgMCAwIDAgNi41MDIzNTItMzYuMTI0MTc3VjMyOS42OTMzMjF6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIyMTUxIj48L3BhdGg+PHBhdGggZD0iTTY2OC44OTkzNDEgNjU2LjI1NTg4SDkxNS4xNDU4MTR2MTQ3Ljc0Nzg4M0g2NjguODk5MzQxek05MTYuMjI5NTM5IDQwMi45MDQ5ODZoLTI0OC4wNTI2ODF2MjA0LjcwMzY2OWgyNDguMDUyNjgxeiBtLTIyNy41ODIzMTQgMjAuNDcwMzY3SDg5NS44Nzk1ODZ2MTI0LjM4NzU4MmwtMzEuMTg3MjA2LTMxLjkwOTY4OWExOS42Mjc0NjkgMTkuNjI3NDY5IDAgMCAwLTcuNDY1NjYzLTQuOTM2OTcxYy01LjI5ODIxMy0xLjY4NTc5NS0xNi44NTc5NDkgOS4zOTIyODYtMzQuNDM4MzgyIDMyLjk5MzQxNS0yMi4yNzY1NzYtMjIuNzU4MjMxLTcwLjQ0MjE0NS03MS4yODUwNDItODAuMzE2MDg3LTY5Ljg0MDA3Ni0yLjc2OTUyIDAtNi45ODQwMDggMi4xNjc0NTEtMTIuODg0Mjg5IDcuMzQ1MjVsLTQwLjk0MDczNCAzNi4xMjQxNzZ6IiBmaWxsPSIjNzMzNzgxIiBwLWlkPSIyMTUyIj48L3BhdGg+PHBhdGggZD0iTTg0MC4xMjc5NCA0NzQuMzEwNDQyYTE4Ljc4NDU3MiAxOC43ODQ1NzIgMCAwIDAgMzEuNjY4ODYyLTEzLjQ4NjM1OSAxOC4zMDI5MTYgMTguMzAyOTE2IDAgMCAwLTE4LjMwMjkxNy0xOC4xODI1MDMgMTguNzg0NTcyIDE4Ljc4NDU3MiAwIDAgMC0xMy4zNjU5NDUgMzEuNjY4ODYyeiIgZmlsbD0iIzczMzc4MSIgcC1pZD0iMjE1MyI+PC9wYXRoPjwvc3ZnPg==';
exports.default = _default;

/***/ }),

/***/ 419:
/*!*****************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/icons/other.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzIzNTE5Njc3ODI1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM0MDgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUzNS42MDExMjkgMGg2OC45OTcxNzh2OTUuMjQ3NDEzaDM0OS4yMDAzNzZjMTkuNzQ3ODgzIDAuODQyODk3IDQxLjMwMTk3NiAwIDU4LjQwMDc1MyAxMi4wNDEzOTIgMTIuMDQxMzkyIDE3LjU4MDQzMyAxMC41OTY0MjUgMzkuOTc3NDIyIDEyLjA0MTM5MiA2MC4yMDY5NjJxLTAuOTYzMzExIDMxMC4xODYyNjUgMCA2MTkuODkwODc1YzAgMzQuNjc5MjEgMy4xMzA3NjIgNzAuMDgwOTAzLTMuOTczNjYgMTA0LjE1ODA0My00LjU3NTcyOSAyNC44MDUyNjgtMzMuNzE1ODk4IDI1LjQwNzMzOC01My4xMDI1NCAyNi4yNTAyMzVINjA1LjMyMDc5VjEwMjMuNTE4MzQ0aC03Mi4yNDgzNTNDMzU1LjEwMDY1OSA5OTEuMDA2NTg1IDE3Ny40OTAxMjIgOTYwLjU0MTg2MyAwIDkyOC43NTI1ODdWOTUuMzY3ODI3QzE3OC41NzM4NDggNjMuNTc4NTUxIDM1Ny4xNDc2OTUgMzIuMjcwOTMxIDUzNS42MDExMjkgMHoiIGZpbGw9IiMyMDcyNDUiIHAtaWQ9IjM0MDkiPjwvcGF0aD48cGF0aCBkPSJNNjA0LjU5ODMwNyAxMzEuMDEwMzQ4aDM4My44Nzk1ODZ2NzUwLjA1ODMyNkg2MDQuNTk4MzA3di03MS40MDU0NTdoOTMuMDc5OTYydi04My4zMjY0MzRoLTkzLjA3OTk2MnYtNDguMTY1NTY5aDkzLjA3OTk2MnYtODIuODQ0Nzc5aC05My4wNzk5NjJ2LTQ3LjU2MzVoOTMuMDc5OTYydi04My40NDY4NDhoLTkzLjA3OTk2MnYtNDguMTY1NTdoOTMuMDc5OTYydi04Mi43MjQzNjVoLTkzLjA3OTk2MnYtNDguMTY1NTY5aDkzLjA3OTk2MnY1MzguMjUwMjM1aC05My4wNzk5NjJ6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIzNDEwIj48L3BhdGg+PHBhdGggZD0iTTY2MC4zNDk5NTMgMTg4LjU2ODIwM2gyNDYuNzI4MTI4djE0Ny43NDc4ODRINjYwLjM0OTk1M3pNNjYwLjM0OTk1MyA0MjkuNzU3MjkxaDI0Ni43MjgxMjhWNTc3Ljk4NjgzSDY2MC4zNDk5NTN6TTY2MC4zNDk5NTMgNjcxLjA2Njc5MmgyNDYuNzI4MTI4VjgxOC44MTQ2NzVINjYwLjM0OTk1M3oiIGZpbGw9IiMyMDcyNDUiIHAtaWQ9IjM0MTEiPjwvcGF0aD48cGF0aCBkPSJNNTE0LjI4Nzg2NSA2MjguNTYwNjc3TDM3OS4wNjMwMjkgNDQzLjcyNTMwNmExMy4wMDQ3MDQgMTMuMDA0NzA0IDAgMCAwLTIyLjM5Njk4OSAwbC05NS42MDg2NTUgMTMwLjc2OTUyLTQ2LjIzODk0Ny02NC4wNjAyMDdhMTMuMDA0NzA0IDEzLjAwNDcwNCAwIDAgMC0yMi4yNzY1NzUgMEwxMDcuMjg4ODA1IDYyOC41NjA2NzdjLTYuMTQxMTEgOC40Mjg5NzUtMi41Mjg2OTIgMTUuMjkyNTY4IDguMTg4MTQ3IDE1LjI5MjU2OUg1MDUuNzM4NDc2YzExLjE5ODQ5NSAwIDE0LjY5MDQ5OS02Ljg2MzU5NCA4LjU0OTM4OS0xNS4yOTI1Njl6TTE5OC4yMDEzMTcgNDM4LjY2NzkyMWEzNy41NjkxNDQgMzcuNTY5MTQ0IDAgMSAwLTM3LjU2OTE0NC0zNy41NjkxNDQgMzcuNTY5MTQ0IDM3LjU2OTE0NCAwIDAgMCAzNy41NjkxNDQgMzcuNTY5MTQ0eiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iMzQxMiI+PC9wYXRoPjwvc3ZnPg==';
exports.default = _default;

/***/ }),

/***/ 42:
/*!*****************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/static/bar-icon.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 420:
/*!***************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/icons/pdf.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzIzNTE5NDUwMDUyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI0NjUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUzNS4xOTgzMjQgMGg2OS41Mzg1M3Y5NS4yNzY4MTZjMTI0LjE3NTk0NSAwLjY3NzMyMyAyNDguMzUxODkxLTEuMzU0NjQ3IDM3My4yMDUxNTkgMC42NzczMjRhNDAuNjM5NCA0MC42Mzk0IDAgMCAxIDQ1LjE1NDg4OSA0NS4xNTQ4ODljMS45MTkwODMgMjM0LjU3OTY0OSAwIDQ2OS4yNzIxODYgMS4xMjg4NzIgNzAzLjg1MTgzNS0xLjEyODg3MiAyNC4wNDQ5NzkgMi4yNTc3NDQgNTAuNjg2MzYzLTExLjI4ODcyMiA3Mi4wMjIwNDktMTcuMDQ1OTcxIDEyLjQxNzU5NS0zOC45NDYwOTIgMTEuMjg4NzIyLTU4LjgxNDI0MyAxMS4yODg3MjJINjA0Ljk2MjYyOHY5NS4yNzY4MTZoLTcyLjkyNTE0NkMzNTQuOTE3NDI5IDk5MC45MjQwNDQgMTc3LjQ1ODcxNSA5NjAuNTU3MzgxIDAgOTI4LjcyMzE4NFY5NS41MDI1OTFDMTc4LjM2MTgxMiA2My41NTU1MDcgMzU2LjgzNjUxMiAzMi41MTE1MiA1MzUuMTk4MzI0IDB6IiBmaWxsPSIjQTMzNjM5IiBwLWlkPSIyNDY2Ij48L3BhdGg+PHBhdGggZD0iTTYwNC43MzY4NTQgMTMwLjk0OTE3OWgzODMuODE2NTU4djc2Mi4xMDE2NDJoLTM4My44MTY1NTh2LTk1LjI3NjgxNmgzMDIuNDI0ODd2LTQ3LjYzODQwOEg2MDQuNzM2ODU0di01OS40OTE1NjdoMzAyLjQyNDg3VjY0My40NTcxNzFINjA0LjczNjg1NHYtNjAuMDU2MDAyaDMwMi40MjQ4N3YtNDcuNjM4NDA5SDYwNC43MzY4NTR2LTU5LjQ5MTU2NmgzMDIuNDI0ODdWNDI4Ljk3MTQ0N0g2MDQuNzM2ODU0di01OS44MzAyMjhoMzAyLjQyNDg3di00Ny42Mzg0MDhINjA0LjczNjg1NFYyNjEuODk4MzU3aDMwMi40MjQ4N3Y1OTcuMTczNDFINjA0LjczNjg1NHoiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjI0NjciPjwvcGF0aD48cGF0aCBkPSJNNjQ1LjQ4OTE0MSA1MjkuNjY2ODVoMzAyLjQyNDg3MXY0Ny42Mzg0MDlINjQ1LjQ4OTE0MXpNNjQ1LjQ4OTE0MSA2MTEuNTEwMDg3aDMwMi40MjQ4NzF2NDcuNjM4NDA4SDY0NS40ODkxNDF6TTY0NS40ODkxNDEgNjkzLjM1MzMyNGgzMDIuNDI0ODcxdjQ3LjYzODQwOEg2NDUuNDg5MTQxek01OTYuMzgzMTk5IDc3NS4xOTY1NmgzNTEuNTMwODEzdjQ3LjYzODQwOUg1OTYuMzgzMTk5eiIgZmlsbD0iI0EzMzYzOSIgcC1pZD0iMjQ2OCI+PC9wYXRoPjxwYXRoIGQ9Ik0xODAuNjE5NTU3IDMxNy4zMjU5ODRjNTkuMjY1NzkyIDIuODIyMTgxIDEzMC45NDkxNzktMjQuMDQ0OTc5IDE4MC42MTk1NTcgMjEuMzM1Njg1IDQ2Ljk2MTA4NSA1OC40NzU1ODIgMzQuNTQzNDkgMTY1LjgzMTMzMS0zNS4xMDc5MjcgMjAwLjcxMzQ4My0yNC43MjIzMDIgMTIuOTgyMDMxLTUzLjE2OTg4MiAxMS4yODg3MjItODAuMDM3MDQxIDEwLjI3MjczN3YxMzAuOTQ5MTc5TDE4MC42MTk1NTcgNjc1LjA2NTU5NGMtMC45MDMwOTgtMTE5LjIwODkwOC0xLjEyODg3Mi0yMzguNTMwNzAyIDAtMzU3LjczOTYxeiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iMjQ2OSI+PC9wYXRoPjxwYXRoIGQ9Ik0yNDUuNjQyNTk3IDM3Ny43MjA2NDhjMjEuNDQ4NTcyLTEuMDE1OTg1IDQ4LjA4OTk1Ny01LjA3OTkyNSA2Mi41Mzk1MjIgMTUuNTc4NDM3YTgyLjQwNzY3MyA4Mi40MDc2NzMgMCAwIDEgMS40Njc1MzQgNzMuMjYzODA4Yy0xMi40MTc1OTUgMjIuNTc3NDQ1LTQwLjUyNjUxMyAyMC43NzEyNDktNjIuMzEzNzQ3IDIzLjM2NzY1NS0yLjI1Nzc0NC0zNy4zNjU2NzEtMi4wMzE5Ny03NC43MzEzNDItMS42OTMzMDktMTEyLjIwOTl6TTg4NS43MTMxNTIgMzc5Ljg2NTUwNWE4My45ODgwOTQgODMuOTg4MDk0IDAgMCAxLTQ4LjMxNTczMi0xOS42NDIzNzYgNDYwLjU3OTg3IDQ2MC41Nzk4NyAwIDAgMC03Ny42NjY0MDkgMjQuODM1MTg5Yy0yMC4zMTk3IDM2LjAxMTAyNC0zOS4xNzE4NjYgNTQuNDExNjQxLTU1LjU0MDUxNCA1NC40MTE2NDFhMTcuMzg0NjMyIDE3LjM4NDYzMiAwIDAgMS05LjgyMTE4OC0yLjU5NjQwNiAxOS40MTY2MDIgMTkuNDE2NjAyIDAgMCAxLTExLjI4ODcyMy0xNy43MjMyOTRjMC01Ljg3MDEzNiAxLjM1NDY0Ny0yMi41Nzc0NDUgNjMuMzI5NzMzLTQ5LjEwNTk0MmE0NjcuOTE3NTM5IDQ2Ny45MTc1MzkgMCAwIDAgMzQuNjU2Mzc3LTgxLjI3ODgwMWMtNy45MDIxMDYtMTUuNjkxMzI0LTI0LjgzNTE4OS01NC4yOTg3NTQtMTMuMDk0OTE4LTczLjk0MTEzMWEyMC42NTgzNjIgMjAuNjU4MzYyIDAgMCAxIDIwLjIwNjgxMy0xMC40OTg1MTEgMjEuOTAwMTIxIDIxLjkwMDEyMSAwIDAgMSAxNy4wNDU5NzEgOC40NjY1NDFjOC40NjY1NDIgMTEuMjg4NzIyIDcuNzg5MjE4IDM2LjY4ODM0Ny0zLjI3MzczIDczLjM3NjY5NUExOTYuOTg4MjA0IDE5Ni45ODgyMDQgMCAwIDAgODQyLjcwMzEyIDMzOC42NjE2NjlhMjIxLjE0NjA3IDIyMS4xNDYwNyAwIDAgMSA0MS4wOTA5NDktNC41MTU0ODljMzAuNzA1MzI1IDAuNjc3MzIzIDM1LjMzMzcwMSAxNS4wMTQwMDEgMzQuNjU2Mzc3IDIzLjU5MzQzIDAgMjIuNTc3NDQ1LTIxLjU2MTQ2IDIyLjU3NzQ0NS0zMi42MjQ0MDcgMjIuNTc3NDQ0eiBtLTE4NS4wMjIxNTkgNDIuMTA2OTM1bDIuMjU3NzQ1LTAuNTY0NDM2YTQ1LjE1NDg4OSA0NS4xNTQ4ODkgMCAwIDAgMjMuOTMyMDkxLTE2LjgyMDE5NyA1Ni40NDM2MTIgNTYuNDQzNjEyIDAgMCAwLTI2LjE4OTgzNiAxNy4zODQ2MzN6IG05My4zNTc3MzQtMjAwLjI2MTkzNGgtMi4xNDQ4NThhNC40MDI2MDIgNC40MDI2MDIgMCAwIDAtMi44MjIxOCAwLjY3NzMyMyA1Mi40OTI1NTkgNTIuNDkyNTU5IDAgMCAwIDQuMTc2ODI3IDMzLjg2NjE2NyA1My4yODI3NjkgNTMuMjgyNzY5IDAgMCAwIDAuNzkwMjExLTM0LjU0MzQ5ek03OTAuMjEwNTYxIDMxNy41NTE3NTh2MS4yNDE3NmwtMC42NzczMjMtMC42NzczMjRjLTUuNDE4NTg3IDE0LjMzNjY3Ny0xMS4yODg3MjIgMjguNDQ3NTgtMTguMDYxOTU2IDQyLjMzMjcwOWwxLjEyODg3Mi0wLjY3NzMyM1YzNjEuMjM5MTE0QTM0Ni4zMzggMzQ2LjMzOCAwIDAgMSA4MTIuNzg4MDA2IDM0OC41OTU3NDVsLTAuNjc3MzI0LTAuNTY0NDM2aDEuODA2MTk2YTE5Ni4zMTA4ODEgMTk2LjMxMDg4MSAwIDAgMS0yMy43MDYzMTctMzAuNDc5NTUxeiBtOTQuNTk5NDkzIDM0Ljc2OTI2NWE2Ni4xNTE5MTMgNjYuMTUxOTEzIDAgMCAwLTE4LjE3NDg0MyAxLjY5MzMwOCA1MC42ODYzNjMgNTAuNjg2MzYzIDAgMCAwIDIwLjk5NzAyNCA2LjY2MDM0NyAyNi4wNzY5NDkgMjYuMDc2OTQ5IDAgMCAwIDEzLjg4NTEyOC0xLjU4MDQyMmMtMC40NTE1NDktMi41OTY0MDYtMy4yNzM3MjktNi43NzMyMzMtMTcuMTU4ODU4LTYuNzczMjMzeiIgZmlsbD0iI0EzMzYzOSIgcC1pZD0iMjQ3MCI+PC9wYXRoPjwvc3ZnPg==';
exports.default = _default;

/***/ }),

/***/ 421:
/*!***************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/icons/png.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzIzNTE5NDA2NTE0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIzMDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTYwNS4yMDAzNzYgMTQxLjg0NzYwMWgzODMuODc5NTg2Vjg2OC4xODQzODRINjA1LjIwMDM3NnoiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjIzMDciPjwvcGF0aD48cGF0aCBkPSJNMTAyMi43OTU4NjEgMTUzLjg4ODk5M0E0MC42OTk5MDYgNDAuNjk5OTA2IDAgMCAwIDk3Ny43NjEwNTQgMTA4LjM3MjUzMWMtMTI0LjE0Njc1NC0xLjkyNjYyMy0yNDguNjU0NzUxIDAtMzczLjI4MzE2MSAwVjBoLTY1Ljc0NjAwMkMzNTkuMDc0MzE4IDMxLjMwNzYyIDE3OS41MzcxNTkgNjMuNjk4OTY1IDAgOTUuNDg4MjQxdjgzMy4yNjQzNDZjMTc3LjQ5MDEyMiAzMS45MDk2OSAzNTUuMTAwNjU5IDYyLjEzMzU4NCA1MzIuMzQ5OTUzIDk0Ljc2NTc1N2g3Mi4yNDgzNTR2LTExOC42MDc3MTRoMzQ5LjIwMDM3NmMxOS45ODg3MTEtMC45NjMzMTEgNDIuMDI0NDU5IDAuNzIyNDg0IDU5LjAwMjgyMi0xMi4wNDEzOTIgMTMuNDg2MzU5LTIxLjMxMzI2NCA5Ljk5NDM1Ni00OC4xNjU1NjkgMTEuMTk4NDk1LTcyLjI0ODM1NC0xLjY4NTc5NS0yMjEuODAyNDQ2IDAuODQyODk3LTQ0NC4zMjczNzUtMS4yMDQxMzktNjY2LjczMTg5MXogbS0zNC4xOTc1NTQgNzE1LjI1ODcwMkg2MDQuNzE4NzIxVjE0Mi45MzEzMjZIOTg4LjU5ODMwN3oiIGZpbGw9IiMwMDcxQzUiIHAtaWQ9IjIzMDgiPjwvcGF0aD48cGF0aCBkPSJNNjk1Ljc1MTY0NiAyNDQuMDc5MDIyYzI0LjkyNTY4MiAwIDM3LjY4OTU1OCAxMC41OTY0MjUgMzcuNjg5NTU4IDMxLjkwOTY4OXMtMTIuNzYzODc2IDMyLjE1MDUxNy0zOC4wNTA3OTkgMzIuMTUwNTE4aC0yNS43Njg1OHYzOS44NTcwMDhINjUyLjY0MzQ2MnYtMTAzLjkxNzIxNXogbS0yNi4xMjk4MjEgNDkuNDkwMTIyaDI0LjgwNTI2OEEyNy40NTQzNzQgMjcuNDU0Mzc0IDAgMCAwIDcxMC40NDIxNDUgMjg4Ljk5MzQxNWExNi4xMzU0NjYgMTYuMTM1NDY2IDAgMCAwIDUuMjk4MjEyLTEzLjQ4NjM1OSAxNS40MTI5ODIgMTUuNDEyOTgyIDAgMCAwLTUuNDE4NjI2LTEzLjI0NTUzMiAyNi40OTEwNjMgMjYuNDkxMDYzIDAgMCAwLTE2LjM3NjI5NC00LjA5NDA3M2gtMjQuMzIzNjEyek03NjQuOTg5NjUyIDI0NC4wNzkwMjJsNTEuNDE2NzQ1IDc0Ljg5NzQ2di03NC44OTc0NmgxNy4yMTkxOTF2MTAzLjkxNzIxNWgtMTYuMTM1NDY2bC01MS44OTg0LTc1Ljk4MTE4NXY3NS45ODExODVoLTE3LjU4MDQzM3YtMTAzLjkxNzIxNXpNOTMxLjE2MDg2NSAyNTAuOTQyNjE1QTM4LjY1Mjg2OSAzOC42NTI4NjkgMCAwIDEgOTQ1LjEyODg4MSAyNzYuOTUyMDIzaC0xNy4wOTg3NzhhMjMuMzYwMzAxIDIzLjM2MDMwMSAwIDAgMC05LjM5MjI4Ni0xNC45MzEzMjcgMzIuMzkxMzQ1IDMyLjM5MTM0NSAwIDAgMC0xOS4wMjUzOTktNC45MzY5NzEgMjguNDE3Njg2IDI4LjQxNzY4NiAwIDAgMC0yMy4xMTk0NzQgOS44NzM5NDIgNDIuNTA2MTE1IDQyLjUwNjExNSAwIDAgMC05LjUxMjY5OSAyOS41MDE0MTEgNDIuOTg3NzcgNDIuOTg3NzcgMCAwIDAgOC40Mjg5NzQgMjguNjU4NTE0IDM0LjkyMDAzOCAzNC45MjAwMzggMCAwIDAgMjguMDU2NDQ0IDEwLjQ3NjAxMSA1Mi44NjE3MTIgNTIuODYxNzEyIDAgMCAwIDEzLjk2ODAxNS0xLjY4NTc5NSA1MS41MzcxNTkgNTEuNTM3MTU5IDAgMCAwIDExLjE5ODQ5NS00LjgxNjU1N3YtMjEuOTE1MzM0aC0yNy41NzQ3ODh2LTE0LjQ0OTY3MWg0NC41NTMxNTFWMzM3LjE1ODk4NGE2Mi43MzU2NTQgNjIuNzM1NjU0IDAgMCAxLTE4LjkwNDk4NiA5Ljg3Mzk0MiA4Ni40NTcxOTcgODYuNDU3MTk3IDAgMCAxLTI1LjE2NjUxIDMuNDkyMDAzIDQ4LjE2NTU2OSA0OC4xNjU1NjkgMCAwIDEtMzguNTMyNDU1LTE1Ljc3NDIyMyA1NC43ODgzMzUgNTQuNzg4MzM1IDAgMCAxLTEyLjg4NDI5LTM3LjgwOTk3MiA1Ni41OTQ1NDQgNTYuNTk0NTQ0IDAgMCAxIDEyLjg4NDI5LTM4LjQxMjA0MiA0NC43OTM5NzkgNDQuNzkzOTc5IDAgMCAxIDM2LjEyNDE3Ny0xNi4wMTUwNTEgNDkuODUxMzY0IDQ5Ljg1MTM2NCAwIDAgMSAzMi4wMzAxMDMgOC40Mjg5NzR6TTY3NS4wNDA0NTIgNjU2LjI1NTg4aDI0Ni43MjgxMjd2MTQ3Ljc0Nzg4M0g2NzUuMDQwNDUyeiIgZmlsbD0iIzAwNzFDNSIgcC1pZD0iMjMwOSI+PC9wYXRoPjxwYXRoIGQ9Ik0xODMuMDI5MTYzIDM0MC44OTE4MTZjNjMuMjE3MzEgMy4xMzA3NjIgMTM5LjgwMDU2NC0yNS41Mjc3NTIgMTkyLjY2MjI3NiAyMi44Nzg2NDVDNDI1LjMwMTk3NiA0MjYuMTQ0ODczIDQxMi4wNTY0NDQgNTQwLjY1ODUxNCAzMzcuMTU4OTg0IDU3Ny45ODY4M2MtMjYuMzcwNjQ5IDEzLjg0NzYwMS01Ni41OTQ1NDQgMTIuMDQxMzkyLTg1LjM3MzQ3MSAxMC45NTc2Njd2MTM5LjY4MDE1TDE4Mi45MDg3NDkgNzIyLjQ4MzUzN2MtMC45NjMzMTEtMTI3LjAzNjY4OS0xLjIwNDEzOS0yNTQuMzE0MjA1IDAuMTIwNDE0LTM4MS41OTE3MjF6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIyMzEwIj48L3BhdGg+PHBhdGggZD0iTTI1Mi4xNDY3NTQgNDA1LjMxMzI2NGMyMi44Nzg2NDUtMC45NjMzMTEgNTEuMjk2MzMxLTUuMjk4MjEzIDY2LjgyOTcyOCAxNi43Mzc1MzZhODguMjYzNDA1IDg4LjI2MzQwNSAwIDAgMSAxLjQ0NDk2NyA3OC4xNDg2MzZjLTEzLjI0NTUzMiAyNC4wODI3ODUtNDMuMjI4NTk4IDIyLjAzNTc0OC02Ni4zNDgwNzIgMjQuOTI1NjgyLTIuNTI4NjkyLTM5Ljg1NzAwOC0yLjI4Nzg2NS03OS41OTM2MDMtMS45MjY2MjMtMTE5LjgxMTg1NHpNOTIyLjM3MDY0OSA0MDEuNDYwMDE5SDY3NC4zMTc5Njh2MjA0LjcwMzY2OWgyNDguMDUyNjgxek02OTQuNzg4MzM1IDQyMS40NDg3M2gyMDcuMjMyMzYxdjEyNC43NDg4MjRsLTMxLjE4NzIwNi0zMS45MDk2ODlhMTguNzg0NTcyIDE4Ljc4NDU3MiAwIDAgMC03LjQ2NTY2My00LjkzNjk3MWMtNS4yOTgyMTMtMS41NjUzODEtMTYuNzM3NTM1IDkuMzkyMjg2LTM0LjMxNzk2OCAzMi45OTM0MTUtMjIuMjc2NTc2LTIyLjc1ODIzMS03MC40NDIxNDUtNzEuMTY0NjI4LTgwLjQzNjUwMS02OS43MTk2NjItMi43Njk1MiAwLTYuOTg0MDA4IDIuMTY3NDUxLTEyLjg4NDI4OSA3LjIyNDgzNmwtNDAuOTQwNzM0IDM2LjEyNDE3NnoiIGZpbGw9IiMwMDcxQzUiIHAtaWQ9IjIzMTEiPjwvcGF0aD48cGF0aCBkPSJNODQ2LjI2OTA1IDQ3Mi43NDUwNjFhMTguNzg0NTcyIDE4Ljc4NDU3MiAwIDAgMCAzMS42Njg4NjItMTMuMzY1OTQ1IDE4LjMwMjkxNiAxOC4zMDI5MTYgMCAwIDAtMTguMzAyOTE3LTE4LjMwMjkxNyAxOC43ODQ1NzIgMTguNzg0NTcyIDAgMCAwLTEzLjM2NTk0NSAzMS42Njg4NjJ6IiBmaWxsPSIjMDA3MUM1IiBwLWlkPSIyMzEyIj48L3BhdGg+PC9zdmc+';
exports.default = _default;

/***/ }),

/***/ 422:
/*!***************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/icons/ppt.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzIzNTE5NDgwNTkzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MjMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUzOC43MzE4OTEgMGg2NS45ODY4M3YxMDcuMTY4MzkxYzEyNC4zODc1ODIgMC43MjI0ODQgMjQ4Ljg5NTU3OS0xLjMyNDU1MyAzNzMuMjgzMTYgMGE0MC42OTk5MDYgNDAuNjk5OTA2IDAgMCAxIDQ1LjAzNDgwOCA0Ni4xMTg1MzNjMi4wNDcwMzcgMjIyLjQwNDUxNiAwIDQ0NC45Mjk0NDUgMS4yMDQxMzkgNjY3LjQ1NDM3NC0xLjIwNDEzOSAyNC4wODI3ODUgMi4yODc4NjUgNTAuNjk0MjYyLTExLjE5ODQ5NSA3Mi4yNDgzNTQtMTYuOTc4MzYzIDEyLjA0MTM5Mi0zOS4wMTQxMTEgMTAuOTU3NjY3LTU5LjAwMjgyMiAxMi4wNDEzOTItMTE2LjMxOTg0OS0wLjYwMjA3LTIzMi42Mzk2OTkgMC0zNDkuMjAwMzc2IDBWMTAyMy41MTgzNDRoLTcyLjI0ODM1NEMzNTUuMTAwNjU5IDk5MC44ODYxNzEgMTc3LjQ5MDEyMiA5NjAuNjYyMjc3IDAgOTI4Ljc1MjU4N1Y5NS40ODgyNDFDMTc5LjUzNzE1OSA2My42OTg5NjUgMzU5LjA3NDMxOCAzMS4zMDc2MiA1MzguNzMxODkxIDB6IiBmaWxsPSIjRDI0NjI1IiBwLWlkPSIyNjI0Ij48L3BhdGg+PHBhdGggZD0iTTYwNC43MTg3MjEgMTQyLjkzMTMyNkg5ODguNTk4MzA3djcyNi4yMTYzNjlINjA0LjcxODcyMXYtOTUuMjQ3NDEzaDI3OS4yMzk4ODd2LTQ3LjU2MzQ5OUg2MDQuNzE4NzIxdi02MC4yMDY5NjJoMjc5LjIzOTg4N3YtNDYuOTYxNDNINjA0LjgzOTEzNXYtNjkuOTYwNDg5YzQ2LjExODUzMiAxNC41NzAwODUgOTguNjE5MDAzIDE0LjIwODg0MyAxMzkuODAwNTY0LTE0LjA4ODQyOSA0NC41NTMxNTEtMjcuMDkzMTMzIDY3Ljc5MzAzOS03OC42MzAyOTIgNzEuNjQ2Mjg0LTEzMC4wNDcwMzZINjYzLjExOTQ3M2MwLTUxLjc3Nzk4NyAwLjYwMjA3LTEwMy41NTU5NzQtMC45NjMzMTEtMTU1LjIxMzU0Ny0xOS4xNDU4MTQgMy43MzI4MzItMzguMTcxMjE0IDcuODI2OTA1LTU3LjE5NjYxNCAxMi4wNDEzOTJ6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIyNjI1Ij48L3BhdGg+PHBhdGggZD0iTTY4Ni4zNTkzNiAyMjQuNjkyMzhhMTY1LjY4OTU1OCAxNjUuNjg5NTU4IDAgMCAxIDE1My4xNjY1MSAxNTYuNTM4MWMtNTEuMDU1NTAzIDAuNjAyMDctMTAyLjExMTAwNyAwLTE1My4yODY5MjQgMCAwLjEyMDQxNC01Mi4zODAwNTYgMC4xMjA0MTQtMTA0LjI3ODQ1NyAwLjEyMDQxNC0xNTYuNTM4MXoiIGZpbGw9IiNEMjQ2MjUiIHAtaWQ9IjI2MjYiPjwvcGF0aD48cGF0aCBkPSJNMTg2LjY0MTU4IDMxNC41MjExNjdjNjMuMjE3MzEgMy4xMzA3NjIgMTM5LjY4MDE1MS0yNS41Mjc3NTIgMTkyLjY2MjI3NyAyMi44Nzg2NDUgNTAuMDkyMTkyIDYyLjM3NDQxMiAzNi44NDY2NiAxNzYuODg4MDUzLTM3LjQ0ODczIDIxNC4wOTU5NTUtMjYuMzcwNjQ5IDEzLjg0NzYwMS01Ni43MTQ5NTggMTIuMDQxMzkyLTg1LjM3MzQ3MSAxMC45NTc2Njd2MTM5LjY4MDE1bC02OS4yMzgwMDYtNS45MDAyODJjLTEuODA2MjA5LTEyNy4xNTcxMDMtMi4wNDcwMzctMjU0LjQzNDYxOS0wLjYwMjA3LTM4MS43MTIxMzV6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIyNjI3Ij48L3BhdGg+PHBhdGggZD0iTTI1NS43NTkxNzIgMzc4Ljk0MjYxNWMyMi44Nzg2NDUtMC45NjMzMTEgNTEuMjk2MzMxLTUuMjk4MjEzIDY2LjcwOTMxMyAxNi43Mzc1MzZhODcuOTAyMTY0IDg3LjkwMjE2NCAwIDAgMSAxLjU2NTM4MSA3OC4xNDg2MzVjLTEzLjI0NTUzMiAyNC4wODI3ODUtNDMuMjI4NTk4IDIyLjAzNTc0OC02Ni40Njg0ODUgMjQuOTI1NjgyLTIuNDA4Mjc4LTM5Ljg1NzAwOC0yLjE2NzQ1MS03OS43MTQwMTctMS44MDYyMDktMTE5LjgxMTg1M3oiIGZpbGw9IiNEMjQ2MjUiIHAtaWQ9IjI2MjgiPjwvcGF0aD48L3N2Zz4=';
exports.default = _default;

/***/ }),

/***/ 423:
/*!***************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/icons/txt.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzIzNTE5NTIwODQ3IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI3ODEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUzNS4xOTgzMjQgMGg2OS41Mzg1M3Y5NS4yNzY4MTZjMTI0LjE3NTk0NSAwLjY3NzMyMyAyNDguMzUxODkxLTEuMzU0NjQ3IDM3My4yMDUxNTkgMC42NzczMjRhNDAuNjM5NCA0MC42Mzk0IDAgMCAxIDQ1LjE1NDg4OSA0NS4xNTQ4ODljMS45MTkwODMgMjM0LjU3OTY0OSAwIDQ2OS4yNzIxODYgMS4xMjg4NzIgNzAzLjg1MTgzNS0xLjEyODg3MiAyNC4wNDQ5NzkgMi4yNTc3NDQgNTAuNjg2MzYzLTExLjI4ODcyMiA3Mi4wMjIwNDktMTcuMDQ1OTcxIDEyLjQxNzU5NS0zOC45NDYwOTIgMTEuMjg4NzIyLTU4LjgxNDI0MyAxMS4yODg3MjJINjA0Ljk2MjYyOHY5NS4yNzY4MTZoLTcyLjkyNTE0NkMzNTQuOTE3NDI5IDk5MC45MjQwNDQgMTc3LjQ1ODcxNSA5NjAuNTU3MzgxIDAgOTI4LjcyMzE4NFY5NS41MDI1OTFDMTc4LjM2MTgxMiA2My41NTU1MDcgMzU2LjgzNjUxMiAzMi41MTE1MiA1MzUuMTk4MzI0IDB6IiBmaWxsPSIjMDA3MUM1IiBwLWlkPSIyNzgyIj48L3BhdGg+PHBhdGggZD0iTTQ3MC4xNzUyODQgMzU5LjMyMDAzMUgxMTAuNTE2NTkxdjYyLjA4Nzk3M2gxNDguNzg1MzZ2MzAzLjc3OTUxN2g2Mi4wODc5NzNWNDIxLjQwODAwNGgxNDguNzg1MzZ2LTYyLjA4Nzk3M3pNNjA0LjczNjg1NCAxMzAuOTQ5MTc5djc2Mi4xMDE2NDJoMzgzLjgxNjU1OFYxMzAuOTQ5MTc5eiBtMjE4LjY2MjU1MSA2NC40NTg2MDRsMjIuNTc3NDQ0IDMzLjg2NjE2NyAyMi41Nzc0NDUtMzMuODY2MTY3aDE5LjQxNjYwMmwtMzIuMjg1NzQ2IDQ2LjczNTMxIDM0Ljc2OTI2NSA0OS44OTYxNTNoLTE5LjQxNjYwMkw4NDYuNjU0MTczIDI1NC42NzM1NzVsLTI0Ljk0ODA3NyAzNy4zNjU2NzFIODAxLjQ5OTI4M2wzNC41NDM0OTEtNDkuODk2MTUzLTMyLjI4NTc0Ni00Ni43MzUzMXogbS0yOS45MTUxMTQgMHYxMy41NDY0NjdoLTUzLjk2MDA5M3YyNi43NTQyNzJINzkwLjIxMDU2MXYxMy41NDY0NjZoLTUwLjY4NjM2M3YyOS4yMzc3OTFoNTYuNDQzNjEydjEzLjU0NjQ2N2gtNzIuMjQ3ODIzdi05Ni42MzE0NjN6IG0tMTYwLjUyNTYzMiAxMy41NDY0Njd2LTEzLjU0NjQ2N2g3OS4wMjEwNTd2MTMuNTQ2NDY3aC0zMS40OTU1MzZ2ODMuMDg0OTk2aC0xNS44MDQyMTF2LTgzLjA4NDk5NnogbTMzOS40NTE4OCAwaC0zMS43MjEzMXY4My4wODQ5OTZoLTE1LjgwNDIxMXYtODMuMDg0OTk2aC0zMS43MjEzMDl2LTEzLjU0NjQ2N2g3OS4wMjEwNTZ6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIyNzgzIj48L3BhdGg+PHBhdGggZD0iTTY0NS40ODkxNDEgMzY1Ljk4MDM3N2gzMDIuNDI0ODcxdjQ3LjYzODQwOEg2NDUuNDg5MTQxek02NDUuNDg5MTQxIDQ0Ny44MjM2MTRoMzAyLjQyNDg3MXY0Ny42Mzg0MDhINjQ1LjQ4OTE0MXpNNjQ1LjQ4OTE0MSA1MjkuNjY2ODVoMzAyLjQyNDg3MXY0Ny42Mzg0MDlINjQ1LjQ4OTE0MXpNNjQ1LjQ4OTE0MSA2MTEuNTEwMDg3aDMwMi40MjQ4NzF2NDcuNjM4NDA4SDY0NS40ODkxNDF6TTY0NS40ODkxNDEgNjkzLjM1MzMyNGgzMDIuNDI0ODcxdjQ3LjYzODQwOEg2NDUuNDg5MTQxek01OTYuMzgzMTk5IDc3NS4xOTY1NmgzNTEuNTMwODEzdjQ3LjYzODQwOUg1OTYuMzgzMTk5eiIgZmlsbD0iIzAwNzFDNSIgcC1pZD0iMjc4NCI+PC9wYXRoPjwvc3ZnPg==';
exports.default = _default;

/***/ }),

/***/ 424:
/*!*****************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/icons/video.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzIzNTE5NTU2NzI0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI5MzciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTYwNS4zMjA3OSAxNDIuNjkwNDk5aDM4My44Nzk1ODZ2NzI2LjMzNjc4Mkg2MDUuMzIwNzl6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIyOTM4Ij48L3BhdGg+PHBhdGggZD0iTTEwMjIuNzk1ODYxIDE1My44ODg5OTNBNDAuNjk5OTA2IDQwLjY5OTkwNiAwIDAgMCA5NzcuNzYxMDU0IDEwOC4zNzI1MzFjLTEyNC4xNDY3NTQtMS45MjY2MjMtMjQ4LjY1NDc1MSAwLTM3My4yODMxNjEgMFYwaC02NS43NDYwMDJDMzU5LjA3NDMxOCAzMS4zMDc2MiAxNzkuNTM3MTU5IDYzLjY5ODk2NSAwIDk1LjQ4ODI0MXY4MzMuMjY0MzQ2YzE3Ny40OTAxMjIgMzEuOTA5NjkgMzU1LjEwMDY1OSA2Mi4xMzM1ODQgNTMyLjM0OTk1MyA5NC43NjU3NTdoNzIuMjQ4MzU0di0xMTguNjA3NzE0aDM0OS4yMDAzNzZjMTkuOTg4NzExLTAuOTYzMzExIDQyLjAyNDQ1OSAwLjcyMjQ4NCA1OS4wMDI4MjItMTIuMDQxMzkyIDEzLjQ4NjM1OS0yMS4zMTMyNjQgOS45OTQzNTYtNDguMTY1NTY5IDExLjE5ODQ5NS03Mi4yNDgzNTQtMS42ODU3OTUtMjIxLjgwMjQ0NiAwLjg0Mjg5Ny00NDQuMzI3Mzc1LTEuMjA0MTM5LTY2Ni43MzE4OTF6IG0tMzQuMTk3NTU0IDcxNS4yNTg3MDJINjA0LjcxODcyMVYxNDIuOTMxMzI2SDk4OC41OTgzMDd6IiBmaWxsPSIjNzMzNzgxIiBwLWlkPSIyOTM5Ij48L3BhdGg+PHBhdGggZD0iTTY0Mi43Njk1MiAyNDIuNzU0NDY4bDIxLjkxNTMzNCA1MC4wOTIxOTIgMjEuNjc0NTA2LTUwLjA5MjE5MmgxNC4yMDg4NDNsLTI4LjI5NzI3MiA2MS40MTExMDFoLTE1LjI5MjU2OGwtMjguMjk3MjcyLTYxLjQxMTEwMXpNNzIyLjQ4MzUzNyAyNDIuNzU0NDY4djYxLjQxMTEwMWgtMTMuMDA0NzA0di02MS40MTExMDF6TTc2Ny4yNzc1MTYgMjQyLjc1NDQ2OGE0NC42NzM1NjUgNDQuNjczNTY1IDAgMCAxIDI5LjI2MDU4NCA4LjMwODU2MSAyNy4yMTM1NDcgMjcuMjEzNTQ3IDAgMCAxIDkuNjMzMTE0IDIyLjM5Njk5IDI3LjIxMzU0NyAyNy4yMTM1NDcgMCAwIDEtOS42MzMxMTQgMjIuMzk2OTg5IDQ0LjY3MzU2NSA0NC42NzM1NjUgMCAwIDEtMjkuMjYwNTg0IDguMzA4NTYxSDczOC4xMzczNDd2LTYxLjQxMTEwMXogbS0xNi4xMzU0NjUgNTIuODYxNzEzaDEzLjYwNjc3M2EzNS4xNjA4NjUgMzUuMTYwODY1IDAgMCAwIDIxLjc5NDkyLTUuNDE4NjI3IDIwLjIyOTUzOSAyMC4yMjk1MzkgMCAwIDAgNi42MjI3NjYtMTYuNzM3NTM1IDIwLjEwOTEyNSAyMC4xMDkxMjUgMCAwIDAtNi42MjI3NjYtMTYuODU3OTQ5IDM2LjEyNDE3NyAzNi4xMjQxNzcgMCAwIDAtMjEuNzk0OTItNS4yOTgyMTNoLTEzLjYwNjc3M3pNODc1Ljg5MDg3NSAyNDIuNzU0NDY4djguNTQ5Mzg5aC00NC4zMTIzMjR2MTcuMDk4Nzc3aDQxLjY2MzIxOFYyNzYuOTUyMDIzaC00MS42NjMyMTh2MTguNjY0MTU4aDQ2LjIzODk0N3Y4LjU0OTM4OEg4MTguODE0Njc1di02MS40MTExMDF6TTk1NC4yODAzMzkgMjUwLjcwMTc4N2EzMS4wNjY3OTIgMzEuMDY2NzkyIDAgMCAxIDAgNDUuNjM2ODc3IDUwLjA5MjE5MiA1MC4wOTIxOTIgMCAwIDEtNTcuNTU3ODU1IDAgMzAuODI1OTY0IDMwLjgyNTk2NCAwIDAgMSAwLTQ1LjM5NjA0OSA0MS4xODE1NjIgNDEuMTgxNTYyIDAgMCAxIDI4Ljc3ODkyNy05LjI3MTg3MiA0Mi4xNDQ4NzMgNDIuMTQ0ODczIDAgMCAxIDI4Ljc3ODkyOCA5LjAzMTA0NHogbS00OC4xNjU1NjkgNi4xNDExMWEyNC4wODI3ODUgMjQuMDgyNzg1IDAgMCAwIDAgMzMuMzU0NjU3IDI2LjczMTg5MSAyNi43MzE4OTEgMCAwIDAgMTkuMTQ1ODEzIDYuMjYxNTI0IDI3LjY5NTIwMiAyNy42OTUyMDIgMCAwIDAgMTkuMDI1NC02LjAyMDY5NiAyMi4wMzU3NDggMjIuMDM1NzQ4IDAgMCAwIDYuNjIyNzY2LTE2Ljg1Nzk0OSAyMi43NTgyMzEgMjIuNzU4MjMxIDAgMCAwLTYuNjIyNzY2LTE3LjA5ODc3NyAyNy4wOTMxMzMgMjcuMDkzMTMzIDAgMCAwLTE5LjAyNTQtNi4wMjA2OTYgMjYuNDkxMDYzIDI2LjQ5MTA2MyAwIDAgMC0xOC45MDQ5ODYgNi4zODE5Mzd6IiBmaWxsPSIjNzMzNzgxIiBwLWlkPSIyOTQwIj48L3BhdGg+PHBhdGggZD0iTTQxMS44MTU2MTYgNDIyLjI5MTYyN2wtOTYuMzMxMTM4IDI2Ni40NzYwMTJoLTczLjQ1MjQ5M2wtOTYuMzMxMTM4LTI2Ni40NzYwMTJoNzguMTQ4NjM2bDU1LjE0OTU3NiAxOTYuMzk1MTA5TDMzNy4xNTg5ODQgNDIyLjI5MTYyN3oiIGZpbGw9IiNGRkZGRkYiIHAtaWQ9IjI5NDEiPjwvcGF0aD48cGF0aCBkPSJNNjc1LjA0MDQ1MiA2NjIuMjc2NTc2aDI0Ni44NDg1NDF2MTQ3Ljc0Nzg4M2gtMjQ2Ljg0ODU0MXpNODM2Ljg3Njc2NCA0MTkuMjgxMjc5bC0zNi42MDU4MzMtNDMuMzQ5MDEyaC00MS41NDI4MDNsMzYuNjA1ODMyIDQzLjM0OTAxMmg0MS41NDI4MDR6TTg5MC44MjIyMDEgNDE5LjI4MTI3OWwtMzYuNjA1ODMyLTQzLjM0OTAxMmgtNDEuNTQyODA0bDM2LjYwNTgzMyA0My4zNDkwMTJoNDEuNTQyODAzek03ODIuOTMxMzI2IDQxOS4yODEyNzlsLTM2LjYwNTgzMi00My4zNDkwMTJoLTQxLjU0MjgwNGwzNi42MDU4MzMgNDMuMzQ5MDEyaDQxLjU0MjgwM3pNNjc0LjMxNzk2OCA2MTMuMjY4MTA5aDI0OC4wNTI2ODFWNDI5Ljc1NzI5MUg2NzQuMzE3OTY4eiBtODYuMjE2MzY5LTEzNC41MDIzNTJjMC05LjI3MTg3MiA3LjQ2NTY2My0xMy42MDY3NzMgMTYuMTM1NDY1LTEzLjYwNjc3M2EyMi44Nzg2NDUgMjIuODc4NjQ1IDAgMCAxIDguNjY5ODAzIDEuODA2MjA5bDYxLjI5MDY4NyAzNS40MDE2OTNhMTUuMDUxNzQgMTUuMDUxNzQgMCAwIDEgMCAyNi42MTE0NzdsLTYxLjI5MDY4NyAzNS40MDE2OTNhMTQuMzI5MjU3IDE0LjMyOTI1NyAwIDAgMS04LjY2OTgwMyAxLjgwNjIwOWMtOC42Njk4MDIgMC0xNi4xMzU0NjYtNC4zMzQ5MDEtMTYuMTM1NDY1LTEzLjYwNjc3M3pNNjkyLjUwMDQ3IDM3Ni41MzQzMzdoLTE4LjA2MjA4OHY0Mi43NDY5NDJoNTQuNTQ3NTA3bC0zNi40ODU0MTktNDIuNzQ2OTQyek05MjIuNDkxMDYzIDM3Ni41MzQzMzdoLTU1Ljg3MjA2bDM2LjYwNTgzMiA0My4zNDkwMTJoMTkuMjY2MjI4di00My4zNDkwMTJ6IiBmaWxsPSIjNzMzNzgxIiBwLWlkPSIyOTQyIj48L3BhdGg+PC9zdmc+';
exports.default = _default;

/***/ }),

/***/ 425:
/*!****************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/icons/word.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzIzNTE5NTk2MzIzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMwOTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTUzNS4xMTk0NzMgMGg2OS41OTkyNDh2OTUuMjQ3NDEzQzcyOS4yMjY3MTcgOTYuMzMxMTM4IDg1My42MTQyOTkgOTMuOTIyODYgOTc3Ljg4MTQ2OCA5Ni4zMzExMzhhNDAuNDU5MDc4IDQwLjQ1OTA3OCAwIDAgMSA0NC45MTQzOTMgNDUuNTE2NDYzYzIuMDQ3MDM3IDIzNC41NjYzMjIgMCA0NjkuNjE0Mjk5IDEuMjA0MTM5IDcwMy44MTkzNzktMS4yMDQxMzkgMjQuMDgyNzg1IDIuMjg3ODY1IDUwLjY5NDI2Mi0xMS4zMTg5MDkgNzIuMjQ4MzU0LTE2Ljk3ODM2MyAxMi4wNDEzOTItMzguODkzNjk3IDEwLjgzNzI1My01OC43NjE5OTQgMTIuMDQxMzkyaC0zNDkuMjAwMzc2VjEwMjMuNTE4MzQ0aC03Mi4yNDgzNTRDMzU0Ljk4MDI0NSA5OTAuODg2MTcxIDE3Ny40OTAxMjIgOTYwLjU0MTg2MyAwIDkyOC43NTI1ODdWOTUuNDg4MjQxQzE3OC4zMzMwMiA2My41Nzg1NTEgMzU2Ljc4NjQ1MyAzMi41MTE3NTkgNTM1LjExOTQ3MyAweiIgZmlsbD0iIzJBNTY5OSIgcC1pZD0iMzA5NiI+PC9wYXRoPjxwYXRoIGQ9Ik02MDQuNzE4NzIxIDEzMS4wMTAzNDhIOTg4LjU5ODMwN3Y3NjEuOTc5MzA0SDYwNC43MTg3MjF2LTk1LjI0NzQxM2gzMDIuNDc5Nzc0di00OC4xNjU1NjlINjA0LjcxODcyMXYtNTkuMDAyODIyaDMwMi40Nzk3NzR2LTQ4LjE2NTU3SDYwNC43MTg3MjF2LTU5LjAwMjgyMmgzMDIuNDc5Nzc0di00OC4xNjU1NjlINjA0LjcxODcyMXYtNjAuMjA2OTYxaDMwMi40Nzk3NzRWNDI4LjY3MzU2NUg2MDQuNzE4NzIxdi02MC4yMDY5NjFoMzAyLjQ3OTc3NHYtNDYuOTYxNDNINjA0LjcxODcyMXYtNTkuNjA0ODkyaDMwMi40Nzk3NzRWMjE0LjMzNjc4M0g2MDQuNzE4NzIxek0yNDAuODI3ODQ2IDM0MS4zNzM0NzFjMjIuMTU2MTYyLTEuMzI0NTUzIDQ0LjE5MTkxLTIuMjg3ODY1IDY2LjM0ODA3MS0zLjQ5MjAwMyAxNS41MzMzOTYgODAuNDM2NSAzMS4zMDc2MiAxNjAuNjMyMTczIDQ4LjE2NTU2OSAyNDAuODI3ODQ1IDEzLjEyNTExOC04Mi43MjQzNjUgMjcuNjk1MjAyLTE2NS4wODc0ODggNDEuNzgzNjMyLTI0Ny41NzEwMjUgMjMuMjM5ODg3LTAuODQyODk3IDQ2LjQ3OTc3NC0yLjE2NzQ1MSA2OS43MTk2NjEtMy42MTI0MTgtMjYuMzcwNjQ5IDExNS4zNTY1MzgtNDkuMzY5NzA4IDIzMS43OTY4MDItNzguMTQ4NjM2IDM0Ni40MzA4NTYtMTkuMzg2NjQyIDEwLjM1NTU5Ny00OC4xNjU1NjkgMC03MS41MjU4NyAxLjIwNDEzOUMzMDEuMDM0ODA3IDU5Ni4xNjkzMzIgMjgzLjA5MzEzMyA1MTcuNzc5ODY4IDI2OS4yNDU1MzIgNDM4LjY2NzkyMWMtMTMuNjA2NzczIDc2Ljk0NDQ5Ny0zMS4zMDc2MiAxNTMuMTY2NTEtNDYuODQxMDE2IDIyOS41MDg5MzctMjIuMzk2OTktMS4yMDQxMzktNDQuNzkzOTc5LTIuNTI4NjkyLTY3LjMxMTM4My00LjA5NDA3My0xOS4yNjYyMjgtMTA0Ljc2MDExMy00Mi4wMjQ0NTktMjA4LjkxODE1Ni02MC4yMDY5NjItMzEzLjkxOTA5NyAxOS44NjgyOTctMC45NjMzMTEgMzkuODU3MDA4LTEuODA2MjA5IDYwLjIwNjk2Mi0yLjUyODY5MyAxMi4wNDEzOTIgNzUuODYwNzcxIDI1LjY0ODE2NiAxNTEuMzYwMzAxIDM2LjEyNDE3NyAyMjcuMzQxNDg3IDE2LjEzNTQ2Ni03Ny45MDc4MDggMzIuODczMDAxLTE1NS42OTUyMDIgNDkuNjEwNTM2LTIzMy42MDMwMTF6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIzMDk3Ij48L3BhdGg+PC9zdmc+';
exports.default = _default;

/***/ }),

/***/ 426:
/*!***************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/icons/zip.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzIzNTE5NjMwMzUwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMyNTAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PHBhdGggZD0iTTYwNS4zMjA3OSAxNDIuNjkwNDk5aDM4My44Nzk1ODZ2NzI2LjMzNjc4Mkg2MDUuMzIwNzl6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIzMjUxIj48L3BhdGg+PHBhdGggZD0iTTEwMjIuNzk1ODYxIDE1My44ODg5OTNBNDAuNjk5OTA2IDQwLjY5OTkwNiAwIDAgMCA5NzcuNzYxMDU0IDEwOC4zNzI1MzFjLTEyNC4xNDY3NTQtMS45MjY2MjMtMjQ4LjY1NDc1MSAwLTM3My4yODMxNjEgMFYwaC02NS43NDYwMDJDMzU5LjA3NDMxOCAzMS4zMDc2MiAxNzkuNTM3MTU5IDYzLjY5ODk2NSAwIDk1LjQ4ODI0MXY4MzMuMjY0MzQ2YzE3Ny40OTAxMjIgMzEuOTA5NjkgMzU1LjEwMDY1OSA2Mi4xMzM1ODQgNTMyLjM0OTk1MyA5NC43NjU3NTdoNzIuMjQ4MzU0di0xMTguNjA3NzE0aDM0OS4yMDAzNzZjMTkuOTg4NzExLTAuOTYzMzExIDQyLjAyNDQ1OSAwLjcyMjQ4NCA1OS4wMDI4MjItMTIuMDQxMzkyIDEzLjQ4NjM1OS0yMS4zMTMyNjQgOS45OTQzNTYtNDguMTY1NTY5IDExLjE5ODQ5NS03Mi4yNDgzNTQtMS42ODU3OTUtMjIxLjgwMjQ0NiAwLjg0Mjg5Ny00NDQuMzI3Mzc1LTEuMjA0MTM5LTY2Ni43MzE4OTF6IG0tMzQuMTk3NTU0IDcxNS4yNTg3MDJINjA0LjcxODcyMVYxNDIuOTMxMzI2SDk4OC41OTgzMDd6IiBmaWxsPSIjNzMzNzgxIiBwLWlkPSIzMjUyIj48L3BhdGg+PHBhdGggZD0iTTc2My4wNjMwMjkgMjAxLjA5MTI1MXYxMy4zNjU5NDZMNjg2LjM1OTM2IDI4OS43MTU4OThoODEuNzYxMDU0djE0LjQ0OTY3MWgtMTExLjAyMTYzN3YtMTMuMjQ1NTMxTDczNC41MjQ5MjkgMjE1LjU0MDkyMmgtNzIuMjQ4MzUzdi0xNC40NDk2NzF6TTgwNy4zNzUzNTMgMjAxLjA5MTI1MXYxMDMuMDc0MzE4aC0yMi4wMzU3NDhWMjAxLjA5MTI1MXpNODg5LjEzNjQwNiAyMDEuMDkxMjUxYzMyLjI3MDkzMSAwIDQ4LjE2NTU2OSAxMC40NzYwMTEgNDguMTY1NTcgMzEuNTQ4NDQ4UzkyMS40MDczMzggMjY0LjkxMDYzIDg4OC43NzUxNjUgMjY0LjkxMDYzaC0zMy4yMzQyNDN2MzkuNjE2MTgxaC0yMS45MTUzMzRWMjAxLjA5MTI1MXogbS0zMy41OTU0ODQgNDkuMDA4NDY3aDMxLjkwOTY4OWE0NC43OTM5NzkgNDQuNzkzOTc5IDAgMCAwIDIxLjMxMzI2NS0zLjk3MzY2IDE0LjU3MDA4NSAxNC41NzAwODUgMCAwIDAgNi4zODE5MzgtMTMuNDg2MzU5IDE0LjIwODg0MyAxNC4yMDg4NDMgMCAwIDAtNi45ODQwMDgtMTMuMTI1MTE4IDQyLjE0NDg3MyA0Mi4xNDQ4NzMgMCAwIDAtMjEuMTkyODUtMy45NzM2NTloLTMxLjQyODAzNHoiIGZpbGw9IiM3MzM3ODEiIHAtaWQ9IjMyNTMiPjwvcGF0aD48cGF0aCBkPSJNMzc1LjMzMDE5OCA0MzQuNjk0MjYyTDI0MC44Mjc4NDYgNTg2LjA1NDU2M2gxMzkuNDM5MzIydjU3LjU1Nzg1NUgxNDkuOTE1MzM0di01NC41NDc1MDdMMjg2LjU4NTEzNiA0MzMuNDkwMTIySDE1OS40MjgwMzR2LTU2LjM1MzcxNmgyMTUuOTAyMTY0eiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iMzI1NCI+PC9wYXRoPjxwYXRoIGQ9Ik02NzQuMzE3OTY4IDY2Mi4yNzY1NzZoMjQ2Ljg0ODU0MnYxNDcuNzQ3ODgzSDY3NC4zMTc5Njh6TTkyMS44ODg5OTMgMzYxLjI0MTc2OUg2NzQuMzE3OTY4djI0OC4wNTI2ODFoMjQ4LjA1MjY4MVYzNjEuMjQxNzY5eiBtLTE0OC4xMDkxMjUgMjQuMDgyNzg0aDI0LjA4Mjc4NXYyNC4wODI3ODVoLTI0LjA4Mjc4NXogbTQ4LjE2NTU2OSAxNjguNTc5NDkyaC00OC4xNjU1Njl2LTY0LjMwMTAzNWg0OC4xNjU1Njl6IG0wLTEyMC40MTM5MjNoLTI0LjA4Mjc4NHYyNC4wODI3ODVoMjQuMDgyNzg0djI0LjA4Mjc4NGgtMjQuMDgyNzg0di0yNC4wODI3ODRoLTI0LjA4Mjc4NXYtMjQuMDgyNzg1aDI0LjA4Mjc4NXYtMjQuMDgyNzg0aDI0LjA4Mjc4NHoiIGZpbGw9IiM3MzM3ODEiIHAtaWQ9IjMyNTUiPjwvcGF0aD48L3N2Zz4=';
exports.default = _default;

/***/ }),

/***/ 448:
/*!*********************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/utils/time.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeDifference = exports.getMonthBetween = exports.formatSecond = exports.formatDate = exports.currentTime = void 0;
// 获取当前时间
var currentTime = function currentTime(format) {
  var d = new Date();
  var year = d.getFullYear(); //获取年
  var month = d.getMonth() + 1; //获取月，从 Date 对象返回月份 (0 ~ 11)，故在此处+1
  var day = d.getDay(); //获取日
  var days = d.getDate(); //获取日期
  var hour = d.getHours(); //获取小时
  var minute = d.getMinutes(); //获取分钟
  var second = d.getSeconds(); //获取秒

  if (month < 10) month = "0" + month;
  if (days < 10) days = "0" + days;
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  if (second < 10) second = "0" + second;
  var week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
  var ym = "".concat(year, "\u5E74").concat(month, "\u6708").concat(days, "\u65E5"); // 年月
  var yymm = "".concat(year, "-").concat(month); // 年月
  var yymmhh = "".concat(year, "-").concat(month, "-").concat(days);
  var time = hour + ":" + minute;
  var weekend = week[day];
  if (format == "YYYY年MM月") {
    return "".concat(year, "\u5E74").concat(month, "\u6708");
  }
  if (format == "YYYY-MM") {
    return "".concat(year, "-").concat(month);
  }
  return {
    ym: ym,
    time: time,
    yymm: yymm,
    weekend: weekend,
    yymmhh: yymmhh
  };
};

/**
 * 计算两个时间的时间差
 * @param {String} time1 第一个时间点
 * @param {String} time2 第二个时间点
 * @return {String} 带天时分秒的时间差
 */
exports.currentTime = currentTime;
var timeDifference = function timeDifference(time1, time2) {
  var dateBegin;
  var dateEnd;
  if (new Date(time1).getTime() > new Date(time2).getTime()) {
    dateEnd = new Date(time1).getTime();
    dateBegin = new Date(time2).getTime();
  } else {
    dateEnd = new Date(time2).getTime();
    dateBegin = new Date(time1).getTime();
  }
  var dateDiff = dateEnd - dateBegin; //时间差的毫秒数
  //计算出相差天数
  var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000)) != 0 ? Math.floor(dateDiff / (24 * 3600 * 1000)) + "天" : "";
  var leave1 = dateDiff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
  //计算出小时数
  var hours = Math.floor(leave1 / (3600 * 1000)) != 0 ? Math.floor(leave1 / (3600 * 1000)) + "小时" : "";
  //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000)) != 0 ? Math.floor(leave2 / (60 * 1000)) + "分" : ""; //计算相差分钟数
  //计算相差秒数
  var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000) != 0 ? Math.round(leave3 / 1000) + "秒" : "";
  // console.log('相差 ' + dayDiff + hours + minutes + seconds)
  return dayDiff + hours + minutes + seconds;
};

/**
 * 获取指定日期的月份开始和结束时间
 * @param {String} time 指定日期
 * @return {String} value_description
 */
exports.timeDifference = timeDifference;
var getMonthBetween = function getMonthBetween(time) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var year = new Date(time).getFullYear();
  var month = new Date(time).getMonth();
  var firstDay = new Date(year, month, 1);
  var lastDay = new Date(year, month + 1, 0, 23, 59, 59);
  if (type === 1) {
    return {
      firstDay: formatDate({
        date: firstDay
      }),
      lastDay: formatDate({
        date: lastDay
      })
    };
  }
  if (type === 2) {
    return {
      firstDay: firstDay,
      lastDay: lastDay
    };
  }
  if (type === 3) {
    return {
      firstDay: firstDay.getTime(),
      lastDay: lastDay.getTime()
    };
  }
};

/**
 * 格式化秒转成天时分秒
 * @param {Number} timestamp 时间戳的差
 * @return {String} 时分秒数据
 */
exports.getMonthBetween = getMonthBetween;
var formatSecond = function formatSecond(timestamp) {
  if (!timestamp) return '-';
  var formatTen = function formatTen(num) {
    return num < 10 ? "0".concat(num) : num;
  };
  var d = parseInt(timestamp / (1000 * 60 * 60 * 24));
  var h = parseInt(timestamp % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var m = parseInt(timestamp % (1000 * 60 * 60) / (1000 * 60));
  var s = (timestamp % (1000 * 60) / 1000).toFixed(0);
  var days = d > 0 ? d + "天" : "";
  var hours = h > 0 ? formatTen(h) + "小时" : "";
  var minutes = m > 0 ? formatTen(m) + "分钟" : "";
  var seconds = s > 0 ? formatTen(s) + "秒" : "";
  return "".concat(days).concat(hours).concat(minutes).concat(seconds);
};

/**
 * 根据模板格式化时间
 * @param {String|Number} date 时间
 * @param {String} format 模板，默认：yyyy-MM-dd
 * @return {String} 模板时间
 */
exports.formatSecond = formatSecond;
var formatDate = function formatDate(params) {
  var date = params.date,
    format = params.format;
  if (typeof date === "string") {
    date = date.replace("+08:00", "").replace("T", " ").replace("Z", "");
  }
  format = typeof format === "string" ? format : "YYYY-MM-DD HH:mm:ss";
  if (date) {
    date = new Date(date);
  } else {
    date = new Date();
  }
  var o = {
    "M+": date.getMonth() + 1,
    // 月份
    "D+": date.getDate(),
    // 日
    "H+": date.getHours(),
    // 小时
    "m+": date.getMinutes(),
    // 分
    "s+": date.getSeconds(),
    // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3),
    // 季度
    S: date.getMilliseconds() // 毫秒
  };

  if (/(Y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }
  return format;
};
exports.formatDate = formatDate;

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 51:
/*!***************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _aim = _interopRequireDefault(__webpack_require__(/*! ./aim */ 52));
var _circleClose = _interopRequireDefault(__webpack_require__(/*! ./circle-close */ 53));
var _arrowUp = _interopRequireDefault(__webpack_require__(/*! ./arrow-up */ 54));
var _arrowRight = _interopRequireDefault(__webpack_require__(/*! ./arrow-right */ 55));
var _view = _interopRequireDefault(__webpack_require__(/*! ./view */ 56));
var _deleted = _interopRequireDefault(__webpack_require__(/*! ./deleted */ 57));
var _download = _interopRequireDefault(__webpack_require__(/*! ./download */ 58));
var _close = _interopRequireDefault(__webpack_require__(/*! ./close */ 59));
var _search = _interopRequireDefault(__webpack_require__(/*! ./search */ 60));
var _filter = _interopRequireDefault(__webpack_require__(/*! ./filter */ 61));
var _successFilled = _interopRequireDefault(__webpack_require__(/*! ./success-filled.js */ 62));
var _failFilled = _interopRequireDefault(__webpack_require__(/*! ./fail-filled.js */ 63));
var _warningFilled = _interopRequireDefault(__webpack_require__(/*! ./warning-filled.js */ 64));
var _infoFilled = _interopRequireDefault(__webpack_require__(/*! ./info-filled.js */ 65));
var _questionFilled = _interopRequireDefault(__webpack_require__(/*! ./question-filled.js */ 66));
var _circle = _interopRequireDefault(__webpack_require__(/*! ./circle.js */ 67));
var _circleFilled = _interopRequireDefault(__webpack_require__(/*! ./circle-filled.js */ 68));
var _default = {
  aim: _aim.default,
  circleClose: _circleClose.default,
  arrowUp: _arrowUp.default,
  arrowRight: _arrowRight.default,
  view: _view.default,
  deleted: _deleted.default,
  download: _download.default,
  close: _close.default,
  search: _search.default,
  filter: _filter.default,
  successFilled: _successFilled.default,
  failFilled: _failFilled.default,
  warningFilled: _warningFilled.default,
  infoFilled: _infoFilled.default,
  questionFilled: _questionFilled.default,
  circle: _circle.default,
  circleFilled: _circleFilled.default
};
exports.default = _default;

/***/ }),

/***/ 52:
/*!*************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/aim.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"/><path fill="#000" d="M512 96a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V128a32 32 0 0 1 32-32m0 576a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V704a32 32 0 0 1 32-32M96 512a32 32 0 0 1 32-32h192a32 32 0 0 1 0 64H128a32 32 0 0 1-32-32m576 0a32 32 0 0 1 32-32h192a32 32 0 1 1 0 64H704a32 32 0 0 1-32-32"/></svg>';
exports.default = _default;

/***/ }),

/***/ 53:
/*!**********************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/circle-close.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"/><path fill="#000" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"/></svg>';
exports.default = _default;

/***/ }),

/***/ 54:
/*!******************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/arrow-up.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0"/></svg>';
exports.default = _default;

/***/ }),

/***/ 55:
/*!*********************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/arrow-right.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512 340.864 831.872a30.59 30.59 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"/></svg>';
exports.default = _default;

/***/ }),

/***/ 56:
/*!**************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/view.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"/></svg>';
exports.default = _default;

/***/ }),

/***/ 57:
/*!*****************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/deleted.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"/></svg>';
exports.default = _default;

/***/ }),

/***/ 58:
/*!******************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/download.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.696 236.288-236.352 45.248 45.248L508.8 704 192 387.2l45.248-45.248L480 584.704V128h64z"/></svg>';
exports.default = _default;

/***/ }),

/***/ 59:
/*!***************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/close.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"/></svg>';
exports.default = _default;

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!****************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/search.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704"/></svg>';
exports.default = _default;

/***/ }),

/***/ 61:
/*!****************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/filter.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M384 523.392V928a32 32 0 0 0 46.336 28.608l192-96A32 32 0 0 0 640 832V523.392l280.768-343.104a32 32 0 1 0-49.536-40.576l-288 352A32 32 0 0 0 576 512v300.224l-128 64V512a32 32 0 0 0-7.232-20.288L195.52 192H704a32 32 0 1 0 0-64H128a32 32 0 0 0-24.768 52.288z"/></svg>';
exports.default = _default;

/***/ }),

/***/ 62:
/*!************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/success-filled.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"></path></svg>';
exports.default = _default;

/***/ }),

/***/ 63:
/*!*********************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/fail-filled.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"></path></svg>';
exports.default = _default;

/***/ }),

/***/ 64:
/*!************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/warning-filled.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"></path></svg>';
exports.default = _default;

/***/ }),

/***/ 65:
/*!*********************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/info-filled.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"></path></svg>';
exports.default = _default;

/***/ }),

/***/ 66:
/*!*************************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/question-filled.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"></path></svg>';
exports.default = _default;

/***/ }),

/***/ 67:
/*!****************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/circle.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M512 990.08512C248.38144 990.08512 33.92512 775.60832 33.92512 512 33.92512 248.38144 248.38144 33.92512 512 33.92512c263.60832 0 478.08512 214.46656 478.08512 478.08512C990.08512 775.60832 775.60832 990.08512 512 990.08512zM512 91.36128C280.05376 91.36128 91.36128 280.05376 91.36128 512c0 231.936 188.69248 420.63872 420.63872 420.63872 231.936 0 420.63872-188.70272 420.63872-420.63872C932.63872 280.05376 743.936 91.36128 512 91.36128z"></path></svg>';
exports.default = _default;

/***/ }),

/***/ 68:
/*!***********************************************************************************************!*\
  !*** D:/ZHF-Project/config-ui/uni-app/vue2/uni_modules/config-ui/static/svg/circle-filled.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#000" d="M514.048 128q79.872 0 149.504 30.208t121.856 82.432 82.432 122.368 30.208 150.016q0 78.848-30.208 148.48t-82.432 121.856-121.856 82.432-149.504 30.208-149.504-30.208-121.856-82.432-82.432-121.856-30.208-148.48q0-79.872 30.208-150.016t82.432-122.368 121.856-82.432 149.504-30.208z"></path></svg>';
exports.default = _default;

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) {
        ;
      }
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map