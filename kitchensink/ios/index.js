import { hashHistory } from 'react-router'
import getRoutes from './routes'
import Root from './Root'
import React from 'react'
import ReactDOM from 'react-dom'

const routes = getRoutes()

ReactDOM.render(
  <Root history={hashHistory} routes={routes} />,
  document.getElementById('root')
)
