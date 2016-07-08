import { Page, TransitionPages, Navbar, Row, Col, Block } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class GridView extends Component {

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
          title='网格'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block><small>*每个网格的背景\边框\边距是演示需要增加的样式，不包含在Grid组件中</small></Block>
        <Block title='带间隔的网格'>
          <Row>
            <Col size={50} className='grid-example'>50</Col>
            <Col size={50} className='grid-example'>50</Col>
          </Row>
          <Row>
            <Col size={25} className='grid-example'>25</Col>
            <Col size={25} className='grid-example'>25</Col>
            <Col size={25} className='grid-example'>25</Col>
            <Col size={25} className='grid-example'>25</Col>
          </Row>
          <Row>
            <Col size={33} className='grid-example'>33</Col>
            <Col size={33} className='grid-example'>33</Col>
            <Col size={33} className='grid-example'>33</Col>
          </Row>
          <Row>
            <Col size={20} className='grid-example'>20</Col>
            <Col size={20} className='grid-example'>20</Col>
            <Col size={20} className='grid-example'>20</Col>
            <Col size={20} className='grid-example'>20</Col>
            <Col size={20} className='grid-example'>20</Col>
          </Row>
          <Row>
            <Col size={33} className='grid-example'>33</Col>
            <Col size={66} className='grid-example'>66</Col>
          </Row>
          <Row>
            <Col size={75} className='grid-example'>75</Col>
            <Col size={25} className='grid-example'>25</Col>
          </Row>
          <Row>
            <Col size={25} className='grid-example'>25</Col>
            <Col size={25} className='grid-example'>25</Col>
            <Col size={50} className='grid-example'>50</Col>
          </Row>
          <Row>
            <Col size={80} className='grid-example'>80</Col>
            <Col size={20} className='grid-example'>20</Col>
          </Row>
          <Row>
            <Col size={40} className='grid-example'>40</Col>
            <Col size={60} className='grid-example'>60</Col>
          </Row>
        </Block>
        <Block title='不带间隔的网格'>
          <Row gutter={false}>
            <Col size={50} className='grid-example'>50</Col>
            <Col size={50} className='grid-example'>50</Col>
          </Row>
          <Row gutter={false}>
            <Col size={25} className='grid-example'>25</Col>
            <Col size={25} className='grid-example'>25</Col>
            <Col size={25} className='grid-example'>25</Col>
            <Col size={25} className='grid-example'>25</Col>
          </Row>
          <Row gutter={false}>
            <Col size={33} className='grid-example'>33</Col>
            <Col size={33} className='grid-example'>33</Col>
            <Col size={33} className='grid-example'>33</Col>
          </Row>
          <Row gutter={false}>
            <Col size={20} className='grid-example'>20</Col>
            <Col size={20} className='grid-example'>20</Col>
            <Col size={20} className='grid-example'>20</Col>
            <Col size={20} className='grid-example'>20</Col>
            <Col size={20} className='grid-example'>20</Col>
          </Row>
          <Row gutter={false}>
            <Col size={33} className='grid-example'>33</Col>
            <Col size={66} className='grid-example'>66</Col>
          </Row>
          <Row gutter={false}>
            <Col size={75} className='grid-example'>75</Col>
            <Col size={25} className='grid-example'>25</Col>
          </Row>
          <Row gutter={false}>
            <Col size={25} className='grid-example'>25</Col>
            <Col size={25} className='grid-example'>25</Col>
            <Col size={50} className='grid-example'>50</Col>
          </Row>
          <Row gutter={false}>
            <Col size={80} className='grid-example'>80</Col>
            <Col size={20} className='grid-example'>20</Col>
          </Row>
          <Row gutter={false}>
            <Col size={40} className='grid-example'>40</Col>
            <Col size={60} className='grid-example'>60</Col>
          </Row>
        </Block>
        <Block title='嵌套网格'>
          <Row>
            <Col size={50} className='grid-example'>
              <p>50</p>
              <Row>
                <Col size={25} className='grid-example'>25</Col>
                <Col size={75} className='grid-example'>75</Col>
              </Row>
            </Col>
            <Col size={50} className='grid-example'>
              <p>50</p>
              <Row>
                <Col size={33} className='grid-example'>33</Col>
                <Col size={66} className='grid-example'>66</Col>
              </Row>
            </Col>
          </Row>
        </Block>
        <Block title='响应式网格'>
          <Row>
            <Col size={100} tabletSize={50} className='grid-example'>phone-100 tablet-50</Col>
            <Col size={100} tabletSize={50} className='grid-example'>phone-100 tablet-50</Col>
          </Row>
        </Block>
      </Page>
    )
  }
}
