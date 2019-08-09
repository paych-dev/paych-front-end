import React from 'react';
import IconHeader from '../../components/IconHeader/IconHeader';
import photo from '../../assets/photo.png'
import upload from '../../assets/upload.png'
import newClub from '../../assets/newclub.png'
import styles from './CreateClub.module.css'

const CreateClub = () => {
  return (
    <div className={styles.CreateClub}>
      <IconHeader img={newClub} title={"Новый клуб"}/>
      <form className={styles.form}>
        <div className={styles.formFields}>
          <fieldset className={styles.formGroup}>
            <input type="file" name="file" id="file" className={styles.inputfile}/>
            <label for="file" className={styles.inputImg}>
              <img src={photo} className={styles.inputImg_photo}/>
              <img src={upload} className={styles.inputImg_upload}/>
            </label>
          </fieldset>
          <fieldset className={styles.formGroup}>
            <label className={styles.formLabel}>НАЗВАНИЕ:</label>
            <input maxLength='40' id="name" type="text" name="email" autoComplete="off" placeholder="Введите название" />
          </fieldset>
          <fieldset className={styles.formGroup}>
            <label className={styles.formLabel}>ОПИСАНИЕ:</label>
            <textarea placeholder="Придумайте описание"></textarea>
          
          </fieldset>
          <fieldset className={styles.formGroup}>
            <label className={styles.formLabel}>ССЫЛКА НА КЛУБ:</label>
            <input id="link" type="text" name="password" autoComplete="off" placeholder="Paych.me/ Название клуба" />
          </fieldset>
          <fieldset className={styles.formGroup}>
            <label className={styles.formLabel}>СТОИМОСТЬ В МЕСЯЦ:</label>
            <span className={styles.dolar}><input type="number" name="currency" /></span>
          </fieldset>
        </div>
        <div className={styles.alreadySignUp}>
          Наша комисия составляет 9%
        </div>
        <button className="button blue-radius-btn register-btn" onClick={(e) => e.preventDefault()}>Создать клуб</button>   
      </form>
    </div>
  )
}

export default CreateClub