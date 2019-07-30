import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul className='nav nav-pills'>
      <li><Link to='/' activeClassName='active'>My Clubs</Link></li>
      <li><Link to='/register' activeClassName='active'>Registration</Link></li>
    </ul>
  )
}

export default Navigation