webpackJsonp([0],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(24);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TweenMax = __webpack_require__(99);

var _TweenMax2 = _interopRequireDefault(_TweenMax);

var _jquery = __webpack_require__(100);

var _jquery2 = _interopRequireDefault(_jquery);

var _Landing = __webpack_require__(98);

var _Landing2 = _interopRequireDefault(_Landing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout() {
    _classCallCheck(this, Layout);

    var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _TweenMax2.default.from("#landing", 3, { y: 100, autoAlpha: 0 });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Landing2.default, null)
      );
    }
  }]);

  return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(24);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Landing = function Landing() {
  return _react2.default.createElement(
    "div",
    { id: "home" },
    _react2.default.createElement(
      "div",
      { className: "center", id: "landing" },
      _react2.default.createElement(
        "div",
        { className: "center-item" },
        _react2.default.createElement(
          "a",
          { className: "ldn" },
          "A Simple React Boilerplate"
        ),
        _react2.default.createElement(
          "div",
          { className: "gitmenu" },
          _react2.default.createElement(
            "a",
            { className: "github-button", href: "https://github.com/aleodev/Simple-React-Boilerplate", "data-icon": "octicon-star", "data-size": "large", "data-show-count": "true", "aria-label": "Star aleodev/Simple-React-Boilerplate on GitHub" },
            "Star"
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "a",
            { className: "github-button", href: "https://github.com/aleodev/Simple-React-Boilerplate", "data-size": "large", "data-show-count": "true", "aria-label": "Follow @aleodev on GitHub" },
            "Follow @aleodev"
          )
        )
      )
    )
  );
};
exports.default = Landing;

/***/ })

},[102]);