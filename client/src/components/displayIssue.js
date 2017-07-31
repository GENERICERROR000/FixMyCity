import React from 'react'
import { Button } from 'semantic-ui-react'
import ImageZoom from 'react-medium-image-zoom'
import GoogleMap from './googleMap'

// TODO: Make sure Media can handle multiple Images

const MoreInfo = (props) => {
  this.images = () => {
    return (
      <ImageZoom
        image={{
          src: `${props.data.media}`,
          alt: 'No Pictures Provided',
          className: 'pic',
        }}
        zoomImage={{
          src: `${props.data.media}`,
          alt: 'No Pictures Provided'
        }}
      />
    )
  }

  this.convertDate = () => {
    return new Date(Date.parse(props.data.posted_on)).toUTCString().replace(/\s*(GMT|UTC)$/, "")
  }

  return (
    <div>
      <div className="divider" />
      <div className="display-grid">
        <div className="info">
          <div className="user">
            <img className="head-img" src={props.data.profile_image} alt="" />
            <h2 className="head-h2">@{props.data.posted_by}</h2>
          </div>
          <div>
            <h3>Posted on: {this.convertDate()}</h3>
            <h4>{props.data.tweet_content}</h4>
            {this.images()}
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
