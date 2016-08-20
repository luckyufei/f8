import React, { Component, PropTypes } from 'react'
import ItemInner from '../Common/ItemInner'
import Icon from '../Icon/Icon'

export default class CheckField extends Component {

  static propTypes = {
    title: PropTypes.string,
    after: PropTypes.node,
    subTitle: PropTypes.string,
    text: PropTypes.node,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    check: PropTypes.bool,
    media: PropTypes.node, 
    onChange: PropTypes.func
  };

  static defaultProps = {
    check: false
  };

  handleChange(e) {
    const { onChange } = this.props
    if (onChange) {
      onChange(e)
    }
  }

  render() {
    const { name, value, title, after, text, media, subTitle, check, ...props } = this.props
    return (
      <li>
        <label className='label-checkbox item-content'>
          <input
            type='checkbox' {...props} name={name} value={value} checked={!!check} onChange={this.handleChange.bind(this) } />
          <div className='item-media'>
          { media ? media : <Icon name='form-checkbox' />}
          </div>
          <ItemInner {...{title, after, subTitle, text}}/>
        </label>
      </li>
    )
  }
}
