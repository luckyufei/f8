import { Page, TransitionPages, Navbar, Form, StaticField, Picker, Block, Button } from 'jmui'
import React, { Component, PropTypes } from 'react'

const singleValues = ['李白', '杜甫', '屈原', '曹植', '白居易', '杜牧', '李清照', '苏轼', '柳宗元', '陆游']
const twoValues = [
  {
    value: 'tang',
    text: '唐',
    childs: ['李白', '杜甫', '白居易', '杜牧', '李贺', '王勃', '王维', '孟浩然']
  }, {
    value: 'song',
    text: '宋',
    childs: ['苏轼', '柳宗元', '李清照', '王安石', '柳永']
  }, {
    value: 'other',
    text: '其他',
    childs: ['曹植', '屈原', '贾谊', '纳兰性德', '关汉卿']
  }
]

export default class PickerView extends Component {

  static contextTypes = {
    router: PropTypes.object,
    ui: PropTypes.object
  };

  constructor (props) {
    super(props)
    this.state = {
      singleSelect: null,
      twoSelect: null
    }
  }

  handleBack () {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  handleSinglePicker (value) {
    this.setState({
      singleSelect: value
    })
  }

  handleTwoPicker (value) {
    this.setState({
      twoSelect: value
    })
  }

  handleClose () {
    this.context.ui.addNotification({
      title: '提示',
      message: '选择器已被关闭'
    })
  }

  handleTextFieldFocus () {
    this.context.ui.showPicker({
      doneText: '完成',
      onSelect: ::this.handleSinglePicker,
      values: singleValues,
      selectValue: this.state.singleSelect
    })
  }

  handleTextFieldFocusCallback () {
    this.context.ui.showPicker({
      doneText: '完成',
      onSelect: ::this.handleSinglePicker,
      values: singleValues,
      selectValue: this.state.singleSelect,
      onClose: ::this.handleClose
    })
  }

  handleTextFieldTwoFocus () {
    this.context.ui.showPicker({
      doneText: '搞定',
      onSelect: ::this.handleTwoPicker,
      values: twoValues,
      selectValue: this.state.twoSelect
    })
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar
          title='选择器'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Form title='由表单中TextField触发选择'>
          <StaticField
            icon={<span className='iconfont icon-yonghu'></span>}
            label='攻城狮'
            value={this.state.singleSelect ? this.state.singleSelect.text : ''}
            placeholder='请选择一位来爱爱'
            onClick={::this.handleTextFieldFocus}
          />
        </Form>
        <Form title='由表单中TextField触发，关闭后回调'>
          <StaticField
            icon={<span className='iconfont icon-yonghu'></span>}
            label='程序猿'
            placeholder='请选择一位来Review'
            value={this.state.singleSelect ? this.state.singleSelect.text : ''}
            onClick={::this.handleTextFieldFocusCallback}
          />
        </Form>
        <Form title='由TextField触发，两列关联选择，自定义选择器文字'>
          <StaticField
            icon={<span className='iconfont icon-yonghu'></span>}
            label='诗人'
            value={this.state.twoSelect ? `${this.state.twoSelect.text} ${this.state.twoSelect.child.text}` : ''}
            placeholder='请选择朝代和诗人'
            onClick={::this.handleTextFieldTwoFocus}
          />
        </Form>
        <Block title='内联选择器' highlight padding={false}>
          <Picker
            inline
            values={twoValues}
            selectValue={this.state.twoSelect}
            onSelect={::this.handleTwoPicker}
            />
        </Block>
        <Block title='由按钮点击触发，两列关联选择'>
          <Button theme='orange' fill big onClick={::this.handleTextFieldTwoFocus}>亲，来选一个中意的领回家</Button>
        </Block>
      </Page>
    )
  }
}
