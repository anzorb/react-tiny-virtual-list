'use strict';

exports.__esModule = true;

var _scrollProp, _sizeProp, _DIRECTION_HORIZONTAL, _positionProp;

var ALIGN_START = exports.ALIGN_START = 'start';
var ALIGN_CENTER = exports.ALIGN_CENTER = 'center';
var ALIGN_END = exports.ALIGN_END = 'end';

var DIRECTION_VERTICAL = exports.DIRECTION_VERTICAL = 'vertical';
var DIRECTION_HORIZONTAL = exports.DIRECTION_HORIZONTAL = 'horizontal';
var DEFAULT_SCROLL_DIRECTION = exports.DEFAULT_SCROLL_DIRECTION = 'ltr';

var LANGUAGE_DIRECTION_RTL = exports.LANGUAGE_DIRECTION_RTL = 'rtl';
var LANGUAGE_DIRECTION_LTR = exports.LANGUAGE_DIRECTION_LTR = 'ltr';

var SCROLL_CHANGE_OBSERVED = exports.SCROLL_CHANGE_OBSERVED = 'observed';
var SCROLL_CHANGE_REQUESTED = exports.SCROLL_CHANGE_REQUESTED = 'requested';

var SCROLL_IMPLEMENTATION_DEFAULT = exports.SCROLL_IMPLEMENTATION_DEFAULT = 'default';
var SCROLL_IMPLEMENTATION_REVERSE = exports.SCROLL_IMPLEMENTATION_REVERSE = 'reverse';
var SCROLL_IMPLEMENTATION_NEGATIVE = exports.SCROLL_IMPLEMENTATION_NEGATIVE = 'negative';

var scrollProp = exports.scrollProp = (_scrollProp = {}, _scrollProp[DIRECTION_VERTICAL] = 'scrollTop', _scrollProp[DIRECTION_HORIZONTAL] = 'scrollLeft', _scrollProp);

var SCROLL_WIDTH = exports.SCROLL_WIDTH = 'scrollWidth';
var CLIENT_WIDTH = exports.CLIENT_WIDTH = 'clientWidth';

var sizeProp = exports.sizeProp = (_sizeProp = {}, _sizeProp[DIRECTION_VERTICAL] = 'height', _sizeProp[DIRECTION_HORIZONTAL] = 'width', _sizeProp);
var positionProp = exports.positionProp = (_positionProp = {}, _positionProp[DIRECTION_VERTICAL] = 'top', _positionProp[DIRECTION_HORIZONTAL] = (_DIRECTION_HORIZONTAL = {}, _DIRECTION_HORIZONTAL[LANGUAGE_DIRECTION_RTL] = 'right', _DIRECTION_HORIZONTAL[LANGUAGE_DIRECTION_LTR] = 'left', _DIRECTION_HORIZONTAL), _positionProp);