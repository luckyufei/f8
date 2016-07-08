import { Page, TransitionPages, Navbar, Block } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class PageView extends Component {

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
          title='页面'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block highlight>
          <p>页面组件是除了TransitionPages\Pages\View组件外的其它组件的父容器，占据整个屏幕的100%高度和宽度。</p>
          <p>Page页面包含navbar和toolbar两个属性，该属性指定的组件可获得固定在页眉和页脚的效果，同时页面内区域可获得正确的padding高度。</p>
          <p>Page页面默认可随页面内内容的高度而垂直滚动。</p>
        </Block>
      </Page>
    )
  }
}
