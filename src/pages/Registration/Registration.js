import React, {Fragment} from 'react'
import IconHeader from '../../components/IconHeader/IconHeader'
import signUpIcon from "../../assets/signup.png";
import styles from './Registrations.module.css'

const Registration = () => {
  return (
    <Fragment>
      <IconHeader img={signUpIcon} title={"Регистрация"}/>
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
        
        <button className="button blue-radius-btn register-btn" onClick={(e) => e.preventDefault()}>Зарегистрироваться</button>
      
        <div className={styles.alreadySignUp}>
          <p>Уже есть аккаунт?</p>
          <a>Войти</a>
        </div>
      
      </form>
    </Fragment>
  )
}

export default Registration