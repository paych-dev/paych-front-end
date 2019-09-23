import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import styles from './LoginLinks.module.css';

const LoginLinks = ({style}) => {
  return (
    <Fragment>
      <li><Link to='/' className={style}>Каналы</Link></li>
      <li><Link to='/profile' className={style}>Профиль</Link></li>
      <li>
        <div className={styles.onValet}>
          <span className={styles.onValet_text}>На счету</span>
          <span className={styles.onValet_money}>$0</span>
        </div>   
      </li>
      <li><Link to='/createclub' ><button className='button outline-button'>Создать клуб</button></Link></li>
    </Fragment>
  )
}

export default LoginLinks
