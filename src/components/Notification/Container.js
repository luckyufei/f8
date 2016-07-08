import React, { Component, PropTypes } from 'react'
import Item from './Item'

export default class Container extends Component {
  static propTypes = {
    notifications: PropTypes.array.isRequired,
    onRemove: PropTypes.func,
    noAnimation: PropTypes.bool
  };

  render () {
    const { notifications, onRemove, noAnimation } = this.props
    return (
      <ul>
        {notifications.map((notification) => (
          <Item
            ref={`notification-${notification.uid}`}
            key={notification.uid}
            notification={notification}
            onRemove={onRemove}
            noAnimation={noAnimation}
          />
        ))}
      </ul>
    )
  }
}
