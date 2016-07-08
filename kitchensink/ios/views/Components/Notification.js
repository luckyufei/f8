import { Page, TransitionPages, Navbar, Block, Button } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class NotificationView extends Component {

  static contextTypes = {
    router: PropTypes.object,
    ui: PropTypes.object
  };

  handleBack () {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  handleNotification1 () {
    const { ui } = this.context
    ui.addNotification({
      icon: (<span className='iconfont icon-tongzhi'></span>),
      title: '提示',
      message: '本通知在5秒后自动消失'
    })
  }

  handleNotification2 () {
    const { ui } = this.context
    ui.addNotification({
      title: '提示',
      message: '本通知在5秒后自动消失'
    })
  }

  handleNotification3 () {
    const { ui } = this.context
    ui.addNotification({
      icon: (<span className='iconfont icon-tongzhi'></span>),
      autoDismiss: 10,
      title: '提示',
      message: '本通知在10秒后自动消失'
    })
  }

  handleNotification4 () {
    const { ui } = this.context
    ui.addNotification({
      icon: (<span className='iconfont icon-tongzhi'></span>),
      autoDismiss: 0,
      title: '提示',
      message: '本通知不会自动消失，必须点击右上角关闭按钮'
    })
  }

  handleCallback () {
    alert('通知消失了')
  }

  handleNotification5 () {
    const { ui } = this.context
    ui.addNotification({
      icon: (<span className='iconfont icon-tongzhi'></span>),
      title: '提示',
      message: '本通知5秒后自动消失，消失后有回调',
      onRemove: ::this.handleCallback
    })
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar
          title='通知'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block title='普通通知'>
          <Button fill big theme='green' onClick={::this.handleNotification1}>点我</Button>
        </Block>
        <Block title='不带图标的通知'>
          <Button fill big theme='blue' onClick={::this.handleNotification2}>点我</Button>
        </Block>
        <Block title='10秒才消失的通知'>
          <Button fill big theme='pink' onClick={::this.handleNotification3}>点我</Button>
        </Block>
        <Block title='不自动消失的通知'>
          <Button fill big theme='orange' onClick={::this.handleNotification4}>点我</Button>
        </Block>
        <Block title='消失后有回调的通知'>
          <Button fill big theme='red' onClick={::this.handleNotification5}>点我</Button>
        </Block>
        <Block title='多个通知自动叠加，试试在消失前连续点击' />
      </Page>
    )
  }
}
