import React, { Component } from 'react'
import io from 'socket.io-client'
import Tweet from '../components/tweet'

const socket = io('http://localhost:3000/')

class Home extends Component {
  state = {
    stream: []
  }
  // TODO: USE REDUX STATE
  componentWillMount() {
    socket.emit('connection')

    socket.on('tweet', (tweet) => {
      this.setState({
        stream: [...this.state.stream, tweet]
      })
    })
  }

  render() {
    const tweets = this.state.stream.map((tweet, i) => <Tweet key={i} data={tweet}/>)
    return (
      <div>
        <h1>People Reporting Right Now!</h1>
        {tweets}
      </div>
    )
  }
}

export default Home
