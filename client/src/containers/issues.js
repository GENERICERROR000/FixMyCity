import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { getIssues } from '../actions/index'
import Issue from '../components/issue'
import FilterBar from '../components/filter_bar'
import '../css/issues.css'


// TODO: TAKE IN FILTER OPTION THAT IS PASSED TO GETISSUES() SO GET REQ IS FILTERED

class Issues extends Component {

  loading = () => {
    if (this.props.issues[0]) {
      return this.props.issues.map((issue, i) => { return <Issue key={i} data={issue}/> })
    } else {
      return <h2>Please Select Filters and/or Click "Submit"</h2>
    }
  }

  applyFilter = (filterInput) => {
    // this.props.getIssues(filterInput)
    this.props.getIssues(filterInput)
  }

  // TODO: Make sure content box is same size as filter box
  render() {
    return (
      <div>
        <FilterBar applyFilter={this.applyFilter} />
        <Container className="content">
          {this.loading()}
          <hr />
        </Container>
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
