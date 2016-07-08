import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { getThemes } from '../../utils/theme'

export default class CardHeader extends Component {

  static propTypes = {
    children: PropTypes.node,
    cover: PropTypes.bool,
    className: PropTypes.string,
    theme: PropTypes.oneOf(getThemes())
  };

  static defaultProps = {
    cover: false
  };

  render () {
    const { children, cover, className, theme, ...props } = this.props
    const classes = classNames({
      'card-header': true,
      'no-border': !!cover,
      [`color-${theme}`]: theme
    }, className)
    return (
      <div className={classes} {...props}>
        {children}
      </div>
    )
  }
}
