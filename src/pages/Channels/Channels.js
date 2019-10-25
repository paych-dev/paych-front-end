import React from 'react';
//COMPONENTS
import ChannelList from '../../components/ChannelList/ChannelList';
//REDUX
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import Loader from "../../components/Loader/Loader";

class Channels extends React.Component {

  componentDidMount() {
    this.props.loadChannels();
  }

  render(){
    const page = this.props.location.pathname;
    const { own_loaded, subscribed_loaded, own, subscribed } = this.props.channels;

    if(own_loaded && subscribed_loaded){
      return (
        <div className='Channels-page'>
          <div className='Channels-page-content club-grid'>
            { page === '/own' ? <ChannelList data = {own.data} /> : <ChannelList data = {subscribed.data} /> }
          </div>
        </div>
      )
    }

    return  <Loader />
  };
}


const mapState = state => ({channels: state.channels});

const mapDispatch = dispatch => {
  return {
    loadChannels: () => dispatch(actions.fetch_channels())
  }
};

export default connect(mapState, mapDispatch)(Channels)