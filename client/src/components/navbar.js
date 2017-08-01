import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'
import logo from '../media/logo.png'
import '../css/navbar.css'

class Navbar extends Component {
  renderLinks () {
    if (this.props.authenticated) {
      return (
        <Menu.Item position='right'>
          <Link to='/signout'><Button className="nav-button">Sign Out</Button></Link>
          <Link to='/issues'><Button className="nav-button">Issues</Button></Link>
          <Link to='/data'><Button className="nav-button">Data</Button></Link>
        </Menu.Item>
      )
    } else {
      return (
        <Menu.Item position='right'>
          <Link to='/signin'><Button className="nav-button">Sign In </Button></Link>
          <Link to='/signup'><Button className="nav-button">Sign Up</Button></Link>
        </Menu.Item>
      )
    }
  }

  render () {
    return (
      <Menu className="navbar" secondary>
        <Menu.Item fitted>
          <Link to='/'><img className="logo" src={logo} /></Link>
        </Menu.Item>
        {this.renderLinks()}
      </Menu>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(Navbar)
