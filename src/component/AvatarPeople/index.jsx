import React from 'react';
import TestImg from '../../public/img/TestAvatar.jpg'
import './index.css';

const Avatar = (avatarData) => {
  console.log(avatarData);
  return (
    <div className='avatar-people'>
      <div className='avatar-people__img'>
      <img src={avatarData.img || TestImg} alt='avatar'  style={{ width: '100%', height: '100%' }}/>
      </div>
      <div className='avatar-people__name' >{avatarData.name}</div>
    </div>
  );
};

export default Avatar;