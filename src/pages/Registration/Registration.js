import React from 'react'
import { Link } from 'react-router-dom'

import IconHeader from '../../components/IconHeader/IconHeader'
import signUpIcon from '../../assets/signup.png';

const Registration = () => {
  return (
    <div className='formWrap'>
      
      <IconHeader img={signUpIcon} title={'Регистрация'}/>
      
      <form className='form'>
        <div className='formFields'>

          <fieldset className='formGroup'>
            <label htmlFor='email' className='formLabel'>ЕМЕЙЛ:</label>
            <input id='email' type='email' name='email' autoComplete='off' placeholder='Введите почту' />
          </fieldset>

          <fieldset className='formGroup'>
            <label htmlFor='password' className='formLabel'>ПАРОЛЬ:</label>
            <input id='password' type='password' autoComplete='off' placeholder='Придумайте пароль' />
          </fieldset>
        </div>
        
        <button className='button blue-radius-btn29 register-btn' onClick={(e) => e.preventDefault()}>Зарегистрироваться</button>
      
        <div className='alreadySignUp'>
          <p>Уже есть аккаунт?</p>
          <Link to='/login'>Войти</Link>
        </div>
      
      </form>
    </div>
  );
};

export default Registration