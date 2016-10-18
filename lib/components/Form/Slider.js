"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Slider = function Slider(_ref) {
  var icon = _ref.icon;
  var label = _ref.label;
  var _ref$min = _ref.min;
  var min = _ref$min === undefined ? 1 : _ref$min;
  var max = _ref.max;
  var _ref$step = _ref.step;
  var step = _ref$step === undefined ? 0.1 : _ref$step;

  var props = _objectWithoutProperties(_ref, ["icon", "label", "min", "max", "step"]);

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
            "div",
            { className: "range-slider" },
            _react2.default.createElement("input", _extends({
              type: "range",
              min: min,
              max: max,
              step: step
            }, props, {
              name: "slider" }))
          )
        )
      )
    )
  );
};

Slider.propTypes = {
  icon: _react.PropTypes.node,
  label: _react.PropTypes.string,
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  value: _react.PropTypes.number,
  step: _react.PropTypes.number
};

exports.default = Slider;