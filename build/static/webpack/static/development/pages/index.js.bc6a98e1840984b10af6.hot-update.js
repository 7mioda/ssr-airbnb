webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/HomeBanner/HomeBanner.jsx":
/*!**********************************************!*\
  !*** ./components/HomeBanner/HomeBanner.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dates */ "./node_modules/react-dates/index.js");
/* harmony import */ var react_dates__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dates__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dates/initialize */ "./node_modules/react-dates/initialize.js");
/* harmony import */ var react_dates_initialize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dates_initialize__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dates/lib/css/_datepicker.css */ "./node_modules/react-dates/lib/css/_datepicker.css");
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _react_dates_overrides_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./react_dates_overrides.css */ "./components/HomeBanner/react_dates_overrides.css");
/* harmony import */ var _react_dates_overrides_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_react_dates_overrides_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./withStyle */ "./components/HomeBanner/withStyle.jsx");
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Input/Input */ "./components/Input/Input.jsx");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Button/Button */ "./components/Button/Button.jsx");












var HomeBanner = function HomeBanner(_ref) {
  var className = _ref.className;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(function (state, newState) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, newState);
  }, {
    destination: '',
    startDate: null,
    startDateFocused: null,
    endDate: null,
    endDateFocused: null
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useReducer, 2),
      _useReducer2$ = _useReducer2[0],
      destination = _useReducer2$.destination,
      startDate = _useReducer2$.startDate,
      startDateFocused = _useReducer2$.startDateFocused,
      endDateFocused = _useReducer2$.endDateFocused,
      endDate = _useReducer2$.endDate,
      setState = _useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "".concat(className)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "landing"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "R\xE9servez des logements et des exp\xE9riences uniques.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "landing-search"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", null, "R\xE9servez des logements et des exp\xE9riences uniques."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    className: "landing-search__form"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "search-input"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: "search-input"
  }, "O\xD9"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Input_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: "text",
    highlighted: true,
    classNames: ['text-field'],
    autoCapitalize: true,
    placeholder: "Partout",
    name: "location",
    value: destination,
    id: "search-input",
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return setState({
        destination: value
      });
    }
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "search-input half"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: ""
  }, "Arriv\xE9e"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_4__["SingleDatePicker"], {
    date: startDate,
    onDateChange: function onDateChange(date) {
      return setState({
        startDate: date
      });
    },
    focused: startDateFocused,
    onFocusChange: function onFocusChange(_ref3) {
      var focused = _ref3.focused;
      return setState({
        startDateFocused: focused
      });
    },
    displayFormat: "dddd MM YYYY",
    numberOfMonths: 1,
    placeholder: "jj/mm/aaaa",
    id: "startDate",
    className: "text-field"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "search-input half"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: ""
  }, "D\xE9part"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_dates__WEBPACK_IMPORTED_MODULE_4__["SingleDatePicker"], {
    date: endDate,
    onDateChange: function onDateChange(date) {
      return setState({
        endDate: date
      });
    },
    focused: endDateFocused,
    onFocusChange: function onFocusChange(_ref4) {
      var focused = _ref4.focused;
      return setState({
        endDateFocused: focused
      });
    },
    displayFormat: "dddd MM YYYY",
    numberOfMonths: 1,
    placeholder: "jj/mm/aaaa",
    id: "endDate",
    className: "text-field CalendarDay__selected_span"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "search-input half"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: ""
  }, "Adultes"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    placeholder: "Ann\xE9e",
    className: "text-input"
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["range"])(1, 13).map(function (index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      key: index,
      value: ""
    }, index, " ", index === 1 ? 'adult' : 'adultes');
  }), ">"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "icon-box down-arrow"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "search-input half"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
    htmlFor: ""
  }, "Enfants"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    placeholder: "Ann\xE9e",
    className: "text-input"
  }, Object(lodash__WEBPACK_IMPORTED_MODULE_3__["range"])(1, 13).map(function (index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      key: index,
      value: ""
    }, index, " ", index === 1 ? 'enfant' : 'enfants');
  }), ">"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "icon-box down-arrow"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "half"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "half"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
    animated: true,
    color: "white",
    background: "#ff5a5f",
    classNames: ['landing-search__btn'],
    type: "submit"
  }, "Rechercher")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_withStyle__WEBPACK_IMPORTED_MODULE_8__["default"])(HomeBanner));

/***/ })

})
//# sourceMappingURL=index.js.bc6a98e1840984b10af6.hot-update.js.map