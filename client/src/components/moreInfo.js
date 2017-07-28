import React from 'react'
import { Button, Header } from 'semantic-ui-react'
import GoogleMap from './googleMap'
import '../css/issues.css'

// TODO: Make sure Media can handle multiple Images

const MoreInfo = (props) => {
  return (
    <div>
      <div className="divider" />
      <img src={props.data.profile_image} alt="" />
      <h2>{props.data.posted_by}</h2>
      <h4>{props.data.posted_on}</h4>
      <h4>{props.data.tweet_content}</h4>
      <img src={props.data.media} alt="No Pictures Provided" />
      <GoogleMap data={props.data}/>
    </div>
  )
}

export default MoreInfo
