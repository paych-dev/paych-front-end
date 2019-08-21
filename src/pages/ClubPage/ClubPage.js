import React, { Component } from 'react';
import NewPost from '../../components/NewPost/NewPost';
import ClubPost from '../../components/ClubPost/ClubPost';
import Popover from '../../components/Popover/Popover';

import PayDone from '../../components/Stubs/PaymantComplete/PaymantComplete';
import PayFalse from '../../components/Stubs/PaymantFailed/PaymantFailed';
import './ClubPage.css'
import more from '../../assets/more.png';
const img = 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/126298669/original/be3d2a3d4eeea095ba6f9086ecdc5c503d38caa1/create-you-a-fully-custom-esports-gem-styled-logo.png'

class ClubPage extends Component {
  state = {
    newPost: false,
    popoverOpen: false,
    payDone: true,
    payFalse: false,
    clubPosts: []
  }
  
  // componentDidMount(){
  //   const getUser = async id => {
  //     let response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  //     let data = await response.json();
  //     return data;
  //   }

  //   (async () => {
  //     let user = await getUser(2);
  //     console.log(user)
  //   })();
  // }

  onClickNewPost = () => {
    const newPost = !this.state.newPost;
    this.setState({newPost: newPost})
  }

  toggle = () => {
    const toggle = !this.state.popoverOpen;
    this.setState({popoverOpen: toggle});
  }

  render() {
    if(this.state.payDone) return <PayDone />
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

          <div className="clubPage__clubInfo_menu" >
            <div className="clubPage__clubInfo_menu__img" onClick={this.toggle}>
              <img src={more} alt={more} />
            </div>
          </div>

          {this.state.popoverOpen && <Popover />}
    
        </div>

        {!this.state.payFalse ?
        <div>
          <button className='button blue-radius-btn' onClick={this.onClickNewPost}>Новый пост</button>
          {!this.state.newPost ? <ClubPost /> : <NewPost close={this.onClickNewPost}/>}
        </div> : <PayFalse />}
        
      </div>
    );
  };
};

export default ClubPage
