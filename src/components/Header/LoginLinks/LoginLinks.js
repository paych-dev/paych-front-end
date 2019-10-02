import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

import styles from './LoginLinks.module.css';

const LoginLinks = ({style}) => {
  
  const logout = () => {
    localStorage.clear();
    window.location = '/'
  }

  return (
    <Fragment>
      <li><Link to='/channels' className={style}>Каналы</Link></li>
      <li><Link to='/profile' className={style}>Профиль</Link></li>
      <li>
        <div className={styles.onValet}>
          <span className={styles.onValet_text}>На счету</span>
          <span className={styles.onValet_money}>$0</span>
        </div>   
      </li>
      <li><Link to='/create_channel' ><button className='button outline-button'>Создать клуб</button></Link></li>
      <li><button className='button outline-button' onClick={logout}>Выйти</button></li>
    </Fragment>
  )
}

export default LoginLinks
