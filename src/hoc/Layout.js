import React from 'react'
import styles from './Layout.module.css'
import Navigation from '../components/Navigation/Navigation'
import {NavLink, withRouter} from 'react-router-dom'

import ModalStack from '../components/ModalStack/ModalStack';

class Layout extends React.Component {

  render(){
    const {location} = this.props;

    const mainNavigate = (
      <div className={styles.Main_Navigate}>
        <NavLink exact to='/' activeClassName='activeLink'>Все каналы</NavLink>
        <NavLink exact to='/myclubs/:id' activeClassName='activeLink'>Мои каналы</NavLink>
      </div> 
    )

    return (
      <div className={styles.Wrap}>
        <ModalStack />
        <Navigation />

        {location.pathname === '/' && mainNavigate}
        {location.pathname === '/myclubs/:id' && mainNavigate}
        
        <main className={styles.Main}>
          {this.props.children}
        </main>

        {/* <footer className={styles.Footer}>
          <span className={styles.Footer_text}>Copyright © 2019 Paycj Company S.L. All rights reserved</span>
          <ul className={styles.Footer_nav}>
            <li><Link to='/'>Прафила пользования</Link></li>
            <li><Link to='/'>Сообщить о проблеме</Link></li>
          </ul>
        </footer> */}
      </div>
    )
  };
};

export default withRouter(Layout) 