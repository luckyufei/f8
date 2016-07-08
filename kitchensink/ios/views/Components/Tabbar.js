import { Page, TransitionPages, Navbar, Block, Tabbar, Badge } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class TabbarView extends Component {

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
          title='标签栏'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block>
          * 标签栏一般通过属于Page组件的Toolbar属性指定，以获得固定页脚的效果<br />
          * 点击标签栏项目切换页面的效果结构组成方式请参见文档
        </Block>
        <Block title='带图标和文字的标签栏' />
        <Tabbar>
          <Tabbar.Item
            icon={<span className='icon iconfont icon-wenjian' />}
            label='文件'
          />
          <Tabbar.Item
            icon={<span className='icon iconfont icon-daohang' />}
            label='分类'
          />
          <Tabbar.Item
            icon={<span className='icon iconfont icon-tongzhi' />}
            label='通知'
          />
          <Tabbar.Item
            icon={<span className='icon iconfont icon-yonghu' />}
            label='我的'
          />
        </Tabbar>
        <Block title='只有图标标签栏' />
        <Tabbar>
          <Tabbar.Item
            icon={<span className='icon iconfont icon-wenjian' />}
          />
          <Tabbar.Item
            icon={<span className='icon iconfont icon-daohang' />}
          />
          <Tabbar.Item
            icon={<span className='icon iconfont icon-tongzhi' />}
          />
          <Tabbar.Item
            icon={<span className='icon iconfont icon-yonghu' />}
          />
        </Tabbar>
        <Block title='有项目处于活动状态' />
        <Tabbar>
          <Tabbar.Item
            icon={<span className='icon iconfont icon-wenjian' />}
            label='文件'
          />
          <Tabbar.Item
            icon={<span className='icon iconfont icon-daohang' />}
            label='分类'
          />
          <Tabbar.Item
            active
            icon={<span className='icon iconfont icon-tongzhi' />}
            label='通知'
          />
          <Tabbar.Item
            icon={<span className='icon iconfont icon-yonghu' />}
            label='我的'
          />
        </Tabbar>
        <Block title='带角标的标签项目' />
        <Tabbar>
          <Tabbar.Item
            icon={<span className='icon iconfont icon-wenjian' />}
            label='文件'
          />
          <Tabbar.Item
            icon={<span className='icon iconfont icon-daohang' />}
            label='分类'
          />
          <Tabbar.Item
            icon={<span className='icon iconfont icon-tongzhi'><Badge theme='red'>3</Badge></span>}
            label='通知'
          />
          <Tabbar.Item
            active
            icon={<span className='icon iconfont icon-yonghu' />}
            label='我的'
          />
        </Tabbar>
      </Page>
    )
  }
}
