import React, { Component } from 'react';
import NewPost from '../../components/NewPost/NewPost';
import ClubPost from '../../components/ClubPost/ClubPost';

import './ClubPage.css'
import more from '../../assets/more.png';
const img = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/126298669/original/be3d2a3d4eeea095ba6f9086ecdc5c503d38caa1/create-you-a-fully-custom-esports-gem-styled-logo.png'

class ClubPage extends Component {
  state = {
    newPost: false,
  }
  
  onClickNewPost = () => {
    const newPost = !this.state.newPost;
    this.setState({newPost: newPost})
  }

  render() {
    return (
      <div className="clubPage_wrap">
        <div className="clubPage__clubInfo">
          <div className="clubPage__clubInfo_logoText">
            <div className="clubPage__clubInfo_logo">
              <img src={img} alt={img} />
            </div>
            <div className="clubPage__clubInfo_text">
              <h4 className="clubPage__clubInfo_text__header">Бизнес Секреты</h4>
              <span className="clubPage__clubInfo_text__info">Last updated 1 day ago</span>
            </div>
          </div>
          <div className="clubPage__clubInfo_menu">
            <div className="clubPage__clubInfo_menu__img" onClick={this.onClickNewPost}>
              <img src={more} alt={more} />
            </div>
          </div>
        </div>
        {!this.state.newPost ? <ClubPost /> : <NewPost />}
      </div>
    );
  };
};

export default ClubPage
