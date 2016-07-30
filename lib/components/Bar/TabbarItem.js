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

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabbarItem = function (_Component) {
  _inherits(TabbarItem, _Component);

  function TabbarItem() {
    _classCallCheck(this, TabbarItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TabbarItem).apply(this, arguments));
  }

  _createClass(TabbarItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var iconName = _props.iconName;
      var icon = _props.icon;
      var label = _props.label;
      var active = _props.active;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['iconName', 'icon', 'label', 'active', 'className']);

      var classes = (0, _classnames2.default)({
        'tab-link': true,
        'active': active
      }, className);
      return _react2.default.createElement(
        'a',
        _extends({ className: classes }, props),
        iconName && _react2.default.createElement(_Icon2.default, { name: iconName }),
        icon,
        label && _react2.default.createElement(
          'span',
          { className: 'tabbar-label' },
          label
        )
      );
    }
  }]);

  return TabbarItem;
}(_react.Component);

TabbarItem.propTypes = {
  iconName: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  label: _react.PropTypes.string,
  active: _react.PropTypes.bool,
  className: _react.PropTypes.string
};
exports.default = TabbarItem;