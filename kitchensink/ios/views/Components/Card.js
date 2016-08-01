import { Page, TransitionPages, Navbar, Toolbar, Card, Block, Image, ImageBackground, List, Badge } from 'jmui'
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
        fixNavbar
        navbar={<Navbar
          title='Cards'
          left={{
            iconName: 'back',
            text: 'Back',
            onClick: ::this.handleBack
          }}
          />}
        fixToolbar
        toolbar={
          <Toolbar>
            <Toolbar.Item href='#' className='link'>Dummy Link</Toolbar.Item>
            <Toolbar.Item href='#' className='open-popover link'>Menu</Toolbar.Item>
          </Toolbar>
        }>
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

        <Block title='Cards With List View' />
        <Card>
          <Card.Content cover>
            <List>
              <List.Item
                icon={<span className='iconfont icon-anniu' />}
                title='Link 1'
                onClick={:: this.handleClick}
              />
              <List.Item
                icon={<span className='iconfont icon-tongzhi' />}
                title='Link 2'
                onClick={:: this.handleClick}
              />
              <List.Item
                icon={<span className='iconfont icon-wenjian' />}
                title='Link 3'
                onClick={:: this.handleClick}
              />
              <List.Item
                icon={<span className='iconfont icon-wenjian' />}
                title='Link 4'
                onClick={:: this.handleClick}
              />
              <List.Item
                icon={<span className='iconfont icon-wenjian' />}
                title='Link 5'
                onClick={:: this.handleClick}
              />
            </List>
          </Card.Content>
        </Card>

        <Card>
          <Card.Header>New Releases:</Card.Header>
          <Card.Content>
            <List>
              <List.Item
                icon={<Image src='http://lorempixel.com/88/88/fashion/4' responsive={false} width='44' height='44' />}
                title='Yellow Submarine'
                subTitle='Beatles'
              />
              <List.Item
                icon={<Image src='http://lorempixel.com/88/88/fashion/5' responsive={false} width='44' height='44' />}
                title={'Don\'t Stop Me Now'}
                subTitle='Queen'
              />
              <List.Item
                icon={<Image src='http://lorempixel.com/88/88/fashion/6' responsive={false} width='44' height='44' />}
                title='Billie Jean'
                subTitle='Michael Jackson'
              />
            </List>
          </Card.Content>
          <Card.Footer>
            <span>January 20, 2015</span>
            <span>5 comments</span>
          </Card.Footer>
        </Card>
      </Page>
    )
  }
}
