import { Page, TransitionPages, Navbar, Block } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class Pages extends Component {

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
          title='静态页面组'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block highlight>
          <p>静态页面组属于wrapper组件，主要用来处理项目没有使用TransitionPages组件的情况或希望自定义实现页面切换动画时作为容器组件保持css选择器的路径完整性的问题。</p>
        </Block>
      </Page>
    )
  }
}
