import React, { Component, PropTypes } from 'react'
import TabbarItem from './TabbarItem'
import classNames from 'classnames'

export default class Tabbar extends Component {

  static propTypes = {
    tool: PropTypes.bool,
    visible: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    tool: false,
    visible: true
  };

  static contextTypes = {
    ui: PropTypes.object
  };

  static Item = TabbarItem;

  componentWillMount () {
    const { children, tool, visible } = this.props
    const { ui } = this.context
    let hasLabel = false
    if (!tool && children) {
      React.Children.forEach(children, (child) => {
        if (typeof child === 'object' && child.type === TabbarItem) {
          if (child.props.label) {
            hasLabel = true
          }
        }
      })
    }
    ui.setTabbar(visible ? (hasLabel ? 'label' : 'icon') : 'none')
    this.setState({
      hasLabel
    })
  }

  componentWillUnmount () {
    const { ui } = this.context
    ui.setTabbar('none')
  }

  componentWillReceiveProps (nextProps) {
    const { visible: visibleNext } = nextProps
    const { visible } = this.props
    const { ui } = this.context
    const { hasLabel } = this.state
    if (visibleNext && !visible) {
      ui.setTabbar(hasLabel ? 'label' : 'icon')
    }
    if (!visibleNext && visible) {
      ui.setTabbar('none')
    }
  }

  render () {
    const { className, tool, children, visible, ...props } = this.props
    const { hasLabel } = this.state
    const classes = classNames({
      'toolbar': true,
      'tabbar': !tool,
      'tabbar-labels': hasLabel,
      'toolbar-hidden': !visible,
      'toolbar-hiding': !!visible
    }, className)
    return (
      <div className={classes} {...props}>
        <div className='toolbar-inner'>
          {children}
        </div>
      </div>
    )
  }
}
