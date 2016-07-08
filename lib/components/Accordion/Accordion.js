'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AccordionItem = require('./AccordionItem');

var _AccordionItem2 = _interopRequireDefault(_AccordionItem);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion() {
    _classCallCheck(this, Accordion);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Accordion).apply(this, arguments));
  }

  _createClass(Accordion, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.state = {
        activeKey: this.props.defaultActiveKey || null
      };
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return !this.isChanging;
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(e, key) {
      e.preventDefault();

      if (this.props.onSelect) {
        this.isChanging = true;
        this.props.onSelect(key);
        this.isChanging = false;
      }

      if (this.state.activeKey === key) {
        key = null;
      }

      this.setState({
        activeKey: key
      });
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this2 = this;

      var activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey;

      return _react2.default.Children.map(this.props.children, function (child, index) {
        if (!child) {
          return null;
        }
        var _child$props = child.props;
        var eventKey = _child$props.eventKey;
        var key = _child$props.key;

        var props = {
          key: key || index,
          onSelect: _this2.handleSelect.bind(_this2)
        };

        if (eventKey === undefined) {
          props.eventKey = eventKey = index;
        }

        props.expanded = eventKey === activeKey;

        return _react2.default.cloneElement(child, props);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)({
        'list-block': true,
        'inset': !!this.props.inset
      });
      return _react2.default.createElement(
        'div',
        _extends({}, this.props, {
          className: className
        }),
        _react2.default.createElement(
          'ul',
          null,
          this.renderItems()
        )
      );
    }
  }]);

  return Accordion;
}(_react.Component);

Accordion.Item = _AccordionItem2.default;
Accordion.propTypes = {
  activeKey: _react.PropTypes.any,
  defaultActiveKey: _react.PropTypes.any,
  inset: _react.PropTypes.bool,
  onSelect: _react.PropTypes.func,
  children: _react.PropTypes.node
};
exports.default = Accordion;