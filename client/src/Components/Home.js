import React from 'react'
import { Link } from 'react-router-dom'
import Rules from './Rules'

const Home = () => {
  return (
    <div className='homepage'>
    <Link to="/rules">
      <button className='rules'>Rules</button>
    </Link>
      <h1 className='homepage-title'>Black hole</h1>
    </div>
  )
}

export default Home
