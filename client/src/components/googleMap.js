import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'




export class MapContainer extends Component {

style = {
  width: '300px',
  height: '300px'
}

render() {
    return (
      <Map google={this.props.google} zoom={14} style={this.style}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Place</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAMjLOSB8OGzVknNO5nLNOE-b0RXYq0qFc')
})(MapContainer)

//  AIzaSyAMjLOSB8OGzVknNO5nLNOE-b0RXYq0qFc
