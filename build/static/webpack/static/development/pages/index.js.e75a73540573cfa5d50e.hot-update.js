webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Menu/MenuWrapper.jsx":
/*!*****************************************!*\
  !*** ./components/Menu/MenuWrapper.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuItem */ "./components/Menu/MenuItem.jsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu */ "./components/Menu/Menu.jsx");
/* harmony import */ var _withStyleWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./withStyleWrapper */ "./components/Menu/withStyleWrapper.js");






var MenuWrapper = function MenuWrapper(_ref) {
  var className = _ref.className;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      menu = _useState2[0],
      setMenu = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: menu ? 'menu__logo' : 'menu__logo inactive',
    type: "button",
    onClick: function onClick() {
      return setMenu(!menu);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    right: true,
    classNames: menu ? ['menu--active'] : ['menu--inactive']
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Devenez hote"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Cr\xE9er une \xE9xp\xE9rience"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Aide",
    content: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "1"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, "2"))
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Inscription"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Connexion"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyleWrapper__WEBPACK_IMPORTED_MODULE_4__["default"])(MenuWrapper));

/***/ })

})
//# sourceMappingURL=index.js.e75a73540573cfa5d50e.hot-update.js.map