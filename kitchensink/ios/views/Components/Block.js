import { Page, TransitionPages, Navbar, Block } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class BlockView extends Component {

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
          title='区块'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block highlight>
          我是一个不含标题高亮区块的内容
        </Block>
        <Block highlight title='我是一个高亮区块的标题'>
          我是一个高亮区块的内容
        </Block>
        <Block>
          我是一个不含标题不反白区块的内容
        </Block>
        <Block title='我是不反白区块的标题'>
          我是一个不反白区块的内容
        </Block>
        <Block highlight inset>
          我是一个不含标题缩进高亮区块的内容
        </Block>
        <Block highlight inset title='我是一个缩进高亮区块的标题'>
          我是一个缩进高亮区块的内容
        </Block>
      </Page>
    )
  }
}
