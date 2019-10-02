import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/';
import './ModalStack.scss';

import Modal from './Modal/Modal'

class ModalStack extends Component {
  render(){
    const { errorList } = this.props;

    if(!errorList) return null

    return (
      <div className='ModalStack_Wrap'>
        <div className='ModalStack_Content'>
          { errorList.map(el => {
            return <Modal key = {el.id} 
            id = {el.id} 
            delete = {this.props.errorClear} 
            error = {el.error}/>
          })}  
        </div>
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {
    errorList: state.error.errorList
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    errorClear: (index) => dispatch(actions.deleteError(index))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalStack)