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

var TextArea = function (_Component) {
  _inherits(TextArea, _Component);

  function TextArea(props) {
    _classCallCheck(this, TextArea);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextArea).call(this, props));

    _this.handleResize = _this.handleResize.bind(_this);
    _this.state = {
      height: 'auto'
    };
    return _this;
  }

  _createClass(TextArea, [{
    key: 'handleResize',
    value: function handleResize() {
      var _this2 = this;

      var resizable = this.props.resizable;

      var elem = this.refs.formTextarea;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        if (!resizable) {
          return false;
        }
        _this2.setState({ height: '' });
        var height = elem.offsetHeight,
            diff = height - elem.clientHeight,
            scrollHeight = elem.scrollHeight;
        if (scrollHeight + diff > height) {
          _this2.setState({ height: scrollHeight + diff + 'px' });
        }
      }, 0);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props;
      var label = _props.label;
      var icon = _props.icon;
      var placeholder = _props.placeholder;
      var resizable = _props.resizable;

      var props = _objectWithoutProperties(_props, ['label', 'icon', 'placeholder', 'resizable']);

      if (resizable) {
        props.style = { height: this.state.height };
        "change keydown keypress keyup paste cut".split(' ').forEach(function (eventName) {
          var eventProp = 'on' + eventName.substr(0, 1).toUpperCase() + eventName.substring(1);
          props[eventProp] = _this3.handleResize;
        });
      }
      return _react2.default.createElement(
        'li',
        { className: 'align-top' },
        _react2.default.createElement(
          'div',
          { className: 'item-content' },
          icon && _react2.default.createElement(
            'div',
            { className: 'item-media' },
            icon
          ),
          _react2.default.createElement(
            'div',
            { className: 'item-inner' },
            label && _react2.default.createElement(
              'div',
              { className: 'item-title label' },
              label
            ),
            _react2.default.createElement(
              'div',
              { className: 'item-input' },
              _react2.default.createElement('textarea', _extends({
                ref: 'formTextarea',
                placeholder: placeholder,
                className: resizable && 'resizable'
              }, props))
            )
          )
        )
      );
    }
  }]);

  return TextArea;
}(_react.Component);

TextArea.propTypes = {
  label: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  placeholder: _react.PropTypes.string,
  resizable: _react.PropTypes.bool
};
exports.default = TextArea;