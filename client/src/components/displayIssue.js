import React from 'react'
import { Button, Image } from 'semantic-ui-react'
import ImageZoom from 'react-medium-image-zoom'
import GoogleMap from './googleMap'

// TODO: Make sure Media can handle multiple Images
// TODO: Show actual adrdress from tweet

const MoreInfo = (props) => {
  this.imageZoom = (src, key) => {
    return (
      <ImageZoom
        key={key}
        image={{
          src: `${src}`,
          alt: 'Tweet/Image May Have Been Removed',
          className: 'pic',
        }}
        zoomImage={{
          src: `${src}`,
          alt: 'Tweet/Image May Have Been Removed'
        }}
      />
    )
  }

  this.images = () => {
    if (props.data.media) return props.data.media.map((src, i) => this.imageZoom(src, i))
    return <h6>[No Photos Provided]</h6>
  }

  this.convertDate = () => {
    return new Date(Date.parse(props.data.posted_on)).toUTCString().replace(/\s*(GMT|UTC)$/, "")
  }

  return (
    <div>
      <div className="divider" />
      <div className="display-grid">
        <div className="display">
          <div className="user">
            <Image avatar size="mini" className="head-img" src={props.data.profile_image} alt="" />
            <h2 className="head-h2">@{props.data.posted_by}</h2>
          </div>
          <div className="info">
            <h3>Posted on: {this.convertDate()}</h3>
            <p>{props.data.tweet_content}</p>
            {this.images()}
            <h4>Status: {props.data.status.toUpperCase()}</h4>
            <h4>Notes: {props.data.notes ? props.data.notes : ''}</h4>
            <Button className="info-button">Add Issues/Notes</Button>
            <Button className="info-button">Change Status</Button>
            <br/>
            <br/>
            <Button className="info-button">Report</Button>
            <Button className="delete-button">Delete</Button>
          </div>
        </div>
        <div className="map">
          <GoogleMap data={props.data}/>
        </div>
      </div>
      <div className="divider" />
    </div>
  )
}

export default MoreInfo
