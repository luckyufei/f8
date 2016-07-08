import { Page, TransitionPages, Navbar, Block, Image, Row, Col } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class ImageView extends Component {

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
          title='图片'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block highlight title='响应式图片'>
          <Row>
            <Col size={50} className='grid-example'>50</Col>
            <Col size={35} className='grid-example'>35</Col>
            <Col size={15} className='grid-example'>15</Col>
          </Row>
          <p></p>
          <Row>
            <Col size={50}><Image src={require('../../images/cover1.jpg')} /></Col>
            <Col size={35}><Image src={require('../../images/cover1.jpg')} /></Col>
            <Col size={15}><Image src={require('../../images/cover1.jpg')} /></Col>
          </Row>
          <p></p>
          <Row>
            <Col size={70} className='grid-example'>70</Col>
            <Col size={20} className='grid-example'>20</Col>
            <Col size={10} className='grid-example'>10</Col>
          </Row>
          <p></p>
          <Row>
            <Col size={70}><Image src={require('../../images/cover2.jpg')} /></Col>
            <Col size={20}><Image src={require('../../images/cover2.jpg')} /></Col>
            <Col size={10}><Image src={require('../../images/cover2.jpg')} /></Col>
          </Row>
        </Block>
      </Page>
    )
  }
}
