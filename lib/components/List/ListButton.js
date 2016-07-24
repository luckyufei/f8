'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../../utils/theme');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ListButton = function ListButton(_ref) {
  var href = _ref.href;
  var text = _ref.text;
  var children = _ref.children;
  var theme = _ref.theme;
  var className = _ref.className;

  return _react2.default.createElement(
    'li',
    { className: className },
    _react2.default.createElement(
      'a',
      { className: (0, _classnames2.default)("list-button item-link", _defineProperty({}, 'color-' + theme, !!theme)) },
      text || children
    )
  );
};
ListButton.propTypes = {
  className: _react.PropTypes.string,
  href: _react.PropTypes.string,
  text: _react.PropTypes.string,
  children: _react.PropTypes.node,
  theme: _react.PropTypes.oneOf((0, _theme.getThemes)())
};

exports.default = ListButton;