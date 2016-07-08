import { Page, TransitionPages, Navbar, List, Block, Badge } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class ListView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleBack () {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  handleClick () {
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar
          title='表格列表'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block title='全元素表格列表' />
        <List label='我是列表后的文字'>
          <List.Item
            icon={<span className='iconfont icon-anniu' />}
            title='按钮'
            after='Button'
          />
          <List.Item
            icon={<span className='iconfont icon-tongzhi' />}
            title='通知'
            after={<Badge theme='green'>2</Badge>}
          />
          <List.Item
            icon={<span className='iconfont icon-wenjian' />}
            title='文件'
            after='新建文件'
          />
        </List>
        <Block title='带链接的表格列表' />
        <List>
          <List.Item
            icon={<span className='iconfont icon-anniu' />}
            title='按钮'
            after='Button'
            onClick={::this.handleClick}
          />
          <List.Item
            icon={<span className='iconfont icon-tongzhi' />}
            title='通知'
            after={<Badge theme='green'>2</Badge>}
            onClick={::this.handleClick}
          />
          <List.Item
            icon={<span className='iconfont icon-wenjian' />}
            title='文件'
            after='新建文件'
            onClick={::this.handleClick}
          />
        </List>
        <Block title='纯文字表格列表' />
        <List>
          <List.Item
            title='按钮'
            after='Button'
            onClick={::this.handleClick}
          />
          <List.Item
            title='通知'
            after={<Badge theme='green'>2</Badge>}
          />
          <List.Item
            title='文件'
            after='新建文件'
            onClick={::this.handleClick}
          />
        </List>
        <Block title='带无敌分割线的表格列表' />
        <List>
          <List.Item
            icon={<span className='iconfont icon-anniu' />}
            title='按钮'
            after='Button'
            onClick={::this.handleClick}
          />
          <List.Item
            icon={<span className='iconfont icon-tongzhi' />}
            title='通知'
            after={<Badge theme='green'>2</Badge>}
            onClick={::this.handleClick}
          />
          <List.Divider title='我是无敌分割线' />
          <List.Item
            icon={<span className='iconfont icon-wenjian' />}
            title='文件'
            after='新建文件'
            onClick={::this.handleClick}
          />
        </List>
        <Block title='分组表格列表' />
        <List>
          <List.Group title='我是第一组'>
            <List.Item
              icon={<span className='iconfont icon-anniu' />}
              title='按钮'
              after='Button'
              onClick={::this.handleClick}
            />
            <List.Item
              icon={<span className='iconfont icon-tongzhi' />}
              title='通知'
              after={<Badge theme='green'>2</Badge>}
              onClick={::this.handleClick}
            />
          </List.Group>
          <List.Group title='我是第二组'>
            <List.Item
              icon={<span className='iconfont icon-wenjian' />}
              title='文件'
              after='新建文件'
              onClick={::this.handleClick}
            />
            <List.Item
              icon={<span className='iconfont icon-tongzhi' />}
              title='通知'
              after={<Badge theme='orange'>99</Badge>}
            />
          </List.Group>
        </List>
        <Block title='内联表格列表' />
        <List inset>
          <List.Item
            title='按钮'
            after='Button'
            onClick={::this.handleClick}
          />
          <List.Item
            title='通知'
            after={<Badge theme='green'>2</Badge>}
          />
          <List.Item
            title='文件'
            after='新建文件'
            onClick={::this.handleClick}
          />
        </List>
      </Page>
    )
  }
}
