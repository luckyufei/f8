import { Page, TransitionPages, Navbar, List } from 'jmui'
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

  handleRight () {
    this.context.router.push('/components/transitionpagesright')
  }

  handleUp () {
    this.context.router.push({
      pathname: '/components/transitionpagesup',
      state: TransitionPages.getState('up')
    })
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar
          title='动画页面组'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <List>
          <List.Item
            onClick={::this.handleRight}
            title='向右Slide切换新页面' />
          <List.Item
            onClick={::this.handleUp}
            title='向上Slide弹出新页面' />
        </List>
      </Page>
    )
  }
}
