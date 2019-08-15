import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navigation.module.css'
import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu.png'
import closeIcon from '../../assets/close.png'
import clubs from '../../assets/clubs.png'
import profile from '../../assets/profile.png'
import myclubs from '../../assets/myclubs.png'

import LogInLinks from './LoginLinks/LoginLinks'
import NotLogInLinks from './NotLoginLinks/NotLoginLinks'

class Navigation extends React.Component {

  state = {
    toggle: true,
    userLogIn: false
  }

  toggleNavMenu = () => {
    let toggle = this.state.toggle
    toggle = !toggle
    this.setState({toggle: toggle})
  }

  userLogIn = () => {
    let userLogIn = this.state.userLogIn
    userLogIn = !userLogIn
    this.setState({userLogIn: userLogIn})
  }

  render(){
    return (
      <nav className={styles.navMenu}>
        <div className={styles.menu}>
          
          <Link to='/'>
            <div className={styles.Logo}>
              <img src={logo} alt={logo}/>
            </div>
            <h1 className={styles.Paych}>Paych</h1>
          </Link>   
          

          <ul className={styles.navWrap}>
           {this.state.userLogIn 
              ? <LogInLinks style={styles.navElement} logIn={this.userLogIn}/> 
              : <NotLogInLinks style={styles.navElement}  logIn={this.userLogIn}/>}
          </ul>

          <div className={`${styles.Logo} ${styles.toggleMenu_icon}`}>
            <img src={this.state.toggle ? menuIcon : closeIcon} alt={menuIcon} onClick={this.toggleNavMenu}/>
          </div>         
        </div>

        {!this.state.toggle 
          ? <div className={styles.toggleMenu}>
          <Link to='/' className={styles.toggleMenu_element} onClick={this.toggleNavMenu}>
            <div className={`${styles.toggleMenu_img} ${styles.toggleMenu_club}`}>
              <img src={clubs} alt={clubs} />
            </div>
            <h3 className={styles.toggleMenu_text}>Клубы</h3>
          </Link>
          <Link to='/' className={styles.toggleMenu_element} onClick={this.toggleNavMenu}>
            <div className={`${styles.toggleMenu_img} ${styles.toggleMenu_profile}`}>
              <img src={profile} alt={profile}/>
            </div>
            <h3>Мой профиль</h3>
          </Link>
          <Link to='/myclubs' className={styles.toggleMenu_element} onClick={this.toggleNavMenu}>
            <div className={`${styles.toggleMenu_img} ${styles.toggleMenu_myclubs}`}>
              <img src={myclubs} alt={myclubs}/>
            </div>
            <h3>Мои клубы</h3>
            <span>На счету $0</span>
          </Link>
          <Link to='/' className={`${styles.toggleMenu_element} toBottom`} onClick={this.toggleNavMenu}>
            <span className={styles.error}>СООБЩИТЬ О ПРОБЛЕМЕ</span>
          </Link>
        </div> : null}
        
      </nav>
    )
  }
}


export default Navigation