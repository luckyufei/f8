import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { getThemes } from '../../utils/theme'

export default class Page extends Component {

  static propTypes = {
    fix: PropTypes.bool,
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
    const { children, fix, className, navbar, toolbar, theme, ...props } = this.props
    const { tabbar } = this.state
    const classes = classNames({
      'page': true,
      'navbar-fixed': fix && navbar,
      'toolbar-fixed': fix && toolbar || tabbar !== 'none',
      'no-navbar': !navbar,
      'tabbar-labels-fixed': fix && tabbar === 'label',
      [`theme-${theme}`]: theme
    }, className)
    return (
      <div className={classes} {...props}>
        {fix && navbar}
        <div className='page-content'>
          {!fix && navbar}
          {children}
          {!fix && toolbar}
        </div>
        {fix && toolbar}
      </div>
    )
  }
}
