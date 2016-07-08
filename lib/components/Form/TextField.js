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

var TextField = function (_Component) {
  _inherits(TextField, _Component);

  function TextField() {
    _classCallCheck(this, TextField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TextField).apply(this, arguments));
  }

  _createClass(TextField, [{
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
      var type = _props.type;
      var placeholder = _props.placeholder;

      var props = _objectWithoutProperties(_props, ['type', 'placeholder']);

      return _react2.default.createElement('input', _extends({ type: type, placeholder: placeholder }, props));
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

  return TextField;
}(_react.Component);

TextField.propTypes = {
  label: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  type: _react.PropTypes.oneOf(['text', 'password', 'email', 'tel', 'url', 'date', 'number', 'datatime-local']),
  placeholder: _react.PropTypes.string
};
TextField.defaultProps = {
  type: 'text'
};
exports.default = TextField;