import React from 'react'
import { Link } from 'react-router-dom'

const Fpackage = () => {
  return (
    <div className="text-muted py-5">
      <div className="container">
        <p className="float-end mb-1">
          <Link to="#">Back to top</Link>
        </p>
        <p className="mb-1">Album travel is &copy; azeddine, Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p className="mb-0">New to Bootstrap? <Link to="/clientpage">Visit the homepage</Link> or read our <Link to="/">getting started guide</Link>.</p>
      </div>
    </div>
  )
}

export default Fpackage