/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _students = __webpack_require__(6);

var _students2 = _interopRequireDefault(_students);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Student = React.createClass({
    render: function render() {
        var _props = this.props,
            slack = _props.slack,
            name = _props.name,
            avatar = _props.avatar,
            github = _props.github,
            facebook = _props.facebook,
            email = _props.email;

        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                { className: 'student container-fluid' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-sm-3' },
                        React.createElement('img', { className: 'student-avatar img-fluid rounded', src: avatar, alt: name })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-sm-9' },
                        React.createElement(
                            'h3',
                            { className: 'student-name' },
                            name
                        ),
                        React.createElement(
                            'p',
                            { className: 'student-location' },
                            React.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true' }),
                            ' ',
                            name
                        ),
                        React.createElement(
                            'div',
                            { className: 'students-contacts' },
                            React.createElement(
                                'a',
                                { href: facebook },
                                React.createElement('i', { className: 'fa fa-facebook-official', 'aria-hidden': 'true' })
                            ),
                            React.createElement(
                                'a',
                                { href: github },
                                React.createElement('i', { className: 'fa fa-github', 'aria-hidden': 'true' })
                            ),
                            React.createElement(
                                'a',
                                { href: "mailto:" + email },
                                React.createElement('i', { className: 'fa fa-envelope', 'aria-hidden': 'true' })
                            )
                        )
                    )
                )
            )
        );
    }
});

var List = React.createClass({
    render: function render() {
        return React.createElement(
            'div',
            { className: 'container-list' },
            React.createElement(
                'h1',
                null,
                'Meet React Course Members'
            ),
            _students2.default.map(function (student) {
                return React.createElement(Student, {
                    key: student.email,
                    slack: student.slack,
                    name: student.name,
                    avatar: student.avatar,
                    github: student.github,
                    facebook: student.facebook,
                    email: student.email
                });
            })
        );
    }
});

