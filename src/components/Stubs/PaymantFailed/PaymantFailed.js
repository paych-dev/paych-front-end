import React from 'react'
import IconHeader from '../../IconHeader/IconHeader'
import Stub from '../Stub/Stub'

import errorImg from '../../../assets/error.svg'

const PaymantFailed = () => (
  <Stub>
    <IconHeader 
      img={errorImg} 
      title={'Оплата не прошла'} 
      desc={'Скорее всего на карте нет средств, попробуйте оплатить еще раз'} />

    <button className='button blue-radius-btn29'>Оплатить</button>
  </Stub>    
)

export default PaymantFailed