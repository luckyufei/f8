'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Timer = require('../../utils/Timer');

var _Timer2 = _interopRequireDefault(_Timer);

var _transition = require('../../utils/transition');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item(props) {
    _classCallCheck(this, Item);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Item).call(this, props));

    _this.state = {
      visible: false,
      removed: false
    };
    return _this;
  }

  _createClass(Item, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var transitionEvent = (0, _transition.whichTransitionEvent)();
      var notification = this.props.notification;

      var element = _reactDom2.default.findDOMNode(this);
      this._height = element.offsetHeight;
      this._isMounted = true;

      if (!this._noAnimation) {
        if (transitionEvent) {
          element.addEventListener(transitionEvent, this.onTransitionEnd.bind(this));
        } else {
          this._noAnimation = true;
        }
      }
      if (notification.autoDismiss) {
        this._notificationTimer = new _Timer2.default(function () {
          _this2.hideNotification();
        }, notification.autoDismiss * 1000);
      }
      this.showNotification();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var element = _reactDom2.default.findDOMNode(this);
      var transitionEvent = (0, _transition.whichTransitionEvent)();
      element.removeEventListener(transitionEvent, this.onTransitionEnd.bind(this));
      this._isMounted = false;
    }
  }, {
    key: 'hideNotification',
    value: function hideNotification() {
      if (this._notificationTimer) {
        this._notificationTimer.clear();
      }

      if (this._isMounted) {
        this.setState({
          visible: false,
          removed: true
        });
      }

      if (this._noAnimation) {
        this.removeNotification();
      }
    }
  }, {
    key: 'removeNotification',
    value: function removeNotification() {
      var _props = this.props;
      var notification = _props.notification;
      var onRemove = _props.onRemove;

      onRemove(notification.uid);
    }
  }, {
    key: 'dismiss',
    value: function dismiss() {
      if (!this.props.notification.dismissible) {
        return;
      }
      this.hideNotification();
    }
  }, {
    key: 'showNotification',
    value: function showNotification() {
      var _this3 = this;

      setTimeout(function () {
        if (_this3._isMounted) {
          _this3.setState({
            visible: true
          });
        }
      }, 50);
    }
  }, {
    key: 'onTransitionEnd',
    value: function onTransitionEnd() {
      if (this._removeCount > 0) return;
      if (this.state.removed) {
        this._removeCount++;
        this.removeNotification();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var notification = this.props.notification;
      var visible = this.state.visible;

      var classes = (0, _classnames2.default)({
        'notification-item': true,
        'notification-hidden': !visible
      });
      return _react2.default.createElement(
        'li',
        { className: classes },
        _react2.default.createElement(
          'div',
          { className: 'item-content' },
          notification.icon && _react2.default.createElement(
            'div',
            { className: 'item-media' },
            notification.icon
          ),
          _react2.default.createElement(
            'div',
            { className: 'item-inner' },
            _react2.default.createElement(
              'div',
              { className: 'item-title-row' },
              notification.title && _react2.default.createElement(
                'div',
                { className: 'item-title' },
                notification.title
              ),
              _react2.default.createElement(
                'div',
                { className: 'item-after' },
                _react2.default.createElement(
                  'a',
                  { onClick: this.dismiss.bind(this), className: 'close-notification' },
                  _react2.default.createElement('span', null)
                )
              )
            ),
            notification.subTitle && _react2.default.createElement(
              'div',
              { className: 'item-subtitle' },
              notification.subTitle
            ),
            notification.message && _react2.default.createElement(
              'div',
              { className: 'item-text' },
              notification.message
            )
          )
        )
      );
    }
  }]);

  return Item;
}(_react.Component);

Item.propTypes = {
  notification: _react.PropTypes.object,
  onRemove: _react.PropTypes.func,
  noAnimation: _react.PropTypes.bool
};
Item.defaultProps = {
  noAnimation: false,
  onRemove: function onRemove() {}
};
exports.default = Item;