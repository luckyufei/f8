import { Page, TransitionPages, Navbar, Block, Button, Row, Col, List } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class ButtonView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleBack() {
    this.context.router.push({
      pathname: '/components/form',
      state: TransitionPages.getState()
    })
  }

  render() {
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
        <Block title="USUAL BUTTONS">
          <Row>
            <Col size={33}><Button active>Active</Button></Col>
            <Col size={33}><Button>Button</Button></Col>
            <Col size={33}><Button round>Round</Button></Col>
          </Row>
        </Block>
        <Block>
          <Row>
            <Col size={50}><Button active>Active</Button></Col>
            <Col size={50}><Button>Button</Button></Col>
          </Row>
        </Block>
        <Block>
          <Row buttons>
            <Button>Button</Button>
            <Button>Button</Button>
          </Row>
        </Block>
        <Block>
          <Row buttons>
            <Button round>Button</Button>
            <Button round>Button</Button>
            <Button round>Button</Button>
          </Row>
        </Block>
        <Block>
          <Row buttons>
            <Button>Button</Button>
            <Button active>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Row>
        </Block>
        <Block title="BIG BUTTONS">
          <Row>
            <Col size={50}>
              <Button big active>Active</Button>
            </Col>
            <Col size={50}>
              <Button big>Button</Button>
            </Col>
          </Row>
        </Block>
        <Block title="THEMED FILL BUTTONS">
          <Row>
            <Col size={50}>
              <Button big fill theme="green">Submit</Button>
            </Col>
            <Col size={50}>
              <Button big fill theme="red">Cancel</Button>
            </Col>
          </Row>
        </Block>
        <Block title="LIST-BLOCK BUTTONS"/>
        <List inset>
          <List.Button text="List Button 1" href="#"/>
          <List.Button text="List Button 2" href="#"/>
          <List.Button text="List Button 3" href="#"/>
        </List>
        <List inset>
            <List.Button theme="red" text="Big Red Button"/>
        </List>
      </Page>
    )
  }
}
