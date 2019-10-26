import React from 'react'
import style from './Stub.module.css'

const Stub = ({children}) => (<div className={style.Stub_Wrap}><div className={style.Stub_Content}>{children}</div></div>);

export default Stub