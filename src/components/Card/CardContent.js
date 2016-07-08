import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class CardContent extends Component {

  static propTypes = {
    children: PropTypes.node,
    cover: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    cover: false
  };

  render () {
    const { children, cover, className, ...props } = this.props
    const classes = classNames('card-content', className)
    return (
      <div className={classes} {...props}>
        {cover && children}
        {!cover &&
          <div className='card-content-inner'>{children}</div>
        }
      </div>
    )
  }
}
