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
          title='Grid'
          left={{
            iconName: 'back',
            text: 'Back',
            onClick: ::this.handleBack
          }}
      />}>
        <Block><small>Framework8 comes with flexible layout grid:</small></Block>
        <Block title='COLUMNS WITH GUTTER'>
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
        <Block title='NO GUTTER BETWEEN COLUMNS'>
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
        <Block title='NESTED'>
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
        <Block title='RESPONSIVE GRID'>
          <Row>
            <Col size={100} tabletSize={50} className='grid-example'>phone-100 tablet-50</Col>
            <Col size={100} tabletSize={50} className='grid-example'>phone-100 tablet-50</Col>
          </Row>
        </Block>
      </Page>
    )
  }
}
