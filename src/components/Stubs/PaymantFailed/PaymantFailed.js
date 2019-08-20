import React from 'react'
import style from './PaymantFailed.module.css'
import IconHeader from '../../IconHeader/IconHeader'

import errorImg from '../../../assets/error.svg'

const PaymantFailed = () => (
  <div className={style.PaymantFailed_wrap}>

    <IconHeader 
      img={errorImg} 
      title={'Оплата не прошла'} 
      desc={'Скорее всего на карте нет средств, попробуйте оплатить еще раз'} />

    <button className='button blue-radius-btn29'>Оплатить</button>
  </div>
)

export default PaymantFailed