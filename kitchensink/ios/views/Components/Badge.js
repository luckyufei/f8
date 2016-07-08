import { Page, TransitionPages, Navbar, Block, Badge, Col, Row } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class BadgeView extends Component {

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
          title='徽标'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block highlight title='不同颜色徽标'>
          <Row>
            <Col size={25} className='text-center'><Badge theme='red'>red</Badge></Col>
            <Col size={25} className='text-center'><Badge theme='green'>green</Badge></Col>
            <Col size={25} className='text-center'><Badge theme='blue'>blue</Badge></Col>
            <Col size={25} className='text-center'><Badge theme='orange'>orange</Badge></Col>
          </Row>
          <p></p>
          <Row>
            <Col size={25} className='text-center'><Badge theme='pink'>pink</Badge></Col>
            <Col size={25} className='text-center'><Badge theme='yellow'>yellow</Badge></Col>
            <Col size={25} className='text-center'><Badge theme='lightblue'>lightblue</Badge></Col>
            <Col size={25} className='text-center'><Badge theme='gray'>gray</Badge></Col>
          </Row>
        </Block>
        <Block highlight title='依附于图标的角标'>
          <Row>
            <Col size={25} className='text-center ksrelative'><span className='iconfont icon-badge'><Badge theme='red'>1</Badge></span></Col>
            <Col size={25} className='text-center ksrelative'><span className='iconfont icon-card'><Badge theme='blue'>2</Badge></span></Col>
            <Col size={25} className='text-center ksrelative'><span className='iconfont icon-tongzhi'><Badge theme='green'>99+</Badge></span></Col>
            <Col size={25} className='text-center ksrelative'><span className='iconfont icon-yonghu'><Badge theme='orange'>...</Badge></span></Col>
          </Row>
        </Block>
      </Page>
    )
  }
}
