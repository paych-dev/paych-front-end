import React from 'react';

//COMPONENTS
import FeedElement from './FeedElement/FeedElement';
import Loader from '../../components/Loader/Loader'
//REDUX
import * as actions from '../../store/actions';
import {connect} from 'react-redux';

class Feed extends React.Component {
  componentDidMount(){
    this.props.fetch_feed()
  }

  render(){
    const {feed} = this.props;

    if(!feed) return <Loader />;

    return (
      <div className='feed-wrap'>
        { feed.map(el => <FeedElement key = {el.id} content = {el} />) }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    feed: state.feed.feed
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetch_feed: () => dispatch(actions.fetch_feed())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed)