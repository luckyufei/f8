import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class Icon extends Component {

  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string
  };

  render () {
    const { name, className, ...props } = this.props
    const classes = classNames({
      'icon-jmui': true,
      [`icon-jmui-${name}`]: name
    }, className)
    return (
      <i className={classes} {...props} />
    )
  }
}
