import React from 'react'
import { Link } from 'react-router-dom'

import IconHeader from '../../components/IconHeader/IconHeader'
import signUpIcon from '../../assets/signup.png';

class Registration extends React.Component {
  state = {
    userInfo: {
      email: '',
      password: '',
      last_name: '',
      first_name: '',
      username: '',
      password_confirmation: ''
    }
  }
  onChangeHandler = event => {
    const userInfo = {...this.state.userInfo};
    userInfo[event.target.id] = event.target.value;
    this.setState({userInfo: userInfo});
  }

  onSubmintHandler = event => {
    event.preventDefault();

    // (async () => {
    //   const login = await fetch('https://api.paych.sergo.if.ua/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({'lel':'lel'})
    //   });
    //   const content = await login.json();
    
    //   console.log(content);
    // })();

    const loginUser = async userInfo => {
      let response = await fetch(`https://api.paych.sergo.if.ua/auth/register`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });

      let data = await response.json();
      console.log(data)
      return data;
    }

    (async () => {
      let userToken = await loginUser(this.state.userInfo);
      console.log(userToken)
    })();
  }

  render(){
    return (
      <div className='formWrap'>
        
        <IconHeader img={signUpIcon} title={'Регистрация'}/>
        
        <form className='form' onSubmit={this.onSubmintHandler}>
          <div className='formFields'>
  
            <fieldset className='formGroup'>
              <label htmlFor='email' className='formLabel'>ЕМЕЙЛ:</label>
              <input onChange={this.onChangeHandler} id='email' type='email' name='email' autoComplete='off' placeholder='Введите почту' />
            </fieldset>
            <fieldset className='formGroup'>
              <label htmlFor='username' className='formLabel'>USERNAME:</label>
              <input onChange={this.onChangeHandler} id='username' type='text' name='username' autoComplete='off' placeholder='Введите почту' />
            </fieldset>
            <fieldset className='formGroup'>
              <label htmlFor='first_name' className='formLabel'>FIRST NAME:</label>
              <input onChange={this.onChangeHandler} id='first_name' type='text' name='first_name' autoComplete='off' placeholder='Введите почту' />
            </fieldset>
            <fieldset className='last_name'>
              <label htmlFor='email' className='formLabel'>LAST NAME:</label>
              <input onChange={this.onChangeHandler} id='last_name' type='text' name='last_name' autoComplete='off' placeholder='Введите почту' />
            </fieldset>
            <fieldset className='formGroup'>
              <label htmlFor='password' className='formLabel'>ПАРОЛЬ:</label>
              <input onChange={this.onChangeHandler} id='password' type='password' autoComplete='off' placeholder='Придумайте пароль' />
            </fieldset>
            <fieldset className='formGroup'>
              <label htmlFor='password_confirmation' className='formLabel'>ПАРОЛЬ:</label>
              <input onChange={this.onChangeHandler} id='password_confirmation' type='password' autoComplete='off' placeholder='Придумайте пароль' />
            </fieldset>
          </div>
          
          <button className='button blue-radius-btn29 register-btn'>Зарегистрироваться</button>
        
          <div className='alreadySignUp'>
            <p>Уже есть аккаунт?</p>
            <Link to='/login'>Войти</Link>
          </div>
        
        </form>
      </div>
    );
  }
  
};

export default Registration