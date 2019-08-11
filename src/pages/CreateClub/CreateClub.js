import React from 'react';
import IconHeader from '../../components/IconHeader/IconHeader';

import photo from '../../assets/photo.png'
import upload from '../../assets/upload.png'
import newClub from '../../assets/newclub.png'

class CreateClub extends React.Component {

  state = {
    clubInfo: {
      file: '',
      name: '',
      description: '',
      clubUrl: '',
      monthPay: ''
    }
  }

  onChangeHandler = event => {
    const clubInfo = {...this.state.clubInfo};
    clubInfo[event.target.id] = event.target.value;
    this.setState({clubInfo: clubInfo});
  }

  onSubmintHandler = event => {
    event.preventDefault();
    console.log(this.state.clubInfo);
  }

  render(){
    return (
      <div className='formWrap'>
  
        <IconHeader img={newClub} title={'Новый клуб'}/>
  
        <form className='form' onSubmit={this.onSubmintHandler}>
          <div className='formFields'>
  
            <fieldset className='formGroup'>
              <input onChange={this.onChangeHandler} type='file' id='file' className='inputfile'/>
              <label htmlFor='file' className='inputImg'>
                <img src={photo} alt={photo} className='inputImg_photo'/>
                <img src={upload} alt={upload} className='inputImg_upload'/>
              </label>
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='name' className='formLabel'>НАЗВАНИЕ:</label>
              <input onChange={this.onChangeHandler} maxLength='40' id='name' type='text' placeholder='Введите название' />
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='desc' className='formLabel'>ОПИСАНИЕ:</label>
              <textarea id='desc' placeholder='Придумайте описание'></textarea>  
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='link' className='formLabel'>ССЫЛКА НА КЛУБ:</label>
              <input id='link' type='text' placeholder='Paych.me/ Название клуба' />
            </fieldset>
  
            <fieldset className='formGroup'>
              <label htmlFor='money' className='formLabel'>СТОИМОСТЬ В МЕСЯЦ:</label>
              <span className='dolar'>
                <input type='number' id='money' />
              </span>
            </fieldset>
          </div>
  
          <div className='alreadySignUp'>
            Наша комисия составляет 9%
          </div>
  
          <button className='button blue-radius-btn register-btn' >Создать клуб</button>   
        </form>
      </div>
    )
  };
};

export default CreateClub