import React from 'react';
import './Essay.css';

class Essay extends React.Component {
  render() {
    return (
      <div className="essay-container">
        <div className="essay-content">
          <h2 className="essay-title">午后随笔</h2>
          <div className="essay-author">作者：深秋的旅人</div>
          <p className="essay-text">
            窗外的梧桐叶簌簌落下，金色的阳光穿过百叶窗的缝隙，在实木地板上编织出明暗交错的琴弦...
          </p>
         
        </div>
      </div>
    );
  }
}

export default Essay;