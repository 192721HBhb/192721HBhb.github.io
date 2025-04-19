// src/pages/Home.js
import React from 'react';
import AboutMe from '../../component/aboutMe/index'
import Sypaic from '../../component/sy-Paic/index'
import SyTest from '../../component/sy-test/index'
import TestStateFather from '../../study-react/state-react/index'
import './index.css'
const Home = () => {
 

  return (
    <div className='sy-all'>
    
      <div className='sy'>
        <Sypaic
       ballCount={12}
       ballRadius={20}
       
       repulsionForce={1000}
       friction={0.9}
       elasticity={0.15}
     
        />

      </div>
      <div className='sy'>
        <SyTest/>
      </div>

      <div className='sy'>
      <div class="animated magic">7777</div>
      </div>
      <div className='sy'>
      <TestStateFather/>
      </div>
    </div>
  );
};

export default Home;