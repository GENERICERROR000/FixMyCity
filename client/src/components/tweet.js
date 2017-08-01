// import React from 'react'
//
// const tweet = (props) => {
//   const data = props.data.tweet
//   return (
//     <div>
//       <img src={data.profile_image} alt="" />
//       <h2>{data.posted_by}</h2>
//       <h4>{data.posted_on}</h4>
//       <h4>{data.tweet_content}</h4>
//     </div>
//   )
// }
//
// export default tweet

import React from 'react'
import { Image } from 'semantic-ui-react'

const tweet = (props) => {
  // const data = props.data.tweet
  return (
    <div>
      <div className="divider" />
      <div className="wrapper">
        <Image size="mini" avatar className="head-img" src='https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png' alt="" />
        <h2>@User</h2>
        <h4>Mon, 31 Jul 2017 19:17:59</h4>
        <p>Words words...</p>
      </div>
    </div>
  )
}

export default tweet
