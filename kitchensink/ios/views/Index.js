import React, { Component, PropTypes } from 'react'
import { Page, Navbar, List, Block, Button, Badge } from 'jmui'

export default class Index extends Component {

  static propTypes = {};

  static contextTypes = {
    router: PropTypes.object
  };

  handleJump (pathname) {
    this.context.router.push(pathname)
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar title='Framework8' />}>
        <Block title='Welcome To Framework8' />
        <Button href="#">About Framework8</Button>
        <List title='Framework7 Kitchen Sink'>
          <List.Group>
            <List.Item
              icon={<span className='iconfont icon-folding' />}
              title='Accordion'
              onClick={this.handleJump.bind(this, '/components/accordion')}
              />
            <List.Item
              icon={<span className='iconfont icon-folding' />}
              title='Autocomplete'
              after={<Badge theme='green'>Todo</Badge>}
              onClick={this.handleJump.bind(this, '/components/accordion')}
              />
            <List.Item
              icon={<span className='iconfont icon-folding' />}
              title='Calendar/Datepicker'
              after={<Badge theme='green'>Todo</Badge>}
              onClick={this.handleJump.bind(this, '/components/accordion')}
              />
            <List.Item
              icon={<span className='iconfont icon-card' />}
              title='Cards'
              onClick={this.handleJump.bind(this, '/components/card')}
              />
            <List.Item
              icon={<span className='iconfont icon-folding' />}
              title='Contacts List'
              after={<Badge theme='green'>Todo</Badge>}
              onClick={this.handleJump.bind(this, '/components/accordion')}
              />
          </List.Group>
        </List>
        <List>
          <List.Group title='组件'>
            <List.Item
              icon={<span className='iconfont icon-anniu' />}
              title='按钮'
              after='Button'
              onClick={this.handleJump.bind(this, '/components/button')}
              />
            <List.Item
              icon={<span className='iconfont icon-biaoqian' />}
              title='图标'
              after='Icon'
              onClick={this.handleJump.bind(this, '/components/icon')}
              />
            <List.Item
              icon={<span className='iconfont icon-iconfonttupian' />}
              title='图片'
              after='Image'
              onClick={this.handleJump.bind(this, '/components/image')}
              />
            <List.Item
              icon={<span className='iconfont icon-badge' />}
              title='徽标'
              after='Badge'
              onClick={this.handleJump.bind(this, '/components/badge')}
              />
          </List.Group>
          <List.Group title='表单'>
            <List.Item
              icon={<span className='iconfont icon-biaodan' />}
              title='表单元素'
              after='Form'
              onClick={this.handleJump.bind(this, '/components/form')}
              />
            <List.Item
              icon={<span className='iconfont icon-danxuan' />}
              title='单选列表'
              after='RadioField'
              onClick={this.handleJump.bind(this, '/components/radiofield')}
              />
            <List.Item
              icon={<span className='iconfont icon-duoxuan12px' />}
              title='多选列表'
              after='CheckField'
              onClick={this.handleJump.bind(this, '/components/checkfield')}
              />
            <List.Item
              icon={<span className='iconfont icon-jiahao' />}
              title='数字输入'
              after='NumberField'
              onClick={this.handleJump.bind(this, '/components/numberfield')}
              />
            <List.Item
              icon={<span className='iconfont icon-xuanze' />}
              title='选择器'
              after='Picker'
              onClick={this.handleJump.bind(this, '/components/picker')}
              />
          </List.Group>
          <List.Group title='导航'>
            <List.Item
              icon={<span className='iconfont icon-daohang' />}
              title='导航条'
              after='Navbar'
              onClick={this.handleJump.bind(this, '/components/navbar')}
              />
            <List.Item
              icon={<span className='iconfont icon-tab' />}
              title='标签栏'
              after='Tabbar'
              onClick={this.handleJump.bind(this, '/components/tabbar')}
              />
            <List.Item
              icon={<span className='iconfont icon-dibutiao' />}
              title='工具栏'
              after='Toolbar'
              onClick={this.handleJump.bind(this, '/components/toolbar')}
              />
          </List.Group>
          <List.Group title='列表'>
            <List.Item
              icon={<span className='iconfont icon-list' />}
              title='表格列表'
              after='List'
              onClick={this.handleJump.bind(this, '/components/list')}
              />
            <List.Item
              icon={<span className='iconfont icon-iconfonttupian' />}
              title='媒体列表'
              after='MediaList'
              onClick={this.handleJump.bind(this, '/components/medialist')}
              />
            <List.Item
              icon={<span className='iconfont icon-card' />}
              title='卡片列表'
              after='Card'
              onClick={this.handleJump.bind(this, '/components/card')}
              />
          </List.Group>
          <List.Group title='交互'>
            <List.Item
              icon={<span className='iconfont icon-tongzhi' />}
              title='通知'
              after='Notification'
              onClick={this.handleJump.bind(this, '/components/notification')}
              />
            <List.Item
              icon={<span className='iconfont icon-loader' />}
              title='指示器'
              after='Preloader'
              onClick={this.handleJump.bind(this, '/components/preloader')}
              />
          </List.Group>
          <List.Group title='容器'>
            <List.Item
              icon={<span className='iconfont icon-fenleizukuaier' />}
              title='区块'
              after='Block'
              onClick={this.handleJump.bind(this, '/components/block')}
              />
            <List.Item
              icon={<span className='iconfont icon-wanggetu' />}
              title='网格'
              after='Grid'
              onClick={this.handleJump.bind(this, '/components/grid')}
              />
            <List.Item
              icon={<span className='iconfont icon-folding' />}
              title='折叠面板'
              after='Accordion'
              onClick={this.handleJump.bind(this, '/components/accordion')}
              />
          </List.Group>
          <List.Group title='布局'>
            <List.Item
              icon={<span className='iconfont icon-shouji' />}
              title='视图'
              after='View'
              onClick={this.handleJump.bind(this, '/components/view')}
              />
            <List.Item
              icon={<span className='iconfont icon-pages' />}
              title='静态页面组'
              after='Pages'
              onClick={this.handleJump.bind(this, '/components/pages')}
              />
            <List.Item
              icon={<span className='iconfont icon-qiehuan' />}
              title='动画页面组'
              after='TransitionPages'
              onClick={this.handleJump.bind(this, '/components/transitionpages')}
              />
            <List.Item
              icon={<span className='iconfont icon-wenjian' />}
              title='页面'
              after='Page'
              onClick={this.handleJump.bind(this, '/components/page')}
              />
          </List.Group>
        </List>
      </Page>
    )
  }
}
