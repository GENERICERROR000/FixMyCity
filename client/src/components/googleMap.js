import React, { Component } from 'react'
// import {Map, Marker, GoogleApiWrapper} 'from 'google-maps-react'
import Map from 'google-map-react'

export class GoogleMap extends Component {
  render() {
    let coor = [ this.props.data.location.coordinates[0], this.props.data.location.coordinates[1] ]
    return (
      <Map center={coor} zoom={15} style={this.style}>
      </Map>
    )
  }
}

export default GoogleMap

// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyAMjLOSB8OGzVknNO5nLNOE-b0RXYq0qFc')
// })(Map)
