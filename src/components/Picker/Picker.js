import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import Toolbar from '../Bar/Toolbar'
import { addClass, removeClass, hasClass } from 'dom-helpers/class'
import { whichTransitionEvent } from '../../utils/transition'

export default class Picker extends Component {

  static propTypes = {
    inline: PropTypes.bool,
    values: PropTypes.array,
    doneText: PropTypes.string,
    className: PropTypes.string,
    selectValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onClose: PropTypes.func,
    onHide: PropTypes.func,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    inline: true,
    doneText: '完成'
  };

  constructor (props) {
    super(props)
    const formattedValues = this.formatValues(props.values)
    let selectValue
    if (!props.selectValue) {
      const firstElement = formattedValues[0]
      selectValue = {
        text: firstElement.text,
        value: firstElement.value
      }
      if (firstElement.childs && firstElement.childs.length > 0) {
        const firstChildElement = firstElement.childs[0]
        selectValue.child = {
          text: firstChildElement.text,
          value: firstChildElement.value
        }
      }
    } else {
      selectValue = this.formatSelect(props.selectValue)
    }
    this.state = {
      formattedValues,
      selectValue,
      selectParentIndex: 0
    }
  }

  componentDidMount () {
    const { inline } = this.props
    if (!inline) {
      setTimeout(() => {
        this.adjustModalStyle()
      }, 0)
    }
  }

  adjustModalStyle () {
    const modal = this.refs['modal']
    if (!modal) {
      return
    }
    const modalDom = ReactDOM.findDOMNode(modal)
    if (modalDom) {
      addClass(modalDom, 'modal-in')
    }
  }

  formatSelect (value) {
    const object = {}
    if (typeof value === 'string') {
      object.text = value
      object.value = value
    } else if (typeof value === 'object') {
      if (!value.value) {
        object.text = value.text
        object.value = value.value
      } else {
        object.text = value.text
        object.value = value.value
      }
      if (value.child) {
        object.child = this.formatSelect(value.child)
      }
    }
    return object
  }

  formatValues (values) {
    return values.map((value) => {
      const object = {}
      if (typeof value === 'string') {
        object.text = value
        object.value = value
      } else if (typeof value === 'object') {
        if (!value.value) {
          object.text = value.text
          object.value = value.text
        } else {
          object.text = value.text
          object.value = value.value
        }
        if (value.childs && value.childs.length > 0) {
          object.childs = this.formatValues(value.childs)
        }
      }
      return object
    })
  }

  caclPositionIndex (values, selectValue) {
    if (!selectValue || !values || values.length === 0) {
      return 0
    }
    let selectIndex = 0
    values.some((value, index) => {
      if (value.text === selectValue.text && value.value === selectValue.value) {
        selectIndex = index
        return true
      }
      return false
    })
    return selectIndex
  }

  handleHide () {
    const { onHide } = this.props
    if (onHide) {
      onHide()
    }
  }

  handleClose (e) {
    e.stopPropagation()
    const { onClose } = this.props
    if (onClose) {
      onClose()
    }
    const modal = this.refs['modal']
    if (!modal) {
      this.handleHide()
      return
    }
    const modalDom = ReactDOM.findDOMNode(modal)
    if (!modalDom) {
      this.handleHide()
      return
    }
    if (!hasClass(modalDom, 'modal-in')) {
      this.handleHide()
      return
    }
    removeClass(modalDom, 'modal-in')
    const transitionEvent = whichTransitionEvent()
    const eventHandler = modalDom.addEventListener(transitionEvent, () => {
      modalDom.removeEventListener(transitionEvent, eventHandler)
      this.handleHide()
    })
    addClass(modalDom, 'modal-out')
  }

  handleSelectSingle (object, e) {
    e.stopPropagation()
    const { onSelect } = this.props
    if (onSelect) {
      onSelect(object)
    }
    this.setState({
      selectValue: object
    })
  }

  handleSelectLeft (index, e) {
    e.stopPropagation()
    this.setState({
      selectParentIndex: index
    })
  }

