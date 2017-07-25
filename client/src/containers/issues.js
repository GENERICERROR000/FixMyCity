import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Layout } from 'antd'
import { getIssues } from '../actions/index'
import Issue from '../components/issue'
import '../css/issues.css'


// TODO: TAKE IN FILTER OPTION THAT IS PASSED TO GETISSUES() SO GET REQ IS FILTERED

class Issues extends Component {

  componentWillMount() {
    this.props.getIssues()
  }

  loading = () => {
    if (this.props.issues[0]) {
      return this.props.issues.map((issue, i) => { return <Issue key={i} data={issue}/> })
    } else {
      return "Loading..."
    }
  }

  render() {
    return (
      <div>
        <div className="filter-container">

        </div>
        <div className="content-container" >
          <div className="content" >
            {this.loading()}
            <hr />
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Issues)
