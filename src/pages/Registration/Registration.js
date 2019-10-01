import React from 'react'
import { Link } from 'react-router-dom'

import IconHeader from '../../components/IconHeader/IconHeader'
import signUpIcon from '../../assets/signup.png';

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

class Registration extends React.Component {
  state = {
    userInfo: {
      email: '',
      password: '',
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
    const userInfo = this.state.userInfo;
    this.props.onAuth(userInfo);
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
              <label htmlFor='password' className='formLabel'>ПАРОЛЬ:</label>
              <input onChange={this.onChangeHandler} id='password' type='password' autoComplete='off' placeholder='Придумайте пароль' />
            </fieldset>
            <fieldset className='formGroup'>
              <label htmlFor='password_confirmation' className='formLabel'>ПОДТВЕРДИТЕ ПАРОЛЬ:</label>
              <input onChange={this.onChangeHandler} id='password_confirmation' type='password' autoComplete='off' placeholder='Подтвердите пароль' />
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


const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.register(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)