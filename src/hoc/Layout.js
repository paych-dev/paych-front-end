import React from 'react'
import styles from './Layout.module.css'
import Navigation from '../components/Navigation/Navigation'
import {NavLink, withRouter} from 'react-router-dom'

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
        <Navigation />

        {location.pathname === '/' && mainNavigate}
        {location.pathname === '/myclubs/:id' && mainNavigate}
        
        <main className={styles.Main}>
          {this.props.children}
        </main>
      </div>
    )
  };
};

export default withRouter(Layout) 