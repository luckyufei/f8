import React, {Component, PropTypes} from 'react'
import {Page, TransitionPages, List, Navbar, Block} from 'jmui'

export default class Form extends Component {

  static propTypes = {}

  static contextTypes = {
    router: PropTypes.object,
  }

  handleJump(pathname) {
    this.context.router.push(pathname)
  }

  handleBack() {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  render() {
    return (
      <Page
        fix
        navbar={<Navbar
          title='NavBars and ToolBars'
          left={{
            iconName: 'back',
            text: 'Back',
            onClick: this.handleBack.bind(this)
          }}
          />}
        >
        <List title='Framework7 Kitchen Sink'>
          <List.Group>
            <List.Item
              icon={<span className='iconfont icon-folding' />}
              title='Deep Dynamic Navbar'
              onClick={this.handleJump.bind(this, '/components/deep-dynamic-navbar') }
              />
            <List.Item
              icon={<span className='iconfont icon-danxuan' />}
              title='Hide Navbar & Toolbar'
              onClick={this.handleJump.bind(this, '/components/hide-navbar') }
              />
            <List.Item
              icon={<span className='iconfont icon-duoxuan12px' />}
              title='Nav Bar'
              onClick={this.handleJump.bind(this, '/components/navbar') }
              />
            <List.Item
              icon={<span className='iconfont icon-duoxuan12px' />}
              title='ToolBar'
              onClick={this.handleJump.bind(this, '/components/toolbar') }
              />  
            <List.Item
              icon={<span className='iconfont icon-duoxuan12px' />}
              title='Tab Bar'
              onClick={this.handleJump.bind(this, '/components/tabbar') }
              />
            <List.Item
              icon={<span className='iconfont icon-anniu' />}
              title='Tab Bar With Labels'
              onClick={this.handleJump.bind(this, '/components/tarbar-labels') }
              />
            <List.Item
              icon={<span className='iconfont icon-jiahao' />}
              title='Hide Bars On Scroll'
              onClick={this.handleJump.bind(this, '/components/hide-bar-scroll') }
              />
            <List.Item
              icon={<span className='iconfont icon-xuanze' />}
              title='Sub Navbar'
              onClick={this.handleJump.bind(this, '/components/sub-navbar') }
              />
          </List.Group>
        </List>
      </Page>
    )
  }
}
