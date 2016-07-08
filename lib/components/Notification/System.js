'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var System = function (_Component) {
  _inherits(System, _Component);

  function System(props) {
    _classCallCheck(this, System);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(System).call(this, props));

    _this._uid = 3400;
    _this.state = {
      notifications: []
    };
    return _this;
  }

  _createClass(System, [{
    key: 'didNotificationRemoved',
    value: function didNotificationRemoved(uid) {
      var notification = void 0;
      var notifications = this.state.notifications.filter(function (toCheck) {
        if (toCheck.uid === uid) {
          notification = toCheck;
        }
        return toCheck.uid !== uid;
      });

      if (notification && notification.onRemove) {
        notification.onRemove(notification);
      }

      this.setState({ notifications: notifications });
    }
  }, {
    key: 'addNotification',
    value: function addNotification(notification) {
      var _notification = _extends({
        icon: null,
        title: null,
        subTitle: null,
        message: null,
        autoDismiss: 5,
        dismissible: true
      }, notification);
      var notifications = this.state.notifications;

      if (isNaN(_notification.autoDismiss)) {
        throw new Error('\'autoDismiss\' must be a number.');
      }

      _notification.autoDismiss = parseInt(_notification.autoDismiss, 10);

      _notification.uid = _notification.uid || this._uid;
      _notification.ref = 'notification-' + _notification.uid;
      this._uid += 1;

      // do not add if the notification already exists based on supplied uid
      for (var i = 0; i < notifications.length; i++) {
        if (notifications[i].uid === _notification.uid) {
          return false;
        }
      }

      notifications.push(_notification);

      if (typeof _notification.onAdd === 'function') {
        notification.onAdd(_notification);
      }

      this.setState({
        notifications: notifications
      });

      return _notification;
    }
  }, {
    key: 'removeNotification',
    value: function removeNotification(notification) {
      var container = this.refs['container'];
      Object.keys(container.refs).forEach(function (_notification) {
        var uid = notification.uid ? notification.uid : notification;
        if (_notification === 'notification-' + uid) {
          container.refs[_notification]._hideNotification();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var noAnimation = this.props.noAnimation;
      var notifications = this.state.notifications;

      return _react2.default.createElement(
        'div',
        { className: 'notifications list-block media-list', style: { display: notifications.length > 0 ? 'block' : 'none' } },
        _react2.default.createElement(_Container2.default, {
          ref: 'container',
          notifications: notifications,
          onRemove: this.didNotificationRemoved.bind(this),
          noAnimation: noAnimation
        })
      );
    }
  }]);

  return System;
}(_react.Component);

System.propTypes = {
  noAnimation: _react.PropTypes.bool
};
System.defaultProps = {
  style: {},
  noAnimation: false
};
exports.default = System;