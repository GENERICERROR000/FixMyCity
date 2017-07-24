import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
  renderLinks () {
    console.log(this.props.authenticated)
    if (this.props.authenticated) {
      return (
        <div>
          <li key={1}>
            <Link to='/signout'>Sign Out</Link>
          </li>
          <li key={2}>
            <Link to='/issues'>Issues</Link>
          </li>
        </div>
      )
    } else {
      return (
        <div>
          <li key={1}>
            <Link to='/signin'>Sign In</Link>
          </li>
          <li key={2}>
            <Link to='/signup'>Sign Up</Link>
          </li>
        </div>
      )
    }
  }

  render () {
    return (
      <nav className='navbar navbar-light'>
        <Link to='/'><h1>FixMyCity</h1></Link>
        <ul>
          {this.renderLinks()}
        </ul>
      </nav>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Header)
