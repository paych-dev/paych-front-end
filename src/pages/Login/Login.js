import React from 'react'
import { Link } from 'react-router-dom'

import IconHeader from '../../components/IconHeader/IconHeader'
import signUpIcon from '../../assets/signup.png';

class Login extends React.Component {
  state = {
    userInfo: {
      email: '',
      password: ''
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
      let response = await fetch(`https://api.paych.sergo.if.ua/auth/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });

      let data = await response.json();
      return data;
    }

    (async () => {
      let userToken = await loginUser(this.state.userInfo);
      console.log(userToken)
    })();
  }

  render(){
    console.log("admin@paych.loc password")
    
    return (
      <div className='formWrap'>
  
        <IconHeader img={signUpIcon} title={'Авторизация'}/>
  
        <form className='form' onSubmit={this.onSubmintHandler}>
          <div className='formFields'>
  
            <fieldset className='formGroup'>
              <label htmlFor='email' className='formLabel'>ЕМЕЙЛ:</label>
              <input onChange={this.onChangeHandler} id='email' type='email' autoComplete='off' placeholder='Введите почту' />
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='password' className='formLabel'>ПАРОЛЬ:</label>
              <input onChange={this.onChangeHandler} id='password' type='password' autoComplete='off' placeholder='Придумайте пароль' />
            </fieldset>
          </div>
          
          <button className='button blue-radius-btn29 register-btn'>Логин</button>
  
          <div className='alreadySignUp'>
            <p>Ещё нет аккаунта?</p>
            <Link to='/register'>Зарегистрироваться</Link>
          </div>
        </form>
      </div>
    )
  }
}

export default Login