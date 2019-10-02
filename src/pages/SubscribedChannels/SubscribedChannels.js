import React from 'react';
import ClubCards from '../../components/ClubCards/ClubCards';
import {connect} from 'react-redux';
import * as actions from '../../store/actions'

class AllClubs extends React.Component {
  componentDidMount(){
    this.props.getChannels()
  }
  
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

const mapDispatchToProps = dispatch => {
  return {
    getChannels: () => dispatch(actions.fetch_channels())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllClubs)