import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { height as getDomHeight } from 'dom-helpers/query'
import style from 'dom-helpers/style'
import { addClass, removeClass, hasClass } from 'dom-helpers/class'
import { whichTransitionEvent } from '../../utils/transition'
import Preloader from '../Indicator/Preloader'

export default class System extends Component {

  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      modal: null
    }
  }

  showModal (modal) {
    if (!modal) {
      return
    }
    this.setState({
      visible: true,
      modal
    }, () => {
      this.adjustModalStyle()
    })
  }

  hideModal () {
    const { visible } = this.state
    if (!visible) {
      return
    }
    const modal = this.refs['modal']
    if (!modal) {
      return
    }
    const modalDom = ReactDOM.findDOMNode(modal)
    if (!modalDom) {
      this.setState({
        visible: false,
        modal: null
      })
    } else {
      if (!hasClass(modalDom, 'modal-in')) {
        this.setState({
          visible: false,
          modal: null
        })
      } else {
        removeClass(modalDom, 'modal-in')
        const transitionEvent = whichTransitionEvent()
        const eventHandler = modalDom.addEventListener(transitionEvent, () => {
          modalDom.removeEventListener(transitionEvent, eventHandler)
          this.setState({
            visible: false,
            modal: null
          })
        })
        addClass(modalDom, 'modal-out')
      }
    }
  }

  adjustModalStyle () {
    const modal = this.refs['modal']
    if (!modal) {
      return
    }
    const modalDom = ReactDOM.findDOMNode(modal)
    if (modalDom) {
      style(modalDom, 'display', 'block')
      style(modalDom, 'margin-top', `-${getDomHeight(modalDom, true) / 2}px`)
      addClass(modalDom, 'modal-in')
    }
  }

  renderPreloader () {
    const { modal } = this.state
    const title = modal.title || '载入中'
    return (
      <div className='modal modal-no-buttons modal-preloader' ref='modal'>
        <div className='modal-inner'>
          <div className='modal-title'>{title}</div>
          <div className='modal-text'><Preloader /></div>
        </div>
      </div>
    )
  }

  renderModal () {
    return null
  }

  render () {
    const { visible, modal } = this.state
    const classesOverlay = classNames({
      'modal-overlay': true,
      'modal-overlay-visible': visible
    })
    return (
      <div className='modal-wrapper'>
        <div className={classesOverlay}></div>
        {visible && modal && modal.type === 'preloader' && this.renderPreloader()}
      </div>
    )
  }
}
