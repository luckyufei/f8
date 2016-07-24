import React, { Component, PropTypes } from 'react'
import {
  Page, TransitionPages, Navbar, List,
  Form, TextField, SelectField
} from 'jmui'

export default class FormView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleBack() {
    this.context.router.push({
      pathname: '/components/form',
      state: TransitionPages.getState()
    })
  }

  render() {
    return (
      <Page
        fix
        navbar={<Navbar
          title='Form Elements'
          left={{
            iconName: 'back',
            text: 'Form',
            onClick: ::this.handleBack
          }}
          />}>
        <Form title='Full Layout'>
          <TextField
            icon={<span className='iconfont icon-yonghu'></span>}
            label='Name'
            placeholder='Your name'
            />
          <TextField
            icon={<span className='iconfont icon-mima'></span>}
            label='E-mail'
            type='email'
            placeholder='E-mail'
            />
          <TextField
            icon={<span className='iconfont icon-mima'></span>}
            label='URL'
            type='url'
            placeholder='URL'
            />
          <TextField
            icon={<span className='iconfont icon-mima'></span>}
            label='Password'
            type='password'
            placeholder='Password'
            />
          <TextField
            icon={<span className='iconfont icon-mima'></span>}
            label='Phone'
            type='tel'
            placeholder='Phone'
            />
          <SelectField
            icon={<span className='iconfont icon-mima'></span>}
            label='Gender'
            options={['Male', 'Female']}
            />
          <TextField
            icon={<span className='iconfont icon-riqi'></span>}
            label='Birth date'
            type='date'
            placeholder="Birth day"
            value="2014-04-30"
            onChange={e => console.log('change birth day:', e.target.value) }
            />
          <TextField
            icon={<span className='iconfont icon-riqi'></span>}
            label='Date time'
            type='datetime-local'
            placeholder="Birth day"
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
