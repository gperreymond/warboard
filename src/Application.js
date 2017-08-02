/* eslint jsx-quotes: ["error", "prefer-double"] */

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import 'normalize.css'
import './styles/global.css'

import Master from './pages/Master'
import Editor from './pages/Editor'
import NoMatch from './pages/NoMatch'

const Application = () => (
  <Router>
    <Switch>
      <Route exact path="/master" component={Master} />
      <Route exact path="/editor" component={Editor} />
      <Route component={NoMatch} />
    </Switch>
  </Router>
)

export default Application
