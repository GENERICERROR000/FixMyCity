import React, { Component } from 'react'
import io from 'socket.io-client'
import Tweet from '../components/tweet'
import '../css/home.css'
import { Grid, Segment } from 'semantic-ui-react'

const socket = io('http://localhost:3000/')

class Home extends Component {
  state = {
    stream: []
  }

  // TODO: USE REDUX STATE
  componentWillMount = () => {
    socket.emit('connection')

    socket.on('tweet', (tweet) => {
      this.setState({
        stream: [tweet, ...this.state.stream]
      })
    })
  }

  loadingTweets = () => {
    if (this.state.stream[0]) {
      return this.state.stream.map((tweet, i) => <Tweet key={i} data={tweet}/>)
    } else {
      return <h2>Nobody has tweeted anything yet...</h2>
    }
  }

  render() {
    return (
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column>
            <div className="panel">
              <h3 className="panel-header">Welcome To FixMyCity!</h3>
              <p>
                FixMyCit is an app for government employees to use to track and assign damage reported around a given city.
              </p>
              <p>
                Damage is reported via Twitter by everyday citizens. The goal is to encourage people to be active in maintaining their cities and communities.
              </p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </Grid.Column>
          <Grid.Column className="scrolling">
            <div className="feed">
              <h2 className="title">Damage Being Reported Right Now!</h2>
              {/* {this.loadingTweets()} */}
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
              <Tweet />
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="panel">
              <h3 className="panel-header">News And Updates</h3>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Home
