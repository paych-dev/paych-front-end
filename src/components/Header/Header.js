import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

//COMPONENTS:
import ToggleNav from './ToggleNav/ToggleNav'
import LogInLinks from './LoginLinks/LoginLinks'
import NotLogInLinks from './NotLoginLinks/NotLoginLinks'

//IMAGES:
import logo from '../../assets/purplelogo.svg'
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
    const { loggedIn } = this.props.user;

    return (
      <header className='Header'>
        <div className='Header_logo'>
          <Link to='/' className='Logo'>
            <div className='Logo_image Header_images'>
              <img src={logo} alt={logo} className='purpleLogo'/>
            </div>
            <h1 className='Logo_text'>Paych</h1>
          </Link>
        </div>


        { loggedIn ? <LogInLinks /> : <NotLogInLinks /> }

        <div className='Header_images Toggle_images'>
          {!toggle && <img src={menuIcon} alt={menuIcon} onClick={this.toggleNavMenu} />}
        </div>
        {toggle && <ToggleNav clicked={this.toggleNavMenu}/>}
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps, null)(Header)