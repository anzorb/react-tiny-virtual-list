var _scrollProp, _sizeProp, _DIRECTION_HORIZONTAL, _positionProp;

export var ALIGN_START = 'start';
export var ALIGN_CENTER = 'center';
export var ALIGN_END = 'end';

export var DIRECTION_VERTICAL = 'vertical';
export var DIRECTION_HORIZONTAL = 'horizontal';
export var DEFAULT_SCROLL_DIRECTION = 'ltr';

export var LANGUAGE_DIRECTION_RTL = 'rtl';
export var LANGUAGE_DIRECTION_LTR = 'ltr';

export var SCROLL_CHANGE_OBSERVED = 'observed';
export var SCROLL_CHANGE_REQUESTED = 'requested';

export var SCROLL_IMPLEMENTATION_DEFAULT = 'default';
export var SCROLL_IMPLEMENTATION_REVERSE = 'reverse';
export var SCROLL_IMPLEMENTATION_NEGATIVE = 'negative';

export var scrollProp = (_scrollProp = {}, _scrollProp[DIRECTION_VERTICAL] = 'scrollTop', _scrollProp[DIRECTION_HORIZONTAL] = 'scrollLeft', _scrollProp);

export var SCROLL_WIDTH = 'scrollWidth';
export var CLIENT_WIDTH = 'clientWidth';

export var sizeProp = (_sizeProp = {}, _sizeProp[DIRECTION_VERTICAL] = 'height', _sizeProp[DIRECTION_HORIZONTAL] = 'width', _sizeProp);
export var positionProp = (_positionProp = {}, _positionProp[DIRECTION_VERTICAL] = 'top', _positionProp[DIRECTION_HORIZONTAL] = (_DIRECTION_HORIZONTAL = {}, _DIRECTION_HORIZONTAL[LANGUAGE_DIRECTION_RTL] = 'right', _DIRECTION_HORIZONTAL[LANGUAGE_DIRECTION_LTR] = 'left', _DIRECTION_HORIZONTAL), _positionProp);