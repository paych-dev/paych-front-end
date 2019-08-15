import React from 'react'
import addPhoto from '../../assets/addphoto.png'
import style from './NewPost.module.css'

const NewPost = props => {
  return(
    <div className={style.NewPost_wrap}>
      <div className={style.NewPost_card}>
        <form onSubmit={e => e.preventDefault()} className={style.NewPost_formWrap}>
          <div className={style.NewPost}>
            <div className={style.NewPost__header}>
              <h2>Новый пост</h2>
              <a href='#0' onClick={props.close} className={style.closebtn}>&times;</a>
            </div>
            <textarea className={style.NewPost__text}placeholder="Вы можете написать здесь текст или только добавить фото и видео.."></textarea>  
          </div>
          <fieldset className={`formGroup ${style.NewPost_addFile}`}>
            <input type='file' id='file' className='inputfile'/>
            <label htmlFor='file' className={style.NewPost__add}>
              <img src={addPhoto} alt={addPhoto} className={style.NewPost__fileImg}/>
              <span className={style.NewPost__fileText}>ДОБАВИТЬ ФОТО ИЛИ ВИДЕО</span>
            </label>
          </fieldset> 
          <button className='button blue-big-btn'>Опубликовать</button>
        </form>
      </div>
    </div>
  )
}

export default NewPost 