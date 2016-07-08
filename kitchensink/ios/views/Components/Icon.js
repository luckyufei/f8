import { Page, TransitionPages, Navbar, Block, Icon, Row, Col } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class IconView extends Component {

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
          title='图标'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block highlight>
          <p>JMUI的样式文件仅包含导航、下拉组件等常用图标，不包含任何第三方iconfont，目的是为了精简最终样式表的大小</p>
          <p>应用程序可自行添加包含当前应用的iconfont样式和字体文件</p>
          <Row>
            <Col size={25} className='text-center'><Icon name='back' /></Col>
            <Col size={25} className='text-center'><Icon name='forward' /></Col>
            <Col size={25} className='text-center'><Icon name='prev' /></Col>
            <Col size={25} className='text-center'><Icon name='next' /></Col>
          </Row>
          <p></p>
          <Row>
            <Col size={25} className='text-center'><Icon name='close' /></Col>
            <Col size={25} className='text-center' />
            <Col size={25} className='text-center' />
            <Col size={25} className='text-center' />
          </Row>
        </Block>
      </Page>
    )
  }
}
