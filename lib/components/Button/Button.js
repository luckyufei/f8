'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../../utils/theme');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var theme = _props.theme;
      var active = _props.active;
      var fill = _props.fill;
      var big = _props.big;
      var round = _props.round;
      var disable = _props.disable;
      var children = _props.children;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['theme', 'active', 'fill', 'big', 'round', 'disable', 'children', 'className']);

      var classes = (0, _classnames2.default)(_defineProperty({
        'button': true,
        'active': active,
        'button-round': round,
        'button-fill': fill,
        'button-big': big,
        'disabled': disable
      }, 'color-' + theme, theme), className);
      return _react2.default.createElement(
        'a',
        _extends({ className: classes }, props),
        children
      );
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  theme: _react.PropTypes.oneOf((0, _theme.getThemes)()),
  active: _react.PropTypes.bool,
  fill: _react.PropTypes.bool,
  big: _react.PropTypes.bool,
  round: _react.PropTypes.bool,
  disable: _react.PropTypes.bool,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string
};
exports.default = Button;