import React from 'react'
import { connect } from 'react-redux';
// import * as actionTypes from '../../store/actions/index';

class Profile extends React.Component {
  componentDidMount(){
    console.log('Profile did Mount');

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