  handleSelectRight (object, e) {
    e.stopPropagation()
    const { formattedValues, selectParentIndex } = this.state
    const result = {
      text: formattedValues[selectParentIndex].text,
      value: formattedValues[selectParentIndex].value,
      child: object
    }
    const { onSelect } = this.props
    if (onSelect) {
      onSelect(result)
    }
    this.setState({
      selectValue: result
    })
  }

  renderPickerItemCenter () {
    const { selectValue, formattedValues } = this.state
    const selectIndex = this.caclPositionIndex(formattedValues, selectValue)
    return (
      <div className='picker-items-col picker-items-col-center'>
        <div className='picker-items-col-wrapper' style={{transform: `translate3d(0px, ${90 - (selectIndex * 36)}px, 0px)`, 'WebkitTransform': `translate3d(0px, ${90 - (selectIndex * 36)}px, 0px)`}}>
          {formattedValues.map((object, index) => {
            return (
              <div onClick={this.handleSelectSingle.bind(this, object)} className={`picker-item ${index === selectIndex ? 'picker-selected' : ''}`} key={index}>{object.text}</div>
            )
          })}
        </div>
      </div>
    )
  }

  renderPickerItemLeft () {
    const { selectParentIndex, formattedValues } = this.state
    return (
      <div className='picker-items-col picker-items-col-center' style={{width: '50%'}}>
        <div className='picker-items-col-wrapper' style={{transform: `translate3d(0px, ${90 - (selectParentIndex * 36)}px, 0px)`, 'WebkitTransform': `translate3d(0px, ${90 - (selectParentIndex * 36)}px, 0px)`}}>
          {formattedValues.map((object, index) => {
            return (
              <div onClick={this.handleSelectLeft.bind(this, index)} className={`picker-item ${index === selectParentIndex ? 'picker-selected' : ''}`} key={index}>{object.text}</div>
            )
          })}
        </div>
      </div>
    )
  }

  renderPickerItemRight () {
    const { selectValue, formattedValues, selectParentIndex } = this.state
    const childValues = formattedValues[selectParentIndex].childs
    const selectIndex = this.caclPositionIndex(childValues, selectValue.child)
    return (
      <div className='picker-items-col picker-items-col-center' style={{width: '50%'}}>
        <div className='picker-items-col-wrapper' style={{transform: `translate3d(0px, ${90 - (selectIndex * 36)}px, 0px)`, 'WebkitTransform': `translate3d(0px, ${90 - (selectIndex * 36)}px, 0px)`}}>
          {childValues.map((object, index) => {
            return (
              <div onClick={this.handleSelectRight.bind(this, object)} className={`picker-item ${index === selectIndex ? 'picker-selected' : ''}`} key={index}>{object.text}</div>
            )
          })}
        </div>
      </div>
    )
  }

  renderPickerItem () {
    const { formattedValues } = this.state
    if (!formattedValues || formattedValues.length === 0) {
      return null
    }
    const isTwoCol = formattedValues[0].childs
    return (
      <div className='picker-modal-inner picker-items'>
        {isTwoCol && this.renderPickerItemLeft()}
        {isTwoCol && this.renderPickerItemRight()}
        {!isTwoCol && this.renderPickerItemCenter()}
        <div className='picker-center-highlight'></div>
      </div>
    )
  }

  renderPicker () {
    const { inline, className, doneText } = this.props
    const classes = classNames({
      'picker-modal': true,
      'picker-columns': true,
      'picker-modal-inline': !!inline
    }, className)
    return (
      <div className={classes} ref='modal' style={inline ? null : {display: 'block'}}>
        {!inline &&
          <Toolbar>
            <Toolbar.Item align='left'></Toolbar.Item>
            <Toolbar.Item align='right' onClick={::this.handleClose}>{doneText}</Toolbar.Item>
          </Toolbar>
        }
        {this.renderPickerItem()}
      </div>
    )
  }

  render () {
    const { inline } = this.props
    if (inline) {
      return this.renderPicker()
    }
    return (
      <div className='picker-overlay' onClick={::this.handleClose}>
        {this.renderPicker()}
      </div>
    )
  }
}
