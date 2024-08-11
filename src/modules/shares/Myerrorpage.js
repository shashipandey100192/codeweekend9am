import React from 'react'
import { Link } from 'react-router-dom'

function Myerrorpage() {
  return (
    <div className='myerror'>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Link to="/"> Back to Login</Link>
    </div>
  )
}

export default Myerrorpage