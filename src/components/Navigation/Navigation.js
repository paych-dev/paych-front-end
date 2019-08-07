import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navigation.module.css'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu.png'
import closeIcon from '../../assets/close.png'
import clubs from '../../assets/clubs.png'
import profile from '../../assets/profile.png'
import myclubs from '../../assets/myclubs.png'

// TODO: 
//   1.REFACTOR NAV
//   2.MAKE NAV OVER ELEMENTS 

class Navigation extends React.Component {

  state = {
    toggle: true
  }

  toggleNavMenu = () => {
    let toggle = this.state.toggle
    toggle = !toggle
    this.setState({toggle: toggle})
  }

  render(){
    return (
      <nav className={styles.navMenu}>
        <div className={styles.menu}>
          <div className={styles.Logo}>
            <img src={logo} alt={logo}/>
          </div>

          <ul className={styles.navWrap}>
            <li><Link to='/' className={styles.navElement}>My Clubs</Link></li>
            <li><Link to='/register' className={styles.navElement}>Registration</Link></li>
          </ul>

          <div className={`${styles.Logo} ${styles.toggleMenu_icon}`}>
            <img src={this.state.toggle ? menuIcon : closeIcon} onClick={this.toggleNavMenu}/>
          </div>         
        </div>

        {!this.state.toggle ? <div className={styles.toggleMenu}>
          <Link to='/' className={styles.toggleMenu_element} onClick>
            <div className={`${styles.toggleMenu_img} ${styles.toggleMenu_club}`}>
              <img src={clubs} />
            </div>
            <h3 className={styles.toggleMenu_text}>Клубы</h3>
          </Link>
          <Link to='/' className={styles.toggleMenu_element}>
            <div className={`${styles.toggleMenu_img} ${styles.toggleMenu_profile}`}>
              <img src={profile} />
            </div>
            <h3>Мой профиль</h3>
          </Link>
          <Link to='myclubs' className={styles.toggleMenu_element}>
            <div className={`${styles.toggleMenu_img} ${styles.toggleMenu_myclubs}`}>
              <img src={myclubs} />
            </div>
            <h3>Мои клубы</h3>
            <span>На счету $0</span>
          </Link>
          <Link to='/' className={`${styles.toggleMenu_element} toBottom`}>
            <span className={styles.error}>СООБЩИТЬ О ПРОБЛЕМЕ</span>
          </Link>
        </div> : null}
        
      </nav>
    )
  }
}


export default Navigation