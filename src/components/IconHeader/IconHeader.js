import React from 'react'
import styles from './IconHeader.module.css'

const IconHeader = props => {
  return (
    <div className={styles.IconHeader}>
      <div className={styles.IconHeader_img}>
        <img src={props.img} alt={props.img} />
      </div>
      <h2 className={styles.IconHeader_title}>{props.title}</h2>
    </div>
  )
}

export default IconHeader