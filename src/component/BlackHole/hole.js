import React from 'react';
import './hole.css';

// 定义一个名为 StarField 的 React 组件
class StarField extends React.Component {
  // 构造函数，初始化组件状态和引用
  constructor(props) {
    super(props);
    this.state = {
      stars: [], // 存储星星的数组
      canvasSize: 800, // 画布的尺寸
    };
    this.canvasRef = React.createRef(); // 创建一个引用，用于获取 canvas DOM 元素
  }

  // 组件挂载完成后调用
  componentDidMount() {
    this.generateStars(); // 生成星星
    this.startAnimation(); // 开始动画
  }

  // 生成星星的方法
  generateStars = () => {
    const stars = [];
    const { canvasSize } = this.state;

    // 生成 200 个星星
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvasSize; // 随机 x 坐标
      const y = Math.random() * canvasSize; // 随机 y 坐标
      const z = Math.random() * canvasSize; // 随机 z 坐标
      const speed = 0.1 + Math.random() * 0.3; // 随机速度
      const size = 1 + Math.random() * 2;      // 随机大小
      const opacity = 0.5 + Math.random() * 0.5; // 随机透明度
      const color = Math.random() < 0.8 ? '#FFFFFF' : '#D9A7FF'; // 80% 白色，20% 淡紫色

      stars.push({ x, y, z, speed, size, opacity, color }); // 将星星添加到数组中
    }

    this.setState({ stars }); // 更新状态
  };

  // 开始动画的方法
  startAnimation = () => {
    this.animationFrame = requestAnimationFrame(this.animate); // 请求动画帧
  };

  // 动画循环的方法
  animate = () => {
    const { canvasSize } = this.state;
    const context = this.canvasRef.current.getContext('2d'); // 获取 canvas 的绘图上下文

    // 清空画布
    context.fillStyle = 'rgba(0, 0, 0, 0.1)';
    context.fillRect(0, 0, canvasSize, canvasSize);

    // 遍历所有星星
    this.state.stars.forEach((star, index) => {
      star.z -= star.speed; // 更新星星的 z 坐标

      // 当粒子移出画布时，重置位置
      if (star.z <= 0) {
        star.z = canvasSize;
        star.x = Math.random() * canvasSize;
        star.y = Math.random() * canvasSize;
        star.color = Math.random() < 0.8 ? '#FFFFFF' : '#D9A7FF'; // 重置颜色
      }

      // 计算粒子位置
      const scale = canvasSize / star.z;
      const newX = star.x * scale + canvasSize / 2;
      const newY = star.y * scale + canvasSize / 2;

      // 绘制粒子
      context.beginPath();
      context.arc(newX, newY, star.size, 0, Math.PI * 2);
      context.fillStyle = `rgba(${star.color === '#FFFFFF' ? '255,255,255' : '217,167,255'}, ${star.opacity})`;
      context.fill();
    });

    this.animationFrame = requestAnimationFrame(this.animate);
  };

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrame);
  }

  render() {
    const { canvasSize } = this.state;

    return (
      
        <canvas
          ref={this.canvasRef}
          width={canvasSize}
          height={canvasSize}
          className="star-canvas"
        />
     
    );
  }
}

export default StarField;