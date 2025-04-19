import React from 'react';

class ElasticBalls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: [],
      mousePosition: { x: -100, y: -100 }, // 初始位置在可视区域外
      containerSize: { width: 0, height: 0 }
    };
    this.containerRef = React.createRef();
    this.animationId = null;
  }

  componentDidMount() {
    this.initializeBalls();
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('resize', this.handleResize);
    this.animationId = requestAnimationFrame(this.updateBalls);
    this.handleResize(); // 初始化容器尺寸
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('resize', this.handleResize);
    cancelAnimationFrame(this.animationId);
  }

  handleResize = () => {
    if (this.containerRef.current) {
      this.setState({
        containerSize: {
          width: this.containerRef.current.clientWidth,
          height: this.containerRef.current.clientHeight
        }
      });
    }
  };

  initializeBalls = () => {
    const { ballCount = 12, ballRadius = 20 } = this.props;
    const container = this.containerRef.current;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const balls = [];
    const cols = Math.ceil(Math.sqrt(ballCount));
    const rows = Math.ceil(ballCount / cols);
    
    // 计算初始网格位置
    const horizontalSpacing = (containerWidth - 2 * ballRadius) / (cols - 1);
    const verticalSpacing = (containerHeight - 2 * ballRadius) / (rows - 1);
    
    for (let i = 0; i < ballCount; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      const x = ballRadius + col * horizontalSpacing;
      const y = ballRadius + row * verticalSpacing;
      
      balls.push({
        x,
        y,
        originalX: x, // 存储原始位置
        originalY: y,
        vx: 0,
        vy: 0,
        radius: ballRadius,
        color: this.getRandomColor()
      });
    }

    this.setState({ balls });
  };

  getRandomColor = () => {
    const colors = ['#FF5252', '#FF4081', '#E040FB', '#7C4DFF', '#536DFE', 
                   '#448AFF', '#40C4FF', '#18FFFF', '#64FFDA', '#69F0AE', 
                   '#B2FF59', '#EEFF41'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  handleMouseMove = (e) => {
    const container = this.containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    this.setState({
      mousePosition: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
    });
  };

  updateBalls = () => {
    const { balls, mousePosition } = this.state;
    const { repulsionForce = 800, friction = 0.85, elasticity = 0.1 } = this.props;
    const updatedBalls = [];

    for (let i = 0; i < balls.length; i++) {
      const ball = { ...balls[i] };
      const { x, y, radius, originalX, originalY } = ball;

      // 计算鼠标与圆球的距离
      const dx = x - mousePosition.x;
      const dy = y - mousePosition.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // 如果鼠标在圆球附近，施加排斥力
      if (distance < 150) {
        const force = repulsionForce / (distance * distance + 1);
        const angle = Math.atan2(dy, dx);
        
        ball.vx += Math.cos(angle) * force;
        ball.vy += Math.sin(angle) * force;
      }

      // 弹性回位力 - 向原始位置移动
      const restoreDx = originalX - x;
      const restoreDy = originalY - y;
      ball.vx += restoreDx * elasticity;
      ball.vy += restoreDy * elasticity;

      // 应用摩擦力
      ball.vx *= friction;
      ball.vy *= friction;

      // 更新位置
      ball.x += ball.vx;
      ball.y += ball.vy;

      updatedBalls.push(ball);
    }

    this.setState({ balls: updatedBalls });
    this.animationId = requestAnimationFrame(this.updateBalls);
  };

  render() {
    const { balls } = this.state;
    const { width = '600px', height = '400px' } = this.props;

    return (
      <div 
        ref={this.containerRef}
        style={{
          width,
          height,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}
      >
        {balls.map((ball, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: `${ball.x - ball.radius}px`,
              top: `${ball.y - ball.radius}px`,
              width: `${ball.radius * 2}px`,
              height: `${ball.radius * 2}px`,
              borderRadius: '50%',
              backgroundColor: ball.color,
              transition: 'transform 0.2s ease-out',
              transform: `scale(${1 + Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy) * 0.01})`,
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
            }}
          />
        ))}
      </div>
    );
  }
}

export default ElasticBalls;