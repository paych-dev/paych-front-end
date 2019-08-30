import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const NotLoginLinks = ({logIn}) => {
  return (
    <Fragment>
      <li><Link to='/login' onClick={logIn}><button className='button outline-button'>Войти</button></Link></li>
    </Fragment>
  )
}

export default NotLoginLinks
