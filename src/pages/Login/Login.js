import React from 'react'
import { Link, Redirect } from 'react-router-dom'

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
    event.preventDefault();
    const { email, password } = this.state.userInfo; 
    const authData = { email: email, password: password}
    this.props.onAuth(authData)
  }

  componentWillMount() {
    const params = window.location.search;
    if(params) this.props.onGoogleAuthSecond(params)
  }

  render(){
    if (this.props.user) return <Redirect to='/' />
    
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
        <button className='button blue-radius-btn29 register-btn' onClick={this.props.onGoogleAuthFirst}>Логин GOOGLE</button>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    user: state.auth.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGoogleAuthFirst: () => dispatch(actions.googleAuth_Start()),
    onGoogleAuthSecond: (code) => dispatch(actions.onGoogleAuth(code)),
    onAuth: (email, password) => dispatch(actions.auth(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)