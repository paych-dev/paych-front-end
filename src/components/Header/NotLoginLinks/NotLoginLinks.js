import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const NotLoginLinks = ({logIn}) => {
  return (
    <Fragment>
      <li><Link to='/login'><button className='btn none'>Войти</button></Link></li>
      <li><Link to='/register'><button className='btn out'>Регистрация</button></Link></li>
    </Fragment>
  )
}

export default NotLoginLinks
