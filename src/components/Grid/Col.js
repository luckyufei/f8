import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

const sizes = [5, 10, 15, 20, 25, 30, 33, 35, 40, 45, 50, 55, 60, 65, 66, 70, 75, 80, 85, 90, 95, 100]

export default class Col extends Component {

  static propTypes = {
    size: PropTypes.oneOf(sizes),
    tabletSize: PropTypes.oneOf(sizes),
    auto: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string
  };

  render () {
    const { size, tabletSize, auto, children, className, ...props } = this.props
    const classes = classNames({
      'col-auto': auto,
      [`col-${size}`]: !auto && size,
      [`tablet-${tabletSize}`]: !auto && tabletSize
    }, className)
    return (
      <div className={classes} {...props}>{children}</div>
    )
  }
}
