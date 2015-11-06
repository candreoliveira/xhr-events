/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _xhrEvent = __webpack_require__(1);\n\nvar _xhrEvent2 = _interopRequireDefault(_xhrEvent);\n\nvar _xhrData = __webpack_require__(4);\n\nvar _xhrData2 = _interopRequireDefault(_xhrData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar config = {\n  start: function start() {\n    _xhrEvent2.default.start(XMLHttpRequest);\n  }\n};\n\nmodule.exports = config;\n\nif (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {\n  window.XHREvents = config;\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/main.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/main.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _objectAssign = __webpack_require__(2);\n\nvar _objectAssign2 = _interopRequireDefault(_objectAssign);\n\nvar _xhrTiming = __webpack_require__(3);\n\nvar _xhrTiming2 = _interopRequireDefault(_xhrTiming);\n\nvar _xhrData = __webpack_require__(4);\n\nvar _xhrData2 = _interopRequireDefault(_xhrData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar XHREvent = (function () {\n  function XHREvent() {\n    _classCallCheck(this, XHREvent);\n  }\n\n  _createClass(XHREvent, null, [{\n    key: 'start',\n    value: function start(XMLHttpRequest) {\n      XMLHttpRequest.prototype.open = function () {\n        var xhrTiming = new _xhrTiming2.default();\n        var xhrData = new _xhrData2.default(window, XMLHttpRequest);\n        xhrData.request = {\n          method: arguments[0],\n          url: arguments[1],\n          async: arguments[2],\n          user: arguments[3],\n          password: arguments[4]\n        };\n\n        this.onloadstart = function (XMLHttpRequestEvent) {\n          xhrTiming.loadStartDate = new Date();\n          xhrData.dispatchNewMessage('XHRLoadStart', (0, _objectAssign2.default)({ XMLHttpRequestEvent: XMLHttpRequestEvent }, xhrTiming.dates()));\n        };\n\n        this.onloadend = function (XMLHttpRequestEvent) {\n          xhrTiming.loadEndDate = new Date();\n          xhrData.dispatchNewMessage('XHRLoadEnd', (0, _objectAssign2.default)({ XMLHttpRequestEvent: XMLHttpRequestEvent }, xhrTiming.dates()));\n        };\n\n        this.onload = function (XMLHttpRequestEvent) {\n          xhrTiming.loadDate = new Date();\n          xhrData.dispatchNewMessage('XHRLoad', (0, _objectAssign2.default)({ XMLHttpRequestEvent: XMLHttpRequestEvent }, xhrTiming.dates()));\n        };\n\n        this.onabort = function (XMLHttpRequestEvent) {\n          xhrTiming.abortDate = new Date();\n          xhrData.dispatchNewMessage('XHRAbort', (0, _objectAssign2.default)({ XMLHttpRequestEvent: XMLHttpRequestEvent }, xhrTiming.dates()));\n        };\n\n        this.ontimeout = function (XMLHttpRequestEvent) {\n          xhrTiming.timeoutDate = new Date();\n          xhrData.dispatchNewMessage('XHRTimeout', (0, _objectAssign2.default)({ XMLHttpRequestEvent: XMLHttpRequestEvent }, xhrTiming.dates()));\n        };\n\n        this.onerror = function (XMLHttpRequestEvent) {\n          xhrTiming.errorDate = new Date();\n          xhrData.dispatchNewMessage('XHRError', (0, _objectAssign2.default)({ XMLHttpRequestEvent: XMLHttpRequestEvent }, xhrTiming.dates()));\n        };\n\n        this.onprogress = function (XMLHttpRequestEvent) {\n          xhrTiming.progressDates = xhrTiming.progressDates.concat([new Date()]);\n          xhrData.dispatchNewMessage('XHRProgress', (0, _objectAssign2.default)({ XMLHttpRequestEvent: XMLHttpRequestEvent }, xhrTiming.dates()));\n        };\n\n        xhrData.xmlHttpRequestOpen.apply(this, arguments);\n      };\n    }\n  }]);\n\n  return XHREvent;\n})();\n\nexports.default = XHREvent;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/xhrEvent.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/xhrEvent.js?");

/***/ },
/* 2 */
/***/ function(module, exports) {

	eval("/* eslint-disable no-unused-vars */\n'use strict';\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nmodule.exports = Object.assign || function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (Object.getOwnPropertySymbols) {\n\t\t\tsymbols = Object.getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/object-assign/index.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/object-assign/index.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar XHRTiming = (function () {\n  function XHRTiming() {\n    _classCallCheck(this, XHRTiming);\n\n    this.loadStartDate = null;\n    this.loadEndDate = null;\n    this.loadDate = null;\n    this.abortDate = null;\n    this.timeoutDate = null;\n    this.errorDate = null;\n    this.progressDates = [];\n  }\n\n  _createClass(XHRTiming, [{\n    key: \"dates\",\n    value: function dates() {\n      return {\n        loadStartDate: this.loadStartDate,\n        loadEndDate: this.loadEndDate,\n        loadDate: this.loadDate,\n        abortDate: this.abortDate,\n        timeoutDate: this.timeoutDate,\n        errorDate: this.errorDate,\n        progressDates: this.progressDates\n      };\n    }\n  }]);\n\n  return XHRTiming;\n})();\n\nexports.default = XHRTiming;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/xhrTiming.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/xhrTiming.js?");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _message = __webpack_require__(5);\n\nvar _message2 = _interopRequireDefault(_message);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar XHRData = (function () {\n  function XHRData(window, xhr) {\n    _classCallCheck(this, XHRData);\n\n    this.xmlHttpRequestOpen = xhr.prototype.open;\n    this.document = window && window.document;\n    this.window = window;\n  }\n\n  _createClass(XHRData, [{\n    key: 'dispatchNewMessage',\n    value: function dispatchNewMessage(name, data) {\n      var message = new _message2.default(this.window, name, data);\n      return message.dispatchMessage(this.document);\n    }\n  }]);\n\n  return XHRData;\n})();\n\nexports.default = XHRData;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/xhrData.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/xhrData.js?");

/***/ },
/* 5 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Message = (function () {\n  function Message(window, name, data) {\n    _classCallCheck(this, Message);\n\n    this.document = window && window.document;\n    this.window = window;\n    this.data = data;\n\n    if (this.document.createEvent && this.window.CustomEvent && this.window.CustomEvent.prototype.initCustomEvent) {\n      var event = this.document.createEvent('CustomEvent');\n      event.initCustomEvent(name, true, true, data);\n      this.event = event;\n    } else if (this.window && this.window.CustomEvent) {\n      try {\n        this.event = new CustomEvent(name, data);\n      } catch (e) {\n        this.event = null;\n      }\n    } else {\n      this.event = null;\n    }\n  }\n\n  _createClass(Message, [{\n    key: 'dispatchMessage',\n    value: function dispatchMessage(from) {\n      if (from && from.dispatchEvent && this.event) {\n        return from.dispatchEvent(this.event);\n      }\n      return false;\n    }\n  }]);\n\n  return Message;\n})();\n\nexports.default = Message;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/message.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/message.js?");

/***/ }
/******/ ]);