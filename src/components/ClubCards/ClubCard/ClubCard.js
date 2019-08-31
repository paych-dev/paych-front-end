import React from 'react'
import {Link} from 'react-router-dom'
import styles from './ClubCard.module.css'
import roll from '../../../assets/Rolling.gif'

class ClubCard extends React.Component {
  state = {
    didLoad: false
  }

  onLoad = () => {
    const didLoad = true;
    this.setState({didLoad: didLoad})
  }
  
  render(){
    const { title, description, img } = this.props;

    return (
      <div className="card">
        <div className={styles.ClubCard}>
          <div className={styles.ClubCard_logo_wrap}>
            <div className={styles.ClubCard_logo}>
              <img src={this.state.didLoad ? img : roll} alt={img} onLoad={this.onLoad}/>    
            </div>
            <div className={styles.newPostCout}>3</div>  
          </div>
          <h3 className={styles.ClubCard_title}>{title}</h3>
          <p className={styles.ClubCard_description}>{description}</p>
          {
            this.props.price ? 
            <div className={styles.ClubCard_price}>
              <h3>${this.props.price}</h3>
              <span>в месяц</span>
            </div> : null}
          <Link to={{ pathname: `/club/${this.props.id}`, state: {clubName: title, img: img}}} className={styles.ClubCard_button}>
            <button className='button blue-radius-btn29'>Открыть</button>
          </Link>
        </div>
    </div>
    )
  }
}

export default ClubCard 