import React, { Component, PropTypes } from 'react'

export default class ImageBackground extends Component {

  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  };

  static defaultProps = {
    responsive: true,
    width: 'auto',
    height: 'auto'
  };

  render () {
    const { responsive, className, src, width, height, ...props } = this.props
    const imgStyle = {
      backgroundImage: `url(${src})`,
      width: width,
      height: height
    }
    return (<div {...props} style={imgStyle} className={className} />)
  }
}
