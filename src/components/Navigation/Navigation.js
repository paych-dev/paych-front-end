import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu.png'

const Navigation = () => {
  return (
    <nav className={styles.Nav}>
      <div className={styles.Logo}>
        <img src={logo} alt='logo' />
      </div>
      <ul className={styles.navWrap}>
        <div className={styles.Logo}>
          <img src={menuIcon} alt='logo' />
        </div>
        <li><Link to='/' activeClassName='active' className={styles.navElement}>My Clubs</Link></li>
        <li><Link to='/register' activeClassName='active' className={styles.navElement}>Registration</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation