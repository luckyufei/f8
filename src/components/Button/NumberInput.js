import React, { Component, PropTypes } from 'react'

export default class NumberInput extends Component {

  static propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.number,
    step: PropTypes.number.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func
  }

  static defaultProps = {
    step: 1,
    value: null
  }

  componentWillMount () {
    this.validProps(this.props)
    const { step } = this.props
    let digital = 0
    const indexOfPoint = String(step).indexOf('.')
    if (indexOfPoint > -1) {
      digital = String(step).length - indexOfPoint - 1
    }
    this.setState({
      digital
    })
  }

  componentWillReceiveProps (nextProps) {
    this.validProps(nextProps)
  }

  validProps (props) {
    const { value, min, max, step } = props
    if (value !== null && value > max) {
      throw new Error('value must lt max')
    }
    if (value !== null && value < min) {
      throw new Error('value must gt min')
    }
    if (value !== null && step > (max - min)) {
      throw new Error('step must between min and max')
    }
    this.setState({
      value: value,
      canPlus: value === null ? true : value !== max,
      canReduce: value === null ? true : value !== min
    })
  }

  handleReduce () {
    const { min, step } = this.props
    const { value, canReduce } = this.state
    if (!canReduce) {
      return
    }
    if (value === null) {
      this.setState({
        value: min,
        canReduce: false
      })
      return
    }
    let newValue = value - step
    let newCanReduce = true
    if (newValue <= min) {
      newValue = min
      newCanReduce = false
    }
    this.setState({
      value: newValue,
      canReduce: newCanReduce
    }, () => {
      this.onValueChange(newValue)
    })
  }

  handlePlus () {
    const { max, step } = this.props
    const { value, canPlus } = this.state
    if (!canPlus) {
      return
    }
    if (value === null) {
      this.setState({
        value: max,
        canPlus: false
      })
      return
    }
    let newValue = value + step
    let newCanPlus = true
    if (newValue >= max) {
      newValue = max
      newCanPlus = false
    }
    this.setState({
      value: newValue,
      canPlus: newCanPlus
    }, () => {
      this.onValueChange(newValue)
    })
  }

  handleBlur (e) {
    let v = Number(e.target.value)
    if (isNaN(v)) {
      return
    }
    const { min, max } = this.props
    let canPlus = true
    let canReduce = true
    if (v > max) {
      v = max
      canPlus = false
    }
    if (v < min) {
      v = min
      canReduce = false
    }
    this.setState({
      value: v,
      canReduce,
      canPlus
    }, () => {
      this.onValueChange(v)
    })
  }

  handleChange (e) {
    let input = e.target.value
    if (input === null || input === '' || input.length === 0) {
      this.setState({
        value: null
      })
      return
    }
    let v = Number(input)
    if (isNaN(v)) {
      return
    }
    this.setState({
      value: v
    })
  }

  onValueChange (value) {
    const { onChange } = this.props
    if (onChange) {
      onChange(value)
    }
  }

  render () {
    const { value, canReduce, canPlus, digital } = this.state
    return (
      <div className='numberinput'>
        <span onClick={::this.handleReduce} className={`numberinput-control numberinput-control-left ${canReduce ? '' : 'numberinput-control-disable'}`}>-</span>
        <input onBlur={::this.handleBlur} onChange={::this.handleChange} type='number' value={value === null ? null : Number(value).toFixed(digital)} />
        <span onClick={::this.handlePlus} className={`numberinput-control numberinput-control-right ${canPlus ? '' : 'numberinput-control-disable'}`}>+</span>
      </div>
    )
  }
}
