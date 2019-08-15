import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const LoginLinks = ({style, logIn}) => {
  return (
    <Fragment>
      <li><Link onClick={logIn} className={style}>LogIn</Link></li>
      <li><Link to='/register' className={style}>Registration</Link></li>
    </Fragment>
  )
}

export default LoginLinks
