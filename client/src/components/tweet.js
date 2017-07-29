import React from 'react'

const tweet = (props) => {
  const data = props.data.tweet
  return (
    <div>
      <img src={data.profile_image} alt="" />
      <h2>{data.posted_by}</h2>
      <h4>{data.posted_on}</h4>
      <h4>{data.tweet_content}</h4>
    </div>
  )
}

export default tweet
