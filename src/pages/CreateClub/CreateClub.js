import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/';

import IconHeader from '../../components/IconHeader/IconHeader';
import NewClubDone from '../../components/Stubs/NewClubDone/NewClubDone'

import photo from '../../assets/photo.png'
import upload from '../../assets/upload.png'
import newClub from '../../assets/newclub.png'

class CreateClub extends React.Component {

  state = {
    createtDone: false,
    imagePreviewUrl: '',
    selectedFile: '',
    
    clubInfo: {
      name: '',
      description: '',
      clubUrl: '',
      monthPay: ''
    }
  }

  onChangeHandler = event => {
    const clubInfo = {...this.state.clubInfo};

    if(event.target.id === 'file') 
      this.setState({imagePreviewUrl: URL.createObjectURL(event.target.files[0])})
    else if(event.target.id === 'clubUrl')
      clubInfo[event.target.id] = `paych.me/${event.target.value}`;   
    else 
      clubInfo[event.target.id] = event.target.value;
      
    this.setState({clubInfo: clubInfo});
  }

  onSubmintHandler = event => {
    event.preventDefault();
    const { clubInfo, selectedFile} = this.state;  
    this.props.createClub(clubInfo, selectedFile, this.props.jwtToken)
    //this.setState({createtDone: !this.state.createtDone})
  }

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
              <input onChange={this.fileChangedHandler} maxLength='40' autoComplete='off' id='name' type='text' placeholder='Введите название' />
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='desc' className='formLabel'>ОПИСАНИЕ:</label>
              <textarea onChange={this.onChangeHandler} id='desc' autoComplete='off' placeholder='Придумайте описание'></textarea>  
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='link' className='formLabel'>ССЫЛКА НА КЛУБ:</label>
              <input onChange={this.onChangeHandler} id='clubUrl' type='text' autoComplete='off' placeholder='paych.me/' />
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='money' className='formLabel'>СТОИМОСТЬ В МЕСЯЦ:</label>
              <span className='dolar'>
                <input onChange={this.onChangeHandler} type='number' autoComplete='off' id='money' />
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
    createClub: (data, file, token) => dispatch(actions.createClub(data, file, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateClub)