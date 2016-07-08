import { Page, TransitionPages, Navbar, Block, Toolbar } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class ToolbarView extends Component {

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
          title='工具栏'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block>
          * 工具栏一般通过属于Page组件的toolbar属性指定，以获得固定页脚的效果'
        </Block>
        <Block title='默认的工具栏（子项目平均分布）' />
        <Toolbar>
          <Toolbar.Item>按钮1</Toolbar.Item>
          <Toolbar.Item>按钮2</Toolbar.Item>
          <Toolbar.Item>按钮3</Toolbar.Item>
        </Toolbar>
        <Block title='单个按钮工具栏（居中对齐）' />
        <Toolbar>
          <Toolbar.Item align='left' />
          <Toolbar.Item align='center'>居中按钮</Toolbar.Item>
          <Toolbar.Item align='right' />
        </Toolbar>
        <Block title='单个按钮工具栏（右对齐）' />
        <Toolbar>
          <Toolbar.Item align='left' />
          <Toolbar.Item align='right'>居右按钮</Toolbar.Item>
        </Toolbar>
        <Block title='自定义工具栏子项目' />
        <Toolbar>
          <span>我是文字</span>
        </Toolbar>
      </Page>
    )
  }
}
