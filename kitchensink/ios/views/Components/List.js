import { Page, TransitionPages, Navbar, List, Block, Badge, SwitchField } from 'jmui'
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
          title='List View'
          left={{
            iconName: 'back',
            text: 'Back',
            onClick: ::this.handleBack
          }}
      />}>
        <Block>
          Framework8 allows you to be flexible with list views (table views). You can make them as navigation menus, you can use there icons, inputs, and any elements inside of the list, and even make them nested:
        </Block>
        <Block title='DATA LIST, WITH ICONS' />
        <List>
          <List.Item
            icon={<span className='iconfont icon-anniu' />}
            title='Button'
            after='Button'
          />
          <List.Item
            icon={<span className='iconfont icon-tongzhi' />}
            title='Notice'
            after={<Badge theme='gray'>2</Badge>}
          />
          <List.Item
            icon={<span className='iconfont icon-wenjian' />}
            title='File'
            after='New File'
          />
        </List>
        <Block title='LINKS' />
        <List>
          <List.Item
            icon={<span className='iconfont icon-anniu' />}
            title='Button'
            after='Button'
            onClick={::this.handleClick}
          />
          <List.Item
            icon={<span className='iconfont icon-tongzhi' />}
            title='Notice'
            after={<Badge theme='green'>2</Badge>}
            onClick={::this.handleClick}
          />
          <List.Item
            icon={<span className='iconfont icon-wenjian' />}
            title='File'
            after='New File'
            onClick={::this.handleClick}
          />
        </List>

        <Block title='LINKS, NO ICONS WITH DIVIDER' />
        <List>
          <List.Item
            title='Button'
            onClick={::this.handleClick}
          />
          <List.Item
            title='Notice'
            onClick={::this.handleClick}
          />
          <List.Divider title='Divider here' />
          <List.Item
            title='File'
            onClick={::this.handleClick}
          />
        </List>
        <Block title='GROUPED WITH STICKY TITLES' />
        <List>
          <List.Group title='Gruop 1'>
            <List.Item
              icon={<span className='iconfont icon-anniu' />}
              title='Button'
              after='Button'
              onClick={::this.handleClick}
            />
            <List.Item
              icon={<span className='iconfont icon-tongzhi' />}
              title='Notice'
              after={<Badge theme='green'>2</Badge>}
              onClick={::this.handleClick}
            />
          </List.Group>
          <List.Group title='Group 2'>
            <List.Item
              icon={<span className='iconfont icon-wenjian' />}
              title='File'
              after='New File'
              onClick={::this.handleClick}
            />
            <List.Item
              icon={<span className='iconfont icon-tongzhi' />}
              title='Notice'
              after={<Badge theme='orange'>99</Badge>}
            />
          </List.Group>
        </List>
        <Block title='MIXED AND NESTED' />
        <List inset>
          <List.Item
            icon={<span className='iconfont icon-anniu' />}
            title='Button'
            after='Button'
            onClick={::this.handleClick}
          />
          <List.Item
            icon={<span><span className='iconfont icon-anniu' /><span className='iconfont icon-tongzhi' /></span>}
            title='Two icons here'
            after={<Badge theme='green'>2</Badge>}
            onClick={::this.handleClick}
          />
          <List.Item
            title='No icons here'
          />
          <List block={false} >
            <List.Item
              icon={<span className='iconfont icon-anniu' />}
              title='Button'
              after='Button'
              onClick={::this.handleClick}
            />
            <List.Item
              icon={<span><span className='iconfont icon-anniu' /><span className='iconfont icon-tongzhi' /></span>}
              title='Two icons here'
              after={<Badge theme='green'>2</Badge>}
              onClick={::this.handleClick}
            />
            <List.Item
              title='No icons here'
            />
            <List.Item
              icon={<span className='iconfont icon-wenjian' />}
              title='File'
              after='New File'
              onClick={::this.handleClick}
            />
            <List.Item
              icon={<span className='iconfont icon-tongzhi' />}
              title='Notice'
              onClick={::this.handleClick}
            />
          </List>
          <List.Item
            icon={<span className='iconfont icon-wenjian' />}
            title='File'
            after='New File'
            onClick={::this.handleClick}
          />
          <List.Item
            icon={<span className='iconfont icon-tongzhi' />}
            title='Notice'
            after={<Badge theme='orange'>99</Badge>}
            onClick={::this.handleClick}
          />
          <List.Item
            title='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum voluptate tempore veniam natus, suscipit corporis quos temporibus recusandae est, reiciendis nulla dignissimos aliquam! Natus, commodi incidunt culpa, unde non facere.'
          />
        </List>
      </Page>
    )
  }
}
