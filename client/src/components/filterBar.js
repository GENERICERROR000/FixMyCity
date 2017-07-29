import React, { Component } from 'react'
import { Button, Form, Menu } from 'semantic-ui-react'
import Geosuggest from 'react-geosuggest'
import scriptLoader from 'react-async-script-loader'
import '../css/filter_bar.css'

class FilterBar extends Component {
  state = {
    location: [],
    start_date: '',
    end_date: '',
    issue_type: '',
    num_complaints: ''
  }
  // TODO: USE REDUX STATE INSTEAD

  // issue_options = [
  //   { key: '1', text: 'Pothole', value: 'pothole' },
  //   { key: '2', text: 'Transformer', value: 'transformer' },
  // ]
  //
  // complain_options = [
  //   { key: 'h', text: 'High to Low', value: 'high' },
  //   { key: 'l', text: 'Low to High', value: 'low' },
  // ]

  chnageHandler = (e, input) => {
    this.setState({
      [input.name]: input.value
    })
  }

  submitHandler = () => {
    this.props.applyFilter(this.state)
  }

  locationHandler = (value) => {
    this.setState({
      location: [value.location.lat, value.location.lng]
    })
  }


  loading = () => {
    if (this.props.isScriptLoadSucceed) {
      return (
        <Form as={Menu} className="filter-container">
          <Form.Group widths='equal'>
            <Form.Input name="start_date" type="date" label="Start Date" onChange={this.chnageHandler}/>
            <Form.Input name="end_date" type="date" label="End Date" onChange={this.chnageHandler}/>
            <Geosuggest placeholder="Location" country="us" onSuggestSelect={this.locationHandler}/>
            {/* <Form.Select name="issue_type" label="Issue Type" placeholder="Issue Type" options={this.issue_options} onChange={this.chnageHandler} /> */}
            {/* <Form.Select name="num_complaints" label="Number of Complaints" placeholder="Number of Complaints" options={this.complain_options} onChange={this.chnageHandler} /> */}
            <Button className="submit-button" onClick={this.submitHandler}>Submit</Button>
          </Form.Group>
        </Form>
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
