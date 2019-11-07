import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ProfileBtn from "../ProfileBtn/ProfileBtn";

const LoginLinks = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='Navigation'>
      <ul className='Navigation_List flex center'>
        <li className='Navigation_List__element'><Link to='/'>Лента</Link></li>
        <li className='Navigation_List__element'><Link to='/subscribed'>Сообщества</Link></li>
        <li className='Navigation_List__element'><Link to='/own'>Мои сообщества</Link></li>
      </ul>
      <ProfileBtn clicked={setToggle} toggle={toggle}/>
    </nav>
  )
};

export default LoginLinks
