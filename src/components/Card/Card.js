import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import CardHeader from './CardHeader'
import CardContent from './CardContent'
import CardFooter from './CardFooter'

export default class Card extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  };

  static Header = CardHeader;
  static Content = CardContent;
  static Footer = CardFooter;

  render () {
    const { children, className, ...props } = this.props
    const classes = classNames('card', className)
    return (
      <div className={classes} {...props}>
        {children}
      </div>
    )
  }
}
