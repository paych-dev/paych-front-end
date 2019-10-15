import React from 'react'
import addPhoto from '../../assets/addphoto.png'
import style from './NewPost.module.css'

class NewPost extends React.Component {
  state = {
    newPost: {
      text: '',
      files: []
    }
  }

  onChangeHandler = event => {
    event.preventDefault();
    const newPost = {...this.state.newPost};
    newPost[event.target.id] = event.target.value;
    this.setState({newPost: newPost});
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.newPost(this.state.newPost)
  }

  render(){
    return(
      <div className={style.NewPost_wrap}>
        <div className={style.NewPost_card}>
          <form onSubmit={this.onSubmit} className={style.NewPost_formWrap}>
            <div className={style.NewPost}>
              <div className={style.NewPost__header}>
                <h2>Новый пост</h2>
                <a href='#0' onClick={this.props.close} className={style.closebtn}>&times;</a>
              </div>
              <textarea onChange={this.onChangeHandler} id='text' className={style.NewPost__text} placeholder="Вы можете написать здесь текст или только добавить фото и видео.."></textarea>  
            </div>
            <div className= {style.NewPost_control}>
              <input type='file' id='file' className='inputfile'/>
              <label htmlFor='file' className={style.NewPost__add}>
                <img src={addPhoto} alt={addPhoto} className={style.NewPost__fileImg}/>
                <span className={style.NewPost__fileText}>ДОБАВИТЬ ФОТО ИЛИ ВИДЕО</span>
              </label>
              <button className='button blue-big-btn'>Опубликовать</button>
            </div> 
          </form>
        </div>
      </div>
    )
  }
}

export default NewPost 