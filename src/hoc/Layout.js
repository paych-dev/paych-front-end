import React from 'react'
//STYLES
import styles from './Layout.module.scss'
//COMPONENTS
import Header from '../components/Layout/Header/Header';
import Footer from '../components/Layout/Footer/Footer';
import ModalStack from '../components/ModalStack/ModalStack';

class Layout extends React.Component {
  render(){
    return (
      <div className={styles.Wrap}>
        <ModalStack />
        <Header />

        <main className={styles.Main}>
          {this.props.children}
        </main>
        <Footer />
      </div>
    )
  };
};

export default Layout