'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'handleClick',
    value: function handleClick(e) {
      var onClick = this.props.onClick;

      if (onClick) {
        onClick(e);
      }
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      var _props = this.props;
      var icon = _props.icon;
      var iconName = _props.iconName;

      if (!icon && !iconName) {
        return null;
      }
      if (iconName) {
        return _react2.default.createElement(
          'div',
          { className: 'item-media' },
          _react2.default.createElement(_Icon2.default, { name: iconName })
        );
      }
      if (icon) {
        return _react2.default.createElement(
          'div',
          { className: 'item-media' },
          icon
        );
      }
    }
  }, {
    key: 'renderInner',
    value: function renderInner() {
      var _props2 = this.props;
      var subTitle = _props2.subTitle;
      var text = _props2.text;
      var title = _props2.title;
      var after = _props2.after;

      return _react2.default.createElement(
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
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var onClick = _props3.onClick;
      var href = _props3.href;
      var className = _props3.className;

      return _react2.default.createElement(
        'li',
        { className: className },
        onClick && typeof onClick === 'function' && _react2.default.createElement(
          'a',
          { onClick: this.handleClick.bind(this), className: 'item-link item-content' },
          this.renderIcon(),
          this.renderInner()
        ),
        href && _react2.default.createElement(
          'a',
          { href: href, className: 'item-link item-content' },
          this.renderIcon(),
          this.renderInner()
        ),
        !onClick && !href && _react2.default.createElement(
          'div',
          { className: 'item-content' },
          this.renderIcon(),
          this.renderInner()
        )
      );
    }
  }]);

  return ListItem;
}(_react.Component);

ListItem.propTypes = {
  iconName: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  title: _react.PropTypes.string,
  after: _react.PropTypes.node,
  subTitle: _react.PropTypes.node,
  text: _react.PropTypes.node,
  onClick: _react.PropTypes.func,
  href: _react.PropTypes.string,
  className: _react.PropTypes.string
};
exports.default = ListItem;