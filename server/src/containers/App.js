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
      return this.props.issues.map((issue, i) => {
        return (
          <div key={i}>
            <h2>{issue.posted_by}</h2>
            <h4>{issue.posted_on}</h4>
            <h4>{issue.tweet_content}</h4>
          </div>
        )
      })
    } else {
      return "Loading..."
    }
  }

  render() {
    return (
      <div>
        <h1>FixMyCity</h1>
        {this.loading()}
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
