import React, { Component } from 'react'
import { Button, DatePicker, Input, Select } from 'antd'
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


  render() {
    return (
      <div className="filter-container">
        <Input placeholder="Location" className="filter-input filter-input-width" onChange={this.inputHandler}/>
        <DatePicker.RangePicker className="filter-input" onChange={this.dateHandler} />
        <Select placeholder="Issue Type" className="filter-input filter-input-width" onChange={this.issueHandler}>
          <Select.Option value="pothole">Pothole</Select.Option>
          <Select.Option value="transformer">Transformer</Select.Option>
        </Select>
        <Select placeholder="Number of Complaints" className="filter-input filter-input-width" onChange={this.numComplaintsHandler}>
          <Select.Option value="high">High to Low</Select.Option>
          <Select.Option value="low">Low to High</Select.Option>
        </Select>
        <Button className="submit-button" onClick={this.submitHandler}>Submit</Button>
      </div>
    )
  }
}

export default FilterBar