ReactDOM.render(React.createElement(List, null), document.getElementById('root'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(4)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".container-list {\n  width: 50%;\n  margin: 30px auto; }\n  .container-list h1 {\n    font-family: 'Galada', cursive;\n    color: #1464f6;\n    font-size: 46px;\n    text-align: center;\n    margin: 0 0 40px; }\n\n.student {\n  border: 1px solid #ddd;\n  padding: 20px; }\n  .student h3 {\n    font-weight: 700; }\n\n.student-location i {\n  color: #72bb53; }\n\n.students-contacts a {\n  font-size: 36px;\n  color: #bbb;\n  margin-right: 18px; }\n\n.container-search {\n  margin-bottom: 20px; }\n  .container-search input {\n    width: 100%;\n    padding: 3px; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var STUDENTS = [{
    slack: "arnie",
    name: "Армен Петросян",
    avatar: "https://github.com/ArmenPetrosyan.png",
    github: "https://github.com/ArmenPetrosyan",
    facebook: "https://www.facebook.com/armen.from.niko",
    email: "thebraincrasher@gmail.com"
}, {
    slack: "balaniuk",
    name: "Баланюк Андрей",
    avatar: "https://github.com/AndriiBalaniuk.png",
    github: "https://github.com/AndriiBalaniuk",
    facebook: "https://www.facebook.com/balaniuk",
    email: "andrei.balaniuk@gmail.com"
}, {
    slack: "ruslan_boiko",
    name: "Бойко Руслан",
    avatar: "https://github.com/marseille78.png",
    github: "https://github.com/marseille78",
    facebook: "https://www.facebook.com/profile.php?id=100001077106425",
    email: "boyko.ruslan78@gmail.com"
}, {
    slack: "sergey.k",
    name: "Камалтынов Сергей",
    avatar: "https://github.com/Gres.png",
    github: "https://github.com/Gres",
    facebook: "https://www.facebook.com/zlobnuyGres",
    email: "sergey.kamaltynov@dev-pro.net"
}, {
    slack: "alximik",
    name: "Гришаев Станислав",
    avatar: "https://github.com/alximik05.png",
    github: "https://github.com/alximik05",
    facebook: "https://www.facebook.com/stas.grishaev",
    email: "oalximiko@gmail.com"
}, {
    slack: "gummy",
    name: "Гуменюк Александр",
    avatar: "https://github.com/agumenyuk.png",
    github: "https://github.com/agumenyuk",
    facebook: "hhttps://www.facebook.com/countnev",
    email: "gumenyuk.alex@gmail.com"
}, {
    slack: "sergey",
    name: "Десятков Сергей",
    avatar: "https://github.com/desyatkov.png",
    github: "https://github.com/desyatkov",
    facebook: "https://www.facebook.com/desyatkov",
    email: "desyatkov@gmail.com"
}, {
    slack: "krom",
    name: "Зайцев Дмитро",
    avatar: "https://github.com/karmeljuk.png",
    github: "https://github.com/karmeljuk",
    facebook: "-",
    email: "karmeljuk@gmail.com"
}, {
    slack: "ruberoid7",
    name: "Максимов Алексей",
    avatar: "https://github.com/Ruberoid7.png",
    github: "https://github.com/Ruberoid7",
    facebook: "https://www.facebook.com/profile.php?id=100015881856553",
    email: "maksimovap@outlook.com"
}, {
    slack: "viram",
    name: "Михайляк Вера",
    avatar: "https://github.com/mviravtm.png",
    github: "https://github.com/mviravtm",
    facebook: "https://www.facebook.com/m.vira.v?ref=bookmarks",
    email: "m.vira.v1@gmail.com"
}, {
    slack: "shaggrath",
    name: "Мирза Сергей",
    avatar: "https://github.com/shaggrath2010.png",
    github: "https://github.com/shaggrath2010",
    facebook: "https://www.facebook.com/shaggrath",
    email: "shaggrath@mail.ru"
}, {
    slack: "iryna",
    name: "Мичкова Ирина",
    avatar: "https://github.com/pyatachok.png",
    github: "https://github.com/pyatachok",
    facebook: "https://www.facebook.com/irina.pyatachok",
    email: "mice@templatemonster.me"
}, {
    slack: "vlanemcev",
    name: "Немцев Влад",
    avatar: "https://github.com/vlanemcev.png",
    github: "https://github.com/vlanemcev",
    facebook: "www.facebook.com/vlanemcev",
    email: "vlanemcev@gmail.com"
}, {
    slack: "swistikkk",
    name: "Оберемко Виктор",
    avatar: "https://github.com/Swistikkk.png",
    github: "https://github.com/Swistikkk",
    facebook: "https://www.facebook.com/profile.php?id=100005222808506",
    email: "oberemkovictor@gmail.com"
}, {
    slack: "sergey.podgornyy",
    name: "Подгорный Сергей",
    avatar: "https://github.com/SergeyPodgornyy.png",
    github: "https://github.com/SergeyPodgornyy",
    facebook: "https://www.facebook.com/sebastian.meyer.16906",
    email: "sergey.podgornyy@yahoo.de"
}, {
    slack: "ridvanovskyy",
    name: "Ридвановский Влад",
    avatar: "https://github.com/Ridvanovskyy.png",
    github: "https://github.com/Ridvanovskyy",
    facebook: "https://www.facebook.com/ridvanovskyy",
    email: "rvlrv@yandex.com"
}, {
    slack: "starik",
    name: "Старокожев Сергей",
    avatar: "https://github.com/SerhiyStarokozhev.png",
    github: "https://github.com/SerhiyStarokozhev",
    facebook: "https://www.facebook.com/serhiy.starokozhev",
    email: "s.v.starokozhev@gmail.com"
}, {
    slack: "zumzat",
    name: "Сябро Валентин",
    avatar: "https://github.com/zumzat.png",
    github: "https://github.com/zumzat",
    facebook: "https://www.facebook.com/zumzat",
    email: "valentyn.siabro@digitalho.com"
}, {
    slack: "todor",
    name: "Ушаков Фёдор",
    avatar: "https://github.com/todorone.png",
    github: "https://github.com/todorone",
    facebook: "-",
    email: "hanuman@numagames.com"
}, {
    slack: "evgeniych",
    name: "Чорномор Євген",
    avatar: "https://github.com/pixlabteam.png",
    github: "https://github.com/pixlabteam",
    facebook: "https://www.facebook.com/eugene.chernomor.3",
    email: "eugeneweblab@gmail.com"
}, {
    slack: "tylerdurden",
    name: "Шимко Вадим",
    avatar: "https://github.com/vadymshymko.png",
    github: "https://github.com/vadymshymko",
    facebook: "https://www.facebook.com/vadymshymko",
    email: "vadymshymko@gmail.com"
}, {
    slack: "knplink",
    name: "Назарчук Владислав",
    avatar: "https://github.com/vladknp.png",
    github: "https://github.com/vladknp",
    facebook: "https://www.facebook.com/sunrise.dragon",
    email: "knplink@gmail.com"
}];

exports.default = STUDENTS;

/***/ })
/******/ ]);