import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Icon from '../Icon/Icon'
import classNames from 'classnames'
import { width as getDomWidth } from 'dom-helpers/query'
import style from 'dom-helpers/style'
import getComputedStyle from 'dom-helpers/style/getComputedStyle'

export default class Navbar extends Component {

  static propTypes = {
    title: PropTypes.node,
    left: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
    right: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object])
  };

  componentDidMount () {
    this.adjustCenterLeft()
  }

  adjustCenterLeft () {
    const navbar = ReactDOM.findDOMNode(this.refs['navbar'])
    const left = ReactDOM.findDOMNode(this.refs['left'])
    const center = ReactDOM.findDOMNode(this.refs['center'])
    const right = ReactDOM.findDOMNode(this.refs['right'])
    const leftWidth = getDomWidth(left, true)
    const centerWidth = getDomWidth(center, true)
    if (centerWidth === 0) {
      return
    }
    const rightWidth = getDomWidth(right, true)
    const navbarStyle = getComputedStyle(navbar)
    const navbarWidth = navbar.offsetWidth - parseInt(navbarStyle.paddingLeft, 10) - parseInt(navbarStyle.paddingRight, 10)
    let currLeft = (navbarWidth - rightWidth - centerWidth + leftWidth) / 2
    let requiredLeft = (navbarWidth - centerWidth) / 2
    let diff
    if (navbarWidth - leftWidth - rightWidth > centerWidth) {
      if (requiredLeft < leftWidth) {
        requiredLeft = leftWidth
      }
      if (requiredLeft + centerWidth > navbarWidth - rightWidth) {
        requiredLeft = navbarWidth - rightWidth - centerWidth
      }
      diff = requiredLeft - currLeft
    } else {
      diff = 0
    }
    style(center, 'left', `${diff}px`)
  }

  renderLink (object, key = 0) {
    const { text, icon, iconName, ...others } = object
    const classesLink = classNames({
      'link': true,
      'icon-only': !text
    })
    return (
      <a key={key} className={classesLink} {...others}>
        {iconName && <Icon name={iconName} />}
        {icon}
        {text}
      </a>
    )
  }

  render () {
    const { title, left, right } = this.props
    return (
      <div className='navbar'>
        <div className='navbar-inner' ref='navbar'>
          <div className='left' ref='left'>
            {left && Array.isArray(left) && left.map((object, index) => this.renderLink(object, index))}
            {left && !Array.isArray(left) && this.renderLink(left)}
          </div>
          <div className='center' ref='center'>{title}</div>
          <div className='right' ref='right'>
            {right && Array.isArray(right) && right.map((object, index) => this.renderLink(object, index))}
            {right && !Array.isArray(right) && this.renderLink(right)}
          </div>
        </div>
      </div>
    )
  }
}
