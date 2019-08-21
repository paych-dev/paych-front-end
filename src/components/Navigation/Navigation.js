import React from 'react'
import { Link } from 'react-router-dom'
import ToggleNav from './ToggleNav/ToggleNav'

import styles from './Navigation.module.css'

import logo from '../../assets/logo.png'
import menuIcon from '../../assets/menu.png'

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

          {this.state.toggle ? 
            <div className={`${styles.Logo} ${styles.toggleMenu_icon}`}>
              <img src={menuIcon} alt={menuIcon} onClick={this.toggleNavMenu}/>
            </div>
          : null}
                   
        </div>

        {!this.state.toggle ? <ToggleNav clicked={this.toggleNavMenu}/> : null}
        
      </nav>
    )
  }
}


export default Navigation