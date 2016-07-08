import { Page, Icon, Block, Button, Navbar } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class NotFound extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleIndex () {
    this.context.router.replace('/')
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar title='错误' />}>
        <div className='v-center h-center text-center'>
          <Block>
            <Icon name='error' />
            <p>无效的访问页面</p>
            <Button onClick={::this.handleIndex} fill big theme='green'>返回首页</Button>
          </Block>
        </div>
      </Page>
    )
  }
}
