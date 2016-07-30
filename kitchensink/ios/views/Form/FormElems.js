import React, { Component, PropTypes } from 'react'
import {
  Page, TransitionPages, Navbar, List,
  Form, TextField, SelectField, SwitchField,
  Slider, TextArea,
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
          <SwitchField
            icon={<span className='iconfont icon-riqi'></span>}
            label='Switch'
            onChange={e => console.log("Switch onChange value: ", e.target.checked)}
            /> 
          <Slider
            icon={<span className='iconfont icon-riqi'></span>}
            label="Slider"
            min={1}
            max={100}
            step={0.1}
            />  
          <TextArea
            icon={<span className='iconfont icon-riqi'></span>}
            label="TextArea" 
            placeholder="something input"
            />
          <TextArea
            icon={<span className='iconfont icon-riqi'></span>}
            label="TextArea" 
            placeholder="something textarea"
            resizable
            />              
        </Form>
        <Form title='Icons and inputs'>
          <TextField
            icon={<span className='iconfont icon-yonghu'></span>}
            placeholder='Your name'
            />
          <TextField
            icon={<span className='iconfont icon-mima'></span>}
            type='email'
            placeholder='E-mail'
            />
          <SelectField
            icon={<span className='iconfont icon-riqi'></span>}
            options={['Male', 'Female']}
            />
          <TextField
            icon={<span className='iconfont icon-riqi'></span>}
            type='date'
            placeholder="Birth day"
            /> 
           <SwitchField
            icon={<span className='iconfont icon-riqi'></span>}
            onChange={e => console.log("Switch onChange value: ", e.target.checked)}
            />    
        </Form>
        <Form title='Labels and inputs'>
          <TextField
            label='Name'
            placeholder="You name"
            />
          <TextField
            label='E-mail'
            type='email'
            placeholder="E-mail"
            />
           <SelectField
            label="Gender"
            options={['Male', 'Female']}
            />  
          <TextField
            label='Birth date'
            type='date'
            placeholder="Birth day"
            />
           <SwitchField
            label="Switch"
            onChange={e => console.log("Switch onChange value: ", e.target.checked)}
            />   
        </Form>
        <Form title='Just inputs'>
          <TextField
            placeholder='Your name'
            />
          <TextField
            type='email'
            placeholder='E-mail'
            />
           <SelectField
            options={['Male', 'Female']}
            />   
          <TextField
            type='date'
            placeholder='Birth day'
            />
        </Form>
        <Form inset title='Inset, just inputs'>
          <TextField
            placeholder='Your name'
            inset
            />
          <TextField
            type='email'
            placeholder='E-mail'
            inset
            />
           <SelectField
            options={['Male', 'Female']}
            inset 
            />   
          <TextField
            type='date'
            placeholder='Birth day'
            inset
            />
        </Form>
      </Page>
    )
  }
}
