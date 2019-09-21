import React, {Component} from 'react';
import './Modal.scss';

class Modal extends Component {
  state = {
    showModal: false
  };
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({ showModal: true })
    }, 0)
    
    setTimeout(() => {
      this.setState({ showModal: false })
    }, 5000);

    setTimeout(() => {
      this.props.delete(this.props.id); 
    }, 5280);  
  };

  render(){
    const { error } = this.props;

    const modal = (
      <div className={`Modal_Wrap ${this.state.showModal ? 'modal-shown' : 'modal-hidden'}`}>
        <p>{error}</p>
      </div>
    );

    if (error) return modal
      else return null
  };
};

export default Modal