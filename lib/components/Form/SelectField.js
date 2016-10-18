'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectField = function (_Component) {
  _inherits(SelectField, _Component);

  function SelectField() {
    _classCallCheck(this, SelectField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SelectField).apply(this, arguments));
  }

  _createClass(SelectField, [{
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
    key: 'renderSelect',
    value: function renderSelect() {
      var _props = this.props;
      var options = _props.options;

      var props = _objectWithoutProperties(_props, ['options']);

      options = options.map(function (option) {
        return (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' ? option : { label: option, value: option };
      });
      return _react2.default.createElement(
        'select',
        props,
        options.map(function (_ref, i) {
          var label = _ref.label;
          var value = _ref.value;
          return _react2.default.createElement(
            'option',
            { value: value, key: i },
            label
          );
        })
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
              this.renderSelect()
            )
          )
        )
      );
    }
  }]);

  return SelectField;
}(_react.Component);

SelectField.propTypes = {
  label: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  options: _react.PropTypes.array,
  value: _react.PropTypes.string
};
SelectField.defaultProps = {
  options: []
};
exports.default = SelectField;