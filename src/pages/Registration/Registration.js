import React from 'react'
import { Link } from 'react-router-dom'

import facebook from '../../assets/facebook-2.svg';
import google from '../../assets/google-2.svg';

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
    const { googleAuth } = this.props

    return (
      <div className='form_wrap'>
        <div className='form_header flex between'>
          <h2 className='form_title'>Регистрация</h2>
          <Link to='/login' className='form_link'>
            Уже есть аккаунт
          </Link>
        </div>

        <div className='social_buttons flex between'>
          <button className='btn social flex'>
            <img src={facebook} alt={facebook}/>
            <span>Войти через Facebook</span>
          </button>
          <button className='btn social flex' onClick={googleAuth}>
            <img src={google} alt={google}/>
            <span>Войти через Google</span>
          </button>
        </div>

        <form className='form flex column' onSubmit={this.onSubmintHandler}>
          <span className='else'>или</span>
          <div className='form_fields'>
            <fieldset className='formGroup'>
              <input onChange={this.onChangeHandler} id='email' type='email' name='email' autoComplete='off' placeholder='Введите почту' />
            </fieldset>
            <fieldset className='formGroup'>
              <input onChange={this.onChangeHandler} id='password' type='password' autoComplete='off' placeholder='Придумайте пароль' />
            </fieldset>
            <fieldset className='formGroup'>
              <input onChange={this.onChangeHandler} id='password_confirmation' type='password' autoComplete='off' placeholder='Подтвердите пароль' />
            </fieldset>
          </div>
          
          <button className='btn rad-35 register-btn'>Регистрация</button>
          
          <Link to='/login' className='form_link mob'>
            Уже есть аккаунт
          </Link>          
        </form>

        <div className='rules'>
          <p>Регистрируясь вы принимаете</p>
          <Link to='/login' className='form_link'>Правила пользования</Link>
        </div>
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
    googleAuth: () => dispatch(actions.googleAuth_Start()),
    onGoogleAuthSecond: (code) => dispatch(actions.onGoogleAuth(code)),
    onAuth: (email, password) => dispatch(actions.register(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)