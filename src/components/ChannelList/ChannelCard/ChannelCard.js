import React from 'react'
import { Link } from 'react-router-dom'
import roll from '../../../assets/Rolling.gif'

class ChannelCard extends React.Component {
  state = {
    didLoad: false
  };

  onLoad = () => {
    const didLoad = true;
    this.setState({didLoad: didLoad})
  };

  render(){
    const { title, description, img } = this.props;
    return (
      <div className='channelCard flex column'>
        <div className='channelCard_logo_wrap'>
          <div className='channelCard_logo'>
            <img src={this.state.didLoad ? img : roll} alt={img} onLoad={this.onLoad}/>
          </div>
          <div className='newPostCount'>3</div>
        </div>
        <h3 className='channelCard_title'>{title}</h3>
        <p className='channelCard_description'>{description}</p>
        <Link to={{ pathname: `/channel/${this.props.id}`, state: {clubName: title, img: img}}} className='channelCard_button'>
          <button className='btn blue rad-25'>Читать</button>
        </Link>
      </div>
    )
  }
}

export default ChannelCard