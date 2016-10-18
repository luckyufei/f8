'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfiniteScroll = function (_Component) {
  _inherits(InfiniteScroll, _Component);

  function InfiniteScroll() {
    _classCallCheck(this, InfiniteScroll);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(InfiniteScroll).apply(this, arguments));
  }

  _createClass(InfiniteScroll, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.attachScrollListener();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.detachScrollListener();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var hasMore = _props.hasMore;
      var isLoading = _props.isLoading;
      var loader = _props.loader;

      return _react2.default.createElement(
        'div',
        { style: { height: '100%', overflowY: 'auto' } },
        children,
        hasMore && isLoading && loader
      );
    }
  }, {
    key: 'scrollListener',
    value: function scrollListener() {
      var _props2 = this.props;
      var hasMore = _props2.hasMore;
      var isLoading = _props2.isLoading;
      var threshold = _props2.threshold;

      if (!hasMore || isLoading) {
        return;
      }
      var el = _reactDom2.default.findDOMNode(this);
      if (el.scrollTop + el.offsetHeight + threshold > el.scrollHeight) {
        this.props.loadMore();
      }
    }
  }, {
    key: 'attachScrollListener',
    value: function attachScrollListener() {
      _reactDom2.default.findDOMNode(this).addEventListener('scroll', this.scrollListener.bind(this));
    }
  }, {
    key: 'detachScrollListener',
    value: function detachScrollListener() {
      _reactDom2.default.findDOMNode(this).removeEventListener('scroll', this.scrollListener.bind(this));
    }
  }]);

  return InfiniteScroll;
}(_react.Component);

InfiniteScroll.propTypes = {
  pageStart: _react2.default.PropTypes.number,
  hasMore: _react2.default.PropTypes.bool,
  loadMore: _react2.default.PropTypes.func.isRequired,
  threshold: _react2.default.PropTypes.number,
  loader: _react2.default.PropTypes.node.isRequired,
  isLoading: _react.PropTypes.bool,
  children: _react.PropTypes.node
};
InfiniteScroll.defaultProps = {
  pageStart: 0,
  hasMore: false,
  threshold: 250
};
exports.default = InfiniteScroll;