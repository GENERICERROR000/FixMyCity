import React from 'react'
import { Button } from 'semantic-ui-react'
import ImageZoom from 'react-medium-image-zoom'
import GoogleMap from './googleMap'

// TODO: Make sure Media can handle multiple Images
// TODO: Show actual adrdress from tweet

const MoreInfo = (props) => {
  this.imageZoom = (src, key) => {
    return (
      <ImageZoom key={key}
        image={{
          src: `${src}`,
          alt: 'No Photos Provided',
          className: 'pic',
        }}
        zoomImage={{
          src: `${src}`,
          alt: 'No Photos Provided'
        }}
      />
    )
  }

  this.images = () => {
    if (props.data.media) {
      return props.data.media.map((src, i) => this.imageZoom(src, i))
    }
    return <h6>[No Photos Provided]</h6>
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
