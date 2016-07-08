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

var RadioField = function (_Component) {
  _inherits(RadioField, _Component);

  function RadioField() {
    _classCallCheck(this, RadioField);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(RadioField).apply(this, arguments));
  }

  _createClass(RadioField, [{
    key: 'handleChange',
    value: function handleChange(e) {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var name = _props.name;
      var icon = _props.icon;
      var value = _props.value;
      var title = _props.title;
      var after = _props.after;
      var text = _props.text;
      var subTitle = _props.subTitle;
      var check = _props.check;

      var props = _objectWithoutProperties(_props, ['name', 'icon', 'value', 'title', 'after', 'text', 'subTitle', 'check']);

      return _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(
          'label',
          { className: 'label-radio item-content' },
          _react2.default.createElement('input', _extends({ type: 'radio' }, props, { name: name, value: value, checked: !!check, onChange: this.handleChange.bind(this) })),
          icon && _react2.default.createElement(
            'div',
            { className: 'item-media' },
            icon
          ),
          _react2.default.createElement(
            'div',
            { className: 'item-inner' },
            (subTitle || text) && _react2.default.createElement(
              'div',
              { className: 'item-title-row' },
              title && _react2.default.createElement(
                'div',
                { className: 'item-title' },
                title
              ),
              after && _react2.default.createElement(
                'div',
                { className: 'item-after' },
                after
              )
            ),
            !subTitle && !text && title && _react2.default.createElement(
              'div',
              { className: 'item-title' },
              title
            ),
            !subTitle && !text && after && _react2.default.createElement(
              'div',
              { className: 'item-after' },
              after
            ),
            subTitle && _react2.default.createElement(
              'div',
              { className: 'item-subtitle' },
              subTitle
            ),
            text && _react2.default.createElement(
              'div',
              { className: 'item-text' },
              text
            )
          )
        )
      );
    }
  }]);

  return RadioField;
}(_react.Component);

RadioField.propTypes = {
  title: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  after: _react.PropTypes.node,
  subTitle: _react.PropTypes.string,
  text: _react.PropTypes.node,
  value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  name: _react.PropTypes.string,
  check: _react.PropTypes.bool,
  onChange: _react.PropTypes.func
};
RadioField.defaultProps = {
  check: false
};
exports.default = RadioField;