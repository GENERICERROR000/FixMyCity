import React from 'react'
import { Button, Layout } from 'antd'

const Issue = (props) => {
  return (
    <div>
      <hr />
      <h2>{props.data.posted_by}</h2>
      <h4>{props.data.posted_on}</h4>
      <h4>{props.data.tweet_content}</h4>
    </div>
  )
}

export default Issue
