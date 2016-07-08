import React, { Component } from 'react'
import Picker from './Picker'

export default class System extends Component {

  static propTypes = {};

  constructor (props) {
    super(props)
    this.state = {
      picker: null
    }
  }

  showPicker (picker) {
    if (!picker.values) {
      return
    }
    this.setState({
      picker
    })
  }

  handleHide () {
    const { picker } = this.state
    if (!picker) {
      return
    }
    this.setState({
      picker: null
    })
  }

  render () {
    const { picker } = this.state
    return (
      <div className='modal-wrapper'>
        {picker &&
          <Picker
            {...picker}
            inline={false}
            onHide={::this.handleHide}
          />
        }
      </div>
    )
  }
}
