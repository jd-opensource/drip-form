(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[5767],{

/***/ 3905:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },
/* harmony export */   "kt": function() { return /* binding */ createElement; }
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);


function _defineProperty(obj, key, value) {
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 8280:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": function() { return /* binding */ MainHeading; },
  "Z": function() { return /* binding */ theme_Heading; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(1994);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"anchorWithStickyNavbar":"anchorWithStickyNavbar_y2LR","anchorWithHideOnScrollNavbar":"anchorWithHideOnScrollNavbar_3ly5"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js
var _excluded=["id"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MainHeading=function MainHeading(_ref){var props=Object.assign({},_ref);return/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement("h1",(0,esm_extends/* default */.Z)({},props,{id:undefined// h1 headings do not need an id because they don't appear in the TOC
}),props.children));};var createAnchorHeading=function createAnchorHeading(Tag){return function TargetComponent(_ref2){var _clsx;var id=_ref2.id,props=(0,objectWithoutPropertiesLoose/* default */.Z)(_ref2,_excluded);var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),hideOnScroll=_useThemeConfig.navbar.hideOnScroll;if(!id){return/*#__PURE__*/react.createElement(Tag,props);}return/*#__PURE__*/react.createElement(Tag,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)('anchor',(_clsx={},_clsx[styles_module.anchorWithHideOnScrollNavbar]=hideOnScroll,_clsx[styles_module.anchorWithStickyNavbar]=!hideOnScroll,_clsx)),id:id}),props.children,/*#__PURE__*/react.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+id,title:(0,Translate/* translate */.I)({id:'theme.common.headingLinkTitle',message:'Direct link to heading',description:'Title for link to heading'})},"\u200B"));};};var Heading=function Heading(headingType){return headingType==='h1'?MainHeading:createAnchorHeading(headingType);};/* harmony default export */ var theme_Heading = (Heading);

/***/ }),

/***/ 1923:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ theme_MDXComponents; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7462);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(3366);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Head.js + 1 modules
var Head = __webpack_require__(2859);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/prism-react-renderer/prism/index.js
var prism = __webpack_require__(7410);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/duotoneDark/index.js
// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

/* harmony default export */ var duotoneDark = (theme);

;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/dist/index.js





var defaultProps = {
  // $FlowFixMe
  Prism: prism["default"],
  theme: duotoneDark
};

