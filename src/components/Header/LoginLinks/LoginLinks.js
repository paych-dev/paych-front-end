import React from 'react';
import { Link } from 'react-router-dom';

const LoginLinks = () => {
  const logout = () => {
    localStorage.clear();
    window.location = '/'
  }

  return (
    <nav className='Navigation'>
      <ul className='Navigation_List flex center'>
        <li className='Navigation_List__element'><Link to='/'>Лента</Link></li>
        <li className='Navigation_List__element'><Link to='/subscribed'>Сообщества</Link></li>
        <li className='Navigation_List__element'><Link to='/own'>Мои сообщества</Link></li>
        <li></li>
      </ul>
      <button className='btn out' onClick={logout}>Выйти</button>
    </nav>
  )
}

export default LoginLinks
