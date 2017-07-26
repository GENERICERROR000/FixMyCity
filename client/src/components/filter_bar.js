import React, { Component } from 'react'
import { Button, Form, Menu } from 'semantic-ui-react'
import '../css/filter_bar.css'

// TODO: SHOULD HAVE A PROP THAT IS A FN THAT TAKES THE FILTER PARAMS AND APPLIES THEM. So, this function will end up dispatching the call to GET Issues
// TODO: SELECT SHOULD HAVE DYNAMIC SIZING

class FilterBar extends Component {
  state = {
    location: '',
    date_range: [],
    issue_type: '',
    num_complaints: ''
  }

  issue_options = [
    { key: '1', text: 'Pothole', value: 'pothole' },
    { key: '2', text: 'Transformer', value: 'transformer' },
  ]

  complain_options = [
    { key: 'h', text: 'High to Low', value: 'high' },
    { key: 'l', text: 'Low to High', value: 'low' },
  ]

  inputHandler = (event) => {
    this.setState({
      location: event.target.value
    })
  }

  dateHandler = (date, dateString) => {
    this.setState({
      date_range: date
    })
  }

  issueHandler = (value) => {
    this.setState({
      issue_type: value
    })
  }

  numComplaintsHandler = (value) => {
    this.setState({
      num_complaints: value
    })
  }

  submitHandler = () => {
    // TODO: MAKE THE filterInput() pass down as a prop
    this.props.applyFilter(this.state)
  }

// TODO:
// TODO: Event handlers working? 

  render() {
    return (
      <Form as={Menu} className="filter-container">
        <Form.Group widths='equal'>
          <Form.Input placeholder="Location" onChange={this.inputHandler}/>
          <Form.Select placeholder="Issue Type" options={this.issue_options} onChange={this.issueHandler} />
          <Form.Select placeholder="Number of Complaints" options={this.complain_options} onChange={this.numComplaintsHandler} />
          <Button className="submit-button" onClick={this.submitHandler}>Submit</Button>
      </Form.Group>
      </Form>
    )
  }
}

export default FilterBar
