import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import ToolbarItem from './ToolbarItem'

export default class Toolbar extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  };

  static Item = ToolbarItem;

  render () {
    const { className, children } = this.props
    const classes = classNames({
      'toolbar': true
    }, className)
    return (
      <div className={classes}>
        {children &&
          <div className='toolbar-inner'>
            {children}
          </div>
        }
      </div>
    )
  }
}
