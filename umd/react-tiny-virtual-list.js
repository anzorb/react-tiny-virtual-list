/*!
 * react-tiny-virtual-list v2.1.1 - https://github.com/clauderic/react-tiny-virtual-list
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["VirtualList"] = factory(require("prop-types"), require("react"));
	else
		root["VirtualList"] = factory(root["PropTypes"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return ALIGN_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return ALIGN_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return ALIGN_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return DIRECTION_VERTICAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DIRECTION_HORIZONTAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DEFAULT_SCROLL_DIRECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LANGUAGE_DIRECTION_RTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LANGUAGE_DIRECTION_LTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SCROLL_CHANGE_OBSERVED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SCROLL_CHANGE_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SCROLL_IMPLEMENTATION_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SCROLL_IMPLEMENTATION_REVERSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SCROLL_IMPLEMENTATION_NEGATIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return scrollProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SCROLL_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CLIENT_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return sizeProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return positionProp; });
var _scrollProp, _sizeProp, _DIRECTION_HORIZONTAL, _positionProp;

var ALIGN_START = 'start';
var ALIGN_CENTER = 'center';
var ALIGN_END = 'end';

var DIRECTION_VERTICAL = 'vertical';
var DIRECTION_HORIZONTAL = 'horizontal';
var DEFAULT_SCROLL_DIRECTION = 'ltr';

var LANGUAGE_DIRECTION_RTL = 'rtl';
var LANGUAGE_DIRECTION_LTR = 'ltr';

var SCROLL_CHANGE_OBSERVED = 'observed';
var SCROLL_CHANGE_REQUESTED = 'requested';

var SCROLL_IMPLEMENTATION_DEFAULT = 'default';
var SCROLL_IMPLEMENTATION_REVERSE = 'reverse';
var SCROLL_IMPLEMENTATION_NEGATIVE = 'negative';

var scrollProp = (_scrollProp = {}, _scrollProp[DIRECTION_VERTICAL] = 'scrollTop', _scrollProp[DIRECTION_HORIZONTAL] = 'scrollLeft', _scrollProp);

var SCROLL_WIDTH = 'scrollWidth';
var CLIENT_WIDTH = 'clientWidth';

var sizeProp = (_sizeProp = {}, _sizeProp[DIRECTION_VERTICAL] = 'height', _sizeProp[DIRECTION_HORIZONTAL] = 'width', _sizeProp);
var positionProp = (_positionProp = {}, _positionProp[DIRECTION_VERTICAL] = 'top', _positionProp[DIRECTION_HORIZONTAL] = (_DIRECTION_HORIZONTAL = {}, _DIRECTION_HORIZONTAL[LANGUAGE_DIRECTION_RTL] = 'right', _DIRECTION_HORIZONTAL[LANGUAGE_DIRECTION_LTR] = 'left', _DIRECTION_HORIZONTAL), _positionProp);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SizeAndPositionManager__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["testScrollImplementaion"] = testScrollImplementaion;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VirtualList; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class,
    _temp2,
    _jsxFileName = '/Users/anzor/dev/mappedin/react-tiny-virtual-list/src/index.js';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var STYLE_WRAPPER = { overflow: 'auto', willChange: 'transform', WebkitOverflowScrolling: 'touch' };
var STYLE_INNER = { position: 'relative', overflow: 'hidden', width: '100%', minHeight: '100%' };
var STYLE_ITEM = { position: 'absolute', width: '100%' };

function testScrollImplementaion() {
  /* 
    Different browsers have different implementaions of scrollLeft on elements with direction='rtl', this tests for an implementation
    inspired by 
      https://github.com/othree/jquery.rtl-scroll-type/blob/master/src/jquery.rtl-scroll.js &&
      https://stackoverflow.com/questions/24276619/better-way-to-get-the-viewport-of-a-scrollable-div-in-rtl-mode/24394376#24394376 
  */
  var scrollImplementation = __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* SCROLL_IMPLEMENTATION_DEFAULT */];

  var testDiv = document.createElement('div');
  testDiv.innerHTML = '<div dir="rtl" class="test" style="font-size: 14px; width: 4px; height: 1px; position: absolute; top: 0px; overflow: scroll">ABCDEFASDASD</div>';
  document.body.appendChild(testDiv);
  var tester = testDiv.querySelector('.test');

  if (tester.scrollLeft > 0) {
    scrollImplementation = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* SCROLL_IMPLEMENTATION_REVERSE */];
  } else {
    tester.scrollLeft = -1;
    if (tester.scrollLeft === -1) {
      scrollImplementation = __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* SCROLL_IMPLEMENTATION_NEGATIVE */];
    } else {
      scrollImplementation = __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* SCROLL_IMPLEMENTATION_REVERSE */];
    }
  }

  document.body.removeChild(testDiv);
  return scrollImplementation;
}

