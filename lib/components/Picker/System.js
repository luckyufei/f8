'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var System = function (_Component) {
  _inherits(System, _Component);

  function System(props) {
    _classCallCheck(this, System);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(System).call(this, props));

    _this.state = {
      picker: null
    };
    return _this;
  }

  _createClass(System, [{
    key: 'showPicker',
    value: function showPicker(picker) {
      if (!picker.values) {
        return;
      }
      this.setState({
        picker: picker
      });
    }
  }, {
    key: 'handleHide',
    value: function handleHide() {
      var picker = this.state.picker;

      if (!picker) {
        return;
      }
      this.setState({
        picker: null
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var picker = this.state.picker;

      return _react2.default.createElement(
        'div',
        { className: 'modal-wrapper' },
        picker && _react2.default.createElement(_Picker2.default, _extends({}, picker, {
          inline: false,
          onHide: this.handleHide.bind(this)
        }))
      );
    }
  }]);

  return System;
}(_react.Component);

System.propTypes = {};
exports.default = System;