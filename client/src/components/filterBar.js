import React, { Component } from 'react'
import { Button, Menu, Input } from 'semantic-ui-react'
import Geosuggest from 'react-geosuggest'
import scriptLoader from 'react-async-script-loader'
import '../css/filter_bar.css'

class FilterBar extends Component {
  state = {
    location: '',
    start_date: '',
    end_date: '',
    issue_type: '',
    num_complaints: ''
  }
  // TODO: USE REDUX STATE INSTEAD

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  locationHandler = (value) => {
    this.setState({
      location: [value.location.lat, value.location.lng]
    })
  }

  submitHandler = () => {
    this.props.applyFilter(this.state)
  }

  loading = () => {
    if (this.props.isScriptLoadSucceed) {
      return (
        <Menu borderless widths={4} className="container">
          <Menu.Item>
            <input name="start_date" type="date" className="date" onChange={this.changeHandler}/>
          </Menu.Item>
          <Menu.Item>
            <input name="end_date" type="date" className="date" onChange={this.changeHandler}/>
          </Menu.Item>
          <Menu.Item>
            <Geosuggest placeholder="Location" country="us" onSuggestSelect={this.locationHandler} />
          </Menu.Item>
          <Menu.Item>
            <Button className="submit-button-filter" onClick={this.submitHandler}>Submit</Button>
          </Menu.Item>
        </Menu>
      )
    } else {
      return <h2>Loading...</h2>
    }
  }

  render() {
    return (
      <div>
        {this.loading()}
      </div>
    )
  }
}

export default scriptLoader('https://maps.googleapis.com/maps/api/js?key=AIzaSyAMjLOSB8OGzVknNO5nLNOE-b0RXYq0qFc&libraries=places')(FilterBar)


// issue_options = [
//   { key: '1', text: 'Pothole', value: 'pothole' },
//   { key: '2', text: 'Transformer', value: 'transformer' },
// ]
//
// complain_options = [
//   { key: 'h', text: 'High to Low', value: 'high' },
//   { key: 'l', text: 'Low to High', value: 'low' },
// ]

/* <Form.Select name="issue_type" label="Issue Type" placeholder="Issue Type" options={this.issue_options} onChange={this.chnageHandler} /> */
/* <Form.Select name="num_complaints" label="Number of Complaints" placeholder="Number of Complaints" options={this.complain_options} onChange={this.chnageHandler} /> */
