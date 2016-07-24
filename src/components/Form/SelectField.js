import React, { Component, PropTypes } from 'react'

export default class SelectField extends Component {

  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    options: PropTypes.array,
    value: PropTypes.string
  };

  static defaultProps = {
    options: [],
  }

  renderIcon() {
    const { icon } = this.props
    if (icon) {
      return (
        <div className='item-media'>{icon}</div>
      )
    }
    return null
  }

  renderLabel() {
    const { label } = this.props
    if (label) {
      return (
        <div className='item-title label'>{label}</div>
      )
    }
    return null
  }

  renderSelect() {
    let { options, ...props } = this.props;
    options = options.map(option => (typeof option === 'object' ? option : { label: option, value: option }));
    return (
      <select {...props}>
        {options.map(({label, value}, i) => <option value={value} key={i}>{label}</option>) }
      </select>
    )
  }

  render() {
    return (
      <li>
        <div className='item-content'>
          {this.renderIcon() }
          <div className='item-inner'>
            {this.renderLabel() }
            <div className='item-input'>
              {this.renderSelect() }
            </div>
          </div>
        </div>
      </li>
    )
  }
}
