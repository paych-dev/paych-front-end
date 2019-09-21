import React from 'react'
import { Link } from 'react-router-dom'

import IconHeader from '../../components/IconHeader/IconHeader'
import signUpIcon from '../../assets/signup.png';

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

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
    const { email, password } = this.state.userInfo
    event.preventDefault();
    this.props.onAuth(email, password);
  }

  render(){
    console.log('login user',"admin@paych.loc password")
    return (
      <div className='formWrap'>
  
        <IconHeader img={signUpIcon} title={'Авторизация'}/>
  
        <form className='form' onSubmit={this.onSubmintHandler}>
          <div className='formFields'>
  
            <fieldset className='formGroup'>
              <label htmlFor='email' className='formLabel'>ЕМЕЙЛ:</label>
              <input onChange={this.onChangeHandler} id='email' type='email' autoComplete='off' placeholder='Введите почту' required />
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='password' className='formLabel'>ПАРОЛЬ:</label>
              <input onChange={this.onChangeHandler} id='password' type='password' autoComplete='off' placeholder='Придумайте пароль' required />
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

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password))
  }
}

export default connect(null, mapDispatchToProps)(Login)