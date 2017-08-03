import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Map from 'google-map-react'
import { Popup } from 'semantic-ui-react'
// import geocoder from 'geocoder'
import { getIssues, clearIssues } from '../actions/index'
import warn from '../media/warn.svg'
import FilterBar from '../components/filterBar'
import '../css/map.css'

class BigMap extends Component {
  componentWillUnmount = () => {
    this.props.clearIssues()
  }

  applyFilter = (filterInput) => {
    this.props.getIssues(filterInput, "active")
  }

  // getAddress = (location) => {
  //   if (this.state.address) {
  //     geocoder.reverseGeocode(location.coordinates[0], location.coordinates[1], (err, data) => data.results[0].formatted_address)
  //   }
  //   return "Address Loading..."
  // }

  issues = () => {
   return this.props.issues.map((issue, i) => {
      return (
        <Popup
          key={i}
          hoverable
          lat={issue.location.coordinates[0]}
          lng={issue.location.coordinates[1]}
          trigger={<img hoverable src={warn} alt="damage" className="marker"/>}
          content={<div className="popup-text">{issue.tweet_content}</div>}
        />
      )
    })
  }

  // TODO: map needs to use filter location from redux
  loadingMap = () => {
    if (this.props.issues[0]) {
      return (
        <Map center={[ 40.70785123, -74.01227371]} zoom={14}>
          {this.issues()}
        </Map>
      )
    }
    return <h2>Please Select Filters and/or Click "Submit" to View Map</h2>
  }

  render() {
    return (
        <div className="map-grid">
          <div className="filter">
            <FilterBar applyFilter={this.applyFilter} />
          </div>
          <div className="big-map">
            {this.loadingMap()}
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => { return {issues: state.issues} }

// TODO: map actions instead please
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getIssues: getIssues,
    clearIssues: clearIssues
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BigMap)
