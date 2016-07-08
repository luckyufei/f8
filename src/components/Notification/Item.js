import Timer from '../../utils/Timer'
import { whichTransitionEvent } from '../../utils/transition'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

export default class Item extends Component {

  static propTypes = {
    notification: PropTypes.object,
    onRemove: PropTypes.func,
    noAnimation: PropTypes.bool
  };

  static defaultProps = {
    noAnimation: false,
    onRemove: () => {}
  };

  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      removed: false
    }
  }

  componentDidMount () {
    const transitionEvent = whichTransitionEvent()
    const { notification } = this.props
    const element = ReactDOM.findDOMNode(this)
    this._height = element.offsetHeight
    this._isMounted = true

    if (!this._noAnimation) {
      if (transitionEvent) {
        element.addEventListener(transitionEvent, ::this.onTransitionEnd)
      } else {
        this._noAnimation = true
      }
    }
    if (notification.autoDismiss) {
      this._notificationTimer = new Timer(() => {
        this.hideNotification()
      }, notification.autoDismiss * 1000)
    }
    this.showNotification()
  }

  componentWillUnmount () {
    const element = ReactDOM.findDOMNode(this)
    const transitionEvent = whichTransitionEvent()
    element.removeEventListener(transitionEvent, ::this.onTransitionEnd)
    this._isMounted = false
  }

  hideNotification () {
    if (this._notificationTimer) {
      this._notificationTimer.clear()
    }

    if (this._isMounted) {
      this.setState({
        visible: false,
        removed: true
      })
    }

    if (this._noAnimation) {
      this.removeNotification()
    }
  }

  removeNotification () {
    const { notification, onRemove } = this.props
    onRemove(notification.uid)
  }

  dismiss () {
    if (!this.props.notification.dismissible) {
      return
    }
    this.hideNotification()
  }

  showNotification () {
    setTimeout(() => {
      if (this._isMounted) {
        this.setState({
          visible: true
        })
      }
    }, 50)
  }

  onTransitionEnd () {
    if (this._removeCount > 0) return
    if (this.state.removed) {
      this._removeCount++
      this.removeNotification()
    }
  }

  render () {
    const { notification } = this.props
    const { visible } = this.state
    const classes = classNames({
      'notification-item': true,
      'notification-hidden': !visible
    })
    return (
      <li className={classes}>
        <div className='item-content'>
          {notification.icon &&
            <div className='item-media'>{notification.icon}</div>
          }
          <div className='item-inner'>
            <div className='item-title-row'>
              {notification.title &&
                <div className='item-title'>{notification.title}</div>
              }
              <div className='item-after'>
                <a onClick={::this.dismiss} className='close-notification'>
                  <span></span>
                </a>
              </div>
            </div>
            {notification.subTitle &&
              <div className='item-subtitle'>{notification.subTitle}</div>
            }
            {notification.message &&
              <div className='item-text'>{notification.message}</div>
            }
          </div>
        </div>
      </li>
    )
  }
}
