import React, { Component } from 'react'
import Map from 'google-map-react'
import { Popup } from 'semantic-ui-react'
import geocoder from 'geocoder'
import warn from '../media/warn.svg'

class GoogleMap extends Component {
  state = {
    address: false
  }

  lat = this.props.data.location.coordinates[0]
  lng = this.props.data.location.coordinates[1]

  componentWillMount = () => {
    geocoder.reverseGeocode(this.lat, this.lng, (err, data) => {
      this.setState({
        address: data.results[0].formatted_address
      })
    })
  }

  loading = () => {
    if (this.state.address) return this.state.address
    return "Address Loading..."
  }

  render = () => {
    return (
      <Map center={[this.lat, this.lng]} zoom={14}>
        <Popup
          className="popup"
          hoverable
          lat={this.lat}
          lng={this.lng}
          trigger={<img hoverable src={warn} alt="damage" className="marker"/>}
          content={this.loading()}
        />
      </Map>
    )
  }
}

export default GoogleMap
