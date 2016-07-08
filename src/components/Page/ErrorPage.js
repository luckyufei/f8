import React, { Component, PropTypes } from 'react'
import Page from '../Layout/Page'
import Navbar from '../Bar/Navbar'
import Button from '../Button/Button'
import Block from '../Container/Block'
import Icon from '../Icon/Icon'

export default class ErrorPage extends Component {

  static propTypes = {
    title: PropTypes.string,
    icon: PropTypes.node,
    message: PropTypes.string,
    onBack: PropTypes.func,
    onIndex: PropTypes.func
  };

  static defaultProps = {
    title: '错误',
    message: '系统发生了一个未知错误'
  }

  renderNavbar () {
    const { onBack, title } = this.props
    if (onBack) {
      return (
        <Navbar
          title={title}
          left={[{
            iconName: 'back',
            text: '返回',
            onClick: onBack
          }]}
        />
      )
    }
    return (
      <Navbar title={title} />
    )
  }

  renderIcon () {
    const { icon } = this.props
    if (icon) {
      return icon
    }
    return (
      <Icon name='error' />
    )
  }

  renderMessage () {
    const { message } = this.props
    return (
      <p>{message}</p>
    )
  }

  renderButton () {
    const { onIndex } = this.props
    if (onIndex) {
      return (
        <Button fill big onClick={onIndex}>返回首页</Button>
      )
    }
    return null
  }

  render () {
    return (
      <Page
        fix
        navbar={this.renderNavbar()}
        >
        <Block className='text-center'>
          {this.renderIcon()}
          {this.renderMessage()}
          {this.renderButton()}
        </Block>
      </Page>
    )
  }
}
