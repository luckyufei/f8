import { Page, TransitionPages, Navbar, Block, Button, Preloader } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class PreloaderView extends Component {

  static contextTypes = {
    router: PropTypes.object,
    ui: PropTypes.object
  };

  handleBack () {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  handlePreloader1 () {
    const { ui } = this.context
    setTimeout(() => {
      ui.hidePreloader()
    }, 5000)
    ui.showPreloader('保存中')
  }

  handlePreloader2 () {
    const { ui } = this.context
    setTimeout(() => {
      ui.hideModal()
    }, 5000)
    ui.showModal({
      type: 'preloader',
      title: '努力的执行一个操作'
    })
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar
          title='指示器'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block title='静态加载指示器' highlight>
          <Preloader />
        </Block>
        <Block title='静态加载指示器(大)' highlight>
          <Preloader big />
        </Block>
        <Block title='全屏加载指示器'>
          <Button fill big theme='blue' onClick={::this.handlePreloader1}>点我</Button>
        </Block>
        <Block title='模态窗口指示器'>
          <Button fill big theme='green' onClick={::this.handlePreloader2}>点我</Button>
        </Block>
      </Page>
    )
  }
}
