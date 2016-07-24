import { Page, TransitionPages, Navbar, Card, Block, Image, ImageBackground, List, Badge } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class CardView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleBack() {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  handleClick() { }

  render() {
    return (
      <Page
        fix
        navbar={<Navbar
          title='Cards'
          left={{
            iconName: 'back',
            text: 'Back',
            onClick: ::this.handleBack
          }}
          />}>
        <Block>Cards, along with List View, is a one more great way to contain and orginize your information.Cards contains unique related data, for example, a photo, text, and link all about a single subject.Cards are typically an entry point to more complex and detailed information.</Block>

        <Block title='Simple Cards' />
        <Card>
          <Card.Content>This is simple card with plain text.But card could contain its own header, footer, list view, image, and any elements inside.</Card.Content>
        </Card>
        <Card>
          <Card.Header>Card header</Card.Header>
          <Card.Content>This is simple card with plain text.But card could contain its own header, footer, list view, image, and any elements inside.</Card.Content>
          <Card.Footer>Card Footer</Card.Footer>
        </Card>
        <Card>
          <Card.Content>Another card.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet.Mauris aliquet magna justo.</Card.Content>
        </Card>

        <Block title='Styled Cards' />
        <Card className="ks-card-header-pic">
          <ImageBackground height="150px" src="http://lorempixel.com/1000/600/nature/3/" valign="bottom" className="card-header color-white no-border" />
          <Card.Content>
            <p className="color-gray">Posted on January 21, 2015</p>
            <p>This is simple card with plain text.But card could contain its own header, footer, list view, image, and any elements inside.</p>
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Link>Link</Card.Footer.Link>
            <Card.Footer.Link>Read More</Card.Footer.Link>
          </Card.Footer>
        </Card>

        <Block title='Facebook Cards' />
        <Card className='ks-facebook-card'>
          <Card.Header className='no-border'>
            <div className='ks-facebook-avatar'><Image responsive={false} width='34' height='34' src='http://lorempixel.com/68/68/people/1/' /></div>
            <div className='ks-facebook-name'>John Doe</div>
            <div className='ks-facebook-date'>Monday at 2:15 PM</div>
          </Card.Header>
          <ImageBackground height='200px' src='http://lorempixel.com/1000/600/nature/3/' valign='bottom className='card-header color-white no-border />
          <Card.Footer>
            <Card.Footer.Link>Link</Card.Footer.Link>
            <Card.Footer.Link>Comment</Card.Footer.Link>
            <Card.Footer.Link>Read More</Card.Footer.Link>
          </Card.Footer>
        </Card>

        <Block title='Facebook Cards' />
        <Card className='ks-facebook-card'>
          <Card.Header>
            <div className='ks-facebook-avatar'><Image responsive={false} width='34' height='34' src='http://lorempixel.com/68/68/people/1/' /></div>
            <div className='ks-facebook-name'>John Doe</div>
            <div className='ks-facebook-date'>Monday at 2:15 PM</div>
          </Card.Header>
          <Card.Content>
            <p>What a nice photo i took yesterday!</p>
            <ImageBackground height='200px' src='http://lorempixel.com/1000/600/nature/3/' valign='bottom className='card-header color-white no-border />
            <p className='color-gray'>Likes: 112  Comments: 43</p>
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Link>Link</Card.Footer.Link>
            <Card.Footer.Link>Comment</Card.Footer.Link>
            <Card.Footer.Link>Read More</Card.Footer.Link>
          </Card.Footer>
        </Card>

        <Block title='卡片中嵌入表格列表' />
        <Card>
          <Card.Content cover>
            <List>
              <List.Item
                icon={<span className='iconfont icon-anniu' />}
                title='按钮'
                after='Button'
                onClick={:: this.handleClick}
              />
              <List.Item
                icon={<span className='iconfont icon-tongzhi' />}
                title='通知'
                after={<Badge theme='green'>2</Badge>}
                onClick={:: this.handleClick}
              />
              <List.Item
                icon={<span className='iconfont icon-wenjian' />}
                title='文件'
                after='新建文件'
                onClick={:: this.handleClick}
              />
            </List>
          </Card.Content>
        </Card>
      </Page>
    )
  }
}
