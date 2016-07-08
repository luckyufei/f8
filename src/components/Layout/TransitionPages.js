import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class TransitionPages extends Component {

  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object
  };

  static getState (type = 'left') {
    return {
      transition: type
    }
  };

  render () {
    const { location } = this.props
    let transition = 'sfr'
    if (location.state && location.state.transition) {
      switch (location.state.transition) {
        case 'right':
          transition = 'sfr'
          break
        case 'left':
          transition = 'rfr'
          break
        case 'up':
          transition = 'sfb'
          break
        case 'down':
          transition = 'rfb'
          break
      }
    }
    return (
      <ReactCSSTransitionGroup
        component='div'
        className='pages'
        transitionName={`page-transition-${transition}`}
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}
        >
          {React.cloneElement(this.props.children, {
            key: location.pathname
          })}
      </ReactCSSTransitionGroup>
    )
  }
}
