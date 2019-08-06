import React from 'react'
import { Link } from 'react-router-dom'
import IconHeader from '../../components/IconHeader/IconHeader'
import signUpIcon from "../../assets/signup.png";
import styles from '../Login/Login.module.css'

const Login = () => {
  return (
    <div className={styles.registerWrap}>
      <IconHeader img={signUpIcon} title={"Авторизация"}/>
      <form className={styles.form}>
        <div className={styles.formFields}>
          <fieldset className={styles.formGroup}>
            <label className={styles.formLabel}>ЕМЕЙЛ:</label>
            <input id="email" type="email" name="email" autoComplete="off" placeholder="Введите почту" />
          </fieldset>
          <fieldset className={styles.formGroup}>
            <label className={styles.formLabel}>ПАРОЛЬ:</label>
            <input id="password" type="password" name="password" autoComplete="off" placeholder="Придумайте пароль" />
          </fieldset>
        </div>
        
        <button className="button blue-radius-btn register-btn" onClick={(e) => e.preventDefault()}>Логин</button>

        <div className={styles.alreadySignUp}>
          <p>Ещё нет аккаунта?</p>
          <Link to='/register'>Зарегистрироваться</Link>
        </div>
      </form>
    </div>
  )
}

export default Login