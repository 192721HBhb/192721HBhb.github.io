import React from 'react';
import TestImg from '../../public/img/TestAvatar.jpg'
import './index.css';

const Avatar = (data) => {
    const { notData } = data;
  return (
    <div className='all_box'>
      {notData}
    </div>
  );
};

export default Avatar;