import React, { Component, PropTypes } from 'react'

export default class Pages extends Component {

  static propTypes = {
    children: PropTypes.node
  };

  render () {
    return (
      <div className='pages'>{this.props.children}</div>
    )
  }
}
