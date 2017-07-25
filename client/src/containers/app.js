import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/navbar'
import Signin from '../components/auth/signin'
import Signout from '../components/auth/signout'
import Signup from '../components/auth/signup'
import RequireAuth from '../components/auth/require_auth'
import CheckToken from '../components/auth/check_token'
import Home from '../components/home'
import Issues from '../containers/issues'
import NotFound from '../components/404'


class App extends Component {

  render () {
    return (
      <Router>
        <div>
          <Route path='/' component={Navbar} />
          <Switch>
            <Route exact path='/' component={CheckToken(Home)} />
            <Route exact path='/signin' component={CheckToken(Signin)} />
            <Route exact path='/signout' component={Signout} />
            <Route exact path='/signup' component={CheckToken(Signup)} />
            <Route exact path='/issues' component={RequireAuth(Issues)} />
            <Route path='*' component={CheckToken(NotFound)} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
