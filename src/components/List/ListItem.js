import React, { Component, PropTypes } from 'react'
import Icon from '../Icon/Icon'

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

  renderInner () {
    const { subTitle, text, title, after } = this.props
    return (
      <div className='item-inner'>
        {(subTitle || text) &&
          <div className='item-title-row'>
            {title &&
              <div className='item-title'>{title}</div>
            }
            {after &&
              <div className='item-after'>{after}</div>
            }
          </div>
        }
        {!subTitle && !text && title &&
          <div className='item-title'>{title}</div>
        }
        {!subTitle && !text && after &&
          <div className='item-after'>{after}</div>
        }
        {subTitle &&
          <div className='item-subtitle'>{subTitle}</div>
        }
        {text &&
          <div className='item-text'>{text}</div>
        }
      </div>
    )
  }

  render () {
    const { onClick, href, className } = this.props
    return (
      <li className={className}>
        {onClick && typeof onClick === 'function' &&
          <a onClick={::this.handleClick} className='item-link item-content'>
            {this.renderIcon()}
            {this.renderInner()}
          </a>
        }
        {href &&
          <a href={href} className='item-link item-content'>
            {this.renderIcon()}
            {this.renderInner()}
          </a>
        }
        {!onClick && !href &&
          <div className='item-content'>
            {this.renderIcon()}
            {this.renderInner()}
          </div>
        }
      </li>
    )
  }
}
