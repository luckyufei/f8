import React, { Component, PropTypes } from 'react'

export default class ListGroup extends Component {

  static propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
  };

  render () {
    const { title, children } = this.props
    return (
      <div className='list-group'>
        <ul>
          {title &&
            <li className='list-group-title'>{title}</li>
          }
          {children}
        </ul>
      </div>
    )
  }
}
