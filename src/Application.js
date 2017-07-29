/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import 'normalize.css'
import './styles/global.css'

import Homepage from './pages/Homepage'
import NoMatch from './pages/NoMatch'

const Application = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
)

export default Application
