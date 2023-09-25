import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  
  return (
    <div>
        <h1>MAIN PAGE</h1>
        <Link to={'/about'}>Go to main</Link>
    </div>
  )
}

export default Main;
