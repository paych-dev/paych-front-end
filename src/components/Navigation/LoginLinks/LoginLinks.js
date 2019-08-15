import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const LoginLinks = ({style, logIn}) => {
  return (
    <Fragment>
      <li><Link className={style}>Каналы</Link></li>
      <li><Link className={style}>Профиль</Link></li>
      <li>На счету</li>
      <li><Link to='/createclub' ><button>Создать клуб</button></Link></li>
      <li onClick={logIn}>Выход</li>
    </Fragment>
  )
}

export default LoginLinks
