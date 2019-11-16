import React from 'react'
import {connect} from 'react-redux';
//STYLES
import styles from './Layout.module.scss'
//COMPONENTS
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ModalStack from '../components/ModalStack/ModalStack';
import SideMenu from "../components/Layout/SideMenu/SideMenu";

class Layout extends React.Component {
  render() {
    const {loggedIn} = this.props.auth;
    const userLoggedIn = (
      <div className={styles.Wrap}>
        <ModalStack/>
        <SideMenu/>
        <main className={styles.Main}>
          {this.props.children}
        </main>
      </div>
    );

    const userNotLoggedIn = (
      <div className={styles.Wrap}>
        <ModalStack/>
        <Header/>

        <main className={styles.Main}>
          {this.props.children}
        </main>
        <Footer/>
      </div>
    );

    if (loggedIn) {
      return userLoggedIn
    } else {
      return userNotLoggedIn
    }
  }
}

const mapStateProps = state => {
  return {
    auth: state.auth
  }
};

export default connect(mapStateProps, null)(Layout)