import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Layout } from 'antd'
import '../css/navbar.css'

class Navbar extends Component {
  renderLinks () {
    if (this.props.authenticated) {
      return (
        <div>
          <Link to='/signout'><Button className="navbutton">Sign Out</Button></Link>
          <Link to='/issues'><Button className="navbutton">Issues</Button></Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to='/signin'><Button className="navbutton">Sign In </Button></Link>
          <Link to='/signup'><Button className="navbutton">Sign Up</Button></Link>
        </div>
      )
    }
  }

  render () {
    return (
      <div>
        <Layout.Header className="navbar">
          <Link to='/'><div className="logo" /></Link>
          {this.renderLinks()}
        </Layout.Header>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Navbar)
