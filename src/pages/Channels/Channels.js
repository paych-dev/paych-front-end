import React from 'react';

//COMPONENTS
import ClubCards from '../../components/ClubCards/ClubCards';

//STYLE
import style from './Channels.module.scss';

//REDUX
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

class Channels extends React.Component {
  state = {
    curr: 'own',
    own: true,
    subscribed: false
  }

  componentDidMount() {
    this.props.loadChannels();
  }

  onPositonChangeHandler = event => {
    const position = event.target.id;
    this.setState({curr: position});
  }

  render(){
    const { curr } = this.state;
    const { own, subscribed } = this.props.channels;
    
    if(!own || !subscribed) return null;

    return (
      <div className='Channels-page'>
        <nav className={style.Channels_page_navigation}>
          <ul className={style.Channels_page_navigation__wrap}>
            <li id='own' onClick={(e) => this.onPositonChangeHandler(e)} className={`${style.Channels_page_navigation__element} ${ curr === 'own' && style.Channels_page_navigation__element_active}`}>Мои каналы</li>
            <li id='subscribed' onClick={(e) => this.onPositonChangeHandler(e)} className={`${style.Channels_page_navigation__element} ${ curr !== 'own' && style.Channels_page_navigation__element_active}`}>Все каналы</li> 
          </ul>
        </nav>
        <div className='Channels-page-content club-grid'>
          { curr === 'own' ? <ClubCards data = {own.data} /> : <ClubCards data = {subscribed.data} />}
        </div>
      </div>
    )
  };
};


const mapState = state => {
  return {
    channels: state.channels
  }
}

const mapDispatch = dispatch => {
  return {
    loadChannels: () => dispatch(actions.fetch_channels())
  }
}

export default connect(mapState, mapDispatch)(Channels)