'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabbarItem = require('./TabbarItem');

var _TabbarItem2 = _interopRequireDefault(_TabbarItem);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabbar = function (_Component) {
  _inherits(Tabbar, _Component);

  function Tabbar() {
    _classCallCheck(this, Tabbar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tabbar).apply(this, arguments));
  }

  _createClass(Tabbar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props;
      var children = _props.children;
      var tool = _props.tool;
      var visible = _props.visible;
      var ui = this.context.ui;

      var hasLabel = false;
      if (!tool && children) {
        _react2.default.Children.forEach(children, function (child) {
          if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' && child.type === _TabbarItem2.default) {
            if (child.props.label) {
              hasLabel = true;
            }
          }
        });
      }
      ui.setTabbar(visible ? hasLabel ? 'label' : 'icon' : 'none');
      this.setState({
        hasLabel: hasLabel
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var ui = this.context.ui;

      ui.setTabbar('none');
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var visibleNext = nextProps.visible;
      var visible = this.props.visible;
      var ui = this.context.ui;
      var hasLabel = this.state.hasLabel;

      if (visibleNext && !visible) {
        ui.setTabbar(hasLabel ? 'label' : 'icon');
      }
      if (!visibleNext && visible) {
        ui.setTabbar('none');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var tool = _props2.tool;
      var children = _props2.children;
      var visible = _props2.visible;

      var props = _objectWithoutProperties(_props2, ['className', 'tool', 'children', 'visible']);

      var hasLabel = this.state.hasLabel;

      var classes = (0, _classnames2.default)({
        'toolbar': true,
        'tabbar': !tool,
        'tabbar-labels': hasLabel,
        'toolbar-hidden': !visible,
        'toolbar-hiding': !!visible
      }, className);
      return _react2.default.createElement(
        'div',
        _extends({ className: classes }, props),
        _react2.default.createElement(
          'div',
          { className: 'toolbar-inner' },
          children
        )
      );
    }
  }]);

  return Tabbar;
}(_react.Component);

Tabbar.propTypes = {
  tool: _react.PropTypes.bool,
  visible: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};
Tabbar.defaultProps = {
  tool: false,
  visible: true
};
Tabbar.contextTypes = {
  ui: _react.PropTypes.object
};
Tabbar.Item = _TabbarItem2.default;
exports.default = Tabbar;