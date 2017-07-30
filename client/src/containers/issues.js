import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'
import { getIssues, displayIssue, clearIssues } from '../actions/index'
import Issue from '../components/issue'
import FilterBar from '../components/filterBar'
import DisplayIssue from '../components/displayIssue'
import '../css/issues.css'

class Issues extends Component {
  componentWillUnmount = () => {
    this.props.clearIssues()
  }

  loadingTweets = () => {
    if (this.props.issues[0]) {
      return this.props.issues.map((issue, i) => { return <Issue key={i} data={issue} displayIssue={this.displayIssue}/> })
    } else {
      return <h2>Please Select Filters and/or Click "Submit"</h2>
    }
  }

  displayIssue = (data) => {
    this.props.displayIssue(data)
  }

  loadingMoreInfo = () => {
    if (this.props.issue) {
      return <DisplayIssue data={this.props.issue}/>
    } else {
      return (
        <div>
          <h2>Please Select A Tweet To See More Info</h2>
          <div className="divider" />
        </div>
      )
    }
  }

  applyFilter = (filterInput) => {
    this.props.getIssues(filterInput)
  }

  render = () => {
    return (
      <div>
        <FilterBar applyFilter={this.applyFilter} />
        <Grid celled>
          <Grid.Row centered >
            <Grid.Column width={4}>
              <Container className="content scroll">
                {this.loadingTweets()}
                <div className="divider" />
              </Container>
            </Grid.Column>
            <Grid.Column width={12}>
              <Container className="content">
                {this.loadingMoreInfo()}
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    issues: state.issues,
    issue: state.displayIssue
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getIssues: getIssues,
    displayIssue: displayIssue,
    clearIssues: clearIssues
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Issues)
