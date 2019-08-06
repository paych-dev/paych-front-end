import React from 'react'
import styles from './Layout.module.css'
import Navigation from '../components/Navigation/Navigation'

const Layout = props => (
  <div className={styles.Wrap}>
    <Navigation />
    <main className={styles.Main}>{props.children}</main>
  </div>
);

export default Layout