import React from 'react'
import { Button, Header } from 'semantic-ui-react'
import GoogleMap from './googleMap'
import '../css/issues.css'

// TODO: Make sure Media can handle multiple Images

const MoreInfo = (props) => {
  const profileImg = props.data.profile_image
  const media = props.data.media
  return (
    <div>
      <div className="divider" />
      {profileImg ? <img src={profileImg} alt="No Profile Pic Provided" /> : null}
      <h2>{props.data.posted_by}</h2>
      <h4>{props.data.posted_on}</h4>
      <h4>{props.data.tweet_content}</h4>
      {media ? <img src={media} alt="No Pic Provided"/> : null}
      <GoogleMap data={props.data}/>
    </div>
  )
}

export default MoreInfo
