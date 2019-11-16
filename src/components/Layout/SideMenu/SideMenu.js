import React from 'react'
import logo from "../../../assets/purplelogo.svg";
import {Link} from "react-router-dom";

const SideMenu = props => {
  const logout = () => {
    localStorage.clear();
    window.location = '/login'
  };

  return (
    <div className="side-menu flex column">
      <div className='Header_logo'>
        <Link to='/' className='Logo'>
          <div className='Logo_image Header_images'>
            <img src={logo} alt={logo} className='purpleLogo'/>
          </div>
          <h1 className='Logo_text'>Paych</h1>
        </Link>
      </div>
      <div className="links">
        <ul className='main-links flex column'>
          <li><Link to='/'>Лента</Link></li>
          <li><Link to='/subscribed'>Сообщества</Link></li>
          <li><Link to='/own'>Мои сообщества</Link></li>
        </ul>
        <ul className='sub-links flex column'>
          <li><Link to='/create'>Новое сообщество</Link></li>
          <li><Link to='/profile'>Профиль</Link></li>
          <li><Link to='/statistic'>Статистика</Link></li>
          <li onClick={logout}>Выход</li>
        </ul>
      </div>
    </div>
  )
};

export default SideMenu