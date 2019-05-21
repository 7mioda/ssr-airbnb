webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Carousel/Carousel.jsx":
/*!******************************************!*\
  !*** ./components/Carousel/Carousel.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var short_id__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! short-id */ "./node_modules/short-id/lib/index.js");
/* harmony import */ var short_id__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(short_id__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _withStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./withStyle */ "./components/Carousel/withStyle.jsx");







var Carousel = function Carousel(_ref) {
  var children = _ref.children,
      _ref$itemNumber = _ref.itemNumber,
      itemNumber = _ref$itemNumber === void 0 ? 1 : _ref$itemNumber,
      className = _ref.className,
      time = _ref.time,
      auto = _ref.auto,
      indicators = _ref.indicators,
      defaultIndex = _ref.defaultIndex;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(defaultIndex || 0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      width = _useState4[0],
      setWidth = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(children)),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
      slides = _useState6[0],
      setSlides = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (auto) {
      var timeOut = setTimeout(function () {
        moveToSlide(index + 1);
      }, time || 5000);
      return function () {
        return clearTimeout(timeOut);
      };
    }

    return function () {
      return undefined;
    };
  }, [auto, index]); // Force Component to update while resizing to recalculate width

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('resize', function () {
      setIndex(index);
      return function () {
        return window.removeEventListener('resize', function () {});
      };
    });
  }, []);

  var moveToSlide = function moveToSlide(targetIndex) {
    var newSlides = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(slides);

    var slide = newSlides.shift();
    newSlides.push(slide);
    setSlides(newSlides);

    if (targetIndex === children.length) {
      setIndex(0);
    } else if (targetIndex < 0) {
      setIndex(children.length - 1);
    } else {
      setIndex(targetIndex);
    }
  };

  var keysAction = function keysAction(_ref2) {
    var keyCode = _ref2.keyCode;

    if (keyCode === 39 || keyCode === 37) {
      if (keyCode === 39) {
        moveToSlide(index + 1);
      } else if (keyCode === 37) {
        moveToSlide(index - 1);
      }
    }
  };

  var childrenView = slides.map(function (child) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "slide",
      key: short_id__WEBPACK_IMPORTED_MODULE_4___default.a.generate()
    }, child);
  });
  var indicatorsView = slides.map(function (child, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
      key: short_id__WEBPACK_IMPORTED_MODULE_4___default.a.generate(),
      type: "button",
      className: "indicator ".concat(index === i ? 'active' : ''),
      onClick: function onClick() {
        return setIndex(i);
      }
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: className,
    "data-testid": "carousel",
    id: "carousel",
    ref: function ref(el) {
      if (!el) return;
      setWidth(el.getBoundingClientRect().width);
    },
    onKeyDown: function onKeyDown(event) {
      return keysAction(event);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "slide__button slide__button--next",
    onClick: function onClick() {
      return moveToSlide(index + 1);
    }
  }, ' ', react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "icon-chevron-right"
  }), ' '), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "slide__track",
    style: {
      transform: "translateX(-".concat(width / itemNumber, "px)")
    }
  }, childrenView), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "button",
    className: "slide__button slide__button--previous icon-right-arrow",
    onClick: function onClick() {
      return moveToSlide(index - 1);
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "icon-chevron-left"
  }), ' '), indicators && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "indicator-container"
  }, indicatorsView));
};

Carousel.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  time: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  auto: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  indicators: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  defaultIndex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
};
Carousel.defaultProps = {
  time: 5000,
  auto: false,
  indicators: false,
  defaultIndex: 0
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Object(_withStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(Carousel)));

/***/ })

})
//# sourceMappingURL=index.js.2c50b69b883b9d2924f9.hot-update.js.map