import React, { Component, PropTypes } from 'react'
import Icon from '../Icon/Icon'
import ItemInner from '../Common/ItemInner'

export default class ListItem extends Component {

  static propTypes = {
    iconName: PropTypes.string,
    icon: PropTypes.node,
    title: PropTypes.string,
    after: PropTypes.node,
    subTitle: PropTypes.node,
    text: PropTypes.node,
    onClick: PropTypes.func,
    href: PropTypes.string,
    className: PropTypes.string
  };

  handleClick (e) {
    const { onClick } = this.props
    if (onClick) {
      onClick(e)
    }
  }

  renderIcon () {
    const { icon, iconName } = this.props
    if (!icon && !iconName) {
      return null
    }
    if (iconName) {
      return (
        <div className='item-media'><Icon name={iconName} /></div>
      )
    }
    if (icon) {
      return (
        <div className='item-media'>{icon}</div>
      )
    }
  }

  render () {
    const { onClick, href, className, subTitle, text, title, after } = this.props
    return (
      <li className={className}>
        {onClick && typeof onClick === 'function' &&
          <a onClick={this.handleClick.bind(this)} className='item-link item-content'>
            {this.renderIcon()}
            <ItemInner {...{title, after, subTitle, text}}/>
          </a>
        }
        {href &&
          <a href={href} className='item-link item-content'>
            {this.renderIcon()}
            <ItemInner {...{title, after, subTitle, text}}/>
          </a>
        }
        {!onClick && !href &&
          <div className='item-content'>
            {this.renderIcon()}
            <ItemInner {...{title, after, subTitle, text}}/>
          </div>
        }
      </li>
    )
  }
}
