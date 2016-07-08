require('jmui/styles/ios/jmui.less')
require('jmui/styles/ios/layout/dark.less')
require('jmui/styles/ios/layout/white.less')
require('jmui/styles/ios/theme/black.less')
require('jmui/styles/ios/theme/white.less')
require('jmui/styles/ios/theme/blue.less')
require('jmui/styles/ios/theme/lightblue.less')
require('jmui/styles/ios/theme/green.less')
require('jmui/styles/ios/theme/orange.less')
require('jmui/styles/ios/theme/gray.less')
require('jmui/styles/ios/theme/yellow.less')
require('jmui/styles/ios/theme/pink.less')
require('jmui/styles/ios/theme/red.less')
require('./styles/ios.less')
require('./fonts/iconfont.css')
import { Router } from 'react-router'
import React, { Component, PropTypes } from 'react'
import { View } from 'jmui'

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  };

  render () {
    return (
      <View>
        <Router history={this.props.history}>
          {this.props.routes}
        </Router>
      </View>
    )
  }
}
