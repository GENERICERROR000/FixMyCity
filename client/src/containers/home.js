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
      return <h2 className="center">Nobody has tweeted anything recently...</h2>
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
              <h3 className="panel-header">News And Updates</h3>
              <p>Coming Soon: The Launch of FixMyCity!</p>
            </div>
          </Grid.Column>
          <Grid.Column className="scrolling">
            <div className="feed">
              <h2 className="title">Damage Being Reported Right Now!</h2>
              {this.loadingTweets()}
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="panel">
              <h3 className="panel-header">How To Report Damage</h3>
              <p>FixMyCity is easy to use! As you go about your day if you notice any damage to your city (pothole, crack in the side, and so on) just pull out your phone and send a Tweet!</p>
              <p>In the Tweet, just type what you see. You can also take and send pictures. We do require you to add your location and to use the hashtag "#FixMyCity". That's it!</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Home
