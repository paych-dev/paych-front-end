import React from 'react'
import Card from '../Card/Card';

import addPhoto from '../../assets/addphoto.png'
import style from './NewPost.module.css'

const NewPost = () => {
  return(
    <Card>
      <form onSubmit={e => e.preventDefault()}>
        <div className={style.NewPost}>
          <h2 className={style.NewPost__header}>Новый пост</h2>
          
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
    </Card>
  )
}

export default NewPost 