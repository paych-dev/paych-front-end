import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import { Loader } from '../../components/Loader/Loader';

import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';

import facebook from '../../assets/facebook-2.svg';
import google from '../../assets/google-2.svg';

class Login extends React.Component {
  state = {
    userInfo: {
      email: '',
      password: ''
    }
  };

  onChangeHandler = event => {
    const userInfo = {...this.state.userInfo};
    userInfo[event.target.id] = event.target.value;
    this.setState({userInfo: userInfo});
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const { email, password } = this.state.userInfo;
    const authData = { email: email, password: password}
    this.props.onAuth(authData)
  };

  UNSAFE_componentWillMount() {
    const params = window.location.search;
    if(params) this.props.onGoogleAuthSecond(params)
  }

  render(){
    const { loggedIn, loggingIn } = this.props.auth;
    const { googleAuth } = this.props

    if (loggedIn) return <Redirect to='/' />;
    if (loggingIn) return <Loader />;

    return (
      <div className='form_wrap'>
        <div className='form_header flex between'>
          <h2 className='form_title'>Логин</h2>
          <Link to='/register' className='form_link'>
            Нету аккаунта
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

        <form className='form flex column' onSubmit={this.onSubmitHandler}>
          <span className='else'>или</span>
          <div className='form_fields'>
            <fieldset className='formGroup'>
              <input onChange={this.onChangeHandler} id='email' type='email' autoComplete='off' placeholder='Введите почту' required />
            </fieldset>
            <fieldset className='formGroup'>
              <input onChange={this.onChangeHandler} id='password' type='password' autoComplete='off' placeholder='Придумайте пароль' required />
            </fieldset>
          </div>
          <button className='btn rad-35 blue register-btn'>Логин</button>

          <Link to='/register' className='form_link mob'>
            Нету аккаунта?
          </Link>

        </form>

        <div className='rules'>
          <p>Регистрируясь вы принимаете</p>
          <Link to='/login' className='form_link'>Правила пользования</Link>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    googleAuth: () => dispatch(actions.googleAuth_Start()),
    onGoogleAuthSecond: (code) => dispatch(actions.onGoogleAuth(code)),
    onAuth: (email, password) => dispatch(actions.auth(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)