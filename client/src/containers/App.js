import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signin from '../components/auth/signin'
import Signout from '../components/auth/signout'
import Signup from '../components/auth/signup'
import RequireAuth from '../components/auth/require_auth'
import Issues from '../components/issues'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/' component={Issues} />
          <Route path='/signin' component={Signin} />
          <Route path='/signout' component={Signout} />
          <Route path='/signup' component={Signup} />
          <Route path='/issues' component={RequireAuth(Issues)} />
        </div>
      </Router>
    )
  }
}

// TODO: CHANGE ROOT PATH TO REAL HOMEPAGE
