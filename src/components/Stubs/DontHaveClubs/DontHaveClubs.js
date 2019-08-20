import React from 'react'
import style from './DontHaveClubs.module.css'
import IconHeader from '../../IconHeader/IconHeader'

import errorImg from '../../../assets/error.svg'

const DontHaveClubs = () => (
  <div className={style.DontHaveClubs_wrap}>

    <IconHeader 
      img={errorImg} 
      title={'У вас нет каналов'} 
      desc={'Вы можете найти и подписаться на каналы или создать свой'} />

    <button className='button blue-radius-btn29'>Создать канал</button>
  </div>
)

export default DontHaveClubs