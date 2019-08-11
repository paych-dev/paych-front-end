import React from 'react'
import Card from '../Card/Card'

import styles from './ClubCard.module.css'
import roll from '../../assets/Rolling.gif'

class ClubCard extends React.Component {
  state = {
    didLoad: false
  }

  onLoad = () => {
    const didLoad = true;
    this.setState({didLoad: didLoad})
  }

  render(){
    console.log(this.state.didLoad)
    return (
      <Card>
        <div className={styles.ClubCard}>
          <div className={styles.ClubCard_logo}>
            <img src={this.state.didLoad ? this.props.img : roll} alt={this.props.img} onLoad={this.onLoad}/>  
          </div>
          <h3 className={styles.ClubCard_title}>{this.props.title}</h3>
          <p className={styles.ClubCard_description}>{this.props.description}</p>
          <button className="button blue-radius-btn" onClick={(e) => e.preventDefault()}>Открыть</button>
        </div>
    </Card>
    )
  }
}

export default ClubCard 