import React, { Component, PropTypes } from 'react'

export default class TextField extends Component {

  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    type: PropTypes.oneOf(['text', 'password', 'email', 'tel', 'url', 'date', 'number', 'datatime-local']),
    placeholder: PropTypes.string
  };

  static defaultProps = {
    type: 'text'
  };

  renderIcon () {
    const { icon } = this.props
    if (icon) {
      return (
        <div className='item-media'>{icon}</div>
      )
    }
    return null
  }

  renderLabel () {
    const { label } = this.props
    if (label) {
      return (
        <div className='item-title label'>{label}</div>
      )
    }
    return null
  }

  renderInput () {
    const { type, placeholder, ...props } = this.props
    return (
      <input type={type} placeholder={placeholder} {...props} />
    )
  }

  render () {
    return (
      <li>
        <div className='item-content'>
          {this.renderIcon()}
          <div className='item-inner'>
            {this.renderLabel()}
            <div className='item-input'>
              {this.renderInput()}
            </div>
          </div>
        </div>
      </li>
    )
  }
}
