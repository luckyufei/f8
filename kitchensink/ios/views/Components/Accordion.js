import { Page, TransitionPages, Navbar, Block, Accordion, List } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class AccordionView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleBack() {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  render() {
    return (
      <Page
        fix
        navbar={<Navbar
          title='Accordion'
          left={{
            iconName: 'back',
            text: 'Back',
            onClick: ::this.handleBack
          }}
          />}>
        <Block title='List View Accordion' />
        <Accordion>
          <Accordion.Item title='Lorem Ipsum'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
          </Accordion.Item>
          <Accordion.Item title="Nested List">
            <List>
              <List.Item
                icon={<span className='iconfont icon-anniu' />}
                title='Item 1'
                />
              <List.Item
                icon={<span className='iconfont icon-tongzhi' />}
                title='Item 2'
                />
              <List.Item
                icon={<span className='iconfont icon-wenjian' />}
                title='Item 3'
                />
              <List.Item
                icon={<span className='iconfont icon-wenjian' />}
                title='Item 4'
                />
            </List>
          </Accordion.Item>
          <Accordion.Item title='Integer semper'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
          </Accordion.Item>
        </Accordion>
        <Block title='Inset Accordion' />
        <Accordion inset>
          <Accordion.Item title='Lorem Ipsum'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
          </Accordion.Item>
          <Accordion.Item title="Nested List">
            <List>
              <List.Item
                icon={<span className='iconfont icon-anniu' />}
                title='Item 1'
                />
              <List.Item
                icon={<span className='iconfont icon-tongzhi' />}
                title='Item 2'
                />
              <List.Item
                icon={<span className='iconfont icon-wenjian' />}
                title='Item 3'
                />
              <List.Item
                icon={<span className='iconfont icon-wenjian' />}
                title='Item 4'
                />
            </List>
          </Accordion.Item>
          <Accordion.Item title='Integer semper'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum id neque nec commodo. Sed vel justo at turpis laoreet pellentesque quis sed lorem. Integer semper arcu nibh, non mollis arcu tempor vel. Sed pharetra tortor vitae est rhoncus, vel congue dui sollicitudin. Donec eu arcu dignissim felis viverra blandit suscipit eget ipsum.</p>
          </Accordion.Item>
        </Accordion>

        <Accordion title='Custom Styled Accordion'>
        </Accordion>
      </Page>
    )
  }
}
