import { Page, TransitionPages, Navbar, Form, RadioField } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class RadioFieldView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  constructor (props) {
    super(props)
    this.state = {
      special: 1,
      multi: 2
    }
  }

  handleBack () {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  handleSpecial (value) {
    this.setState({
      special: value
    })
  }

  handleMulti (value) {
    this.setState({
      multi: value
    })
  }

  render () {
    const { special, multi } = this.state
    return (
      <Page
        fix
        navbar={<Navbar
          title='单选'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Form title='单行文字的单选'>
          <RadioField onClick={::this.handleSpecial.bind(this, 1)} name='special' value={1} title='年少' check={special === 1} />
          <RadioField onClick={::this.handleSpecial.bind(this, 2)} name='special' value={2} title='多金' check={special === 2} />
          <RadioField onClick={::this.handleSpecial.bind(this, 3)} name='special' value={3} title='帅气' check={special === 3} />
          <RadioField onClick={::this.handleSpecial.bind(this, 4)} name='special' value={4} title='风流' check={special === 4} />
          <RadioField onClick={::this.handleSpecial.bind(this, 5)} name='special' value={5} title='颓废' check={special === 5} after='这是我' />
        </Form>
        <Form title='多行内容的单选' multiLine>
          <RadioField
            onClick={::this.handleMulti.bind(this, 1)}
            name='multi'
            value={1}
            title='月亮代表我的心'
            after='邓丽君'
            subTitle='你问我爱你有多深 我爱你有几分 我的情也真 我的爱也真 月亮代表我的心'
            check={multi === 1}
          />
          <RadioField
            onClick={::this.handleMulti.bind(this, 2)}
            name='multi'
            value={2}
            title='你的眼神'
            after='蔡琴'
            subTitle='像一阵细雨洒落我心底 那感觉如此神秘 我不禁抬起头看着你 而你并不露痕迹 虽然不言不语 叫人难忘记 '
            check={multi === 2}
          />
          <RadioField
            onClick={::this.handleMulti.bind(this, 3)}
            name='multi'
            value={3}
            title='十年'
            after='陈奕迅'
            subTitle='如果那两个字没有颤抖 我不会发现我难受 怎么说出口 也不过是分手 如果对于明天没有要求 牵牵手就像旅游'
            check={multi === 3}
          />
          <RadioField
            onClick={::this.handleMulti.bind(this, 4)}
            name='multi'
            value={4}
            title='有没有人告诉你'
            after='陈楚生'
            subTitle='当火车开入这座陌生的城市 那是从来就没有见过的霓虹 我打开离别时你送我的信件 忽然感到无比的思念 看不见雪的冬天不夜的城市 '
            check={multi === 4}
          />
        </Form>
      </Page>
    )
  }
}
