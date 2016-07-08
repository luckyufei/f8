import { Page, TransitionPages, Navbar, List, Block, Badge, Image } from 'jmui'
import React, { Component, PropTypes } from 'react'

export default class MediaListView extends Component {

  static contextTypes = {
    router: PropTypes.object
  };

  handleBack () {
    this.context.router.push({
      pathname: '/',
      state: TransitionPages.getState()
    })
  }

  handleClick () {
  }

  render () {
    return (
      <Page
        fix
        navbar={<Navbar
          title='媒体列表'
          left={{
            iconName: 'back',
            text: '返回',
            onClick: ::this.handleBack
          }}
      />}>
        <Block title='两行媒体表格列表' />
        <List>
          <List.Item
            icon={<Image src={require('../../images/avatar1.jpg')} />}
            title='屈原'
            subTitle='我国第一个真正的诗人，第一个浪漫主义诗歌高峰的缔造者'
            after='春秋战国'
          />
          <List.Item
            icon={<Image src={require('../../images/avatar2.jpg')} />}
            title='李白'
            subTitle='在诗歌方面超人的艺术才华，是任何一个诗人都难以望其项背的，也是公认的唐朝最伟大的浪漫主义诗人'
            after={<Badge theme='green'>诗仙</Badge>}
          />
          <List.Item
            icon={<Image src={require('../../images/avatar3.jpg')} />}
            title='杜甫'
            subTitle='是唐朝伟大的现实主义诗人，字子美，后人称为“诗圣”，其诗歌被称为“诗史”'
            after='诗圣'
          />
        </List>
        <Block title='更多文字媒体表格列表' />
        <List>
          <List.Item
            icon={<Image src={require('../../images/avatar4.jpg')} />}
            title='苏轼'
            subTitle='北宋著名的文学家，字子瞻，号东坡居士'
            text='其诗清新雄放，诗文有《东坡七集》。他在诗词方面的造诣在整个宋代无人能比。是文坛上名副其实的“十项全能”选手。'
            after='宋朝'
          />
          <List.Item
            icon={<Image src={require('../../images/avatar5.jpg')} />}
            title='陶渊明'
            subTitle='东晋著名诗人，名潜，字元亮'
            text='所作诗文多描写农村景色，以《归田园居》、《桃花源诗》为代表作。是田园诗人的鼻祖'
            after={<Badge theme='pink'>Like</Badge>}
          />
        </List>
        <Block title='带链接媒体表格列表' />
        <List>
          <List.Item
            icon={<Image src={require('../../images/avatar6.jpg')} />}
            title='王维'
            text='唐朝著名山水田园诗人，字摩诘，被誉为“诗中有画，画中有诗”'
            onClick={::this.handleClick}
          />
          <List.Item
            icon={<Image src={require('../../images/avatar7.jpg')} />}
            title='陶渊明'
            subTitle='东晋著名诗人，名潜，字元亮'
            text='所作诗文多描写农村景色，以《归田园居》、《桃花源诗》为代表作。是田园诗人的鼻祖'
            after={<Badge theme='pink'>Like</Badge>}
            onClick={::this.handleClick}
          />
        </List>
        <Block title='大图片媒体表格列表' />
        <List>
          <List.Item
            icon={<Image responsive={false} width={80} src={require('../../images/avatar8.jpg')} />}
            title='爱是一个人'
            subTitle='李行亮'
            text='床头灯还留一盏 我试着赶走孤单 以为很简单 很快就能够习惯 连忘记都变成一种期盼'
            onClick={::this.handleClick}
          />
          <List.Item
            icon={<Image responsive={false} width={80} src={require('../../images/avatar9.jpg')} />}
            title='你问我爱你有多深'
            subTitle='邓丽君'
            text='我爱你有几分 我的情也真 我的爱也真 月亮代表我的心 你问我爱你有多深 我爱你有几分 我的情不移'
            after={<Badge theme='yellow'>喜欢</Badge>}
            onClick={::this.handleClick}
          />
        </List>
      </Page>
    )
  }
}
