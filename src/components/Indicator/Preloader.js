import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Preloader extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    revert: PropTypes.bool,
    big: PropTypes.bool,
    hCenter: PropTypes.bool,
    vCenter: PropTypes.bool
  };

  static defaultProps = {
    revert: false,
    big: false,
    hCenter: true,
    vCenter: false
  };

  render () {
    const { children, className, revert, big, hCenter, vCenter, ...props } = this.props
    const classes = classNames({
      'h-center': !!hCenter,
      'v-center': !!vCenter,
      'text-center': true
    }, className)
    const classesPreloader = classNames({
      'preloader': true,
      'preloader-white': !!revert,
      'preloader-big': !!big
    })
    return (
      <div className={classes} {...props}>
        <span className={classesPreloader}></span>
        {children}
      </div>
    )
  }
}
