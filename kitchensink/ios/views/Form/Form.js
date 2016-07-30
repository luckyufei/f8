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
          title='Form'
          left={{
            iconName: 'back',
            text: 'Back',
            onClick: this.handleBack.bind(this)
          }}
          />}
        >
        <Block>
          Framework7 provides very flexible forms layout, you can use it with/out icons, with/out labels, or mixed layouts.
        </Block>
        <List title='Framework7 Kitchen Sink'>
          <List.Group>
            <List.Item
              icon={<span className='iconfont icon-folding' />}
              title='Form Elements'
              onClick={this.handleJump.bind(this, '/components/formelems') }
              />
            <List.Item
              icon={<span className='iconfont icon-danxuan' />}
              title='Radios'
              after='Radios'
              onClick={this.handleJump.bind(this, '/components/radiofield') }
              />
            <List.Item
              icon={<span className='iconfont icon-duoxuan12px' />}
              title='Checkboxes'
              after='Checkboxes'
              onClick={this.handleJump.bind(this, '/components/checkfield') }
              />
            <List.Item
              icon={<span className='iconfont icon-anniu' />}
              title='Buttons'
              after='Buttons'
              onClick={this.handleJump.bind(this, '/components/button') }
              />
            <List.Item
              icon={<span className='iconfont icon-jiahao' />}
              title='Number field'
              after='Number field'
              onClick={this.handleJump.bind(this, '/components/numberfield') }
              />
            <List.Item
              icon={<span className='iconfont icon-xuanze' />}
              title='Picker'
              after='Picker'
              onClick={this.handleJump.bind(this, '/components/picker') }
              />
          </List.Group>
        </List>
      </Page>
    )
  }
}
