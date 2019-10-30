import React from 'react';
import {Link} from 'react-router-dom';

const NotLoginLinks = ({logIn}) => {
  return (
    <nav className='Navigation end'>
      <ul className='Navigation_List flex center'>
        <li><Link to='/login'><button className='btn none'>Войти</button></Link></li>
        <li><Link to='/register'><button className='btn out'>Регистрация</button></Link></li>
      </ul>
    </nav>
  )
}

export default NotLoginLinks
