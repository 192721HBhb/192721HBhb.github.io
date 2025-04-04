
import React from 'react';
import './Home.css';
import ParticlesHeader from '../../component/test/index'
import TimeShow from '../../component/timeShow/index'
import Essay from '../../component/Essay/Essay'

const Home = () => {
 

  return (
    <div >
      <div className="home_allBox">
      <ParticlesHeader
        // 设置文本数组，这些文本将依次显示在粒子效果中
        texts={["欢迎光临！",'我是一个前端工程师']}
        // 设置文本切换的速度，单位为秒
        textSpeed={0.15}
        // 设置文本切换的延迟时间，单位为毫秒
        transitionDelay={1000}
        // 设置粒子数量
        particleCount={150}
        // 设置粒子的移动速度
        particleSpeed={0.6}
        // 设置粒子的排斥半径，即粒子之间的最小距离
      
      repulsionRadius={200}
/>
<div className='timeShow'>
<TimeShow/>
</div>
<div className='EssayShow'>
<Essay/>
</div>


      </div>
  
  </div>
  );
};

export default Home;