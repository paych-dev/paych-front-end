import React from 'react'
import IconHeader from '../../IconHeader/IconHeader'
import Stub from '../Stub/Stub'

import errorImg from '../../../assets/error.svg'

const PaymentFailed = () => (
  <Stub>
    <IconHeader 
      img={errorImg} 
      title={'Оплата не прошла'} 
      desc={'Скорее всего на карте нет средств, попробуйте оплатить еще раз'} />

    <button className='btn rad-25 blue'>Оплатить</button>
  </Stub>    
);

export default PaymentFailed