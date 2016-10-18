'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TransitionPages = function (_Component) {
  _inherits(TransitionPages, _Component);

  function TransitionPages() {
    _classCallCheck(this, TransitionPages);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TransitionPages).apply(this, arguments));
  }

  _createClass(TransitionPages, [{
    key: 'render',
    value: function render() {
      var location = this.props.location;

      var transition = 'sfr';
      if (location.state && location.state.transition) {
        switch (location.state.transition) {
          case 'right':
            transition = 'sfr';
            break;
          case 'left':
            transition = 'rfr';
            break;
          case 'up':
            transition = 'sfb';
            break;
          case 'down':
            transition = 'rfb';
            break;
        }
      }
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        {
          component: 'div',
          className: 'pages',
          transitionName: 'page-transition-' + transition,
          transitionEnterTimeout: 400,
          transitionLeaveTimeout: 400
        },
        _react2.default.cloneElement(this.props.children, {
          key: location.pathname
        })
      );
    }
  }], [{
    key: 'getState',
    value: function getState() {
      var type = arguments.length <= 0 || arguments[0] === undefined ? 'left' : arguments[0];

      return {
        transition: type
      };
    }
  }]);

  return TransitionPages;
}(_react.Component);

TransitionPages.propTypes = {
  children: _react.PropTypes.node,
  location: _react.PropTypes.object
};
exports.default = TransitionPages;