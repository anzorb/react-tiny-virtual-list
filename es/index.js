var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SizeAndPositionManager from './SizeAndPositionManager';
import { ALIGN_CENTER, ALIGN_END, ALIGN_START, CLIENT_WIDTH, DEFAULT_SCROLL_DIRECTION, DIRECTION_VERTICAL, DIRECTION_HORIZONTAL, LANGUAGE_DIRECTION_LTR, LANGUAGE_DIRECTION_RTL, SCROLL_CHANGE_OBSERVED, SCROLL_CHANGE_REQUESTED, SCROLL_WIDTH, SCROLL_IMPLEMENTATION_DEFAULT, SCROLL_IMPLEMENTATION_NEGATIVE, SCROLL_IMPLEMENTATION_REVERSE, positionProp, scrollProp, sizeProp } from './constants';

var STYLE_WRAPPER = { overflow: 'auto', willChange: 'transform', WebkitOverflowScrolling: 'touch' };
var STYLE_INNER = { position: 'relative', overflow: 'hidden', width: '100%', minHeight: '100%' };
var STYLE_ITEM = { position: 'absolute', width: '100%' };

export function testScrollImplementaion() {
  /* 
    Different browsers have different implementaions of scrollLeft on elements with direction='rtl', this tests for an implementation
    inspired by 
      https://github.com/othree/jquery.rtl-scroll-type/blob/master/src/jquery.rtl-scroll.js &&
      https://stackoverflow.com/questions/24276619/better-way-to-get-the-viewport-of-a-scrollable-div-in-rtl-mode/24394376#24394376 
  */
  var scrollImplementation = SCROLL_IMPLEMENTATION_DEFAULT;

  var testDiv = document.createElement('div');
  testDiv.innerHTML = '<div dir="rtl" class="test" style="font-size: 14px; width: 4px; height: 1px; position: absolute; top: 0px; overflow: scroll">ABCDEFASDASD</div>';
  document.body.appendChild(testDiv);
  var tester = testDiv.querySelector('.test');

  if (tester.scrollLeft > 0) {
    scrollImplementation = SCROLL_IMPLEMENTATION_REVERSE;
  } else {
    tester.scrollLeft = -1;
    if (tester.scrollLeft === -1) {
      scrollImplementation = SCROLL_IMPLEMENTATION_NEGATIVE;
    } else {
      scrollImplementation = SCROLL_IMPLEMENTATION_REVERSE;
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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.sizeAndPositionManager = new SizeAndPositionManager({
      itemCount: _this.props.itemCount,
      itemSizeGetter: function itemSizeGetter(_ref) {
        var index = _ref.index;
        return _this.getSize(index);
      },
      estimatedItemSize: _this.getEstimatedItemSize()
    }), _this.state = {
      offset: _this.props.scrollOffset || _this.props.scrollToIndex != null && _this.getOffsetForIndex(_this.props.scrollToIndex) || 0,
      scrollChangeReason: SCROLL_CHANGE_REQUESTED
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
        scrollChangeReason: SCROLL_CHANGE_OBSERVED
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
        scrollChangeReason: SCROLL_CHANGE_REQUESTED
      });
    } else if (scrollPropsHaveChanged || nextProps.scrollToIndex && itemPropsHaveChanged) {
      this.setState({
        offset: this.getOffsetForIndex(nextProps.scrollToIndex, nextProps.scrollToAlignment, nextProps.itemCount),
        scrollChangeReason: SCROLL_CHANGE_REQUESTED
      });
    }
  };

  VirtualList.prototype.componentDidUpdate = function componentDidUpdate(nextProps, nextState) {
    var offset = this.state.offset;


    if (nextState.offset !== offset && nextState.scrollChangeReason === SCROLL_CHANGE_REQUESTED) {
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

    if (languageDirection === 'rtl' && scrollDirection === DIRECTION_HORIZONTAL) {

      if (scrollImplementation === SCROLL_IMPLEMENTATION_NEGATIVE) {

        offset = -this.rootNode[scrollProp[scrollDirection]];
      } else if (scrollImplementation === SCROLL_IMPLEMENTATION_REVERSE) {

        offset = this.rootNode[SCROLL_WIDTH] - this.rootNode[scrollProp[scrollDirection]] - this.rootNode[CLIENT_WIDTH];
      } else {

        offset = this.rootNode[scrollProp[DEFAULT_SCROLL_DIRECTION]];
      }
    } else {
      offset = this.rootNode[scrollProp[scrollDirection]];
    }

    return offset;
  };

  VirtualList.prototype.scrollTo = function scrollTo(value) {
    var _props4 = this.props,
        scrollDirection = _props4.scrollDirection,
        languageDirection = _props4.languageDirection;

    if (languageDirection === 'rtl' && scrollDirection === DIRECTION_HORIZONTAL) {

      this.rootNode[scrollProp[scrollDirection]] = this.rootNode[SCROLL_WIDTH] - value;
    } else {
      this.rootNode[scrollProp[scrollDirection]] = value;
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
      containerSize: this.props[sizeProp[scrollDirection]],
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

    var offsetProp = scrollDirection === DIRECTION_HORIZONTAL ? positionProp[scrollDirection][languageDirection] : positionProp[scrollDirection];

    return this._styleCache[index] = _extends({}, LOCALIZED_STYLE_INNER, (_extends2 = {}, _extends2[offsetProp] = offset, _extends2[sizeProp[scrollDirection]] = size, _extends2));
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
      containerSize: this.props[sizeProp[scrollDirection]],
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

    return React.createElement(
      'div',
      _extends({ ref: this._getRef }, props, { onScroll: this.handleScroll, style: _extends({}, LOCALIZED_STYLE_WRAPPER, style, { height: height, width: width }) }),
      React.createElement(
        'div',
        { style: _extends({}, STYLE_INNER, (_extends3 = {}, _extends3[sizeProp[scrollDirection]] = this.sizeAndPositionManager.getTotalSize(), _extends3)) },
        items
      )
    );
  };

  return VirtualList;
}(PureComponent), _class.defaultProps = {
  overscanCount: 3,
  languageDirection: LANGUAGE_DIRECTION_LTR,
  scrollDirection: DIRECTION_VERTICAL,
  width: '100%'
}, _temp2);
export { VirtualList as default };
process.env.NODE_ENV !== "production" ? VirtualList.propTypes = {
  estimatedItemSize: PropTypes.number,
  height: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  itemSize: PropTypes.oneOfType([PropTypes.number, PropTypes.array, PropTypes.func]).isRequired,
  overscanCount: PropTypes.number,
  renderItem: PropTypes.func.isRequired,
  languageDirection: PropTypes.oneOf([LANGUAGE_DIRECTION_RTL, LANGUAGE_DIRECTION_LTR]),
  scrollOffset: PropTypes.number,
  scrollToIndex: PropTypes.number,
  scrollToAlignment: PropTypes.oneOf([ALIGN_START, ALIGN_CENTER, ALIGN_END]),
  scrollDirection: PropTypes.oneOf([DIRECTION_HORIZONTAL, DIRECTION_VERTICAL]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
} : void 0;