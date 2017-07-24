import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from '../components/navbar'
import Signin from '../components/auth/signin'
import Signout from '../components/auth/signout'
import Signup from '../components/auth/signup'
import RequireAuth from '../components/auth/require_auth'
import Home from '../components/home'
import Issues from '../components/issues'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Route path='/' component={Navbar} />
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signout' component={Signout} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/issues' component={RequireAuth(Issues)} />
        </div>
      </Router>
    )
  }
}
