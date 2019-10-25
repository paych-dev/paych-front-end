import React from 'react';
import {Link} from 'react-router-dom';

import IconHeader from '../../IconHeader/IconHeader';
import Stub from '../Stub/Stub';

import errorImg from '../../../assets/error.svg';

const DontHaveClubs = () => (
  <Stub>
    
    <IconHeader 
      img={errorImg} 
      title={'У вас нет каналов'} 
      desc={'Вы можете найти и подписаться на каналы или создать свой'} />

    <Link to='/create'>
      <button className='button blue-radius-btn29'>Создать канал</button>
    </Link>

  </Stub>
);

export default DontHaveClubs