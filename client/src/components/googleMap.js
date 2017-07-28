import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class MapContainer extends Component {

  style = {
    width: '300px',
    height: '300px'
  }

  render() {
  let lat = this.props.data.location.coordinates[0]
  let lng = this.props.data.location.coordinates[1]
    return (
      <Map className='map' google={this.props.google} zoom={16} style={this.style} initialCenter={{lat: lat, lng: lng}}>
        <Marker
          title={'Issue'}
          name={'issue'}
          position={{lat: lat, lng: lng}} />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAMjLOSB8OGzVknNO5nLNOE-b0RXYq0qFc')
})(MapContainer)
