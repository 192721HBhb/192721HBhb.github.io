import React from 'react';

class BouncingElement extends React.Component {
  constructor(props) {
    super(props);
    // 初始化状态（参考网页8的类组件结构）
    this.state = {
      x: 50,
      y: 100,
      velocityX: 2,
      velocityY: 3,
      containerWidth: 0,
      containerHeight: 0
    };
    // 绑定方法（参考网页8的this绑定方案）
    this.animate = this.animate.bind(this);
    this.updateContainerSize = this.updateContainerSize.bind(this);
  }

  componentDidMount() {
    // 初始化容器尺寸（参考网页6的动画实现）
    this.updateContainerSize();
    window.addEventListener('resize', this.updateContainerSize);
    // 启动动画循环（参考网页6的requestAnimationFrame用法）
    this.animationFrame = requestAnimationFrame(this.animate);
  }

  componentWillUnmount() {
    // 清除事件监听和动画帧（参考网页2的生命周期管理）
    window.removeEventListener('resize', this.updateContainerSize);
    cancelAnimationFrame(this.animationFrame);
  }

  updateContainerSize = () => {
    if (this.containerRef) {
      this.setState({
        containerWidth: this.containerRef.offsetWidth,
        containerHeight: this.containerRef.offsetHeight
      });
    }
  };

  animate() {
    // 边界检测逻辑（参考网页6的物理模拟）
    const { x, y, velocityX, velocityY, containerWidth, containerHeight } = this.state;
    const elementWidth = 50;
    const elementHeight = 30;

    let newVelocityX = velocityX;
    let newVelocityY = velocityY;

    // 水平边界碰撞（参考网页6的反弹算法）
    if (x <= 0 || x >= containerWidth - elementWidth) {
      newVelocityX = velocityX * -0.95;
    }

    // 垂直边界碰撞
    if (y <= 0 || y >= containerHeight - elementHeight) {
      newVelocityY = velocityY * -0.95;
    }

    // 更新状态（参考网页2的setState用法）
    this.setState({
      x: x + newVelocityX,
      y: y + newVelocityY,
      velocityX: newVelocityX,
      velocityY: newVelocityY
    }, () => {
      this.animationFrame = requestAnimationFrame(this.animate);
    });
  }

  render() {
    return (
      <div 
        ref={ref => this.containerRef = ref}
        style={{
          width: '600px',
          height: '400px',
          border: '2px solid #333',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: this.state.x,
            top: this.state.y,
            width: '50px',
            height: '30px',
            backgroundColor: '#2196F3',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            transition: 'all 0.1s linear'
          }}
        >
          Moving Box
        </div>
      </div>
    );
  }
}

export default BouncingElement;