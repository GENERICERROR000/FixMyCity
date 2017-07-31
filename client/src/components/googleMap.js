import React, { Component } from 'react'
import Map from 'google-map-react'
import warn from '../media/warn.svg'

export class GoogleMap extends Component {
  render() {
    const lat = this.props.data.location.coordinates[0]
    const lng = this.props.data.location.coordinates[1]
    return (
      <Map center={[lat, lng]} zoom={14}>
        <img src={warn} alt="damage" className="marker" lat={lat} lng={lng}/>
      </Map>
    )
  }
}

export default GoogleMap
