import React from 'react'
import IconHeader from '../../IconHeader/IconHeader'

import style from './NewClubDone.module.css'
import created from '../../../assets/created@3x.png'

const NewClubDone = ({url}) => (
  <div className={style.NewClubDone_Wrap} >
    <IconHeader img={created} title={'Клуб создан'}/>
    
    <p className={style.infoText}>
      Создавай контент, делись ссылкой и зарабатывай на этом
    </p>

    <span className={style.urlText}>ССЫЛКА НА КЛУБ</span><br />
    <span className={style.url}>{url}</span>

    <button className='button blue-radius-btn29'>Создать первый пост</button>

  </div>
)

export default NewClubDone