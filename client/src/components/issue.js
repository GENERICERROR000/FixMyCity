import React, { Component } from 'react'
import { Button, Header } from 'semantic-ui-react'
import '../css/issues.css'

class Issue extends Component {
  displayIssue = () => {
    this.props.displayIssue(this.props.data)
  }

  render = () => {
    return (
      <div>
        <div className="divider" />
        <div className="wrapper">
          <h2>@{this.props.data.posted_by}</h2>
          <h4>{this.props.data.posted_on}</h4>
          <h4>{this.props.data.tweet_content}</h4>
          <Button className="submit-button" onClick={this.displayIssue}>More Info</Button>
        </div>
      </div>
    )
  }
}

export default Issue
