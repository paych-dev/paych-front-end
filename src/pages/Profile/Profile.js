import React from 'react'
import { connect } from 'react-redux';
// import * as actionTypes from '../../store/actions/index';

class Profile extends React.Component {
  componentDidMount(){
    console.log('Profile did Mount');

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    const userProfile = async () => {
      let response = await fetch(proxyUrl + `https://api.paych.sergo.if.ua/profile/13`, {
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.props.jwtToken}`
        }
      });

      let data = await response.json();
      console.log(data)
      return data;
    }

    (async () => {
      let profile = await userProfile();
      console.log(profile)
    })();
  };

  render(){
    return <div></div>
  };
};

const mapStateToProps = state => {
  return {
    jwtToken: state.jwtToken
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)