import React from 'react';
import PopupMenu from "../../../PopupMenu/PopupMenu";

const ProfileBtn = props => {
  return(
   <div className='profile-btn flex center' onClick={() => props.clicked(!props.toggle)}>
     <span className='profile-text'>Профиль</span>
     <div className='arrow-wrap'>
       {!props.toggle ? <i className="fas fa-angle-up" />: <i className="fas fa-angle-down" />}
     </div>
     {props.toggle ? <PopupMenu place = {'header'}/> : null}
   </div>
  )
};

export default ProfileBtn