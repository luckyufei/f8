'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _query = require('dom-helpers/query');

var _style = require('dom-helpers/style');

var _style2 = _interopRequireDefault(_style);

var _class = require('dom-helpers/class');

var _transition = require('../../utils/transition');

var _Preloader = require('../Indicator/Preloader');

var _Preloader2 = _interopRequireDefault(_Preloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var System = function (_Component) {
  _inherits(System, _Component);

  function System(props) {
    _classCallCheck(this, System);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(System).call(this, props));

    _this.state = {
      visible: false,
      modal: null
    };
    return _this;
  }

  _createClass(System, [{
    key: 'showModal',
    value: function showModal(modal) {
      var _this2 = this;

      if (!modal) {
        return;
      }
      this.setState({
        visible: true,
        modal: modal
      }, function () {
        _this2.adjustModalStyle();
      });
    }
  }, {
    key: 'hideModal',
    value: function hideModal() {
      var _this3 = this;

      var visible = this.state.visible;

      if (!visible) {
        return;
      }
      var modal = this.refs['modal'];
      if (!modal) {
        return;
      }
      var modalDom = _reactDom2.default.findDOMNode(modal);
      if (!modalDom) {
        this.setState({
          visible: false,
          modal: null
        });
      } else {
        if (!(0, _class.hasClass)(modalDom, 'modal-in')) {
          this.setState({
            visible: false,
            modal: null
          });
        } else {
          (function () {
            (0, _class.removeClass)(modalDom, 'modal-in');
            var transitionEvent = (0, _transition.whichTransitionEvent)();
            var eventHandler = modalDom.addEventListener(transitionEvent, function () {
              modalDom.removeEventListener(transitionEvent, eventHandler);
              _this3.setState({
                visible: false,
                modal: null
              });
            });
            (0, _class.addClass)(modalDom, 'modal-out');
          })();
        }
      }
    }
  }, {
    key: 'adjustModalStyle',
    value: function adjustModalStyle() {
      var modal = this.refs['modal'];
      if (!modal) {
        return;
      }
      var modalDom = _reactDom2.default.findDOMNode(modal);
      if (modalDom) {
        (0, _style2.default)(modalDom, 'display', 'block');
        (0, _style2.default)(modalDom, 'margin-top', '-' + (0, _query.height)(modalDom, true) / 2 + 'px');
        (0, _class.addClass)(modalDom, 'modal-in');
      }
    }
  }, {
    key: 'renderPreloader',
    value: function renderPreloader() {
      var modal = this.state.modal;

      var title = modal.title || '载入中';
      return _react2.default.createElement(
        'div',
        { className: 'modal modal-no-buttons modal-preloader', ref: 'modal' },
        _react2.default.createElement(
          'div',
          { className: 'modal-inner' },
          _react2.default.createElement(
            'div',
            { className: 'modal-title' },
            title
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-text' },
            _react2.default.createElement(_Preloader2.default, null)
          )
        )
      );
    }
  }, {
    key: 'renderModal',
    value: function renderModal() {
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var visible = _state.visible;
      var modal = _state.modal;

      var classesOverlay = (0, _classnames2.default)({
        'modal-overlay': true,
        'modal-overlay-visible': visible
      });
      return _react2.default.createElement(
        'div',
        { className: 'modal-wrapper' },
        _react2.default.createElement('div', { className: classesOverlay }),
        visible && modal && modal.type === 'preloader' && this.renderPreloader()
      );
    }
  }]);

  return System;
}(_react.Component);

exports.default = System;