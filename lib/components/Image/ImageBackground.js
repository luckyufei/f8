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

var ImageBackground = function (_Component) {
  _inherits(ImageBackground, _Component);

  function ImageBackground() {
    _classCallCheck(this, ImageBackground);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ImageBackground).apply(this, arguments));
  }

  _createClass(ImageBackground, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var responsive = _props.responsive;
      var className = _props.className;
      var src = _props.src;
      var width = _props.width;
      var height = _props.height;

      var props = _objectWithoutProperties(_props, ['responsive', 'className', 'src', 'width', 'height']);

      var imgStyle = {
        backgroundImage: 'url(' + src + ')',
        width: width,
        height: height
      };
      return _react2.default.createElement('div', _extends({}, props, { style: imgStyle, className: className }));
    }
  }]);

  return ImageBackground;
}(_react.Component);

ImageBackground.propTypes = {
  className: _react.PropTypes.string,
  src: _react.PropTypes.string,
  width: _react.PropTypes.string,
  height: _react.PropTypes.string
};
ImageBackground.defaultProps = {
  responsive: true,
  width: 'auto',
  height: 'auto'
};
exports.default = ImageBackground;