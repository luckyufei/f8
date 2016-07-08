import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

export default class InfiniteScroll extends Component {

  static propTypes = {
    pageStart: React.PropTypes.number,
    hasMore: React.PropTypes.bool,
    loadMore: React.PropTypes.func.isRequired,
    threshold: React.PropTypes.number,
    loader: React.PropTypes.node.isRequired,
    isLoading: PropTypes.bool,
    children: PropTypes.node
  }

  static defaultProps = {
    pageStart: 0,
    hasMore: false,
    threshold: 250
  };

  componentDidMount () {
    this.attachScrollListener()
  }

  componentWillUnmount () {
    this.detachScrollListener()
  }

  render () {
    const { children, hasMore, isLoading, loader } = this.props
    return (
      <div style={{height: '100%', overflowY: 'auto'}}>
        {children}
        {hasMore && isLoading && loader}
      </div>
    )
  }

  scrollListener () {
    const { hasMore, isLoading, threshold } = this.props
    if (!hasMore || isLoading) {
      return
    }
    let el = ReactDOM.findDOMNode(this)
    if (el.scrollTop + el.offsetHeight + threshold > el.scrollHeight) {
      this.props.loadMore()
    }
  }

  attachScrollListener () {
    ReactDOM.findDOMNode(this).addEventListener('scroll', ::this.scrollListener)
  }

  detachScrollListener () {
    ReactDOM.findDOMNode(this).removeEventListener('scroll', ::this.scrollListener)
  }
}
