import { Page, TransitionPages, Navbar, Block, Image } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class View extends Component {

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
          title='视图'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block highlight>
          <p>视图是JMUI组件库中的顶级组件，绝大部分组件均依赖其父级组件中包含View组件。</p>
          <Image src={require('../../images/view.svg')} />
          <p>View组件中定义的ui context可传递到所有的子组件，这样可以方便的使用类似this.context.ui.addNotification方法来展示一个通知。</p>
        </Block>
      </Page>
    )
  }
}
