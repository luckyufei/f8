import React, { Component } from 'react'
import Preloader from './Preloader'

export default class System extends Component {

  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  showPreloader () {
    this.setState({
      visible: true
    })
  }

  hidePreloader () {
    this.setState({
      visible: false
    })
  }

  render () {
    const { visible } = this.state
    return (
      <div className='modal-wrapper' style={{display: visible ? 'block' : 'none'}}>
        <div className='preloader-indicator-overlay'></div>
        <div className='preloader-indicator-modal'>
          <Preloader revert />
        </div>
      </div>
    )
  }
}
