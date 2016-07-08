import React, { Component, PropTypes } from 'react'
import AccordionItem from './AccordionItem'
import classNames from 'classnames'

export default class Accordion extends Component {
  static Item = AccordionItem;

  static propTypes = {
    activeKey: PropTypes.any,
    defaultActiveKey: PropTypes.any,
    inset: PropTypes.bool,
    onSelect: PropTypes.func,
    children: PropTypes.node
  };

  componentWillMount () {
    this.state = {
      activeKey: this.props.defaultActiveKey || null
    }
  }

  shouldComponentUpdate () {
    return !this.isChanging
  }

  handleSelect (e, key) {
    e.preventDefault()

    if (this.props.onSelect) {
      this.isChanging = true
      this.props.onSelect(key)
      this.isChanging = false
    }

    if (this.state.activeKey === key) {
      key = null
    }

    this.setState({
      activeKey: key
    })
  }

  renderItems () {
    const activeKey = this.props.activeKey != null ? this.props.activeKey : this.state.activeKey

    return React.Children.map(this.props.children, (child, index) => {
      if (!child) {
        return null
      }
      let { eventKey, key } = child.props
      const props = {
        key: key || index,
        onSelect: ::this.handleSelect
      }

      if (eventKey === undefined) {
        props.eventKey = eventKey = index
      }

      props.expanded = eventKey === activeKey

      return React.cloneElement(child, props)
    })
  }

  render () {
    const className = classNames({
      'list-block': true,
      'inset': !!this.props.inset
    })
    return (
      <div
        {...this.props}
        className={className}
      >
        <ul>
        {this.renderItems()}
        </ul>
      </div>
    )
  }
}
