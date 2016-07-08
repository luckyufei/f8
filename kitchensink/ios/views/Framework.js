import React, { Component, PropTypes } from 'react'
import { TransitionPages } from 'jmui'

export default class Framework extends Component {

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
  };

  render () {
    return (
      <TransitionPages location={this.props.location}>
        {this.props.children}
      </TransitionPages>
    )
  }
}
