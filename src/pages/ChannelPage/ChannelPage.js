import React, { Component } from 'react';
import NewPost from '../../components/NewPost/NewPost';
import ClubPosts from '../../components/ClubPosts/ClubPosts';
import Popover from '../../components/Popover/Popover';
import {withRouter} from 'react-router-dom'

import PayDone from '../../components/Stubs/PaymantComplete/PaymantComplete';
import PayFalse from '../../components/Stubs/PaymantFailed/PaymantFailed';

import more from '../../assets/more.png';
import './ChannelPage.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'
import Loader from '../../components/Loader/Loader';

class ClubPage extends Component {
  state = {
    thisPageId: '',
  

    newPost: false,
    popoverOpen: false,
    payDone: false,
    payFalse: false,
  }
  
  componentDidMount(){
    const currLocation = this.props.location.pathname.replace(/\D+/g,"");
    this.props.loadPosts(currLocation)
  }

  onClickNewPost = (event) => {
    event.preventDefault();
    const newPost = !this.state.newPost;
    this.setState({newPost: newPost})
  }

  toggle = () => {
    const toggle = !this.state.popoverOpen;
    this.setState({popoverOpen: toggle});
  }
  render() {
    const { clubName, img } = this.props.location.state;
    const { posts } = this.props.posts;

    if(!posts) return <Loader />

    return (
      <div className="clubPage_wrap"> {console.log('loaded', posts)}
        <div className="clubPage__clubInfo">

          <div className="clubPage__clubInfo_logoText">
            <div className="clubPage__clubInfo_logo">
              <img src={img} alt={img} />
            </div>
            <div className="clubPage__clubInfo_text">
              <h4 className="clubPage__clubInfo_text__header">{clubName}</h4>
              <span className="clubPage__clubInfo_text__info">Last updated 1 day ago</span>
            </div>
          </div>

          <div className="clubPage__clubInfo_menu" onClick={this.toggle}>
            <div className="clubPage__clubInfo_menu__img">
              <img src={more} alt={more} />
            </div>
          </div>

          {this.state.popoverOpen && <Popover />}
    
        </div>

        <div>
          <button className='button blue-radius-btn' onClick={this.onClickNewPost}>Новый пост</button>
          <ClubPosts posts = {posts} />
        </div>
        
      </div>
    );
  };
};

const mapStateToProps = state => ({ posts: state.posts }) 

const mapDispatchToProps = dispatch => ({
  loadPosts: (id) => dispatch(actions.fetch_channel_posts(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ClubPage))
