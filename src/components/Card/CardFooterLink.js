import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class CardFooterLink extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    placeholder: PropTypes.bool
  };

  static defaultProps = {
    placeholder: false
  };

  render () {
    const { className, children, placeholder, ...props } = this.props
    const classes = classNames({
      'link': true,
      'link-placeholder': !!placeholder
    }, className)
    return (
      <a className={classes} {...props}>{children}</a>
    )
  }
}
