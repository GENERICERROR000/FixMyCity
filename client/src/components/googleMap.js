import React, { Component } from 'react'
import Map from 'google-map-react'

export class GoogleMap extends Component {
  render() {
    const lat = this.props.data.location.coordinates[0]
    const lng = this.props.data.location.coordinates[1]
    return (
      <Map center={[lat, lng]} zoom={15} style={this.style}>
        <div className="marker" lat={lat} lng={lng} />
      </Map>
    )
  }
}

export default GoogleMap
