import { Page, TransitionPages, Navbar, Block, Form, List, NumberInput, StaticField } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class NumberFieldView extends Component {

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
          title='数字输入'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block title='独立数字输入'>
          <NumberInput min={1} max={99} />
        </Block>
        <Block title='嵌入在列表项中' />
        <List>
          <List.Item
            icon={<span className='iconfont icon-jiahao' />}
            title='芳龄几何'
            after={<NumberInput min={16} value={18} max={28} />}
          />
        </List>
        <Block title='嵌入在媒体列表项中' />
        <List>
          <List.Item
            icon={<span className='iconfont icon-jiahao' />}
            title='我是一个小数'
            subTitle='每次跳0.01'
            after={<NumberInput min={0} max={99} value={0.34} step={0.01} />}
          />
        </List>
        <Form title='嵌入在表单静态元素中'>
          <StaticField label='我每次跳5' value={<NumberInput min={1} max={1000} step={5} />} />
        </Form>
      </Page>
    )
  }
}
