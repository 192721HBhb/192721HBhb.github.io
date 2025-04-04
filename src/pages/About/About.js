// src/pages/Home.js
import React from 'react';
import './About.css'
import imag from './me.jpg'



const Home = () => {
  const user={
    name:"黄博",
    tellPhone:"19160636280",
    email: "3307929195@qq.com", 
   
  }

  return (
    <div className='ribbon-3'>
      
      
      <div className='about_allBox'>
        
       <div className='about_message'>
        <div className='MYlX'>
           
            <div class="circular-avatar">
                <img src={imag} alt="Avatar"/>
              </div>
            <div className="message_size">{user.name}</div>
            <div className="message_size">{user.tellPhone }</div>
            <div className="message_size">{user.email}</div>
           
        </div>
        
       </div>
      
      </div>
      
    </div>
  );
};

export default Home;