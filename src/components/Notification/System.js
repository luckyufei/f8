import React, { Component, PropTypes } from 'react'
import Container from './Container'

export default class System extends Component {

  static propTypes = {
    noAnimation: PropTypes.bool
  };

  static defaultProps = {
    style: {},
    noAnimation: false
  };

  constructor (props) {
    super(props)
    this._uid = 3400
    this.state = {
      notifications: []
    }
  }

  didNotificationRemoved (uid) {
    let notification
    const notifications = this.state.notifications.filter((toCheck) => {
      if (toCheck.uid === uid) {
        notification = toCheck
      }
      return toCheck.uid !== uid
    })

    if (notification && notification.onRemove) {
      notification.onRemove(notification)
    }

    this.setState({ notifications })
  }

  addNotification (notification) {
    const _notification = {
      icon: null,
      title: null,
      subTitle: null,
      message: null,
      autoDismiss: 5,
      dismissible: true,
      ...notification
    }
    const notifications = this.state.notifications

    if (isNaN(_notification.autoDismiss)) {
      throw new Error('\'autoDismiss\' must be a number.')
    }

    _notification.autoDismiss = parseInt(_notification.autoDismiss, 10)

    _notification.uid = _notification.uid || this._uid
    _notification.ref = `notification-${_notification.uid}`
    this._uid += 1

    // do not add if the notification already exists based on supplied uid
    for (let i = 0; i < notifications.length; i++) {
      if (notifications[i].uid === _notification.uid) {
        return false
      }
    }

    notifications.push(_notification)

    if (typeof _notification.onAdd === 'function') {
      notification.onAdd(_notification)
    }

    this.setState({
      notifications: notifications
    })

    return _notification
  }

  removeNotification (notification) {
    const container = this.refs['container']
    Object.keys(container.refs).forEach((_notification) => {
      const uid = notification.uid ? notification.uid : notification
      if (_notification === `notification-${uid}`) {
        container.refs[_notification]._hideNotification()
      }
    })
  }

  render () {
    const { noAnimation } = this.props
    const { notifications } = this.state
    return (
      <div className='notifications list-block media-list' style={{display: notifications.length > 0 ? 'block' : 'none'}} >
        <Container
          ref='container'
          notifications={notifications}
          onRemove={::this.didNotificationRemoved}
          noAnimation={noAnimation}
        />
      </div>
    )
  }
}
