import React from 'react'
import { shallow, mount } from 'enzyme'
import { Navbar } from 'jmui'

describe('Navbar', () => {
  it('should work with no props', () => {
    expect(shallow(<Navbar />).is('.navbar')).to.be.true
  })

  it('should has title', () => {
    expect(shallow(<Navbar />).find('.center')).to.have.length(1)
  })

  it('called componentDidMount', () => {
    sinon.spy(Navbar.prototype, 'componentDidMount')
    mount(<Navbar title='test' />)
    expect(Navbar.prototype.componentDidMount.calledOnce).to.be.true
  })
})
