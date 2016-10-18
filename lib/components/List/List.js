'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ListGroup = require('./ListGroup');

var _ListGroup2 = _interopRequireDefault(_ListGroup);

var _ListItem = require('./ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListDivider = require('./ListDivider');

var _ListDivider2 = _interopRequireDefault(_ListDivider);

var _ListButton = require('./ListButton');

var _ListButton2 = _interopRequireDefault(_ListButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var children = this.props.children;

      var media = false;
      var group = false;
      if (children) {
        _react2.default.Children.forEach(children, function (child) {
          if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' && child.type === _ListItem2.default) {
            if (child.props.subTitle || child.props.text) {
              media = true;
            }
          }
          if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' && child.type === _ListGroup2.default) {
            group = true;
            if (child.props.children) {
              _react2.default.Children.forEach(child.children, function (subChild) {
                if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === 'object' && child.type === _ListItem2.default) {
                  if (child.props.subTitle || child.props.text) {
                    media = true;
                  }
                }
              });
            }
          }
        });
      }
      this.setState({
        media: media,
        group: group
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var block = _props.block;
      var className = _props.className;
      var inset = _props.inset;
      var tabletInset = _props.tabletInset;
      var label = _props.label;
      var _state = this.state;
      var media = _state.media;
      var group = _state.group;

      var classes = (0, _classnames2.default)({
        'list-block': !!block,
        'media-list': media,
        'inset': !!inset,
        'tablet-inset': !!tabletInset
      }, className);
      return _react2.default.createElement(
        'div',
        { className: classes },
        group && children,
        !group && _react2.default.createElement(
          'ul',
          null,
          children
        ),
        label && _react2.default.createElement(
          'div',
          { className: 'list-block-label' },
          label
        )
      );
    }
  }]);

  return List;
}(_react.Component);

List.Divider = _ListDivider2.default;
List.Item = _ListItem2.default;
List.Group = _ListGroup2.default;
List.Button = _ListButton2.default;
List.propTypes = {
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  label: _react.PropTypes.node,
  inset: _react.PropTypes.bool,
  tabletInset: _react.PropTypes.bool,
  block: _react.PropTypes.bool
};
List.defaultProps = {
  block: true
};
exports.default = List;