var scrollImplementation = testScrollImplementaion();

var VirtualList = (_temp2 = _class = function (_PureComponent) {
  _inherits(VirtualList, _PureComponent);

  function VirtualList() {
    var _temp, _this, _ret;

    _classCallCheck(this, VirtualList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.sizeAndPositionManager = new __WEBPACK_IMPORTED_MODULE_2__SizeAndPositionManager__["a" /* default */]({
      itemCount: _this.props.itemCount,
      itemSizeGetter: function itemSizeGetter(_ref) {
        var index = _ref.index;
        return _this.getSize(index);
      },
      estimatedItemSize: _this.getEstimatedItemSize()
    }), _this.state = {
      offset: _this.props.scrollOffset || _this.props.scrollToIndex != null && _this.getOffsetForIndex(_this.props.scrollToIndex) || 0,
      scrollChangeReason: __WEBPACK_IMPORTED_MODULE_3__constants__["d" /* SCROLL_CHANGE_REQUESTED */]
    }, _this._styleCache = {}, _this._getRef = function (node) {
      _this.rootNode = node;
    }, _this.handleScroll = function (e) {
      var onScroll = _this.props.onScroll;

      var offset = _this.getNodeOffset();

      if (offset < 0 || _this.state.offset === offset || e.target !== _this.rootNode) {
        return;
      }

      _this.setState({
        offset: offset,
        scrollChangeReason: __WEBPACK_IMPORTED_MODULE_3__constants__["e" /* SCROLL_CHANGE_OBSERVED */]
      });

      if (typeof onScroll === 'function') {
        onScroll(offset, e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  VirtualList.prototype.componentDidMount = function componentDidMount() {
    var _props = this.props,
        scrollOffset = _props.scrollOffset,
        scrollToIndex = _props.scrollToIndex;


    if (scrollOffset != null) {
      this.scrollTo(scrollOffset);
    } else if (scrollToIndex != null) {
      this.scrollTo(this.getOffsetForIndex(scrollToIndex));
    }
  };

  VirtualList.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _props2 = this.props,
        estimatedItemSize = _props2.estimatedItemSize,
        itemCount = _props2.itemCount,
        itemSize = _props2.itemSize,
        scrollOffset = _props2.scrollOffset,
        scrollToAlignment = _props2.scrollToAlignment,
        scrollToIndex = _props2.scrollToIndex;

    var scrollPropsHaveChanged = nextProps.scrollToIndex !== scrollToIndex || nextProps.scrollToAlignment !== scrollToAlignment;
    var itemPropsHaveChanged = nextProps.itemCount !== itemCount || nextProps.itemSize !== itemSize || nextProps.estimatedItemSize !== estimatedItemSize;

    if (nextProps.itemCount !== itemCount || nextProps.estimatedItemSize !== estimatedItemSize) {
      this.sizeAndPositionManager.updateConfig({
        itemCount: nextProps.itemCount,
        estimatedItemSize: this.getEstimatedItemSize(nextProps)
      });
    }

    if (itemPropsHaveChanged) {
      this.recomputeSizes();
    }

    if (nextProps.scrollOffset !== scrollOffset) {
      this.setState({
        offset: nextProps.scrollOffset,
        scrollChangeReason: __WEBPACK_IMPORTED_MODULE_3__constants__["d" /* SCROLL_CHANGE_REQUESTED */]
      });
    } else if (scrollPropsHaveChanged || nextProps.scrollToIndex && itemPropsHaveChanged) {
      this.setState({
        offset: this.getOffsetForIndex(nextProps.scrollToIndex, nextProps.scrollToAlignment, nextProps.itemCount),
        scrollChangeReason: __WEBPACK_IMPORTED_MODULE_3__constants__["d" /* SCROLL_CHANGE_REQUESTED */]
      });
    }
  };

  VirtualList.prototype.componentDidUpdate = function componentDidUpdate(nextProps, nextState) {
    var offset = this.state.offset;


    if (nextState.offset !== offset && nextState.scrollChangeReason === __WEBPACK_IMPORTED_MODULE_3__constants__["d" /* SCROLL_CHANGE_REQUESTED */]) {
      this.scrollTo(offset);
    }
  };

  VirtualList.prototype.getEstimatedItemSize = function getEstimatedItemSize() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    return props.estimatedItemSize || typeof props.itemSize === "number" && props.itemSize || 50;
  };

  VirtualList.prototype.getNodeOffset = function getNodeOffset() {
    var _props3 = this.props,
        scrollDirection = _props3.scrollDirection,
        languageDirection = _props3.languageDirection;


    var offset = void 0;

    if (languageDirection === 'rtl' && scrollDirection === __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* DIRECTION_HORIZONTAL */]) {

      if (scrollImplementation === __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* SCROLL_IMPLEMENTATION_NEGATIVE */]) {

        offset = -this.rootNode[__WEBPACK_IMPORTED_MODULE_3__constants__["g" /* scrollProp */][scrollDirection]];
      } else if (scrollImplementation === __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* SCROLL_IMPLEMENTATION_REVERSE */]) {

        offset = this.rootNode[__WEBPACK_IMPORTED_MODULE_3__constants__["h" /* SCROLL_WIDTH */]] - this.rootNode[__WEBPACK_IMPORTED_MODULE_3__constants__["g" /* scrollProp */][scrollDirection]] - this.rootNode[__WEBPACK_IMPORTED_MODULE_3__constants__["i" /* CLIENT_WIDTH */]];
      } else {

        offset = this.rootNode[__WEBPACK_IMPORTED_MODULE_3__constants__["g" /* scrollProp */][__WEBPACK_IMPORTED_MODULE_3__constants__["j" /* DEFAULT_SCROLL_DIRECTION */]]];
      }
    } else {
      offset = this.rootNode[__WEBPACK_IMPORTED_MODULE_3__constants__["g" /* scrollProp */][scrollDirection]];
    }

    return offset;
  };

  VirtualList.prototype.scrollTo = function scrollTo(value) {
    var _props4 = this.props,
        scrollDirection = _props4.scrollDirection,
        languageDirection = _props4.languageDirection;

    if (languageDirection === 'rtl' && scrollDirection === __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* DIRECTION_HORIZONTAL */]) {

      this.rootNode[__WEBPACK_IMPORTED_MODULE_3__constants__["g" /* scrollProp */][scrollDirection]] = this.rootNode[__WEBPACK_IMPORTED_MODULE_3__constants__["h" /* SCROLL_WIDTH */]] - value;
    } else {
      this.rootNode[__WEBPACK_IMPORTED_MODULE_3__constants__["g" /* scrollProp */][scrollDirection]] = value;
    }
  };

  VirtualList.prototype.getOffsetForIndex = function getOffsetForIndex(index) {
    var scrollToAlignment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.scrollToAlignment;
    var itemCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props.itemCount;
    var scrollDirection = this.props.scrollDirection;


    if (index < 0 || index >= itemCount) {
      index = 0;
    }

    return this.sizeAndPositionManager.getUpdatedOffsetForIndex({
      align: scrollToAlignment,
      containerSize: this.props[__WEBPACK_IMPORTED_MODULE_3__constants__["k" /* sizeProp */][scrollDirection]],
      targetIndex: index
    });
  };

  VirtualList.prototype.getSize = function getSize(index) {
    var itemSize = this.props.itemSize;


    if (typeof itemSize === 'function') {
      return itemSize(index);
    }

    return Array.isArray(itemSize) ? itemSize[index] : itemSize;
  };

  VirtualList.prototype.getStyle = function getStyle(index) {
    var _extends2;

    var style = this._styleCache[index];
    if (style) {
      return style;
    }

    var _props5 = this.props,
        scrollDirection = _props5.scrollDirection,
        languageDirection = _props5.languageDirection;

    var _sizeAndPositionManag = this.sizeAndPositionManager.getSizeAndPositionForIndex(index),
        size = _sizeAndPositionManag.size,
        offset = _sizeAndPositionManag.offset;

    var LOCALIZED_STYLE_INNER = Object.assign({}, STYLE_ITEM, {
      left: languageDirection === 'rtl' ? 'auto' : 0,
      right: languageDirection === 'rtl' ? 0 : 'auto'
    });

    var offsetProp = scrollDirection === __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* DIRECTION_HORIZONTAL */] ? __WEBPACK_IMPORTED_MODULE_3__constants__["l" /* positionProp */][scrollDirection][languageDirection] : __WEBPACK_IMPORTED_MODULE_3__constants__["l" /* positionProp */][scrollDirection];

    return this._styleCache[index] = _extends({}, LOCALIZED_STYLE_INNER, (_extends2 = {}, _extends2[offsetProp] = offset, _extends2[__WEBPACK_IMPORTED_MODULE_3__constants__["k" /* sizeProp */][scrollDirection]] = size, _extends2));
  };

  VirtualList.prototype.recomputeSizes = function recomputeSizes() {
    var startIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    this._styleCache = {};
    this.sizeAndPositionManager.resetItem(startIndex);
  };

  VirtualList.prototype.render = function render() {
    var _extends3;

    /* eslint-disable no-unused-vars */
    var _props6 = this.props,
        estimatedItemSize = _props6.estimatedItemSize,
        height = _props6.height,
        overscanCount = _props6.overscanCount,
        renderItem = _props6.renderItem,
        itemCount = _props6.itemCount,
        itemSize = _props6.itemSize,
        languageDirection = _props6.languageDirection,
        scrollDirection = _props6.scrollDirection,
        scrollOffset = _props6.scrollOffset,
        scrollToIndex = _props6.scrollToIndex,
        scrollToAlignment = _props6.scrollToAlignment,
        style = _props6.style,
        width = _props6.width,
        props = _objectWithoutProperties(_props6, ['estimatedItemSize', 'height', 'overscanCount', 'renderItem', 'itemCount', 'itemSize', 'languageDirection', 'scrollDirection', 'scrollOffset', 'scrollToIndex', 'scrollToAlignment', 'style', 'width']);

    var offset = this.state.offset;

    var _sizeAndPositionManag2 = this.sizeAndPositionManager.getVisibleRange({
      containerSize: this.props[__WEBPACK_IMPORTED_MODULE_3__constants__["k" /* sizeProp */][scrollDirection]],
      offset: offset,
      overscanCount: overscanCount
    }),
        start = _sizeAndPositionManag2.start,
        stop = _sizeAndPositionManag2.stop;

    var items = [];

    for (var index = start; index <= stop; index++) {
      items.push(renderItem({
        index: index,
        style: this.getStyle(index)
      }));
    }

    var LOCALIZED_STYLE_WRAPPER = Object.assign({}, STYLE_WRAPPER, { direction: languageDirection });

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      _extends({ ref: this._getRef }, props, { onScroll: this.handleScroll, style: _extends({}, LOCALIZED_STYLE_WRAPPER, style, { height: height, width: width }), __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { style: _extends({}, STYLE_INNER, (_extends3 = {}, _extends3[__WEBPACK_IMPORTED_MODULE_3__constants__["k" /* sizeProp */][scrollDirection]] = this.sizeAndPositionManager.getTotalSize(), _extends3)), __source: {
            fileName: _jsxFileName,
            lineNumber: 314
          },
          __self: this
        },
        items
      )
    );
  };

  return VirtualList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class.defaultProps = {
  overscanCount: 3,
  languageDirection: __WEBPACK_IMPORTED_MODULE_3__constants__["m" /* LANGUAGE_DIRECTION_LTR */],
  scrollDirection: __WEBPACK_IMPORTED_MODULE_3__constants__["n" /* DIRECTION_VERTICAL */],
  width: '100%'
}, _class.propTypes = {
  estimatedItemSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  itemCount: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
  itemSize: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]).isRequired,
  overscanCount: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  renderItem: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
  languageDirection: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([__WEBPACK_IMPORTED_MODULE_3__constants__["o" /* LANGUAGE_DIRECTION_RTL */], __WEBPACK_IMPORTED_MODULE_3__constants__["m" /* LANGUAGE_DIRECTION_LTR */]]),
  scrollOffset: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  scrollToIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  scrollToAlignment: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([__WEBPACK_IMPORTED_MODULE_3__constants__["p" /* ALIGN_START */], __WEBPACK_IMPORTED_MODULE_3__constants__["q" /* ALIGN_CENTER */], __WEBPACK_IMPORTED_MODULE_3__constants__["r" /* ALIGN_END */]]),
  scrollDirection: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([__WEBPACK_IMPORTED_MODULE_3__constants__["f" /* DIRECTION_HORIZONTAL */], __WEBPACK_IMPORTED_MODULE_3__constants__["n" /* DIRECTION_VERTICAL */]]).isRequired,
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
}, _temp2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SizeAndPositionManager; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Forked from react-virtualized 💖 */


