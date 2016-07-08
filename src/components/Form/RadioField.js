import React, { Component, PropTypes } from 'react'

export default class RadioField extends Component {

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    after: PropTypes.node,
    subTitle: PropTypes.string,
    text: PropTypes.node,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    check: PropTypes.bool,
    onChange: PropTypes.func
  };

  static defaultProps = {
    check: false
  };

  handleChange (e) {
    const { onChange } = this.props
    if (onChange) {
      onChange(e)
    }
  }

  render () {
    const { name, icon, value, title, after, text, subTitle, check, ...props } = this.props
    return (
      <li>
        <label className='label-radio item-content'>
          <input type='radio' {...props} name={name} value={value} checked={!!check} onChange={::this.handleChange} />
          {icon &&
            <div className='item-media'>{icon}</div>
          }
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
        </label>
      </li>
    )
  }
}
