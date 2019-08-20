import React from 'react'
import styles from './IconHeader.module.css'

const IconHeader = ({img, title, desc}) => {
  return (
    <div className={styles.IconHeader}>
      <div className={styles.IconHeader_img}>
        <img src={img} alt={img} />
      </div>
      <h2 className={styles.IconHeader_title}>{title}</h2>
      <p className={styles.IconHeader_desc}>{desc}</p>
    </div>
  )
}

export default IconHeader