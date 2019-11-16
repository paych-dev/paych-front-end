import React from 'react'
import addPhoto from '../../../assets/addphoto.png'
import style from './NewPost.module.css'

import { connect } from 'react-redux';
import axios from '../../../axios-setting';

class New extends React.Component {
  state = {
    images: [],
    text: ''
  };

  onChange = event => {
    let text = this.state.text;
    if(event.target.id === 'file'){
      this.setState({
        images: [...this.state.images, ...event.target.files]
      });
    } else {
      text = event.target.value;
      this.setState({text: text});
    }
  };

  onSubmit = event => {
    event.preventDefault();

    const { images } = this.state;
    const formData = new FormData();

    formData.append('text', this.state.text);
    if(images){
      formData.append('files[]', images[0]);
    }
    axios
      .post(`/channels/${this.props.pageId}/posts`, formData)
      .then(resp => {
          this.props.close()
      })
      .catch( err => {
        alert('Something is wrong', err)
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
              <input type='file' id='file' className='inputfile' onChange={this.onChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(New)