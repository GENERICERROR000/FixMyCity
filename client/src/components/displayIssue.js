import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import ImageZoom from 'react-medium-image-zoom'
import GoogleMap from './googleMap'

// TODO: Make sure Media can handle multiple Images
// TODO: Show actual adrdress from tweet

const MoreInfo = (props) => {
  this.imageZoom = (src, key) => {
    return (
      <ImageZoom
        key={key}
        image={{
          src: `${src}`,
          alt: 'Tweet/Image May Have Been Removed',
          className: 'pic',
        }}
        zoomImage={{
          src: `${src}`,
          alt: 'Tweet/Image May Have Been Removed'
        }}
      />
    )
  }

  this.images = () => {
    if (props.data.media) return props.data.media.map((src, i) => this.imageZoom(src, i))
    return <h6>[No Photos Provided]</h6>
  }

  this.convertDate = () => {
    return new Date(Date.parse(props.data.posted_on)).toUTCString().replace(/\s*(GMT|UTC)$/, "")
  }

  this.deleteModal = () => {
    return (
      <Modal
        size="mini"
        trigger={<Button className="alert-button">Delete</Button>}
        content='Are you sure you want to delete this issue?'
        actions={[
          { className: "info-button", content: 'Cancel', triggerClose: true },
          { className: "alert-button", content: 'Delete', triggerClose: true },
        ]}
  />
    )
  }
  // this.deleteModal = () => {
  //   return (
  //     <Modal trigger={<Button className="alert-button">Delete</Button>} size="mini">
  //       <Modal.Content >
  //         <Modal.Description>
  //           <p>Are you sure you want to delete this issue?</p>
  //           <Button className="info-button">Cancel</Button>
  //           <Button className="alert-button">Delete</Button>
  //         </Modal.Description>
  //       </Modal.Content>
  //     </Modal>
  //   )
  // }

  return (
    <div>
      <div className="divider" />
      <div className="display-grid">
        <div className="display">
          <div className="user">
            <Image avatar size="mini" className="head-img" src={props.data.profile_image} alt="" />
            <h2 className="head-h2">@{props.data.posted_by}</h2>
          </div>
          <div className="info">
            <h3>Posted on: {this.convertDate()}</h3>
            <p>{props.data.tweet_content}</p>
            {this.images()}
            <h4>Status: {props.data.status.toUpperCase()}</h4>
            <br />
            <Button className="info-button">Issues/Notes</Button>
            <Button className="info-button">Status</Button>
            <Button className="alert-button">Report</Button>
            {this.deleteModal()}
            {/* <Button className="alert-button">Delete</Button> */}
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
