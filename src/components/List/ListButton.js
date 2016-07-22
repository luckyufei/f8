import React, {Component, PropTypes} from 'react'
import {getThemes} from '../../utils/theme'
import classNames from 'classnames'

const ListButton = ({href, text, children, theme, className}) => {
  return (
    <li className={className}>
      <a className={classNames("list-button item-link", { [`color-${theme}`]: !!theme }) }>{text || children}</a>
    </li>
  )
}
ListButton.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.oneOf(getThemes())
}

export default ListButton
