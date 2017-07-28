import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'
import { getIssues } from '../actions/index'
import Issue from '../components/issue'
import FilterBar from '../components/filterBar'
import MoreInfo from '../components/moreInfo'
import '../css/issues.css'

class Issues extends Component {
  state = {
    displayTweet: ''
  }

  loadingTweets = () => {
    if (this.props.issues[0]) {
      return this.props.issues.map((issue, i) => { return <Issue key={i} data={issue} loadTweet={this.loadTweet}/> })
    } else {
      return <h2>Please Select Filters and/or Click "Submit"</h2>
    }
  }

  loadingMoreInfo = () => {
    if (this.state.displayTweet) {
      return <MoreInfo data={this.state.displayTweet}/>
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

  // TODO: SWITCH TO USING REDUX STATE INSTEAD
  loadTweet = (data) => {
    this.setState({
      displayTweet: data
    })
  }

  render() {
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
  return {issues: state.issues}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getIssues: getIssues
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Issues)
