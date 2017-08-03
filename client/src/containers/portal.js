import React from 'react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import '../css/portal.css'

const Portal = () => {
  return (
    <div className="portal-wrapper">
      <div className="portal-col">
        <Link to='/issues/new'><Button className="portal-button">New Issues</Button></Link>
        <Link to='/issues/active'><Button className="portal-button">Active Issues</Button></Link>
        <Link to='/issues/archive'><Button className="portal-button">Archived Issues</Button></Link>
        <Link to='/issues/create'><Button className="portal-button">Create Issue</Button></Link>
        <Link to='/issues/map'><Button className="portal-button">Map</Button></Link>
        <Link to='/data'><Button className="portal-button">Generate Report</Button></Link>
      </div>
    </div>
  )
}

export default Portal
