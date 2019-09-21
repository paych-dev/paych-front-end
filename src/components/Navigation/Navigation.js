import React from 'react'
import { Link } from 'react-router-dom'
import ToggleNav from './ToggleNav/ToggleNav'

import styles from './Navigation.module.scss'

import logo from '../../assets/logo.png'
import purplelogo from '../../assets/purplelogo.svg'
import menuIcon from '../../assets/menu.png'

import LogInLinks from './LoginLinks/LoginLinks'
import NotLogInLinks from './NotLoginLinks/NotLoginLinks'

import {connect} from 'react-redux';

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
          
          <Link to='/'>
            <div className={styles.Logo}>
              <img src={logo} alt={logo} className={styles.whiteLogo}/>
              <img src={purplelogo} alt={logo} className={styles.purpleLogo}/>
            </div>

            <h1 className={styles.Paych}>Paych</h1>
          </Link>   
          
          <ul className={styles.navWrap}>
           {this.props.userIn 
              ? <LogInLinks style={styles.navElement} /> 
              : <NotLogInLinks style={styles.navElement} />}
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

const mapStateToProps = state => {
  return {
    userIn: state.user
  }
}
export default connect(mapStateToProps, null)(Navigation)