'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TransitionEvent = require('../../utils/TransitionEvent');

var _TransitionEvent2 = _interopRequireDefault(_TransitionEvent);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AccordionItem = function (_Component) {
  _inherits(AccordionItem, _Component);

  function AccordionItem() {
    _classCallCheck(this, AccordionItem);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AccordionItem).apply(this, arguments));
  }

  _createClass(AccordionItem, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var defaultExpanded = this.props.defaultExpanded != null ? this.props.defaultExpanded : this.props.expanded != null ? this.props.expanded : false;
      this.state = {
        expanded: defaultExpanded,
        collapsing: false
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      var willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded;

      if (willExpanded === this.isExpanded()) {
        return;
      }

      var node = this.getCollapsibleDOMNode();
      var dimension = this.dimension();
      var value = '0';

      if (!willExpanded) {
        value = this.getCollapsibleDimensionValue();
      }

      node.style[dimension] = value + 'px';

      this.afterWillUpdate();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      this.checkToggleCollapsing(prevProps, prevState);
      this.checkStartAnimation();
    }
  }, {
    key: 'afterWillUpdate',
    value: function afterWillUpdate() {}
  }, {
    key: 'checkStartAnimation',
    value: function checkStartAnimation() {
      if (!this.state.collapsing) {
        return;
      }

      var node = this.getCollapsibleDOMNode();
      var dimension = this.dimension();
      var value = this.getCollapsibleDimensionValue();

      var result = void 0;

      if (this.isExpanded()) {
        result = value + 'px';
      } else {
        result = '0px';
      }
      node.style[dimension] = result;
    }
  }, {
    key: 'checkToggleCollapsing',
    value: function checkToggleCollapsing(prevProps, prevState) {
      var wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded;
      var isExpanded = this.isExpanded();

      if (wasExpanded !== isExpanded) {
        if (wasExpanded) {
          this.handleCollapse();
        } else {
          this.handleExpand();
        }
      }
    }
  }, {
    key: 'handleExpand',
    value: function handleExpand() {
      var _this2 = this;

      var node = this.getCollapsibleDOMNode();
      var dimension = this.dimension();

      var complete = function complete() {
        _this2.removeEndEventListener(node, complete);
        node.style[dimension] = '';
        _this2.setState({
          collapsing: false
        });
      };

      this.addEndEventListener(node, complete);

      this.setState({
        collapsing: true
      });
    }
  }, {
    key: 'handleCollapse',
    value: function handleCollapse() {
      var _this3 = this;

      var node = this.getCollapsibleDOMNode();
      var complete = function complete() {
        _this3.removeEndEventListener(node, complete);
        _this3.setState({
          collapsing: false
        });
      };

      this.addEndEventListener(node, complete);

      this.setState({
        collapsing: true
      });
    }
  }, {
    key: 'addEndEventListener',
    value: function addEndEventListener(node, complete) {
      _TransitionEvent2.default.on(node, complete);
    }
  }, {
    key: 'removeEndEventListener',
    value: function removeEndEventListener(node, complete) {
      _TransitionEvent2.default.off(node, complete);
    }
  }, {
    key: 'dimension',
    value: function dimension() {
      return typeof this.getCollapsibleDimension === 'function' ? this.getCollapsibleDimension() : 'height';
    }
  }, {
    key: 'isExpanded',
    value: function isExpanded() {
      return this.props.expanded != null ? this.props.expanded : this.state.expanded;
    }
  }, {
    key: 'getCollapsibleClassSet',
    value: function getCollapsibleClassSet(className) {
      var classSet = {};

      if (typeof className === 'string') {
        className.split(' ').forEach(function (subClass) {
          if (subClass) {
            classSet[subClass] = true;
          }
        });
      }

      classSet['collapsing'] = this.state.collapsing;
      classSet['collapse'] = !this.state.collapsing;
      classSet['in'] = this.isExpanded() && !this.state.collapsing;

      return classSet;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.selected = true;

      if (this.props.onSelect) {
        this.props.onSelect(e, this.props.eventKey);
      } else {
        e.preventDefault();
      }

      if (e.selected) {
        this.handleToggle();
      }
    }
  }, {
    key: 'handleToggle',
    value: function handleToggle() {
      this.setState({ expanded: !this.state.expanded });
    }
  }, {
    key: 'getCollapsibleDimensionValue',
    value: function getCollapsibleDimensionValue() {
      return this.refs.panel.scrollHeight;
    }
  }, {
    key: 'getCollapsibleDOMNode',
    value: function getCollapsibleDOMNode() {
      if (!this.mounted || !this.refs || !this.refs.panel) {
        return null;
      }
      return this.refs.panel;
    }
  }, {
    key: 'render',
    value: function render() {
      var className = (0, _classnames2.default)({
        'accordion-item': true,
        'accordion-item-active': this.isExpanded()
      });
      return _react2.default.createElement(
        'li',
        { className: className },
        _react2.default.createElement(
          'div',
          {
            onClick: this.handleClick.bind(this),
            className: 'item-content'
          },
          _react2.default.createElement(
            'div',
            { className: 'item-inner' },
            _react2.default.createElement(
              'div',
              { className: 'item-title' },
              this.props.title
            ),
            _react2.default.createElement(
              'div',
              { className: 'item-after' },
              _react2.default.createElement('span', { className: 'accordion-item-icon' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)('accordion-item-body', this.getCollapsibleClassSet()),
            ref: 'panel'
          },
          _react2.default.createElement(
            'div',
            {
              className: 'accordion-item-content'
            },
            this.props.children
          )
        )
      );
    }
  }]);

  return AccordionItem;
}(_react.Component);

AccordionItem.propTypes = {
  title: _react.PropTypes.node,
  eventKey: _react.PropTypes.any,
  children: _react.PropTypes.node,
  onSelect: _react.PropTypes.func,
  defaultExpanded: _react.PropTypes.bool,
  expanded: _react.PropTypes.bool
};
exports.default = AccordionItem;