(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("prop-types"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["prop-types", "react"], factory);
	else if(typeof exports === 'object')
		exports["GifPlayer"] = factory(require("prop-types"), require("react"));
	else
		root["GifPlayer"] = factory(root["PropTypes"], root["React"]);
})(globalThis, (__WEBPACK_EXTERNAL_MODULE__189__, __WEBPACK_EXTERNAL_MODULE__899__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 184:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 149:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



// Older versions of React do not support static getDerivedStateFromProps.
// As a workaround, use cWM and cWRP to invoke the new static lifecycle.
// Newer versions of React will ignore these methods if gDSFP exists.
function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(nextProps, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;

module.exports = function polyfill(Component) {
  if (!Component.prototype || !Component.prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (typeof Component.getDerivedStateFromProps === 'function') {
    if (typeof Component.prototype.componentWillMount === 'function') {
      throw new Error('Cannot polyfill if componentWillMount already exists');
    } else if (
      typeof Component.prototype.componentWillReceiveProps === 'function'
    ) {
      throw new Error(
        'Cannot polyfill if componentWillReceiveProps already exists'
      );
    }

    Component.prototype.componentWillMount = componentWillMount;
    Component.prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  return Component;
};


/***/ }),

/***/ 189:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__189__;

/***/ }),

/***/ 899:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__899__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
var external_root_React_commonjs_react_commonjs2_react_amd_react_default = /*#__PURE__*/__webpack_require__.n(external_root_React_commonjs_react_commonjs2_react_amd_react_);
// EXTERNAL MODULE: external {"root":"PropTypes","commonjs":"prop-types","commonjs2":"prop-types","amd":"prop-types"}
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_ = __webpack_require__(189);
var external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_);
// EXTERNAL MODULE: ./node_modules/react-lifecycles-compat/index.js
var react_lifecycles_compat = __webpack_require__(149);
var react_lifecycles_compat_default = /*#__PURE__*/__webpack_require__.n(react_lifecycles_compat);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./src/GifPlayer.js
const _excluded = ["gif", "still", "playing", "toggle"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const GifPlayer = _ref => {
  let {
      gif,
      still,
      playing,
      toggle
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default().createElement("div", {
    className: classnames_default()('gif_player', {
      'playing': playing
    }),
    onClick: toggle
  }, /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default().createElement("div", {
    className: "play_button"
  }), /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default().createElement("img", _extends({}, rest, {
    src: playing ? gif || still : still || gif
  })));
};
GifPlayer.propTypes = {
  gif: (external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default()).string,
  still: (external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default()).string,
  playing: (external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default()).bool,
  toggle: (external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default()).func
};
/* harmony default export */ const src_GifPlayer = (GifPlayer);
;// CONCATENATED MODULE: ./src/index.js
const src_excluded = ["autoplay", "pauseRef", "onTogglePlay"];
function src_extends() { src_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return src_extends.apply(this, arguments); }
function src_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = src_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function src_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const preload = (src, callback) => {
  var img = new Image();
  if (typeof callback === 'function') {
    img.onload = () => callback(img);
    img.setAttribute('crossOrigin', 'anonymous');
  }
  img.src = src;
};
const firstGifFrameUrl = img => {
  const canvas = document.createElement('canvas');
  if (typeof canvas.getContext !== 'function') {
    return null;
  }
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  return canvas.toDataURL();
};
class GifPlayerContainer extends (external_root_React_commonjs_react_commonjs2_react_amd_react_default()).Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const prevGif = prevState.providedGif;
    const nextGif = nextProps.gif;
    const prevStill = prevState.providedStill;
    const nextStill = nextProps.still;
    if (prevGif === nextGif && prevStill === nextStill) {
      return null;
    }
    return {
      playing: nextGif && nextProps.autoplay && prevGif !== nextGif ? true : prevState.playing,
      providedGif: nextGif,
      providedStill: nextStill,
      actualGif: nextGif,
      actualStill: nextStill || prevGif !== nextGif ? nextStill : prevState.actualStill
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      playing: Boolean(props.autoplay),
      providedGif: props.gif,
      providedStill: props.still,
      actualGif: props.gif,
      actualStill: props.still
    };
    this.updateId = -1;
  }
  componentDidMount() {
    if (typeof this.props.pauseRef === 'function') {
      this.props.pauseRef(() => this.setState({
        playing: false
      }));
    }
    this.updateImages();
  }
  componentDidUpdate(prevProps, prevState) {
    this.updateImages(prevState);
    const {
      onTogglePlay
    } = this.props;
    if (prevState.playing !== this.state.playing && typeof onTogglePlay === 'function') {
      onTogglePlay(this.state.playing);
    }
  }
  updateImages(prevState = {}) {
    const {
      providedGif,
      providedStill
    } = this.state;
    if (providedGif && !providedStill && providedGif !== prevState.providedGif) {
      const updateId = ++this.updateId;
      preload(providedGif, img => {
        if (this.updateId === updateId) {
          const actualStill = firstGifFrameUrl(img);
          if (actualStill) {
            this.setState({
              actualStill
            });
          }
        }
      });
    }
  }
  toggle() {
    this.setState({
      playing: !this.state.playing
    });
  }
  render() {
    // extract these props but pass down the rest
    const _this$props = this.props,
      {
        autoplay,
        pauseRef,
        onTogglePlay
      } = _this$props,
      rest = src_objectWithoutProperties(_this$props, src_excluded);
    const {
      actualGif,
      actualStill,
      playing
    } = this.state;
    return /*#__PURE__*/external_root_React_commonjs_react_commonjs2_react_amd_react_default().createElement(src_GifPlayer, src_extends({}, rest, {
      gif: actualGif,
      still: actualStill,
      playing: playing,
      toggle: () => this.toggle()
    }));
  }
}
react_lifecycles_compat_default()(GifPlayerContainer);
GifPlayerContainer.propTypes = {
  gif: (external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default()).string,
  still: (external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default()).string,
  autoplay: (external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default()).bool,
  pauseRef: (external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default()).func,
  onTogglePlay: (external_root_PropTypes_commonjs_prop_types_commonjs2_prop_types_amd_prop_types_default()).func
};
/* harmony default export */ const src = (GifPlayerContainer);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});