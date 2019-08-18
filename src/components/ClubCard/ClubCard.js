import React from 'react'
import Card from '../Card/Card'
import {Link} from 'react-router-dom'
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
    return (
      <Card>
        <div className={styles.ClubCard}>
          <div className={styles.ClubCard_logo}>
            <img src={this.state.didLoad ? this.props.img : roll} alt={this.props.img} onLoad={this.onLoad}/>  
          </div>
          <h3 className={styles.ClubCard_title}>{this.props.title}</h3>
          <p className={styles.ClubCard_description}>{this.props.description}</p>
          {console.log(this.props.price)}
          {
            this.props.price ? 
            <div className={styles.ClubCard_price}>
              <h3>${this.props.price}</h3>
              <span>в месяц</span>
            </div> : null}
          <Link to={`/club/${this.props.id}`} >
            <button className="button blue-radius-btn">Открыть</button>
          </Link>
        </div>
    </Card>
    )
  }
}

export default ClubCard 