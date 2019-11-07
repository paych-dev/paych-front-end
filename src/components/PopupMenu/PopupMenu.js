import React from 'react'
import {headerMenu, channelMenu} from './popupData';

const PopupMenu = ({place}) => {
  let menu = null;

  const currentMenu = () => {
    switch (place) {
      case 'header':
        console.log(headerMenu);
        return menu = headerMenu;
      case 'channel':
        console.log(channelMenu);
        return menu = channelMenu;
      default:
        return menu;
    }
  };

  return (
    <div className={`PopupMenu ${place}`}>
      <ul>
        { currentMenu().map(el => <li key={el.title} onClick={el.callback}>{el.title}</li>)}
      </ul>
    </div>
  );
};

export default PopupMenu