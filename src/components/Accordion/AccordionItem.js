import React, { Component, PropTypes } from 'react'
import TransitionEvent from '../../utils/TransitionEvent'
import classNames from 'classnames'

export default class AccordionItem extends Component {

  static propTypes = {
    title: PropTypes.node,
    eventKey: PropTypes.any,
    children: PropTypes.node,
    onSelect: PropTypes.func,
    defaultExpanded: PropTypes.bool,
    expanded: PropTypes.bool
  };

  componentWillMount () {
    const defaultExpanded = this.props.defaultExpanded != null
      ? this.props.defaultExpanded
      : this.props.expanded != null ? this.props.expanded : false
    this.state = {
      expanded: defaultExpanded,
      collapsing: false
    }
  }

  componentDidMount () {
    this.mounted = true
  }

  componentWillUnmount () {
    this.mounted = false
  }

  componentWillUpdate (nextProps, nextState) {
    const willExpanded = nextProps.expanded != null ? nextProps.expanded : nextState.expanded

    if (willExpanded === this.isExpanded()) {
      return
    }

    const node = this.getCollapsibleDOMNode()
    const dimension = this.dimension()
    let value = '0'

    if (!willExpanded) {
      value = this.getCollapsibleDimensionValue()
    }

    node.style[dimension] = value + 'px'

    this.afterWillUpdate()
  }

  componentDidUpdate (prevProps, prevState) {
    this.checkToggleCollapsing(prevProps, prevState)
    this.checkStartAnimation()
  }

  afterWillUpdate () {
  }

  checkStartAnimation () {
    if (!this.state.collapsing) {
      return
    }

    const node = this.getCollapsibleDOMNode()
    const dimension = this.dimension()
    const value = this.getCollapsibleDimensionValue()

    let result

    if (this.isExpanded()) {
      result = value + 'px'
    } else {
      result = '0px'
    }
    node.style[dimension] = result
  }

  checkToggleCollapsing (prevProps, prevState) {
    const wasExpanded = prevProps.expanded != null ? prevProps.expanded : prevState.expanded
    const isExpanded = this.isExpanded()

    if (wasExpanded !== isExpanded) {
      if (wasExpanded) {
        this.handleCollapse()
      } else {
        this.handleExpand()
      }
    }
  }

  handleExpand () {
    const node = this.getCollapsibleDOMNode()
    const dimension = this.dimension()

    const complete = () => {
      this.removeEndEventListener(node, complete)
      node.style[dimension] = ''
      this.setState({
        collapsing: false
      })
    }

    this.addEndEventListener(node, complete)

    this.setState({
      collapsing: true
    })
  }

  handleCollapse () {
    const node = this.getCollapsibleDOMNode()
    const complete = () => {
      this.removeEndEventListener(node, complete)
      this.setState({
        collapsing: false
      })
    }

    this.addEndEventListener(node, complete)

    this.setState({
      collapsing: true
    })
  }

  addEndEventListener (node, complete) {
    TransitionEvent.on(node, complete)
  }

  removeEndEventListener (node, complete) {
    TransitionEvent.off(node, complete)
  }

  dimension () {
    return (typeof this.getCollapsibleDimension === 'function') ? this.getCollapsibleDimension() : 'height'
  }

  isExpanded () {
    return this.props.expanded != null ? this.props.expanded : this.state.expanded
  }

  getCollapsibleClassSet (className) {
    var classSet = {}

    if (typeof className === 'string') {
      className.split(' ').forEach((subClass) => {
        if (subClass) {
          classSet[subClass] = true
        }
      })
    }

    classSet['collapsing'] = this.state.collapsing
    classSet['collapse'] = !this.state.collapsing
    classSet['in'] = this.isExpanded() &&
      !this.state.collapsing

    return classSet
  }

  handleClick (e) {
    e.selected = true

    if (this.props.onSelect) {
      this.props.onSelect(e, this.props.eventKey)
    } else {
      e.preventDefault()
    }

    if (e.selected) {
      this.handleToggle()
    }
  }

  handleToggle () {
    this.setState({expanded: !this.state.expanded})
  }

  getCollapsibleDimensionValue () {
    return this.refs.panel.scrollHeight
  }

  getCollapsibleDOMNode () {
    if (!this.mounted || !this.refs || !this.refs.panel) {
      return null
    }
    return this.refs.panel
  }

  render () {
    const className = classNames({
      'accordion-item': true,
      'accordion-item-active': this.isExpanded()
    })
    return (
      <li className={className}>
        <div
          onClick={::this.handleClick}
          className='item-content'
        >
          <div className='item-inner'>
            <div className='item-title'>{this.props.title}</div>
            <div className='item-after'><span className='accordion-item-icon' /></div>
          </div>
        </div>
        <div
          className={classNames('accordion-item-body', this.getCollapsibleClassSet())}
          ref='panel'
        >
          <div
            className='accordion-item-content'
          >
            {this.props.children}
          </div>
        </div>
      </li>
    )
  }
}
