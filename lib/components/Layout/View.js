'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _System = require('../Notification/System');

var _System2 = _interopRequireDefault(_System);

var _System3 = require('../Modal/System');

var _System4 = _interopRequireDefault(_System3);

var _System5 = require('../Indicator/System');

var _System6 = _interopRequireDefault(_System5);

var _System7 = require('../Picker/System');

var _System8 = _interopRequireDefault(_System7);

var _theme = require('../../utils/theme');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var View = function (_Component) {
  _inherits(View, _Component);

  function View(props) {
    _classCallCheck(this, View);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(View).call(this, props));

    _this._tabbar = 'none';
    return _this;
  }

  _createClass(View, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      return {
        ui: {
          addNotification: function addNotification(notification) {
            _this2.addNotification(notification);
          },
          setTabbar: function setTabbar(type) {
            _this2.setTabbar(type);
          },
          getTabbar: function getTabbar() {
            return _this2.getTabbar();
          },
          showPreloader: function showPreloader() {
            _this2.showPreloader();
          },
          hidePreloader: function hidePreloader() {
            _this2.hidePreloader();
          },
          showModal: function showModal(modal) {
            _this2.showModal(modal);
          },
          hideModal: function hideModal() {
            _this2.hideModal();
          },
          showPicker: function showPicker(picker) {
            _this2.showPicker(picker);
          }
        }
      };
    }
  }, {
    key: 'setTabbar',
    value: function setTabbar(type) {
      this._type = type;
    }
  }, {
    key: 'getTabbar',
    value: function getTabbar() {
      return this._type;
    }
  }, {
    key: 'addNotification',
    value: function addNotification(notification) {
      this.refs['notificationSystem'].addNotification(notification);
    }
  }, {
    key: 'showPreloader',
    value: function showPreloader() {
      this.refs['indicatorSystem'].showPreloader();
    }
  }, {
    key: 'hidePreloader',
    value: function hidePreloader() {
      this.refs['indicatorSystem'].hidePreloader();
    }
  }, {
    key: 'showModal',
    value: function showModal(modal) {
      this.refs['modalSystem'].showModal(modal);
    }
  }, {
    key: 'hideModal',
    value: function hideModal() {
      this.refs['modalSystem'].hideModal();
    }
  }, {
    key: 'showPicker',
    value: function showPicker(picker) {
      this.refs['pickerSystem'].showPicker(picker);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var className = _props.className;
      var theme = _props.theme;

      var classes = (0, _classnames2.default)(_defineProperty({
        'view': true
      }, 'theme-' + theme, theme), className);
      return _react2.default.createElement(
        'div',
        { className: 'wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'views' },
          _react2.default.createElement(
            'div',
            { className: classes },
            children
          )
        ),
        _react2.default.createElement(_System2.default, { ref: 'notificationSystem' }),
        _react2.default.createElement(_System4.default, { ref: 'modalSystem' }),
        _react2.default.createElement(_System6.default, { ref: 'indicatorSystem' }),
        _react2.default.createElement(_System8.default, { ref: 'pickerSystem' })
      );
    }
  }]);

  return View;
}(_react.Component);

View.propTypes = {
  children: _react.PropTypes.node,
  theme: _react.PropTypes.oneOf((0, _theme.getThemes)()),
  className: _react.PropTypes.string
};
View.childContextTypes = {
  ui: _react.PropTypes.object
};
exports.default = View;