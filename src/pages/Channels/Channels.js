import React from 'react';
//COMPONENTS
import ChannelList from '../../components/ChannelList/ChannelList';
//REDUX
import {connect} from 'react-redux';
import * as actions from '../../store/actions';
import Loader from "../../components/Loader/Loader";
import DontHaveClubs from "../../components/Stubs/DontHaveClubs/DontHaveClubs";
import debounce from "lodash.debounce";

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      hasMore: true,
      isLoading: false,
      users: [],
    };

    window.onscroll = debounce(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        if(this.props.channels.own.links.next){
          this.props.loadOwn(this.props.channels.own.links.next);
        }
      }
    }, 200);
  }

  componentDidMount() {
    this.props.loadChannels();
  }

  render() {
    const page = this.props.location.pathname;
    const {own_loaded, subscribed_loaded, own, subscribed} = this.props.channels;

    if (own_loaded && subscribed_loaded) {
      return (
        <div className='Channels-page'>
          {own.data.length === 0 && < DontHaveClubs/>}
          <div className='Channels-page-content club-grid'>
            {page === '/own' ? <ChannelList data={own.data}/> : <ChannelList data={subscribed.data}/>}
          </div>
        </div>
      )
    }

    return <Loader/>
  };
}


const mapState = state => ({channels: state.channels});

const mapDispatch = dispatch => {
  return {
    loadChannels: () => dispatch(actions.fetch_channels()),
    loadOwn: (next) => dispatch(actions.fetch_own_channels(next))
  }
};

export default connect(mapState, mapDispatch)(Channels)