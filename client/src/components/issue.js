import React, { Component } from 'react'
import { Button, Header } from 'semantic-ui-react'
import '../css/issues.css'

class Issue extends Component {
  moreInfo = () => {
    this.props.loadTweet(this.props.data)
  }

  render() {
    return (
      <div>
        <div className="divider" />
        <h2>{this.props.data.posted_by}</h2>
        <h4>{this.props.data.posted_on}</h4>
        <h4>{this.props.data.tweet_content}</h4>
        <Button className="submit-button" onClick={this.moreInfo}>More Info</Button>
      </div>
    )
  }
}

export default Issue
