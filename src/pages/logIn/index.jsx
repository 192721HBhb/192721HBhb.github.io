import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css'
import { Button } from 'antd';
import kingImg from '../../public/img/king.png'
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = (role) => {
    console.log(role)
    // 这里可以添加实际的登录逻辑，比如发送请求到后端进行验证
    switch (role) {
      case 'admin':
        navigate('/admin-dashboard');
        break;
      case 'user':
        navigate('/user-dashboard');
        break;
      case 'Rider':
        navigate('/rider-dashboard');
        break;
      case 'Restaurant':
        navigate('/restaurant-dashboard');
        break;
      default:
        break;
    }
  };

  return (
    
      <div  className='all_box'>
        <div className='log_blackgrourd'>
          <div className='log_in'>
          <div className='title_box'>
          <img src={kingImg} alt="king" className='king_img' />
          <div className='log_title'>王氏外卖</div>
          </div>
          <Button onClick={()=>{handleLogin('admin') }} type="primary" className='log_in_title'>管理员</Button>
          <Button onClick={()=>{handleLogin('user')}} type="primary" className='log_in_title'>用户</Button>
          <Button onClick={()=>{handleLogin('Restaurant')}} type="primary" className='log_in_title'>商家</Button>     
          </div>   
        </div>

      </div>
      

  );
};

export default LoginPage;