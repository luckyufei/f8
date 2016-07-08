import { Page, TransitionPages, Navbar, Form, TextField } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class FormView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleBack () {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar
          title='表单'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Form title='带图标和标签的表单'>
          <TextField
            icon={<span className='iconfont icon-yonghu'></span>}
            label='用户名'
            placeholder='请输入用户名'
          />
          <TextField
            icon={<span className='iconfont icon-mima'></span>}
            label='密码'
            type='password'
            placeholder='请输入登录密码'
          />
          <TextField
            icon={<span className='iconfont icon-riqi'></span>}
            label='出生日期'
            type='date'
          />
        </Form>
        <Form title='不带标签的表单'>
          <TextField
            icon={<span className='iconfont icon-yonghu'></span>}
            placeholder='请输入用户名'
          />
          <TextField
            icon={<span className='iconfont icon-mima'></span>}
            type='password'
            placeholder='请输入登录密码'
          />
          <TextField
            icon={<span className='iconfont icon-riqi'></span>}
            type='date'
          />
        </Form>
        <Form title='只有标签的表单'>
          <TextField
            label='用户名'
          />
          <TextField
            label='密码'
            type='password'
          />
          <TextField
            label='出生日期'
            type='date'
          />
        </Form>
        <Form title='只有输入框的表单'>
          <TextField
            placeholder='请输入用户名'
          />
          <TextField
            type='password'
            placeholder='请输入登录密码'
          />
          <TextField
            type='date'
            placeholder='请输入出生日期'
          />
        </Form>
        <Form inset title='缩进的只有输入框的表单'>
          <TextField
            placeholder='请输入用户名'
          />
          <TextField
            type='password'
            placeholder='请输入登录密码'
          />
          <TextField
            type='date'
            placeholder='请输入出生日期'
          />
        </Form>
      </Page>
    )
  }
}
