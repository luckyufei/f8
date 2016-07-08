import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Image extends Component {

  static propTypes = {
    responsive: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    responsive: true
  };

  render () {
    const { responsive, className, ...props } = this.props
    const classes = classNames({
      'img-responsive': !!responsive
    }, className)
    return (<img {...props} className={classes} />)
  }
}
