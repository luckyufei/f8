import React, { Component, PropTypes } from 'react'

export default class ListDivider extends Component {

  static propTypes = {
    title: PropTypes.string
  };

  render () {
    const { title } = this.props
    return (
      <li className='item-divider'>{title}</li>
    )
  }
}
