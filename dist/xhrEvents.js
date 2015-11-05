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

	eval("'use strict';\n\nvar _xhrEvent = __webpack_require__(1);\n\nvar _xhrEvent2 = _interopRequireDefault(_xhrEvent);\n\nvar _xhrData = __webpack_require__(2);\n\nvar _xhrData2 = _interopRequireDefault(_xhrData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar config = {\n  start: function start() {\n    if (typeof window !== 'undefined' && typeof XMLHttpRequest !== 'undefined') {\n      _xhrEvent2.default.start(new _xhrData2.default(window, XMLHttpRequest), XMLHttpRequest);\n    }\n  }\n};\n\nconfig.start();\nmodule.exports = config;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/main.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/main.js?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar XHREvent = (function () {\n  function XHREvent() {\n    _classCallCheck(this, XHREvent);\n  }\n\n  _createClass(XHREvent, null, [{\n    key: 'start',\n    value: function start(xhrHelper, XMLHttpRequest) {\n      XMLHttpRequest.prototype.open = function () {\n        this.onloadstart = function (event) {\n          xhrHelper.dates = Object.assign(xhrHelper.dates, { loadStartDate: new Date() });\n          xhrHelper.dispatchNewMessage('XHRLoadStart', Object.assign({ event: event }, xhrHelper.dates));\n        };\n\n        this.onloadend = function (event) {\n          xhrHelper.dates = Object.assign(xhrHelper.dates, { loadEndDate: new Date() });\n          xhrHelper.dispatchNewMessage('XHRLoadEnd', Object.assign({ event: event }, xhrHelper.dates));\n        };\n\n        this.onload = function (event) {\n          xhrHelper.dates = Object.assign(xhrHelper.dates, { loadDate: new Date() });\n          xhrHelper.dispatchNewMessage('XHRLoad', Object.assign({ event: event }, xhrHelper.dates));\n        };\n\n        this.onabort = function (event) {\n          xhrHelper.dates = Object.assign(xhrHelper.dates, { abortDate: new Date() });\n          xhrHelper.dispatchNewMessage('XHRAbort', Object.assign({ event: event }, xhrHelper.dates));\n        };\n\n        this.ontimeout = function (event) {\n          xhrHelper.dates = Object.assign(xhrHelper.dates, { timeoutDate: new Date() });\n          xhrHelper.dispatchNewMessage('XHRTimeout', Object.assign({ event: event }, xhrHelper.dates));\n        };\n\n        this.onerror = function (event) {\n          xhrHelper.dates = Object.assign(xhrHelper.dates, { errorDate: new Date() });\n          xhrHelper.dispatchNewMessage('XHRError', Object.assign({ event: event }, xhrHelper.dates));\n        };\n\n        this.onprogress = function (event) {\n          xhrHelper.dates = Object.assign(xhrHelper.dates, { progressDates: xhrHelper.dates.progressDates.concat([new Date()]) });\n          xhrHelper.dispatchNewMessage('XHRProgress', Object.assign({ event: event }, xhrHelper.dates));\n        };\n\n        xhrHelper.xmlHttpRequestOpen.apply(this, arguments);\n      };\n    }\n  }]);\n\n  return XHREvent;\n})();\n\nexports.default = XHREvent;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/xhrEvent.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/xhrEvent.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _message = __webpack_require__(3);\n\nvar _message2 = _interopRequireDefault(_message);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar XHRData = (function () {\n  function XHRData(window, xhr) {\n    _classCallCheck(this, XHRData);\n\n    this.xmlHttpRequestOpen = xhr.prototype.open;\n    this.document = window && window.document;\n    this.window = window;\n    this.dates = {\n      loadStartDate: null,\n      loadEndDate: null,\n      loadDate: null,\n      abortDate: null,\n      timeoutDate: null,\n      errorDate: null,\n      progressDates: []\n    };\n  }\n\n  _createClass(XHRData, [{\n    key: 'dispatchNewMessage',\n    value: function dispatchNewMessage(name, data) {\n      var message = new _message2.default(this.window, name, data);\n      return message.dispatchMessage(this.document);\n    }\n  }]);\n\n  return XHRData;\n})();\n\nexports.default = XHRData;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/xhrData.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/xhrData.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Message = (function () {\n  function Message(window, name, data) {\n    _classCallCheck(this, Message);\n\n    this.document = window && window.document;\n    this.window = window;\n    this.data = data;\n\n    if (this.document.createEvent && this.window.CustomEvent && this.window.CustomEvent.prototype.initCustomEvent) {\n      var event = this.document.createEvent('CustomEvent');\n      event.initCustomEvent(name, true, true, data);\n      this.event = event;\n    } else if (this.window && this.window.CustomEvent) {\n      try {\n        this.event = new CustomEvent(name, data);\n      } catch (e) {\n        this.event = null;\n      }\n    } else {\n      this.event = null;\n    }\n  }\n\n  _createClass(Message, [{\n    key: 'dispatchMessage',\n    value: function dispatchMessage(from) {\n      if (from && from.dispatchEvent && this.event) {\n        return from.dispatchEvent(this.event);\n      }\n      return false;\n    }\n  }]);\n\n  return Message;\n})();\n\nexports.default = Message;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/message.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/message.js?");

/***/ }
/******/ ]);