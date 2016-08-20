import { Page, TransitionPages, Navbar, Form, RadioField } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class RadioFieldView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  constructor (props) {
    super(props)
    this.state = {
      special: 1,
      multi: 2
    }
  }

  handleBack () {
    this.context.router.push({
      pathname: '/components/form',
      state: TransitionPages.getState()
    })
  }

  handleSpecial (value) {
    this.setState({
      special: value
    })
  }

  handleMulti (value) {
    this.setState({
      multi: value
    })
  }

  render () {
    const { special, multi } = this.state
    return (
      <Page
        fix
        navbar={<Navbar
          title='单选'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
       
      </Page>
    )
  }
}
