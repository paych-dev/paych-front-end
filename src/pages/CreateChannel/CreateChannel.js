import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions';

import IconHeader from '../../components/IconHeader/IconHeader';
import NewClubDone from '../../components/Stubs/NewClubDone/NewClubDone'

import photo from '../../assets/photo.png'
import upload from '../../assets/upload.png'
import newClub from '../../assets/newclub.png'
import axios from "../../axios-setting";

class CreateClub extends React.Component {

  state = {
    createtDone: false,
    imagePreviewUrl: '',
    selectedFile: '',
    
    channelInfo: {
      name: '',
      description: '',
      link: '',
      price: ''
    }
  }

  onChangeHandler = event => {
    const channelInfo = {...this.state.channelInfo};
    channelInfo[event.target.id] = event.target.value;
    this.setState({channelInfo: channelInfo});
  }

  onSubmintHandler = event => {
    event.preventDefault();

    const { name, description, link, price} = this.state.channelInfo;
    const formData = new FormData();
    const avatar = document.querySelector('input[type="file"]');

    formData.append('avatar', avatar.files[0]);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('link', link);
    formData.append('price', price);

    this.props.createChannel(formData);
  };

  render(){
    if (this.state.createtDone) return <NewClubDone url={this.state.clubInfo.clubUrl}/>
    
    return (
      <div className='formWrap'>
  
        <IconHeader img={newClub} title={'Новый клуб'}/>
  
        <form className='form' onSubmit={this.onSubmintHandler}>
          <div className='formFields'>
  
            <fieldset className='formGroup'>
              <input onChange={this.onChangeHandler} type='file' id='file' className='inputfile'/>
              <label htmlFor='file' className='inputImg'>
                <img src={!this.state.imagePreviewUrl ? photo : this.state.imagePreviewUrl} alt={photo} className='inputImg_photo'/>
                <img src={upload} alt={upload} className='inputImg_upload'/>
              </label>
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='name' className='formLabel'>НАЗВАНИЕ:</label>
              <input onChange={this.onChangeHandler} maxLength='40' autoComplete='off' id='name' type='text' placeholder='Введите название' />
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='description' className='formLabel'>ОПИСАНИЕ:</label>
              <textarea onChange={this.onChangeHandler} id='description' autoComplete='off' placeholder='Придумайте описание'></textarea>  
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='link' className='formLabel'>ССЫЛКА НА КЛУБ:</label>
              <input onChange={this.onChangeHandler} id='link' type='text' autoComplete='off' placeholder='paych.me/' />
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='price' className='formLabel'>СТОИМОСТЬ В МЕСЯЦ:</label>
              <span className='dolar'>
                <input onChange={this.onChangeHandler} type='number' autoComplete='off' id='price' />
              </span>
            </fieldset>
          </div>
  
          <div className='alreadySignUp'>
            Наша комисия составляет 9%
          </div>
  
          <button className='button blue-radius-btn29 register-btn' >Создать клуб</button>   
        </form>
      </div>
    )
  };
};

const mapStateToProps = state => {
  return {
    jwtToken: state.jwtToken,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createChannel: (channelInfo) => dispatch(actions.createChannel(channelInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateClub)