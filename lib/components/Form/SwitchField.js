"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var SwitchField = function SwitchField(_ref) {
  var label = _ref.label;
  var icon = _ref.icon;

  var props = _objectWithoutProperties(_ref, ["label", "icon"]);

  return _react2.default.createElement(
    "li",
    null,
    _react2.default.createElement(
      "div",
      { className: "item-content" },
      icon && _react2.default.createElement(
        "div",
        { className: "item-media" },
        icon
      ),
      _react2.default.createElement(
        "div",
        { className: "item-inner" },
        label && _react2.default.createElement(
          "div",
          { className: "item-title label" },
          label
        ),
        _react2.default.createElement(
          "div",
          { className: "item-input" },
          _react2.default.createElement(
            "label",
            { className: "label-switch" },
            _react2.default.createElement("input", _extends({ type: "checkbox" }, props)),
            _react2.default.createElement("div", { className: "checkbox" })
          )
        )
      )
    )
  );
};

SwitchField.propTypes = {
  icon: _react.PropTypes.node,
  label: _react.PropTypes.string,
  checked: _react.PropTypes.bool,
  onChange: _react.PropTypes.func
};

exports.default = SwitchField;