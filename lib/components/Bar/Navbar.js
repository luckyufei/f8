'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _query = require('dom-helpers/query');

var _style = require('dom-helpers/style');

var _style2 = _interopRequireDefault(_style);

var _getComputedStyle = require('dom-helpers/style/getComputedStyle');

var _getComputedStyle2 = _interopRequireDefault(_getComputedStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.adjustCenterLeft();
    }
  }, {
    key: 'adjustCenterLeft',
    value: function adjustCenterLeft() {
      var navbar = _reactDom2.default.findDOMNode(this.refs['navbar']);
      var left = _reactDom2.default.findDOMNode(this.refs['left']);
      var center = _reactDom2.default.findDOMNode(this.refs['center']);
      var right = _reactDom2.default.findDOMNode(this.refs['right']);
      var leftWidth = (0, _query.width)(left, true);
      var centerWidth = (0, _query.width)(center, true);
      if (centerWidth === 0) {
        return;
      }
      var rightWidth = (0, _query.width)(right, true);
      var navbarStyle = (0, _getComputedStyle2.default)(navbar);
      var navbarWidth = navbar.offsetWidth - parseInt(navbarStyle.paddingLeft, 10) - parseInt(navbarStyle.paddingRight, 10);
      var currLeft = (navbarWidth - rightWidth - centerWidth + leftWidth) / 2;
      var requiredLeft = (navbarWidth - centerWidth) / 2;
      var diff = void 0;
      if (navbarWidth - leftWidth - rightWidth > centerWidth) {
        if (requiredLeft < leftWidth) {
          requiredLeft = leftWidth;
        }
        if (requiredLeft + centerWidth > navbarWidth - rightWidth) {
          requiredLeft = navbarWidth - rightWidth - centerWidth;
        }
        diff = requiredLeft - currLeft;
      } else {
        diff = 0;
      }
      (0, _style2.default)(center, 'left', diff + 'px');
    }
  }, {
    key: 'renderLink',
    value: function renderLink(object) {
      var key = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
      var text = object.text;
      var icon = object.icon;
      var iconName = object.iconName;

      var others = _objectWithoutProperties(object, ['text', 'icon', 'iconName']);

      var classesLink = (0, _classnames2.default)({
        'link': true,
        'icon-only': !text
      });
      return _react2.default.createElement(
        'a',
        _extends({ key: key, className: classesLink }, others),
        iconName && _react2.default.createElement(_Icon2.default, { name: iconName }),
        icon,
        text
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var title = _props.title;
      var left = _props.left;
      var right = _props.right;

      return _react2.default.createElement(
        'div',
        { className: 'navbar' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-inner', ref: 'navbar' },
          _react2.default.createElement(
            'div',
            { className: 'left', ref: 'left' },
            left && Array.isArray(left) && left.map(function (object, index) {
              return _this2.renderLink(object, index);
            }),
            left && !Array.isArray(left) && this.renderLink(left)
          ),
          _react2.default.createElement(
            'div',
            { className: 'center', ref: 'center' },
            title
          ),
          _react2.default.createElement(
            'div',
            { className: 'right', ref: 'right' },
            right && Array.isArray(right) && right.map(function (object, index) {
              return _this2.renderLink(object, index);
            }),
            right && !Array.isArray(right) && this.renderLink(right)
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.propTypes = {
  title: _react.PropTypes.node,
  left: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.object), _react.PropTypes.object]),
  right: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.object), _react.PropTypes.object])
};
exports.default = Navbar;