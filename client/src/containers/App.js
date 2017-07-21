import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getIssues } from '../actions/index'

class App extends Component {

  componentWillMount() {
    this.props.getIssues()
  }

  loading = () => {
    if (this.props.issues[0]) {
      return this.props.issues[0].name
    } else {
      return "Loading..."
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>FixMyCity</h1>
        <h2>{this.loading()}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {issues: state.issues}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getIssues: getIssues
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
