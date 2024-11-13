import React , { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './index.css'


const RouterButtonList = (Data) => {
  console.log(Data);
  const listData = Data.Data;
  const navigate = useNavigate();
const [selectState, setSelectState] = useState(-1);
const changeSelectState = (index,router) => {
  navigate(router);
  setSelectState(index);
}
const createButtonList =()=>{
  
  return listData.map((item, index) => {
    return (
      <button className={selectState === index ? 'buttonSelected' : 'button'}
        key={index} 
        onClick={() => {
          changeSelectState(index,item.router)
        }}
      >{item.name}</button>
    )
  })

}


  return (
    <div>
        {createButtonList()}
    </div>
  )
};

export default RouterButtonList;