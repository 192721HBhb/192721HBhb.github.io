import React from 'react';

class DigitalClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: new Date()
    });
  }

  formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    
    return `${year}年${month}月${day}日 ${weekdays[date.getDay()]}`;
  }

  formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    return `${hours}:${minutes}:${seconds}`;
  }

  render() {
    const { currentTime } = this.state;
    
    return (
      <div style={{
        backgroundColor: 'transparent',
        color: '#00ffff',
        padding: '30px',
        borderRadius: '10px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
      }}>
        <div style={{ 
          fontSize: '1.2em',
          marginBottom: '15px',
          letterSpacing: '1px'
        }}>
          {this.formatDate(currentTime)}
        </div>
        <div style={{ 
          fontSize: '2.5em',
          fontWeight: 'bold',
          letterSpacing: '2px'
        }}>
          {this.formatTime(currentTime)}
        </div>
      </div>
    );
  }
}

export default DigitalClock;