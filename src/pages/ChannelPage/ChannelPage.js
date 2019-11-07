import React, {Component} from 'react';
import NewPost from '../../components/Post/New/New';
import ChannelPosts from '../../components/ChannelPosts/ChannelPosts';
import PopupMenu from '../../components/PopupMenu/PopupMenu';
// import PayDone from '../../components/Stubs/PaymantComplete/PaymantComplete';
// import PayFalse from '../../components/Stubs/PaymantFailed/PaymantFailed';

import more from '../../assets/more.png';
import './ChannelPage.scss';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index'
import { Loader } from '../../components/Loader/Loader';
import axios from "../../axios-setting";

class ChannelPage extends Component {
  state = {
    channel: '',
    userId: localStorage.getItem('userId'),
    ownerId: this.props.location.state.owner_id,
    pageId: null,
    newPost: false,
    posts: '',
    popoverOpen: false,
    payDone: false,
    payFalse: false,
  };

  //TODO: LOCATION ID

  fetch_channel_info = id => {
    axios
      .get(`/channels/${id}`)
      .then(response => {
        const channel = response.data.data;
        this.setState({channel: channel});
      })
      .catch(error => {});
  };

  fetch_channel_posts = id => {
    axios
    .get(`channels/${id}/posts`)
    .then(response => {
      const posts = response.data.data
      this.setState({posts: posts});
    })
    .catch(error => {
    });
  }

  componentDidMount() {
    const currLocation = this.props.location.pathname.replace(/\D+/g, "");
    this.fetch_channel_info(currLocation);
    this.fetch_channel_posts(currLocation);
  }

  onClickNewPost = () => {
    const newPost = !this.state.newPost;
    this.setState({newPost: newPost})
  };

  toggle = () => {
    const toggle = !this.state.popoverOpen;
    this.setState({popoverOpen: toggle});
  };

  render() {
    const {name, avatar_image} = this.state.channel;
    const {posts, userId, ownerId} = this.state;
    if (!posts) return <Loader/>;

    const currLocation = this.props.location.pathname.replace(/\D+/g, "");
    if (this.state.newPost) return <NewPost pageId={currLocation} close={this.onClickNewPost}/>;
    return (
      <div className="clubPage_wrap">
        <div className="clubPage__clubInfo">

          <div className="clubPage__clubInfo_logoText">
            <div className="clubPage__clubInfo_logo">
              <img src={avatar_image} alt={avatar_image}/>
            </div>
            <div className="clubPage__clubInfo_text">
              <h4 className="clubPage__clubInfo_text__header">{name}</h4>
              <span className="clubPage__clubInfo_text__info">Last updated 1 day ago</span>
            </div>
          </div>

          <div className="clubPage__clubInfo_menu" onClick={this.toggle}>
            <div className="clubPage__clubInfo_menu__img">
              <img src={more} alt={more}/>
            </div>
          </div>

          {this.state.popoverOpen && <PopupMenu place={'channel'}/>}
        </div>
        <div>
          {parseInt(userId) === parseInt(ownerId) ? <button className='btn rad-10 blue' onClick={this.onClickNewPost}>Новый пост</button> : null}
          <ChannelPosts posts={posts.reverse()}/>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  posts: state.posts,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  loadPosts: (id) => dispatch(actions.fetch_channel_posts(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelPage)
