import React from 'react';
import './index.css'
import { Outlet } from 'react-router-dom';
import ButtonRouterList from '../../component/SelectRouterButton/index';
import AvatarPeople from "../../component/AvatarPeople/index"
import TestImg from '../../public/img/TestAvatar.jpg'
const testData = [
  {
    name: '首页',
    router: 'user_first'
  },
  {
    name: '个人中心',
    router: 'user_message'
  },
  {
    name: '外卖订餐',
    router: 'user_takeoutOrdering'
  },
  {
    name: '订单管理',
    router: 'user_orderManagement'
  },

]
const testAvatar={
  name:"7777",
  img:TestImg,
}
const UserDashboard = () => {
  return (
    <div className="all_box">
      <div className='router'>
         <AvatarPeople {...testAvatar} />
        <ButtonRouterList Data={testData} />
      </div>
      <div className='content'>
        <div className='content_title'>
          <div>王氏外卖用户端</div>
        </div>
        <div className='content_body'>
            <Outlet/>
        </div>
      </div>

    </div>
  );
};

export default UserDashboard;