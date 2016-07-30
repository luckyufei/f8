'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberInput = function (_Component) {
  _inherits(NumberInput, _Component);

  function NumberInput() {
    _classCallCheck(this, NumberInput);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NumberInput).apply(this, arguments));
  }

  _createClass(NumberInput, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.validProps(this.props);
      var step = this.props.step;

      var digital = 0;
      var indexOfPoint = String(step).indexOf('.');
      if (indexOfPoint > -1) {
        digital = String(step).length - indexOfPoint - 1;
      }
      this.setState({
        digital: digital
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.validProps(nextProps);
    }
  }, {
    key: 'validProps',
    value: function validProps(props) {
      var value = props.value;
      var min = props.min;
      var max = props.max;
      var step = props.step;

      if (value !== null && value > max) {
        throw new Error('value must lt max');
      }
      if (value !== null && value < min) {
        throw new Error('value must gt min');
      }
      if (value !== null && step > max - min) {
        throw new Error('step must between min and max');
      }
      this.setState({
        value: value,
        canPlus: value === null ? true : value !== max,
        canReduce: value === null ? true : value !== min
      });
    }
  }, {
    key: 'handleReduce',
    value: function handleReduce() {
      var _this2 = this;

      var _props = this.props;
      var min = _props.min;
      var step = _props.step;
      var _state = this.state;
      var value = _state.value;
      var canReduce = _state.canReduce;

      if (!canReduce) {
        return;
      }
      if (value === null) {
        this.setState({
          value: min,
          canReduce: false
        });
        return;
      }
      var newValue = value - step;
      var newCanReduce = true;
      if (newValue <= min) {
        newValue = min;
        newCanReduce = false;
      }
      this.setState({
        value: newValue,
        canReduce: newCanReduce
      }, function () {
        _this2.onValueChange(newValue);
      });
    }
  }, {
    key: 'handlePlus',
    value: function handlePlus() {
      var _this3 = this;

      var _props2 = this.props;
      var max = _props2.max;
      var step = _props2.step;
      var _state2 = this.state;
      var value = _state2.value;
      var canPlus = _state2.canPlus;

      if (!canPlus) {
        return;
      }
      if (value === null) {
        this.setState({
          value: max,
          canPlus: false
        });
        return;
      }
      var newValue = value + step;
      var newCanPlus = true;
      if (newValue >= max) {
        newValue = max;
        newCanPlus = false;
      }
      this.setState({
        value: newValue,
        canPlus: newCanPlus
      }, function () {
        _this3.onValueChange(newValue);
      });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(e) {
      var _this4 = this;

      var v = Number(e.target.value);
      if (isNaN(v)) {
        return;
      }
      var _props3 = this.props;
      var min = _props3.min;
      var max = _props3.max;

      var canPlus = true;
      var canReduce = true;
      if (v > max) {
        v = max;
        canPlus = false;
      }
      if (v < min) {
        v = min;
        canReduce = false;
      }
      this.setState({
        value: v,
        canReduce: canReduce,
        canPlus: canPlus
      }, function () {
        _this4.onValueChange(v);
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var input = e.target.value;
      if (input === null || input === '' || input.length === 0) {
        this.setState({
          value: null
        });
        return;
      }
      var v = Number(input);
      if (isNaN(v)) {
        return;
      }
      this.setState({
        value: v
      });
    }
  }, {
    key: 'onValueChange',
    value: function onValueChange(value) {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _state3 = this.state;
      var value = _state3.value;
      var canReduce = _state3.canReduce;
      var canPlus = _state3.canPlus;
      var digital = _state3.digital;

      return _react2.default.createElement(
        'div',
        { className: 'numberinput' },
        _react2.default.createElement(
          'span',
          { onClick: this.handleReduce.bind(this), className: 'numberinput-control numberinput-control-left ' + (canReduce ? '' : 'numberinput-control-disable') },
          '-'
        ),
        _react2.default.createElement('input', { onBlur: this.handleBlur.bind(this), onChange: this.handleChange.bind(this), type: 'number', value: value === null ? null : Number(value).toFixed(digital) }),
        _react2.default.createElement(
          'span',
          { onClick: this.handlePlus.bind(this), className: 'numberinput-control numberinput-control-right ' + (canPlus ? '' : 'numberinput-control-disable') },
          '+'
        )
      );
    }
  }]);

  return NumberInput;
}(_react.Component);

NumberInput.propTypes = {
  min: _react.PropTypes.number.isRequired,
  max: _react.PropTypes.number.isRequired,
  value: _react.PropTypes.number,
  step: _react.PropTypes.number.isRequired,
  className: _react.PropTypes.string,
  onChange: _react.PropTypes.func
};
NumberInput.defaultProps = {
  step: 1,
  value: null
};
exports.default = NumberInput;