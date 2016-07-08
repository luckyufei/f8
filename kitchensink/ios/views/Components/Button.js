import { Page, TransitionPages, Navbar, Block, Button } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class ButtonView extends Component {

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
          title='按钮'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block>
          <Button>我是一个默认按钮</Button>
          <p></p>
          <Button active>我是一个处于活动状态按钮</Button>
          <p></p>
          <Button disable>我是一个被禁用的按钮</Button>
          <p></p>
          <Button fill>我是一个被填充了的按钮</Button>
          <p></p>
          <Button big>我是一个大按钮</Button>
          <p></p>
          <Button round>我是一个更圆的按钮</Button>
          <p></p>
          <Button fill theme='green'>我是一个绿色的按钮</Button>
          <p></p>
          <Button fill theme='red'>我是一个红色的按钮</Button>
          <p></p>
          <Button fill theme='lightblue'>我是一个天蓝色的按钮</Button>
          <p></p>
          <Button fill theme='yellow'>我是一个黄色的按钮</Button>
          <p></p>
          <Button fill theme='pink'>我是一个粉红色的按钮</Button>
          <p></p>
          <Button fill theme='black'>我是一个黑色的按钮</Button>
          <p></p>
          <Button fill theme='gray'>我是一个灰色的按钮</Button>
          <p></p>
          <Button fill theme='orange'>我是一个橙色的按钮</Button>
          <p></p>
          <Button fill big theme='green'>我是一个绿色的大按钮</Button>
          <p></p>
          <Button fill big theme='red'>我是一个红色的大按钮</Button>
          <p></p>
          <Button fill big theme='lightblue'>我是一个天蓝色的大按钮</Button>
          <p></p>
          <Button fill big theme='yellow'>我是一个黄色的大按钮</Button>
          <p></p>
          <Button fill big theme='pink'>我是一个粉红色的大按钮</Button>
          <p></p>
          <Button fill big theme='black'>我是一个黑色的大按钮</Button>
          <p></p>
          <Button fill big theme='gray'>我是一个灰色的大按钮</Button>
          <p></p>
          <Button fill big theme='orange'>我是一个橙色的大按钮</Button>
        </Block>
      </Page>
    )
  }
}
