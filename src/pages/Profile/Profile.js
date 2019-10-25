import React from 'react'
import { connect } from 'react-redux';
// import * as actionTypes from '../../store/actions/index';

class Profile extends React.Component {
  componentDidMount(){};

  render(){
    return <div><h1>Profile PAGE</h1></div>
  };
};

const mapStateToProps = state => {
  return
}

const mapDispatchToProps = dispatch => {
  return
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)