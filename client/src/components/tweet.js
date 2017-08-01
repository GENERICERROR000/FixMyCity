import React from 'react'
import { Image } from 'semantic-ui-react'

const tweet = (props) => {
  const data = props.data.tweet
  return (
    <div>
      <div className="divider" />
      <div className="wrapper">
        <Image size="mini" avatar className="head-img" src={data.profile_image} alt="" />
        <h2 className="head-h2">@{data.posted_by}</h2>
        <div className="tweet-info">
          <h4>{data.posted_on}</h4>
          <p>{data.tweet_content}</p>
        </div>
      </div>
    </div>
  )
}

export default tweet
