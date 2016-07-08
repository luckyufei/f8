'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StaticField = function (_Component) {
  _inherits(StaticField, _Component);

  function StaticField() {
    _classCallCheck(this, StaticField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StaticField).apply(this, arguments));
  }

  _createClass(StaticField, [{
    key: 'renderIcon',
    value: function renderIcon() {
      var icon = this.props.icon;

      if (icon) {
        return _react2.default.createElement(
          'div',
          { className: 'item-media' },
          icon
        );
      }
      return null;
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      var label = this.props.label;

      if (label) {
        return _react2.default.createElement(
          'div',
          { className: 'item-title label' },
          label
        );
      }
      return null;
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _props = this.props;
      var placeholder = _props.placeholder;
      var value = _props.value;
      var label = _props.label;
      var icon = _props.icon;

      var props = _objectWithoutProperties(_props, ['placeholder', 'value', 'label', 'icon']);

      if (value) {
        return _react2.default.createElement(
          'div',
          _extends({ style: { textAlign: 'right' } }, props),
          value
        );
      }
      return _react2.default.createElement(
        'div',
        _extends({ className: 'placeholder' }, props),
        placeholder
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'div',
          { className: 'item-content' },
          this.renderIcon(),
          _react2.default.createElement(
            'div',
            { className: 'item-inner' },
            this.renderLabel(),
            _react2.default.createElement(
              'div',
              { className: 'item-input' },
              this.renderInput()
            )
          )
        )
      );
    }
  }]);

  return StaticField;
}(_react.Component);

StaticField.propTypes = {
  label: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  value: _react.PropTypes.node,
  placeholder: _react.PropTypes.string
};
exports.default = StaticField;