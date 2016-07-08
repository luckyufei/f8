'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Toolbar = require('../Bar/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _class = require('dom-helpers/class');

var _transition = require('../../utils/transition');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Picker = function (_Component) {
  _inherits(Picker, _Component);

  function Picker(props) {
    _classCallCheck(this, Picker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Picker).call(this, props));

    var formattedValues = _this.formatValues(props.values);
    var selectValue = void 0;
    if (!props.selectValue) {
      var firstElement = formattedValues[0];
      selectValue = {
        text: firstElement.text,
        value: firstElement.value
      };
      if (firstElement.childs && firstElement.childs.length > 0) {
        var firstChildElement = firstElement.childs[0];
        selectValue.child = {
          text: firstChildElement.text,
          value: firstChildElement.value
        };
      }
    } else {
      selectValue = _this.formatSelect(props.selectValue);
    }
    _this.state = {
      formattedValues: formattedValues,
      selectValue: selectValue,
      selectParentIndex: 0
    };
    return _this;
  }

  _createClass(Picker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var inline = this.props.inline;

      if (!inline) {
        setTimeout(function () {
          _this2.adjustModalStyle();
        }, 0);
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
        (0, _class.addClass)(modalDom, 'modal-in');
      }
    }
  }, {
    key: 'formatSelect',
    value: function formatSelect(value) {
      var object = {};
      if (typeof value === 'string') {
        object.text = value;
        object.value = value;
      } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        if (!value.value) {
          object.text = value.text;
          object.value = value.value;
        } else {
          object.text = value.text;
          object.value = value.value;
        }
        if (value.child) {
          object.child = this.formatSelect(value.child);
        }
      }
      return object;
    }
  }, {
    key: 'formatValues',
    value: function formatValues(values) {
      var _this3 = this;

      return values.map(function (value) {
        var object = {};
        if (typeof value === 'string') {
          object.text = value;
          object.value = value;
        } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          if (!value.value) {
            object.text = value.text;
            object.value = value.text;
          } else {
            object.text = value.text;
            object.value = value.value;
          }
          if (value.childs && value.childs.length > 0) {
            object.childs = _this3.formatValues(value.childs);
          }
        }
        return object;
      });
    }
  }, {
    key: 'caclPositionIndex',
    value: function caclPositionIndex(values, selectValue) {
      if (!selectValue || !values || values.length === 0) {
        return 0;
      }
      var selectIndex = 0;
      values.some(function (value, index) {
        if (value.text === selectValue.text && value.value === selectValue.value) {
          selectIndex = index;
          return true;
        }
        return false;
      });
      return selectIndex;
    }
  }, {
    key: 'handleHide',
    value: function handleHide() {
      var onHide = this.props.onHide;

      if (onHide) {
        onHide();
      }
    }
  }, {
    key: 'handleClose',
    value: function handleClose(e) {
      var _this4 = this;

      e.stopPropagation();
      var onClose = this.props.onClose;

      if (onClose) {
        onClose();
      }
      var modal = this.refs['modal'];
      if (!modal) {
        this.handleHide();
        return;
      }
      var modalDom = _reactDom2.default.findDOMNode(modal);
      if (!modalDom) {
        this.handleHide();
        return;
      }
      if (!(0, _class.hasClass)(modalDom, 'modal-in')) {
        this.handleHide();
        return;
      }
      (0, _class.removeClass)(modalDom, 'modal-in');
      var transitionEvent = (0, _transition.whichTransitionEvent)();
      var eventHandler = modalDom.addEventListener(transitionEvent, function () {
        modalDom.removeEventListener(transitionEvent, eventHandler);
        _this4.handleHide();
      });
      (0, _class.addClass)(modalDom, 'modal-out');
    }
  }, {
    key: 'handleSelectSingle',
    value: function handleSelectSingle(object, e) {
      e.stopPropagation();
      var onSelect = this.props.onSelect;

      if (onSelect) {
        onSelect(object);
      }
      this.setState({
        selectValue: object
      });
    }
  }, {
    key: 'handleSelectLeft',
    value: function handleSelectLeft(index, e) {
      e.stopPropagation();
      this.setState({
        selectParentIndex: index
      });
    }
  }, {
    key: 'handleSelectRight',
    value: function handleSelectRight(object, e) {
      e.stopPropagation();
      var _state = this.state;
      var formattedValues = _state.formattedValues;
      var selectParentIndex = _state.selectParentIndex;

      var result = {
        text: formattedValues[selectParentIndex].text,
        value: formattedValues[selectParentIndex].value,
        child: object
      };
      var onSelect = this.props.onSelect;

      if (onSelect) {
        onSelect(result);
      }
      this.setState({
        selectValue: result
      });
    }
  }, {
    key: 'renderPickerItemCenter',
    value: function renderPickerItemCenter() {
      var _this5 = this;

      var _state2 = this.state;
      var selectValue = _state2.selectValue;
      var formattedValues = _state2.formattedValues;

      var selectIndex = this.caclPositionIndex(formattedValues, selectValue);
      return _react2.default.createElement(
        'div',
        { className: 'picker-items-col picker-items-col-center' },
        _react2.default.createElement(
          'div',
          { className: 'picker-items-col-wrapper', style: { transform: 'translate3d(0px, ' + (90 - selectIndex * 36) + 'px, 0px)', 'WebkitTransform': 'translate3d(0px, ' + (90 - selectIndex * 36) + 'px, 0px)' } },
          formattedValues.map(function (object, index) {
            return _react2.default.createElement(
              'div',
              { onClick: _this5.handleSelectSingle.bind(_this5, object), className: 'picker-item ' + (index === selectIndex ? 'picker-selected' : ''), key: index },
              object.text
            );
          })
        )
      );
    }
  }, {
    key: 'renderPickerItemLeft',
    value: function renderPickerItemLeft() {
      var _this6 = this;

      var _state3 = this.state;
      var selectParentIndex = _state3.selectParentIndex;
      var formattedValues = _state3.formattedValues;

      return _react2.default.createElement(
        'div',
        { className: 'picker-items-col picker-items-col-center', style: { width: '50%' } },
        _react2.default.createElement(
          'div',
          { className: 'picker-items-col-wrapper', style: { transform: 'translate3d(0px, ' + (90 - selectParentIndex * 36) + 'px, 0px)', 'WebkitTransform': 'translate3d(0px, ' + (90 - selectParentIndex * 36) + 'px, 0px)' } },
          formattedValues.map(function (object, index) {
            return _react2.default.createElement(
              'div',
              { onClick: _this6.handleSelectLeft.bind(_this6, index), className: 'picker-item ' + (index === selectParentIndex ? 'picker-selected' : ''), key: index },
              object.text
            );
          })
        )
      );
    }
  }, {
    key: 'renderPickerItemRight',
    value: function renderPickerItemRight() {
      var _this7 = this;

      var _state4 = this.state;
      var selectValue = _state4.selectValue;
      var formattedValues = _state4.formattedValues;
      var selectParentIndex = _state4.selectParentIndex;

      var childValues = formattedValues[selectParentIndex].childs;
      var selectIndex = this.caclPositionIndex(childValues, selectValue.child);
      return _react2.default.createElement(
        'div',
        { className: 'picker-items-col picker-items-col-center', style: { width: '50%' } },
        _react2.default.createElement(
          'div',
          { className: 'picker-items-col-wrapper', style: { transform: 'translate3d(0px, ' + (90 - selectIndex * 36) + 'px, 0px)', 'WebkitTransform': 'translate3d(0px, ' + (90 - selectIndex * 36) + 'px, 0px)' } },
          childValues.map(function (object, index) {
            return _react2.default.createElement(
              'div',
              { onClick: _this7.handleSelectRight.bind(_this7, object), className: 'picker-item ' + (index === selectIndex ? 'picker-selected' : ''), key: index },
              object.text
            );
          })
        )
      );
    }
  }, {
    key: 'renderPickerItem',
    value: function renderPickerItem() {
      var formattedValues = this.state.formattedValues;

      if (!formattedValues || formattedValues.length === 0) {
        return null;
      }
      var isTwoCol = formattedValues[0].childs;
      return _react2.default.createElement(
        'div',
        { className: 'picker-modal-inner picker-items' },
        isTwoCol && this.renderPickerItemLeft(),
        isTwoCol && this.renderPickerItemRight(),
        !isTwoCol && this.renderPickerItemCenter(),
        _react2.default.createElement('div', { className: 'picker-center-highlight' })
      );
    }
  }, {
    key: 'renderPicker',
    value: function renderPicker() {
      var _props = this.props;
      var inline = _props.inline;
      var className = _props.className;
      var doneText = _props.doneText;

      var classes = (0, _classnames2.default)({
        'picker-modal': true,
        'picker-columns': true,
        'picker-modal-inline': !!inline
      }, className);
      return _react2.default.createElement(
        'div',
        { className: classes, ref: 'modal', style: inline ? null : { display: 'block' } },
        !inline && _react2.default.createElement(
          _Toolbar2.default,
          null,
          _react2.default.createElement(_Toolbar2.default.Item, { align: 'left' }),
          _react2.default.createElement(
            _Toolbar2.default.Item,
            { align: 'right', onClick: this.handleClose.bind(this) },
            doneText
          )
        ),
        this.renderPickerItem()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var inline = this.props.inline;

      if (inline) {
        return this.renderPicker();
      }
      return _react2.default.createElement(
        'div',
        { className: 'picker-overlay', onClick: this.handleClose.bind(this) },
        this.renderPicker()
      );
    }
  }]);

  return Picker;
}(_react.Component);

Picker.propTypes = {
  inline: _react.PropTypes.bool,
  values: _react.PropTypes.array,
  doneText: _react.PropTypes.string,
  className: _react.PropTypes.string,
  selectValue: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
  onClose: _react.PropTypes.func,
  onHide: _react.PropTypes.func,
  onSelect: _react.PropTypes.func
};
Picker.defaultProps = {
  inline: true,
  doneText: '完成'
};
exports.default = Picker;