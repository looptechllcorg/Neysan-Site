import React from 'react'
import "./Error.scss"
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section id='errorPage'>
        <div className="pageText">
            <h4>Page Not Found</h4>
            <h1>404</h1>
            <p>We are sorry,But The page You reguested Was not found</p>
            
            <br />
            <Link to="/" >Back to Home</Link>
        
        </div>
    </section>
  )
}

export default Error