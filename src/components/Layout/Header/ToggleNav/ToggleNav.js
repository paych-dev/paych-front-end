import React from 'react';
import { Link } from 'react-router-dom';

const ToggleNav = ({clicked}) => {
  const logout = () => {
    localStorage.clear();
    window.location = '/login';
  };

  return (
    <div className='toggleNav flex column'>
      <ul className='toggleBigLinks flex column'>
        <li><Link to='/' onClick={clicked}>Лента</Link></li>
        <li><Link to='/subscribed' onClick={clicked}>Сообщества</Link></li>
        <li><Link to='/own' onClick={clicked}>Мои сообщества</Link></li>
      </ul>
      <ul className='toggleSmallLinks flex column'>
        <li><Link to='/profile' onClick={clicked}>Профиль</Link></li>
        <li><Link to='/statistic' onClick={clicked}>Статистика</Link></li>
        <li><span onClick={logout} onClick={clicked}>Выход</span></li>
      </ul>
      <div className="footer-links flex ">
        <Link to="/" onClick={clicked}>Правила пользования</Link>
        <Link to="/" onClick={clicked}>Напишите нам</Link>
      </div>
    </div>
  )
};

export default ToggleNav