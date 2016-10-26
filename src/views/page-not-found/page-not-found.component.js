import React from 'react'
import { Link } from 'react-router'

const PageNotFound = () => (
  <div>
    <h1>Page Not Found</h1>
    <p>Go to <Link to="/">start page</Link></p>
  </div>
)

export default PageNotFound
