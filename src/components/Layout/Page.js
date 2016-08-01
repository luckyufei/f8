import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { getThemes } from '../../utils/theme'

export default class Page extends Component {

  static propTypes = {
    fixNavbar: PropTypes.bool,
    fixToolbar: PropTypes.bool,
    fixTabbar: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    navbar: PropTypes.node,
    toolbar: PropTypes.node,
    theme: PropTypes.oneOf(getThemes())
  };

  static defaultProps = {
    fix: true
  };

  static contextTypes = {
    ui: PropTypes.object
  };

  componentWillMount () {
    const { ui } = this.context
    this.setState({
      tabbar: ui.getTabbar()
    })
  }

  render () {
    const { children, fixNavbar, fixTabbar, fixToolbar, className, navbar, toolbar, theme, ...props } = this.props
    const { tabbar } = this.state
    const classes = classNames({
      'page': true,
      'navbar-fixed': fixNavbar && navbar,
      'toolbar-fixed': fixToolbar && toolbar || tabbar !== 'none',
      'no-navbar': !navbar,
      'tabbar-labels-fixed': fixTabbar && tabbar === 'label',
      [`theme-${theme}`]: theme
    }, className)
    return (
      <div className={classes} {...props}>
        {fixNavbar && navbar}
        <div className='page-content'>
          {!fixNavbar && navbar}
          {children}
          {!fixToolbar && toolbar}
        </div>
        {fixToolbar && toolbar}
      </div>
    )
  }
}
