import React, { Component } from 'react'
import Map from 'google-map-react'
import { Popup } from 'semantic-ui-react'
import geocoder from 'geocoder'
import warn from '../media/warn.svg'

class GoogleMap extends Component {
  state = {
    address: false
  }

  componentWillMount = () => {
    geocoder.reverseGeocode(this.props.data.location.coordinates[0], this.props.data.location.coordinates[1], (err, data) => {
      this.setState({
        address: data.results[0].formatted_address
      })
    })
  }
  
  componentWillReceiveProps = (nextProps) => {
    if (this.props.data.location.coordinates[0] !== nextProps.data.location.coordinates[0]) {
      geocoder.reverseGeocode(nextProps.data.location.coordinates[0], nextProps.data.location.coordinates[1], (err, data) => {
        this.setState({
          address: data.results[0].formatted_address
        })
      })
    }
  }

  loading = () => {
    if (this.state.address) return this.state.address
    return "Address Loading..."
  }

  render = () => {
    let lat = this.props.data.location.coordinates[0]
    let lng = this.props.data.location.coordinates[1]
    return (
      <Map center={[lat, lng]} zoom={14}>
        <Popup
          className="popup"
          hoverable
          lat={lat}
          lng={lng}
          trigger={<img hoverable src={warn} alt="damage" className="marker"/>}
          content={this.loading()}
        />
      </Map>
    )
  }
}

export default GoogleMap
