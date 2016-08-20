import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Image extends Component {

  static propTypes = {
    responsive: PropTypes.bool,
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  };

  static defaultProps = {
    responsive: true
  };

  render () {
    const { responsive, className, width, ...props } = this.props
    const classes = classNames({
      'img-responsive': !width  && !!responsive
    }, className)
    return (<img width={width} {...props} className={classes} />)
  }
}
