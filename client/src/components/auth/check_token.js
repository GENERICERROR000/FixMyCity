import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { checkToken } from '../../actions/index'

export default (CandidateComponent) => {
  class CheckToken extends Component {

    componentWillMount() {
      this.props.checkToken()
    }

    componentWillUpdate(nextProps) {
      this.props.checkToken()
    }

    render() {
      return <CandidateComponent {...this.props} />
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      checkToken: checkToken
    }, dispatch)
  }

  return connect(null, mapDispatchToProps)(CheckToken)
}
