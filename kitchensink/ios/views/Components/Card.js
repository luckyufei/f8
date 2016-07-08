import { Page, TransitionPages, Navbar, Card, Block, Image, List, Badge } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class CardView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleBack () {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  handleClick () {}

  render () {
    return (
      <Page
        fix
        navbar={<Navbar
          title='卡片列表'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block title='全元素卡片列表' />
        <Card>
          <Card.Header>春夜喜雨</Card.Header>
          <Card.Content>
            好雨知时节，当春乃发生。随风潜入夜，润物细无声。野径云俱黑，江船火独明。晓看红湿处，花重锦官城。
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Link>赞</Card.Footer.Link>
            <Card.Footer.Link>分享</Card.Footer.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header>春望</Card.Header>
          <Card.Content>
            国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。烽火连三月，家书抵万金。白头搔更短，浑欲不胜簪。
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Link>赞</Card.Footer.Link>
            <Card.Footer.Link>分享</Card.Footer.Link>
          </Card.Footer>
        </Card>
        <Block title='图片卡片列表' />
        <Card>
          <Card.Header>魅力都市</Card.Header>
          <Card.Content cover>
            <Image src={require('../../images/cover1.jpg')} />
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Link>赞</Card.Footer.Link>
            <Card.Footer.Link>分享</Card.Footer.Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header className='kscardheader'>
            <Image src={require('../../images/cover1.jpg')} />
          </Card.Header>
          <Card.Content>
            喀纳斯湖，又称哈纳斯湖，中国新疆阿勒泰地区布尔津县北部一著名淡水湖，位于阿尔泰山脉中，面积45.73平方公里，平均水深120米，最深处达到188.5米，蓄水量达53.8亿立方米。外形呈月牙状，被推测为古冰川强烈运动阻塞山谷积水而成。喀纳斯湖湖中传说有湖怪“大红鱼”出没，据称身长可达到10米，有科学家推测为大型淡水食肉鱼类哲罗鲑，但未得到实际观测支持。该湖风景优美，四周林木茂盛，主要居民为图瓦人，为中国国家5A级旅游景区。
          </Card.Content>
          <Card.Footer>
            <Card.Footer.Link>赞</Card.Footer.Link>
            <Card.Footer.Link>分享</Card.Footer.Link>
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
                onClick={::this.handleClick}
              />
              <List.Item
                icon={<span className='iconfont icon-tongzhi' />}
                title='通知'
                after={<Badge theme='green'>2</Badge>}
                onClick={::this.handleClick}
              />
              <List.Item
                icon={<span className='iconfont icon-wenjian' />}
                title='文件'
                after='新建文件'
                onClick={::this.handleClick}
              />
            </List>
          </Card.Content>
        </Card>
      </Page>
    )
  }
}
