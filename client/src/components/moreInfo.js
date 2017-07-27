import React from 'react'
import { Button, Header } from 'semantic-ui-react'
import GoogleMap from './googleMap'
import '../css/issues.css'

const MoreInfo = (props) => {
  return (
    <div>
      <div className="divider" />
      <h2>{props.data.posted_by}</h2>
      <h4>{props.data.posted_on}</h4>
      <h4>{props.data.tweet_content}</h4>
      <GoogleMap />
    </div>
  )
}

export default MoreInfo
