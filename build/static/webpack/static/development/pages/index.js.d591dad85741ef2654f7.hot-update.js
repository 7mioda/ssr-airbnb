webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/HomeExplorer/HomeExplorer.jsx":
/*!**************************************************!*\
  !*** ./components/HomeExplorer/HomeExplorer.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./withStyle */ "./components/HomeExplorer/withStyle.js");



var HomeExplorer = function HomeExplorer(_ref) {
  var className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "explorer__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "item__photo",
    alt: "",
    src: "https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?t=r:w375-h250-sfit,e:fjpg-c80%22"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "item__title"
  }, "Logements")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "explorer__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "item__photo",
    alt: "",
    src: "https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?t=r:w375-h250-sfit,e:fjpg-c80%22"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "item__title"
  }, "Logements")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "explorer__item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "item__photo",
    alt: "",
    src: "https://a0.muscache.com/4ea/air/v2/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?t=r:w375-h250-sfit,e:fjpg-c80%22"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "item__title"
  }, "Logements")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(HomeExplorer));

/***/ }),

/***/ "./components/HomeExplorer/withStyle.js":
/*!**********************************************!*\
  !*** ./components/HomeExplorer/withStyle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function (component) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(component).withConfig({
    displayName: "withStyle",
    componentId: "sc-1jvzxa2-0"
  })([".explorer__item{display:inline-block;width:20%;margin-left:15px;height:72px;}.item__photo{width:30%;height:100%;object-fit:cover;}.item__title{vertical-align:center;}"]);
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.jsx");
/* harmony import */ var _components_HomeBanner_HomeBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HomeBanner/HomeBanner */ "./components/HomeBanner/HomeBanner.jsx");
/* harmony import */ var _lib_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/reset-css */ "./lib/reset-css.js");
/* harmony import */ var _components_HomeListing_HomeListing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/HomeListing/HomeListing */ "./components/HomeListing/HomeListing.jsx");
/* harmony import */ var _components_Menu_MenuWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Menu/MenuWrapper */ "./components/Menu/MenuWrapper.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_HomePlus_HomePlus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HomePlus/HomePlus */ "./components/HomePlus/HomePlus.jsx");
/* harmony import */ var _components_HomeExplorer_HomeExplorer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HomeExplorer/HomeExplorer */ "./components/HomeExplorer/HomeExplorer.jsx");










var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", null, "Airbnb"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,600,700",
    rel: "stylesheet"
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_lib_reset_css__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Menu_MenuWrapper__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_HomeBanner_HomeBanner__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    style: {
      maxWidth: '1520px',
      margin: '10px auto'
    }
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_HomeExplorer_HomeExplorer__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_HomePlus_HomePlus__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_HomeListing_HomeListing__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.d591dad85741ef2654f7.hot-update.js.map