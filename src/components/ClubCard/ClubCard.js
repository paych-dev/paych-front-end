import React from 'react'
import Card from '../Card/Card'
import styles from './ClubCard.module.css'

const ClubCard = props => (
  <Card>
    <div className={styles.ClubCard}>
      <div className={styles.ClubCard_logo}>
        <img src={props.img} alt={props.img}/>
      </div>
      <h3 className={styles.ClubCard_title}>{props.title}</h3>
      <p className={styles.ClubCard_description}>{props.description}</p>
      <button className="button blue-radius-btn" onClick={(e) => e.preventDefault()}>Открыть</button>
    </div>
  </Card>
)

export default ClubCard 