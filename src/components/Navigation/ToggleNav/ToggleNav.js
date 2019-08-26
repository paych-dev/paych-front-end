import React from 'react';
import { Link } from 'react-router-dom'

import clubs from '../../../assets/clubs.png'
import profile from '../../../assets/profile.png'
import myclubs from '../../../assets/myclubs.png'
import closeIcon from '../../../assets/close.png'

import style from './ToggleNav.module.css'

const ToggleNav = ({clicked}) => (
  <div className={style.toggleMenu}>
    <div className={style.toggleMenu_icon}>
      <img src={closeIcon} alt={closeIcon} onClick={clicked}/>
    </div>

    <Link to='/' className={style.toggleMenu_element} onClick={clicked}>
    <div className={`${style.toggleMenu_img} ${style.toggleMenu_club}`}>
    <img src={clubs} alt={clubs} />
    </div>
    <h3 className={style.toggleMenu_text}>Клубы</h3>
    </Link>
    <Link to='/' className={style.toggleMenu_element} onClick={clicked}>
    <div className={`${style.toggleMenu_img} ${style.toggleMenu_profile}`}>
    <img src={profile} alt={profile}/>
    </div>
    <h3>Мой профиль</h3>
    </Link>
    <Link to='/myclubs' className={style.toggleMenu_element} onClick={clicked}>
    <div className={`${style.toggleMenu_img} ${style.toggleMenu_myclubs}`}>
    <img src={myclubs} alt={myclubs}/>
    </div>
    <h3>Мои клубы</h3>
    <span>На счету $0</span>
    </Link>
    <Link to='/' className={style.toggleMenu_element} onClick={clicked}>
    <span className={style.error}>СООБЩИТЬ О ПРОБЛЕМЕ</span>
    </Link>
  </div>
)
export default ToggleNav