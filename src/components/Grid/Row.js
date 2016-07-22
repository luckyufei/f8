import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Row extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    gutter: PropTypes.bool,
    buttons: PropTypes.bool,
  };

  static defaultProps = {
    gutter: true
  };

  render() {
    const { className, children, buttons, gutter, ...props } = this.props
    const classes = classNames({
      'row': !buttons,
      'buttons-row': buttons,
      'no-gutter': !gutter
    }, className)
    return (
      <div className={classes} {...props}>{children}</div>
    )
  }
}
