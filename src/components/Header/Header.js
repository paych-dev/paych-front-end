import React, {Component} from 'react'
import {connect} from 'react-redux';
//COMPONENTS:
import ToggleNav from './ToggleNav/ToggleNav'
import LogInLinks from './LoginLinks/LoginLinks'
import NotLogInLinks from './NotLoginLinks/NotLoginLinks'
//STYLE:
import styles from './Header.module.scss'
//IMAGES:
import logo from '../../assets/logo.png'
import purplelogo from '../../assets/purplelogo.svg'
import menuIcon from '../../assets/menu.png'

class Header extends Component {
  state = {
    toggle: false
  };

  toggleNavMenu = () => {
    let toggle = this.state.toggle;
    this.setState({toggle: !toggle});
  };

  render(){
    const { toggle } = this.state;

    console.log(this.props.user)
    return (
      <header className={styles.Header}>
        <div className={styles.Logo}>
          <div className={`${styles.Logo_image} ${styles.Header_images}` }>
            <img src={logo} alt={logo} className={styles.whiteLogo}/>
            <img src={purplelogo} alt={logo} className={styles.purpleLogo}/>
          </div>
          
          <h1 className={styles.Logo_text}>Paych</h1>
        </div>  
        
        <nav className={styles.Navigation}>
          <ul className={styles.Navigation_List}>
            {this.props.user
              ? <LogInLinks style={styles.Navigation_List__element} /> 
              : <NotLogInLinks style={styles.Navigation_List__element} />}
          </ul>
        </nav>

        <div className={`${styles.Header_images} ${styles.Toggle_images}`}>
          {!toggle && <img src={menuIcon} alt={menuIcon} onClick={this.toggleNavMenu} />}
        </div>
               
        {toggle && <ToggleNav clicked={this.toggleNavMenu}/>}      
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Header)