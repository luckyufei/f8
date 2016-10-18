'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preloader = function (_Component) {
  _inherits(Preloader, _Component);

  function Preloader() {
    _classCallCheck(this, Preloader);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Preloader).apply(this, arguments));
  }

  _createClass(Preloader, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var revert = _props.revert;
      var big = _props.big;
      var hCenter = _props.hCenter;
      var vCenter = _props.vCenter;

      var props = _objectWithoutProperties(_props, ['children', 'className', 'revert', 'big', 'hCenter', 'vCenter']);

      var classes = (0, _classnames2.default)({
        'h-center': !!hCenter,
        'v-center': !!vCenter,
        'text-center': true
      }, className);
      var classesPreloader = (0, _classnames2.default)({
        'preloader': true,
        'preloader-white': !!revert,
        'preloader-big': !!big
      });
      return _react2.default.createElement(
        'div',
        _extends({ className: classes }, props),
        _react2.default.createElement('span', { className: classesPreloader }),
        children
      );
    }
  }]);

  return Preloader;
}(_react.Component);

Preloader.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  revert: _react.PropTypes.bool,
  big: _react.PropTypes.bool,
  hCenter: _react.PropTypes.bool,
  vCenter: _react.PropTypes.bool
};
Preloader.defaultProps = {
  revert: false,
  big: false,
  hCenter: true,
  vCenter: false
};
exports.default = Preloader;