'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemInner = function ItemInner(_ref) {
  var title = _ref.title;
  var after = _ref.after;
  var subTitle = _ref.subTitle;
  var text = _ref.text;

  return _react2.default.createElement(
    'div',
    { className: 'item-inner' },
    (subTitle || text) && _react2.default.createElement(
      'div',
      { className: 'item-title-row' },
      title && _react2.default.createElement(
        'div',
        { className: 'item-title' },
        title
      ),
      after && _react2.default.createElement(
        'div',
        { className: 'item-after' },
        after
      )
    ),
    !subTitle && !text && title && _react2.default.createElement(
      'div',
      { className: 'item-title' },
      title
    ),
    !subTitle && !text && after && _react2.default.createElement(
      'div',
      { className: 'item-after' },
      after
    ),
    subTitle && _react2.default.createElement(
      'div',
      { className: 'item-subtitle' },
      subTitle
    ),
    text && _react2.default.createElement(
      'div',
      { className: 'item-text' },
      text
    )
  );
};

ItemInner.propTypes = {
  title: _react.PropTypes.string,
  after: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.node]),
  subTitle: _react.PropTypes.string,
  text: _react.PropTypes.string
};

exports.default = ItemInner;