import React from 'react'
import IconHeader from '../../IconHeader/IconHeader'
import Stub from '../Stub/Stub'
import style from './NewClubDone.module.css'
import created from '../../../assets/created@3x.png'

const NewClubDone = ({url}) => (
  <Stub>
    <IconHeader img={created} title={'Клуб создан'} desc={'Создавай контент, делись ссылкой и зарабатывай на этом'}/>

    <div className={style.infoText}>
      <span className={style.urlText}>ССЫЛКА НА КЛУБ</span><br/>
      <span className={style.url}>{url}</span>
    </div>

    <button className='button blue-radius-btn29'>Создать первый пост</button>
  </Stub>
)

export default NewClubDone