import React, { Component } from 'react'
import io from 'socket.io-client'
import Tweet from '../components/tweet'
import '../css/home.css'

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
      <div>
        <h1>People Reporting Right Now!</h1>
        {this.loadingTweets()}
      </div>
    )
  }
}

export default Home
