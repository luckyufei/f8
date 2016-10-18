'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block = function (_Component) {
  _inherits(Block, _Component);

  function Block() {
    _classCallCheck(this, Block);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Block).apply(this, arguments));
  }

  _createClass(Block, [{
    key: 'renderTitle',
    value: function renderTitle() {
      var title = this.props.title;

      if (title) {
        return _react2.default.createElement(
          'div',
          { className: 'content-block-title' },
          title
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var inset = _props.inset;
      var highlight = _props.highlight;

      if (!children) {
        return this.renderTitle();
      }
      var classes = (0, _classnames2.default)({
        'content-block': true,
        'inset': inset
      });
      var classesInner = (0, _classnames2.default)({
        'content-block-inner': true
      });
      return _react2.default.createElement(
        'div',
        { className: className },
        this.renderTitle(),
        _react2.default.createElement(
          'div',
          { className: classes },
          !highlight && children,
          highlight && _react2.default.createElement(
            'div',
            { className: classesInner },
            children
          )
        )
      );
    }
  }]);

  return Block;
}(_react.Component);

Block.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  highlight: _react.PropTypes.bool,
  inset: _react.PropTypes.bool,
  title: _react.PropTypes.string
};
exports.default = Block;