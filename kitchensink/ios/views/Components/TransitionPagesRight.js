import { Page, TransitionPages, Navbar, Block } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class TransitionPagesRight extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleBack () {
    this.context.router.push({
      pathname: '/components/transitionpages',
      state: TransitionPages.getState()
    })
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar
          title='动画页面组－右'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block highlight>
          <h2>爱是一个人 - 李行亮</h2>
          <p>
            床头灯还留一盏<br />
            我试着赶走孤单<br />
            以为很简单<br />
            很快就能够习惯<br />
            连忘记都变成一种期盼<br />
            看窗外雨都停了<br />
            怎么也睡不着了<br />
            想要变勇敢<br />
            就算让自己难堪<br />
            习惯了顺其自然<br />
            不知算不算太晚<br />
            想念一个人<br />
            丢了自己的魂<br />
            她说给我温暖<br />
            永远爱我<br />
            却又说了不算<br />
            想念一个人<br />
            离开我的那个人<br />
            有些爱不能太天真<br />
            想念一个人<br />
            我恨我太认真<br />
            她说过会做我的另一半<br />
            却又说了不算<br />
            想念一个人<br />
            丢了我的那个人<br />
            我笑我太傻太天真
          </p>
        </Block>
      </Page>
    )
  }
}
