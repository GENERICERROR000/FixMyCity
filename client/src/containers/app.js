import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from '../components/navbar'
import Signin from '../components/auth/signin'
import Signout from '../components/auth/signout'
import Signup from '../components/auth/signup'
import RequireAuth from '../components/auth/require_auth'
import Home from '../components/home'
import Issues from '../containers/issues'
import NotFound from '../components/404'
import { checkToken } from '../actions/index'

class App extends Component {

  componentWillMount() {
    this.props.checkToken()
  }

  render () {
    return (
      <Router>
        <div>
          <Route path='/' component={Navbar} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signout' component={Signout} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/issues' component={RequireAuth(Issues)} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    checkToken: checkToken
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
