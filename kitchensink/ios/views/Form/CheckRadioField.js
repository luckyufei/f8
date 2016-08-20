import React, { Component, PropTypes } from 'react'
import { Page, TransitionPages, Navbar, Image, Form, CheckField, RadioField } from 'jmui'

const TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.'

export default class CheckFieldView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  constructor (props) {
    super(props)
    this.state = {
      special: [],
      radioVal: null,
      multi: []
    }
  }

  handleBack () {
    this.context.router.push({
      pathname: '/components/form',
      state: TransitionPages.getState()
    })
  }

  handleSpecial (value) {
    const { special } = this.state
    const index = special.indexOf(value)
    if (index > -1) {
      special.splice(index, 1)
    } else {
      special.push(value)
    }
    this.setState({
      special
    })
  }

  handleRadioCheck(value){
    this.setState({radioVal: value});
  }

  handleMulti (value) {
    const { multi } = this.state
    const index = multi.indexOf(value)
    if (index > -1) {
      multi.splice(index, 1)
    } else {
      multi.push(value)
    }
    this.setState({
      multi
    })
  }

  render () {
    const { special, radioVal, multi } = this.state
    return (
      <Page
        fix
        navbar={<Navbar
          title='多选'
          left={{
            iconName: 'back',
            text: 'Back',
            onClick: ::this.handleBack
          }}
      />}>
      <Form title='Checkbox group'>
          <CheckField 
            onClick={this.handleSpecial.bind(this, 'Books')} 
            name='special' 
            value="Books" 
            title='Books' 
            check={special.indexOf('Books') > -1} 
            />
           <CheckField 
            onClick={this.handleSpecial.bind(this, 'Movies')} 
            name='special' 
            value="Movies" 
            title='Movies' 
            check={special.indexOf('Movies') > -1} 
            />
            <CheckField 
            onClick={this.handleSpecial.bind(this, 'Food')} 
            name='special' 
            value="Food" 
            title='Food' 
            check={special.indexOf('Food') > -1} 
            />  
          <CheckField 
            onClick={this.handleSpecial.bind(this, 'Drinks')} 
            name='special' 
            value="Drinks" 
            title='Drinks' 
            check={special.indexOf('Drinks') > -1} 
            />   
      </Form>
       <Form title='Radio buttons group'>
          <RadioField 
            onClick={this.handleRadioCheck.bind(this, 'Books')} 
            name='radioVal' 
            value="Books" 
            title='Books' 
            check={radioVal === 'Books'} 
            />
          <RadioField 
            onClick={this.handleRadioCheck.bind(this, 'Movies')} 
            name='radioVal' 
            value="Movies" 
            title='Movies' 
            check={radioVal === 'Movies'} 
            />
          <RadioField 
            onClick={this.handleRadioCheck.bind(this, 'Food')} 
            name='radioVal' 
            value="Food" 
            title='Food' 
            check={radioVal === 'Food'} 
            />
          <RadioField 
            onClick={this.handleRadioCheck.bind(this, 'Drinks')} 
            name='radioVal' 
            value="Drinks" 
            title='Drinks' 
            check={radioVal === 'Drinks'} 
            />
        </Form>
        <Form title='With Media Lists' multiLine>
          <CheckField
            onClick={this.handleMulti.bind(this, 1)}
            name='multi'
            value={1}
            title='Facebook'
            after='17:14'
            subTitle='New messages from John Doe'
            text={TEXT}
            check={multi.indexOf(1) > -1}
          />
          <CheckField
            onClick={this.handleMulti.bind(this, 2)}
            name='multi'
            value={2}
            title='John Doe (via Twitter)'
            after='17:11'
            subTitle='John Doe (@_johndoe) mentioned you on Twitter!'
            text={TEXT}
            check={multi.indexOf(2) > -1}
          />
          <CheckField
            onClick={this.handleMulti.bind(this, 3)}
            name='multi'
            value={3}
            title='Facebook'
            after='16:48'
            subTitle='New messages from John Doe'
            text={TEXT}
            check={multi.indexOf(3) > -1}
          />
          <CheckField
            onClick={this.handleMulti.bind(this, 4)}
            name='multi'
            value={4}
            title='John Doe (via Twitter)'
            after='15:32'
            subTitle='John Doe (@_johndoe) mentioned you on Twitter!'
            text={TEXT}
            check={multi.indexOf(4) > -1}
          />
        </Form>
        <Form title='What is your favourite song?' multiLine>
          <RadioField
            onClick={this.handleRadioCheck.bind(this, 10)}
            name='radioVal'
            icon={<Image src="//lorempixel.com/160/160/fashion/1" width="80"/>}
            value={10}
            title='Yellow Submarine'
            after='$15'
            subTitle='Beatles'
            text={TEXT}
            check={radioVal == 10}
          />
          <RadioField
            onClick={this.handleRadioCheck.bind(this, 11)}
            name='radioVal'
            icon={<Image src="//lorempixel.com/160/160/fashion/2" width="80"/>}
            value={11}
            title="Don't Stop Me Now"
            after='$22'
            subTitle='Queen'
            text={TEXT}
            check={radioVal == 11}
          />
          <RadioField
            onClick={this.handleRadioCheck.bind(this, 12)}
            name='radioVal'
            icon={<Image src="//lorempixel.com/160/160/fashion/3" width="80"/>}
            value={12}
            title='Billie Jean'
            after='$16'
            subTitle='Michael Jackson'
            text={TEXT}
            check={radioVal == 12}
          />
        </Form>
      </Page>
    )
  }
}
  