var SizeAndPositionManager = function () {
  function SizeAndPositionManager(_ref) {
    var itemCount = _ref.itemCount,
        itemSizeGetter = _ref.itemSizeGetter,
        estimatedItemSize = _ref.estimatedItemSize;

    _classCallCheck(this, SizeAndPositionManager);

    this._itemSizeGetter = itemSizeGetter;
    this._itemCount = itemCount;
    this._estimatedItemSize = estimatedItemSize;

    // Cache of size and position data for items, mapped by item index.
    this._itemSizeAndPositionData = {};

    // Measurements for items up to this index can be trusted; items afterward should be estimated.
    this._lastMeasuredIndex = -1;
  }

  SizeAndPositionManager.prototype.updateConfig = function updateConfig(_ref2) {
    var itemCount = _ref2.itemCount,
        estimatedItemSize = _ref2.estimatedItemSize;

    this._itemCount = itemCount;
    this._estimatedItemSize = estimatedItemSize;
  };

  SizeAndPositionManager.prototype.getLastMeasuredIndex = function getLastMeasuredIndex() {
    return this._lastMeasuredIndex;
  };

  /**
   * This method returns the size and position for the item at the specified index.
   * It just-in-time calculates (or used cached values) for items leading up to the index.
   */


  SizeAndPositionManager.prototype.getSizeAndPositionForIndex = function getSizeAndPositionForIndex(index) {
    if (index < 0 || index >= this._itemCount) {
      throw Error('Requested index ' + index + ' is outside of range 0..' + this._itemCount);
    }

    if (index > this._lastMeasuredIndex) {
      var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
      var offset = lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size;

      for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
        var size = this._itemSizeGetter({ index: i });

        if (size == null || isNaN(size)) {
          throw Error('Invalid size returned for index ' + i + ' of value ' + size);
        }

        this._itemSizeAndPositionData[i] = {
          offset: offset,
          size: size
        };

        offset += size;
      }

      this._lastMeasuredIndex = index;
    }
    return this._itemSizeAndPositionData[index];
  };

  SizeAndPositionManager.prototype.getSizeAndPositionOfLastMeasuredItem = function getSizeAndPositionOfLastMeasuredItem() {
    return this._lastMeasuredIndex >= 0 ? this._itemSizeAndPositionData[this._lastMeasuredIndex] : { offset: 0, size: 0 };
  };

  /**
  * Total size of all items being measured.
  * This value will be completedly estimated initially.
  * As items as measured the estimate will be updated.
  */


  SizeAndPositionManager.prototype.getTotalSize = function getTotalSize() {
    var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();

    return lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size + (this._itemCount - this._lastMeasuredIndex - 1) * this._estimatedItemSize;
  };

  /**
   * Determines a new offset that ensures a certain item is visible, given the alignment.
   *
   * @param align Desired alignment within container; one of "start" (default), "center", or "end"
   * @param containerSize Size (width or height) of the container viewport
   * @return Offset to use to ensure the specified item is visible
   */


  SizeAndPositionManager.prototype.getUpdatedOffsetForIndex = function getUpdatedOffsetForIndex(_ref3) {
    var _ref3$align = _ref3.align,
        align = _ref3$align === undefined ? __WEBPACK_IMPORTED_MODULE_0__constants__["p" /* ALIGN_START */] : _ref3$align,
        containerSize = _ref3.containerSize,
        targetIndex = _ref3.targetIndex;

    if (containerSize <= 0) {
      return 0;
    }

    var datum = this.getSizeAndPositionForIndex(targetIndex);
    var maxOffset = datum.offset;
    var minOffset = maxOffset - containerSize + datum.size;

    var idealOffset = void 0;

    switch (align) {
      case __WEBPACK_IMPORTED_MODULE_0__constants__["r" /* ALIGN_END */]:
        idealOffset = minOffset;
        break;
      case __WEBPACK_IMPORTED_MODULE_0__constants__["q" /* ALIGN_CENTER */]:
        idealOffset = maxOffset - (containerSize - datum.size) / 2;
        break;
      default:
        idealOffset = maxOffset;
        break;
    }

    var totalSize = this.getTotalSize();

    return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
  };

  SizeAndPositionManager.prototype.getVisibleRange = function getVisibleRange(_ref4) {
    var containerSize = _ref4.containerSize,
        offset = _ref4.offset,
        overscanCount = _ref4.overscanCount;

    var totalSize = this.getTotalSize();

    if (totalSize === 0) {
      return {};
    }

    var maxOffset = offset + containerSize;
    var start = this._findNearestItem(offset);
    var stop = start;

    var datum = this.getSizeAndPositionForIndex(start);
    offset = datum.offset + datum.size;

    while (offset < maxOffset && stop < this._itemCount - 1) {
      stop++;
      offset += this.getSizeAndPositionForIndex(stop).size;
    }

    if (overscanCount) {
      start = Math.max(0, start - overscanCount);
      stop = Math.min(stop + overscanCount, this._itemCount - 1);
    }

    return {
      start: start,
      stop: stop
    };
  };

  /**
   * Clear all cached values for items after the specified index.
   * This method should be called for any item that has changed its size.
   * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionForIndex() is called.
   */


  SizeAndPositionManager.prototype.resetItem = function resetItem(index) {
    this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
  };

  SizeAndPositionManager.prototype._binarySearch = function _binarySearch(_ref5) {
    var low = _ref5.low,
        high = _ref5.high,
        offset = _ref5.offset;

    var middle = void 0;
    var currentOffset = void 0;

    while (low <= high) {
      middle = low + Math.floor((high - low) / 2);
      currentOffset = this.getSizeAndPositionForIndex(middle).offset;

      if (currentOffset === offset) {
        return middle;
      } else if (currentOffset < offset) {
        low = middle + 1;
      } else if (currentOffset > offset) {
        high = middle - 1;
      }
    }

    if (low > 0) {
      return low - 1;
    }
  };

  SizeAndPositionManager.prototype._exponentialSearch = function _exponentialSearch(_ref6) {
    var index = _ref6.index,
        offset = _ref6.offset;

    var interval = 1;

    while (index < this._itemCount && this.getSizeAndPositionForIndex(index).offset < offset) {
      index += interval;
      interval *= 2;
    }

    return this._binarySearch({
      high: Math.min(index, this._itemCount - 1),
      low: Math.floor(index / 2),
      offset: offset
    });
  };

  /**
   * Searches for the item (index) nearest the specified offset.
   *
   * If no exact match is found the next lowest item index will be returned.
   * This allows partially visible items (with offsets just before/above the fold) to be visible.
   */


  SizeAndPositionManager.prototype._findNearestItem = function _findNearestItem(offset) {
    if (isNaN(offset)) {
      throw Error('Invalid offset ' + offset + ' specified');
    }

    // Our search algorithms find the nearest match at or below the specified offset.
    // So make sure the offset is at least 0 or no match will be found.
    offset = Math.max(0, offset);

    var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
    var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

    if (lastMeasuredSizeAndPosition.offset >= offset) {
      // If we've already measured items within this range just use a binary search as it's faster.
      return this._binarySearch({
        high: lastMeasuredIndex,
        low: 0,
        offset: offset
      });
    } else {
      // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
      // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
      // The overall complexity for this approach is O(log n).
      return this._exponentialSearch({
        index: lastMeasuredIndex,
        offset: offset
      });
    }
  };

  return SizeAndPositionManager;
}();



/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});