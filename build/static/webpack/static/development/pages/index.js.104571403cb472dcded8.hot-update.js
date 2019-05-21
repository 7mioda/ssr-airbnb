webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Button/Button.jsx":
/*!**************************************!*\
  !*** ./components/Button/Button.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withStyle */ "./components/Button/withStyle.jsx");







var Button = function Button(props) {
  var className = props.className,
      children = props.children,
      classNames = props.classNames,
      rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["className", "children", "classNames"]);

  var buildClassName = function buildClassName(x) {
    return ['outline', 'animated', 'rounded', 'regular'].map(function (currentValue) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["get"])(x, currentValue, undefined) === true) {
        return currentValue;
      }

      return null;
    }).concat(classNames).join(' ');
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "button"
  }, rest, {
    className: "btn ".concat(buildClassName(props))
  }), children));
};

Button.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  classNames: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
};
Button.defaultProps = {
  classNames: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(Button));

/***/ }),

/***/ "./components/Button/withStyle.jsx":
/*!*****************************************!*\
  !*** ./components/Button/withStyle.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function (component) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(component).withConfig({
    displayName: "withStyle",
    componentId: "sc-192p746-0"
  })(["*{padding:0;margin:0;box-sizing:border-box;}.btn{border:none;height:50px;padding:0 2em;outline:none;border-radius:4px;font-family:inherit,sans-serif;text-transform:capitalize;font-size:12px;color:", ";background:", ";cursor:pointer;transition:all ease-in-out 0.3s;}.animated:hover{border:", ";color:", ";background:", ";}.animated:active{transform:scale(0.95);}.regular{border-radius:0;}.rounded{border-radius:50px;}.outline{border:", ";color:", ";background:", ";}"], function (_ref) {
    var color = _ref.color;
    return color || 'white';
  }, function (_ref2) {
    var background = _ref2.background;
    return background || 'pink';
  }, function (_ref3) {
    var background = _ref3.background;
    return "1px solid ".concat(background) || false;
  }, function (_ref4) {
    var background = _ref4.background;
    return background || 'grey';
  }, function (_ref5) {
    var color = _ref5.color;
    return color || 'white';
  }, function (_ref6) {
    var color = _ref6.color;
    return "1px solid ".concat(color) || false;
  }, function (_ref7) {
    var color = _ref7.color;
    return color || 'grey';
  }, function (_ref8) {
    var background = _ref8.background;
    return background || 'white';
  });
});

/***/ })

})
//# sourceMappingURL=index.js.104571403cb472dcded8.hot-update.js.map