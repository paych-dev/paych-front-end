import React from 'react';
import ClubCards from '../../components/ClubCards/ClubCards';
import {connect} from 'react-redux'
class AllClubs extends React.Component {
  render(){
    const { clubs } = this.props
    console.log(clubs)
    return (
      <div className='club-grid'>
        <ClubCards data={clubs}/>
      </div> 
    )
  }
}

const mapStateToProps = ({clubs}) => { 
  return { clubs }
}

export default connect(mapStateToProps, null)(AllClubs)