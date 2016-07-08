import React, { Component, PropTypes } from 'react'
import NotificationSystem from '../Notification/System'
import ModalSystem from '../Modal/System'
import IndicatorSystem from '../Indicator/System'
import PickerSystem from '../Picker/System'
import { getThemes } from '../../utils/theme'
import classNames from 'classnames'

export default class View extends Component {

  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.oneOf(getThemes()),
    className: PropTypes.string
  };

  static childContextTypes = {
    ui: PropTypes.object
  };

  constructor (props) {
    super(props)
    this._tabbar = 'none'
  }

  getChildContext () {
    return {
      ui: {
        addNotification: (notification) => { this.addNotification(notification) },
        setTabbar: (type) => { this.setTabbar(type) },
        getTabbar: () => { return this.getTabbar() },
        showPreloader: () => { this.showPreloader() },
        hidePreloader: () => { this.hidePreloader() },
        showModal: (modal) => { this.showModal(modal) },
        hideModal: () => { this.hideModal() },
        showPicker: (picker) => { this.showPicker(picker) }
      }
    }
  }

  setTabbar (type) {
    this._type = type
  }

  getTabbar () {
    return this._type
  }

  addNotification (notification) {
    this.refs['notificationSystem'].addNotification(notification)
  }

  showPreloader () {
    this.refs['indicatorSystem'].showPreloader()
  }

  hidePreloader () {
    this.refs['indicatorSystem'].hidePreloader()
  }

  showModal (modal) {
    this.refs['modalSystem'].showModal(modal)
  }

  hideModal () {
    this.refs['modalSystem'].hideModal()
  }

  showPicker (picker) {
    this.refs['pickerSystem'].showPicker(picker)
  }

  render () {
    const { children, className, theme } = this.props
    const classes = classNames({
      'view': true,
      [`theme-${theme}`]: theme
    }, className)
    return (
      <div className='wrapper'>
        <div className='views'>
          <div className={classes}>
            {children}
          </div>
        </div>
        <NotificationSystem ref='notificationSystem' />
        <ModalSystem ref='modalSystem' />
        <IndicatorSystem ref='indicatorSystem' />
        <PickerSystem ref='pickerSystem' />
      </div>
    )
  }
}
