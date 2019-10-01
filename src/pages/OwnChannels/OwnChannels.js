import React from 'react'
import DontHaveClubs from '../../components/Stubs/DontHaveClubs/DontHaveClubs'
import {connect} from 'react-redux';

class MyClubs extends React.Component {
  state = {
    haveclubs: 0
  }
  
  componentDidMount() {
    console.log('My Clubs')
  } 

  render(){
    if (this.state.haveclubs === 0) {
      return <DontHaveClubs />
    } 
    // else {
    //   return (
    //     <Fragment>
    //       {data.myclubs.map(el => (
    //         <ClubCard key = {el.id}
    //           id={el.id} 
    //           title={el.title} 
    //           img={el.image} 
    //           description={el.description}/>
    //       ))}
    //     </Fragment> 
    //   )
    // }
  }
}

const mapStateToProps = state => {
  return {
    jwtToken: state.jwtToken,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyClubs)