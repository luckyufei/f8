import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import ListGroup from './ListGroup'
import ListItem from './ListItem'
import ListDivider from './ListDivider'

export default class List extends Component {

  static Divider = ListDivider;
  static Item = ListItem;
  static Group = ListGroup;

  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    label: PropTypes.node,
    inset: PropTypes.bool,
    tabletInset: PropTypes.bool
  };

  componentWillMount () {
    const { children } = this.props
    let media = false
    let group = false
    if (children) {
      React.Children.forEach(children, (child) => {
        if (typeof child === 'object' && child.type === ListItem) {
          if (child.props.subTitle || child.props.text) {
            media = true
          }
        }
        if (typeof child === 'object' && child.type === ListGroup) {
          group = true
          if (child.props.children) {
            React.Children.forEach(child.children, (subChild) => {
              if (typeof child === 'object' && child.type === ListItem) {
                if (child.props.subTitle || child.props.text) {
                  media = true
                }
              }
            })
          }
        }
      })
    }
    this.setState({
      media,
      group
    })
  }

  render () {
    const { children, className, inset, tabletInset, label } = this.props
    const { media, group } = this.state
    const classes = classNames({
      'list-block': true,
      'media-list': media,
      'inset': !!inset,
      'tablet-inset': !!tabletInset
    }, className)
    return (
      <div className={classes}>
        {group && children}
        {!group &&
          <ul>{children}</ul>
        }
        {label &&
          <div className='list-block-label'>{label}</div>
        }
      </div>
    )
  }
}
