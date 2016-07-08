import { Page, TransitionPages, Navbar, Block, Button } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class TransitionPagesUp extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleBack () {
    this.context.router.push({
      pathname: '/components/transitionpages',
      state: TransitionPages.getState('down')
    })
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar
          title='动画页面组－上'
          right={{
            iconName: 'close',
            onClick: ::this.handleBack
          }}
      />}>
        <Block highlight>
          <h2>你问我爱你有多深 - 邓丽君</h2>
          <p>
            我爱你有几分<br />
            我的情也真<br />
            我的爱也真<br />
            月亮代表我的心<br />
            你问我爱你有多深<br />
            我爱你有几分<br />
            我的情不移<br />
            我的爱不变<br />
            月亮代表我的心<br />
            轻轻的一个吻<br />
            已经打动我的心<br />
            深深的一段情<br />
            教我思念到如今<br />
            你问我爱你有多深<br />
            我爱你有几分<br />
            你去想一想<br />
            你去看一看<br />
            月亮代表我的心<br />
            ......<br />
            ......<br />
            <br />
            轻轻的一个吻<br />
            已经打动我的心<br />
            深深的一段情<br />
            教我思念到如今<br />
            你问我爱你有多深<br />
            我爱你有几分<br />
            你去想一想<br />
            你去看一看<br />
            月亮代表我的心<br />
            你去想一想<br />
            你去看一看<br />
            月亮代表我的心<br />
          </p>
        </Block>
        <Block>
          <Button fill big theme='green' onClick={::this.handleBack}>关闭</Button>
        </Block>
      </Page>
    )
  }
}
