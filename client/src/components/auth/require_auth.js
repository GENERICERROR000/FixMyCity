import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default (CandidateComponent) => {
  //use the context property to access the router history
  class Authentication extends Component {
    static contextTypes = { // TODO: HOW DIS WORK? WHAT DIS DO?
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.history.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push('/')
      }
    }

    render() {
      return <CandidateComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return { authenticated: state.authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}
