'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Page = require('../Layout/Page');

var _Page2 = _interopRequireDefault(_Page);

var _Navbar = require('../Bar/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Block = require('../Container/Block');

var _Block2 = _interopRequireDefault(_Block);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorPage = function (_Component) {
  _inherits(ErrorPage, _Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ErrorPage).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: 'renderNavbar',
    value: function renderNavbar() {
      var _props = this.props;
      var onBack = _props.onBack;
      var title = _props.title;

      if (onBack) {
        return _react2.default.createElement(_Navbar2.default, {
          title: title,
          left: [{
            iconName: 'back',
            text: '返回',
            onClick: onBack
          }]
        });
      }
      return _react2.default.createElement(_Navbar2.default, { title: title });
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      var icon = this.props.icon;

      if (icon) {
        return icon;
      }
      return _react2.default.createElement(_Icon2.default, { name: 'error' });
    }
  }, {
    key: 'renderMessage',
    value: function renderMessage() {
      var message = this.props.message;

      return _react2.default.createElement(
        'p',
        null,
        message
      );
    }
  }, {
    key: 'renderButton',
    value: function renderButton() {
      var onIndex = this.props.onIndex;

      if (onIndex) {
        return _react2.default.createElement(
          _Button2.default,
          { fill: true, big: true, onClick: onIndex },
          '返回首页'
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _Page2.default,
        {
          fix: true,
          navbar: this.renderNavbar()
        },
        _react2.default.createElement(
          _Block2.default,
          { className: 'text-center' },
          this.renderIcon(),
          this.renderMessage(),
          this.renderButton()
        )
      );
    }
  }]);

  return ErrorPage;
}(_react.Component);

ErrorPage.propTypes = {
  title: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  message: _react.PropTypes.string,
  onBack: _react.PropTypes.func,
  onIndex: _react.PropTypes.func
};
ErrorPage.defaultProps = {
  title: '错误',
  message: '系统发生了一个未知错误'
};
exports.default = ErrorPage;