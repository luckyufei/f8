import React, { Component, PropTypes } from 'react'
import { Page, Navbar, List, Block, Button, Badge } from 'jmui'

export default class Index extends Component {

  static propTypes = {};

  static contextTypes = {
    router: PropTypes.object
  };

  handleJump(pathname) {
    this.context.router.push(pathname)
  }

  render() {
    const todo = <Badge theme='green'>Todo</Badge>;
    return (
      <Page
        fix
        navbar={<Navbar title='Framework8' />}>
        <Block title='Welcome To Framework8' />
        <Button href="#">About Framework8</Button>
        <Block title='Framework8 Kitchen Sink' />
        <List title='Framework7 Kitchen Sink'>
            <List.Item
              icon={<span className='iconfont icon-folding' />}
              title='Accordion'
              onClick={this.handleJump.bind(this, '/components/accordion') }
              />
            <List.Item
              icon={<span className='iconfont icon-folding' />}
              title='Autocomplete'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/accordion') }
              />
            <List.Item
              icon={<span className='iconfont icon-folding' />}
              title='Calendar/Datepicker'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/accordion') }
              />
            <List.Item
              icon={<span className='iconfont icon-card' />}
              title='Cards'
              onClick={this.handleJump.bind(this, '/components/card') }
              />
            <List.Item
              icon={<span className='iconfont icon-folding' />}
              title='Contacts List'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/accordion') }
              />
            <List.Item
              icon={<span className='iconfont icon-biaodan' />}
              title='Forms'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/form') }
              />
            <List.Item
              icon={<span className='iconfont icon-wanggetu' />}
              title='Grid'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/grid') }
              />
            <List.Item
              icon={<span className='iconfont icon-wanggetu' />}
              title='Infinite Scroll'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/infinite-scroll') }
              />
            <List.Item
              icon={<span className='iconfont icon-wanggetu' />}
              title='Lazy Load Images'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/laze-load') }
              />
           <List.Item
              icon={<span className='iconfont icon-list' />}
              title='ListView'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/list') }
              />
            <List.Item
              icon={<span className='iconfont icon-list' />}
              title='Login Screen'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/login-screen') }
              />
            <List.Item
              icon={<span className='iconfont icon-iconfonttupian' />}
              title='MediaList'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/medialist') }
              /> 
            <List.Item
              icon={<span className='iconfont icon-iconfonttupian' />}
              title='Message'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/message') }
              />  
            <List.Item
              icon={<span className='iconfont icon-iconfonttupian' />}
              title='Modal'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/modal') }
              />    
             <List.Item
              icon={<span className='iconfont icon-daohang' />}
              title='NavBars and ToolBars'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/navbar-toolbar') }
              />
            <List.Item
              icon={<span className='iconfont icon-tongzhi' />}
              title='Notifications'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/notification') }
              />  
            <List.Item
              icon={<span className='iconfont icon-tongzhi' />}
              title='Photo Browser'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/photo-browser') }
              />  
            <List.Item
              icon={<span className='iconfont icon-tongzhi' />}
              title='Picker'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/picker') }
              />  
            <List.Item
              icon={<span className='iconfont icon-tongzhi' />}
              title='Popover'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/popover') }
              />  
            <List.Item
              icon={<span className='iconfont icon-loader' />}
              title='Preloader'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/preloader') }
              />  
            <List.Item
              icon={<span className='iconfont icon-loader' />}
              title='Progress Bar'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/progressbar') }
              />  
            <List.Item
              icon={<span className='iconfont icon-loader' />}
              title='Pull To Refresh'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/pull-to-refresh') }
              />  
            <List.Item
              icon={<span className='iconfont icon-loader' />}
              title='Search Bar'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/searchbar') }
              />  
            <List.Item
              icon={<span className='iconfont icon-loader' />}
              title='Side Panels'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/side-panels') }
              />  
            <List.Item
              icon={<span className='iconfont icon-loader' />}
              title='Sortable List'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/sortable-list') }
              />  
            <List.Item
              icon={<span className='iconfont icon-loader' />}
              title='Swipe To Delete'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/swipe-to-delete') }
              />  
            <List.Item
              icon={<span className='iconfont icon-loader' />}
              title='Swiper Slider'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/swiper-slider') }
              />  
            <List.Item
              icon={<span className='iconfont icon-loader' />}
              title='Tabs'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/tabs') }
              />  
            <List.Item
              icon={<span className='iconfont icon-loader' />}
              title='Virtual List'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/virtual-list') }
              />  
        </List>
        <List>
         <List.Item
              icon={<span className='iconfont icon-fenleizukuaier' />}
              title='Color Themes'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/color-themes') }
              />
            <List.Item
              icon={<span className='iconfont icon-folding' />}
              title='Dynamically Generated Content'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/dynamical-content') }
              />
        </List>
        <List>
          <List.Item
              icon={<span className='iconfont icon-fenleizukuaier' />}
              title='Transitions And Effects'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/transitions') }
              />
          <List.Item
              icon={<span className='iconfont icon-fenleizukuaier' />}
              title='Core Features'
              after={todo}
              onClick={this.handleJump.bind(this, '/components/core-features') }
              />
        </List>
        <List>
            <List.Item
              icon={<span className='iconfont icon-biaoqian' />}
              title='图标'
              after='Icon'
              onClick={this.handleJump.bind(this, '/components/icon') }
              />
            <List.Item
              icon={<span className='iconfont icon-iconfonttupian' />}
              title='图片'
              after='Image'
              onClick={this.handleJump.bind(this, '/components/image') }
              />
            <List.Item
              icon={<span className='iconfont icon-badge' />}
              title='徽标'
              after='Badge'
              onClick={this.handleJump.bind(this, '/components/badge') }
              />
            <List.Item
              icon={<span className='iconfont icon-shouji' />}
              title='视图'
              after='View'
              onClick={this.handleJump.bind(this, '/components/view') }
              />
            <List.Item
              icon={<span className='iconfont icon-pages' />}
              title='静态页面组'
              after='Pages'
              onClick={this.handleJump.bind(this, '/components/pages') }
              />
            <List.Item
              icon={<span className='iconfont icon-qiehuan' />}
              title='动画页面组'
              after='TransitionPages'
              onClick={this.handleJump.bind(this, '/components/transitionpages') }
              />
            <List.Item
              icon={<span className='iconfont icon-wenjian' />}
              title='页面'
              after='Page'
              onClick={this.handleJump.bind(this, '/components/page') }
              />
        </List>
      </Page>
    )
  }
}
