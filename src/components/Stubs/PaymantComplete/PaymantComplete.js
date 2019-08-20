import React from 'react'
import style from './PaymantComplete.module.css'

import congratulation from '../../../assets/congratulation.svg'

const PaymantComplete = () => (
  <div className={style.PaymentComplete_Wrap}>

    <div className={style.PaymentComplete_img_wrap}>
      <img src={congratulation} alt={congratulation} />
      <div className={style.PaymentComplete_img_circle}></div>
    </div>

    <div className={style.PaymantComplete_text}>
      <h3>Теперь ты с нами</h3>
      <p>Рады приветствовать тебя в нашем клубе. Ты узнаешь здесь много интересного</p>
    </div>

    <button className='button blue-radius-btn29'>Начать читать</button>
  </div>
)

export default PaymantComplete