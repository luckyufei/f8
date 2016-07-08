import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class ToolbarItem extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    align: PropTypes.oneOf(['left', 'right', 'center'])
  };

  render () {
    const { className, children, align, ...props } = this.props
    const classes = classNames('link', className)
    if (align) {
      return (
        <div className={align}>
          <a className={classes} {...props}>{children}</a>
        </div>
      )
    }
    return (
      <a className={classes} {...props}>{children}</a>
    )
  }
}
