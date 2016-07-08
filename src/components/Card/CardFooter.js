import React, { Component, PropTypes } from 'react'
import CardFooterLink from './CardFooterLink'
import classNames from 'classnames'

export default class CardFooter extends Component {

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  static Link = CardFooterLink;

  render () {
    const { className, children, ...props } = this.props
    const classes = classNames('card-footer', className)
    return (
      <div className={classes} {...props}>{this.props.children}</div>
    )
  }
}
