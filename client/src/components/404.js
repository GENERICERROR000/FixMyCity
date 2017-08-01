import React from 'react'

const style = {
  margin: "50px auto",
  textAlign: "center"
}

const NotFound = () => {
  return (
    <div style={style}>
      <iframe src="https://giphy.com/embed/cAEm5rSuuBEGY" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <h1>Looks like something went wrong.</h1>
      <h2>Either the page was not found or the Cat that runs the internet switchboards did not understand your request.</h2>
    </div>
  )
}

export default NotFound
