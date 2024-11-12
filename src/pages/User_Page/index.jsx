import React from 'react';
import './index.css'
import { Button } from 'antd';
import {  Routes, Route,useNavigate,Outlet } from 'react-router-dom';
const UserDashboard = () => {
  const handleLogin = (role) => {
    console.log(role)
    // 这里可以添加实际的登录逻辑，比如发送请求到后端进行验证
    switch (role) {
      case 'test1':
        navigate('/user-dashboard/test1');
        break;
      case 'test2':
        navigate('/user-dashboard/test2');
        break;
    }
  };
  const navigate = useNavigate();
  return (
    <div className="all_box">
      <div className='router'>
        <Button  className='router_items' onClick={() => handleLogin('test1')}>test1</Button>
        <Button  className='router_items' onClick={() => handleLogin('test2')}>test2</Button>
      </div>
      <div className='content'>
        <div className='content_title'>
          <h1>今日推荐</h1>
        </div>
        <div className='content_body'>
            <Outlet/>
        </div>
      </div>

    </div>
  );
};

export default UserDashboard;