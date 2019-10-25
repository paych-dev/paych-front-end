import React from 'react'
import addPhoto from '../../assets/addphoto.png'
import style from './NewPost.module.css'

import { connect } from 'react-redux';
import axios from '../../axios-setting';

class NewPost extends React.Component {
  state = {
    text: ''
  };

  onChange = event => {
    let text = this.state.text;
    text = event.target.value;
    this.setState({text: text});
  };

  //TODO: FIX THIS CODE
  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const images = document.querySelector('input[type="file"][multiple]');

    for (let i = 0; i < images.files.length; i++) {
      formData.append('files[]', images.files[i]);
    }

    formData.append('text', this.state.text)

    axios
      .post(`/channels/${this.props.pageId}/posts` , formData)
      .then( resp => {
        this.props.close()
      })
      .catch( err => {
      })
  };

  render(){
    return(
      <div className={style.NewPost_wrap}>
        <div className={style.NewPost_card}>
          <form onSubmit={this.onSubmit} className={style.NewPost_formWrap}>
            <div className={style.NewPost}>
              <div className={style.NewPost__header}>
                <h2>Новый пост</h2>
                <span onClick={this.props.close} className={style.closebtn}>&times;</span>
              </div>
              <textarea 
                onChange={this.onChange}
                id='text' className={style.NewPost__text} 
                placeholder="Вы можете написать здесь текст или только добавить фото и видео.." />
            </div>
            <div className={style.NewPost_control}>
              <input multiple type='file' id='file' className='inputfile'/>
              <label htmlFor='file' className={style.NewPost__add}>
                <img src={addPhoto} alt={addPhoto} className={style.NewPost__fileImg}/>
                <span className={style.NewPost__fileText}>ДОБАВИТЬ ФОТО ИЛИ ВИДЕО</span>
              </label>
              <button className='btn blue width100'>Опубликовать</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ posts: state.posts }) 

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NewPost) 