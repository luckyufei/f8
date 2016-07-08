import { Page, TransitionPages, Navbar, Block } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class NavbarView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleBack () {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar
          title='导航条'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block>
          * 导航条一般通过属于Page组件的navbar属性指定，以获得固定页眉的效果'
        </Block>
        <Block title='只有标题的导航条' />
        <Navbar title='我是标题' />
        <Block title='常用的导航方式' />
        <Navbar
          title='我是标题'
          left={{
            iconName: 'back',
            text: '返回'
          }}
        />
        <Block title='两边都有按钮的导航' />
        <Navbar
          title='我是标题'
          left={{
            iconName: 'back',
            text: '返回'
          }}
          right={{
            icon: <span className='iconfont icon-yonghu' />
          }}
        />
        <Block title='多个按钮的导航' />
        <Navbar
          title='我是标题'
          left={{
            iconName: 'back',
            text: '返回'
          }}
          right={[{
            icon: <span className='iconfont icon-yonghu' />
          }, {
            icon: <span className='iconfont icon-biaodan' />
          }]}
        />
      </Page>
    )
  }
}