function _defineProperty(obj, key, value) {
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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight = /*@__PURE__*/function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty(this, "tokenize", function (Prism, code, grammar, language) {
      var env = {
        code: code,
        grammar: grammar,
        language: language,
        tokens: []
      };
      Prism.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism.tokenize(env.code, env.grammar, env.language);
      Prism.hooks.run("after-tokenize", env);
      return tokens;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? this.tokenize(Prism, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(react.Component);

/* harmony default export */ var dist = (Highlight);


;// CONCATENATED MODULE: ./node_modules/copy-text-to-clipboard/index.js
function copyTextToClipboard(input,_temp){var _ref=_temp===void 0?{}:_temp,_ref$target=_ref.target,target=_ref$target===void 0?document.body:_ref$target;var element=document.createElement('textarea');var previouslyFocusedElement=document.activeElement;element.value=input;// Prevent keyboard from showing on mobile
element.setAttribute('readonly','');element.style.contain='strict';element.style.position='absolute';element.style.left='-9999px';element.style.fontSize='12pt';// Prevent zooming on iOS
var selection=document.getSelection();var originalRange=false;if(selection.rangeCount>0){originalRange=selection.getRangeAt(0);}target.append(element);element.select();// Explicit selection workaround for iOS
element.selectionStart=0;element.selectionEnd=input.length;var isSuccess=false;try{isSuccess=document.execCommand('copy');}catch(_unused){}element.remove();if(originalRange){selection.removeAllRanges();selection.addRange(originalRange);}// Get the focus back on the previously focused element, if any
if(previouslyFocusedElement){previouslyFocusedElement.focus();}return isSuccess;}
// EXTERNAL MODULE: ./node_modules/parse-numeric-range/index.js
var parse_numeric_range = __webpack_require__(7594);
var parse_numeric_range_default = /*#__PURE__*/__webpack_require__.n(parse_numeric_range);
;// CONCATENATED MODULE: ./node_modules/prism-react-renderer/themes/palenight/index.js
// Converted automatically using ./tools/themeFromVsCode
var palenight_theme = {
  plain: {
    color: "#bfc7d5",
    backgroundColor: "#292d3e"
  },
  styles: [{
    types: ["comment"],
    style: {
      color: "rgb(105, 112, 152)",
      fontStyle: "italic"
    }
  }, {
    types: ["string", "inserted"],
    style: {
      color: "rgb(195, 232, 141)"
    }
  }, {
    types: ["number"],
    style: {
      color: "rgb(247, 140, 108)"
    }
  }, {
    types: ["builtin", "char", "constant", "function"],
    style: {
      color: "rgb(130, 170, 255)"
    }
  }, {
    types: ["punctuation", "selector"],
    style: {
      color: "rgb(199, 146, 234)"
    }
  }, {
    types: ["variable"],
    style: {
      color: "rgb(191, 199, 213)"
    }
  }, {
    types: ["class-name", "attr-name"],
    style: {
      color: "rgb(255, 203, 107)"
    }
  }, {
    types: ["tag", "deleted"],
    style: {
      color: "rgb(255, 85, 114)"
    }
  }, {
    types: ["operator"],
    style: {
      color: "rgb(137, 221, 255)"
    }
  }, {
    types: ["boolean"],
    style: {
      color: "rgb(255, 88, 116)"
    }
  }, {
    types: ["keyword"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["doctype"],
    style: {
      color: "rgb(199, 146, 234)",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      color: "rgb(178, 204, 214)"
    }
  }, {
    types: ["url"],
    style: {
      color: "rgb(221, 221, 221)"
    }
  }]
};

/* harmony default export */ var palenight = (palenight_theme);

// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/useThemeContext.js
var useThemeContext = __webpack_require__(5350);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/index.js + 28 modules
var lib = __webpack_require__(1994);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/hooks/usePrismTheme.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var usePrismTheme=function usePrismTheme(){var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),prism=_useThemeConfig.prism;var _useThemeContext=(0,useThemeContext/* default */.Z)(),isDarkTheme=_useThemeContext.isDarkTheme;var lightModeTheme=prism.theme||palenight;var darkModeTheme=prism.darkTheme||lightModeTheme;var prismTheme=isDarkTheme?darkModeTheme:lightModeTheme;return prismTheme;};/* harmony default export */ var hooks_usePrismTheme = (usePrismTheme);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var styles_module = ({"codeBlockContainer":"codeBlockContainer_J+bg","codeBlockContent":"codeBlockContent_csEI","codeBlockTitle":"codeBlockTitle_oQzk","codeBlock":"codeBlock_rtdJ","copyButton":"copyButton_M3SB","codeBlockLines":"codeBlockLines_1zSZ"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/CodeBlock/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HighlightLinesRangeRegex=/{([\d,-]+)}/;var HighlightLanguages=['js','jsBlock','jsx','python','html'];// Supported types of highlight comments
var HighlightComments={js:{start:'\\/\\/',end:''},jsBlock:{start:'\\/\\*',end:'\\*\\/'},jsx:{start:'\\{\\s*\\/\\*',end:'\\*\\/\\s*\\}'},python:{start:'#',end:''},html:{start:'<!--',end:'-->'}};// Supported highlight directives
var HighlightDirectives=['highlight-next-line','highlight-start','highlight-end'];var getHighlightDirectiveRegex=function getHighlightDirectiveRegex(languages){if(languages===void 0){languages=HighlightLanguages;}// to be more reliable, the opening and closing comment must match
var commentPattern=languages.map(function(lang){var _HighlightComments$la=HighlightComments[lang],start=_HighlightComments$la.start,end=_HighlightComments$la.end;return"(?:"+start+"\\s*("+HighlightDirectives.join('|')+")\\s*"+end+")";}).join('|');// white space is allowed, but otherwise it should be on it's own line
return new RegExp("^\\s*(?:"+commentPattern+")\\s*$");};// select comment styles based on language
var highlightDirectiveRegex=function highlightDirectiveRegex(lang){switch(lang){case'js':case'javascript':case'ts':case'typescript':return getHighlightDirectiveRegex(['js','jsBlock']);case'jsx':case'tsx':return getHighlightDirectiveRegex(['js','jsBlock','jsx']);case'html':return getHighlightDirectiveRegex(['js','jsBlock','html']);case'python':case'py':return getHighlightDirectiveRegex(['python']);default:// all comment types
return getHighlightDirectiveRegex();}};function CodeBlock(_ref){var children=_ref.children,blockClassName=_ref.className,metastring=_ref.metastring,title=_ref.title;var _useThemeConfig=(0,lib/* useThemeConfig */.LU)(),prism=_useThemeConfig.prism;var _useState=(0,react.useState)(false),showCopied=_useState[0],setShowCopied=_useState[1];var _useState2=(0,react.useState)(false),mounted=_useState2[0],setMounted=_useState2[1];// The Prism theme on SSR is always the default theme but the site theme
// can be in a different mode. React hydration doesn't update DOM styles
// that come from SSR. Hence force a re-render after mounting to apply the
// current relevant styles. There will be a flash seen of the original
// styles seen using this current approach but that's probably ok. Fixing
// the flash will require changing the theming approach and is not worth it
// at this point.
(0,react.useEffect)(function(){setMounted(true);},[]);// TODO: the title is provided by MDX as props automatically
// so we probably don't need to parse the metastring
// (note: title="xyz" => title prop still has the quotes)
var codeBlockTitle=(0,lib/* parseCodeBlockTitle */.bc)(metastring)||title;var button=(0,react.useRef)(null);var highlightLines=[];var prismTheme=hooks_usePrismTheme();// In case interleaved Markdown (e.g. when using CodeBlock as standalone component).
var content=Array.isArray(children)?children.join(''):children;if(metastring&&HighlightLinesRangeRegex.test(metastring)){// Tested above
var highlightLinesRange=metastring.match(HighlightLinesRangeRegex)[1];highlightLines=parse_numeric_range_default()(highlightLinesRange).filter(function(n){return n>0;});}var languageClassName=blockClassName==null?void 0:blockClassName.split(' ').find(function(str){return str.startsWith('language-');});var language=languageClassName==null?void 0:languageClassName.replace(/language-/,'');if(!language&&prism.defaultLanguage){language=prism.defaultLanguage;}// only declaration OR directive highlight can be used for a block
var code=content.replace(/\n$/,'');if(highlightLines.length===0&&language!==undefined){var range='';var directiveRegex=highlightDirectiveRegex(language);// go through line by line
var lines=content.replace(/\n$/,'').split('\n');var blockStart;// loop through lines
for(var index=0;index<lines.length;){var line=lines[index];// adjust for 0-index
var lineNumber=index+1;var match=line.match(directiveRegex);if(match!==null){var directive=match.slice(1).reduce(function(final,item){return final||item;},undefined);switch(directive){case'highlight-next-line':range+=lineNumber+",";break;case'highlight-start':blockStart=lineNumber;break;case'highlight-end':range+=blockStart+"-"+(lineNumber-1)+",";break;default:break;}lines.splice(index,1);}else{// lines without directives are unchanged
index+=1;}}highlightLines=parse_numeric_range_default()(range);code=lines.join('\n');}var handleCopyCode=function handleCopyCode(){copyTextToClipboard(code);setShowCopied(true);setTimeout(function(){return setShowCopied(false);},2000);};return/*#__PURE__*/react.createElement(dist,(0,esm_extends/* default */.Z)({},defaultProps,{key:String(mounted),theme:prismTheme,code:code,language:language}),function(_ref2){var className=_ref2.className,style=_ref2.style,tokens=_ref2.tokens,getLineProps=_ref2.getLineProps,getTokenProps=_ref2.getTokenProps;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.codeBlockContainer,blockClassName==null?void 0:blockClassName.replace(/language-[^ ]+/,''))},codeBlockTitle&&/*#__PURE__*/react.createElement("div",{style:style,className:styles_module.codeBlockTitle},codeBlockTitle),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.codeBlockContent,language)},/*#__PURE__*/react.createElement("pre",{/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */tabIndex:0,className:(0,clsx_m/* default */.Z)(className,styles_module.codeBlock,'thin-scrollbar'),style:style},/*#__PURE__*/react.createElement("code",{className:styles_module.codeBlockLines},tokens.map(function(line,i){if(line.length===1&&line[0].content==='\n'){line[0].content='';}var lineProps=getLineProps({line:line,key:i});if(highlightLines.includes(i+1)){lineProps.className+=' docusaurus-highlight-code-line';}return/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.Z)({key:i},lineProps),line.map(function(token,key){return/*#__PURE__*/react.createElement("span",(0,esm_extends/* default */.Z)({key:key},getTokenProps({token:token,key:key})));}),/*#__PURE__*/react.createElement("br",null));}))),/*#__PURE__*/react.createElement("button",{ref:button,type:"button","aria-label":(0,Translate/* translate */.I)({id:'theme.CodeBlock.copyButtonAriaLabel',message:'Copy code to clipboard',description:'The ARIA label for copy code blocks button'}),className:(0,clsx_m/* default */.Z)(styles_module.copyButton,'clean-btn'),onClick:handleCopyCode},showCopied?/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):/*#__PURE__*/react.createElement(Translate/* default */.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))));});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(8280);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Details/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ var Details_styles_module = ({"details":"details_h+cY"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Details/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Should we have a custom details/summary comp in Infima instead of reusing alert classes?
var InfimaClasses='alert alert--info';function Details(_ref){var props=Object.assign({},_ref);return/*#__PURE__*/react.createElement(lib/* Details */.PO,(0,esm_extends/* default */.Z)({},props,{className:(0,clsx_m/* default */.Z)(InfimaClasses,Details_styles_module.details,props.className)}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXComponents/index.js
var _excluded=["mdxType","originalType"];/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// MDX elements are wrapped through the MDX pragma
// In some cases (notably usage with Head/Helmet) we need to unwrap those elements.
function unwrapMDXElement(element){var _element$props,_element$props2;if(element!=null&&(_element$props=element.props)!=null&&_element$props.mdxType&&element!=null&&(_element$props2=element.props)!=null&&_element$props2.originalType){var _element$props3=element.props,mdxType=_element$props3.mdxType,originalType=_element$props3.originalType,newProps=(0,objectWithoutPropertiesLoose/* default */.Z)(_element$props3,_excluded);return/*#__PURE__*/react.createElement(element.props.originalType,newProps);}return element;}var MDXComponents={head:function head(props){var unwrappedChildren=react.Children.map(props.children,function(child){return unwrapMDXElement(child);});return/*#__PURE__*/react.createElement(Head/* default */.Z,props,unwrappedChildren);},code:function code(props){var children=props.children;// For retrocompatibility purposes (pretty rare use case)
// See https://github.com/facebook/docusaurus/pull/1584
if(/*#__PURE__*/(0,react.isValidElement)(children)){return children;}return!children.includes('\n')?/*#__PURE__*/react.createElement("code",props):/*#__PURE__*/react.createElement(CodeBlock,props);},a:function a(props){return/*#__PURE__*/react.createElement(Link/* default */.Z,props);},pre:function pre(props){var _children$props;var children=props.children;// See comment for `code` above
if(/*#__PURE__*/(0,react.isValidElement)(children)&&/*#__PURE__*/(0,react.isValidElement)(children==null?void 0:(_children$props=children.props)==null?void 0:_children$props.children)){return children.props.children;}return/*#__PURE__*/react.createElement(CodeBlock,/*#__PURE__*/(0,react.isValidElement)(children)?children==null?void 0:children.props:Object.assign({},props));},details:function details(props){var items=react.Children.toArray(props.children);// Split summary item from the rest to pass it as a separate prop to the Detais theme component
var summary=items.find(function(item){var _item$props;return(item==null?void 0:(_item$props=item.props)==null?void 0:_item$props.mdxType)==='summary';});var children=/*#__PURE__*/react.createElement(react.Fragment,null,items.filter(function(item){return item!==summary;}));return/*#__PURE__*/react.createElement(Details,(0,esm_extends/* default */.Z)({},props,{summary:summary}),children);},h1:(0,Heading/* default */.Z)('h1'),h2:(0,Heading/* default */.Z)('h2'),h3:(0,Heading/* default */.Z)('h3'),h4:(0,Heading/* default */.Z)('h4'),h5:(0,Heading/* default */.Z)('h5'),h6:(0,Heading/* default */.Z)('h6')};/* harmony default export */ var theme_MDXComponents = (MDXComponents);

/***/ }),

/***/ 7594:
/***/ (function(module, exports) {

/**
 * @param {string} string    The string to parse
 * @returns {Array<number>}  Returns an energetic array.
 */
function parsePart(string) {
  let res = [];
  let m;

  for (let str of string.split(",").map((str) => str.trim())) {
    // just a number
    if (/^-?\d+$/.test(str)) {
      res.push(parseInt(str, 10));
    } else if (
      (m = str.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/))
    ) {
      // 1-5 or 1..5 (equivalent) or 1...5 (doesn't include 5)
      let [_, lhs, sep, rhs] = m;

      if (lhs && rhs) {
        lhs = parseInt(lhs);
        rhs = parseInt(rhs);
        const incr = lhs < rhs ? 1 : -1;

        // Make it inclusive by moving the right 'stop-point' away by one.
        if (sep === "-" || sep === ".." || sep === "\u2025") rhs += incr;

        for (let i = lhs; i !== rhs; i += incr) res.push(i);
      }
    }
  }

  return res;
}

exports["default"] = parsePart;
module.exports = parsePart;


/***/ })

}]);