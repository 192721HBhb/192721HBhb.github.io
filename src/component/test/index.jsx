import React, { Component } from 'react';
import './ParticlesHeader.css';

class ParticlesHeader extends Component {
  canvasRef = React.createRef();
  mousePos = { x: 0, y: 0 };
  particles = [];
  animationFrameId = null;
  textIndex = 0;
  textProgress = 0;
  textTimeout = null;

  static defaultProps = {
    texts: [
      "Welcome to the Future",
      "Explore the Unknown",
      "Innovate with Technology",
      "Where Ideas Come to Life"
    ],
    textSpeed: 1, // 文字显示速度 (每帧显示字符数)
    transitionDelay: 2000, // 文本切换间隔(毫秒)
    particleCount: 100, // 粒子数量
    particleSpeed: 0.5, // 粒子速度
    repulsionRadius: 150 // 鼠标斥力半径
  };

  componentDidMount() {
    this.initCanvas();
    this.initParticles();
    this.animate();
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animationFrameId);
    clearTimeout(this.textTimeout); // 清理文本切换定时器
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  initCanvas = () => {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = 200 * dpr;
    canvas.style.width = '100%';
    canvas.style.height = '200px';
    this.ctx = canvas.getContext('2d');
    this.ctx.scale(dpr, dpr);
  };

  initParticles = () => {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    const { width, height } = canvas;
    this.particles = Array.from({ length: this.props.particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * this.props.particleSpeed,
      vy: (Math.random() - 0.5) * this.props.particleSpeed,
      radius: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 60 + 200}, 70%, 50%)`
    }));
  };

  handleResize = () => {
    this.initCanvas();
    this.initParticles();
  };

  handleMouseMove = (e) => {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    this.mousePos = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  animate = () => {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    this.updateParticles();
    this.drawBackground();
    this.drawParticles();
    this.drawText();
    this.animationFrameId = requestAnimationFrame(this.animate);
  };

  updateParticles = () => {
    const canvas = this.canvasRef.current;
    if (!canvas) return;

    const { width, height } = canvas;
    const { repulsionRadius } = this.props;

    this.particles.forEach(particle => {
      const dx = particle.x - this.mousePos.x;
      const dy = particle.y - this.mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < repulsionRadius) {
        const force = (repulsionRadius - distance) / repulsionRadius;
        particle.vx += (dx / distance) * force * 0.1;
        particle.vy += (dy / distance) * force * 0.1;
      }

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) particle.vx *= -0.8;
      if (particle.y < 0 || particle.y > height) particle.vy *= -0.8;

      particle.color = `hsl(${Math.sin(Date.now() * 0.001) * 30 + 220}, 70%, 50%)`;
    });
  };

  drawBackground = () => {
    const { ctx } = this;
    const { width, height } = this.canvasRef.current;

    // 星空渐变背景
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, '#000428');
    gradient.addColorStop(1, '#004e92');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // 添加随机星光
    for (let i = 0; i < 30; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * width,
        Math.random() * height,
        Math.random() * 1.5,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.5})`;
      ctx.fill();
    }
  };

  drawParticles = () => {
    const { ctx } = this;
    this.particles.forEach(particle => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

      const gradient = ctx.createRadialGradient(
        particle.x,
        particle.y,
        0,
        particle.x,
        particle.y,
        particle.radius
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.fillStyle = gradient;
      ctx.fill();
    });
  };

  drawText = () => {
    const { ctx } = this;
    const { width, height } = this.canvasRef.current;
    const { texts, textSpeed, transitionDelay } = this.props;

    if (!texts || texts.length === 0) return;

    ctx.font = 'bold 2em "Arial", sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    const currentText = texts[this.textIndex % texts.length];
    const displayText = currentText.substring(0, Math.floor(this.textProgress));

    // 文字阴影效果
    ctx.shadowColor = 'rgba(0, 200, 255, 0.7)';
    ctx.shadowBlur = 15;
    ctx.fillText(displayText, width / 2, height / 2);
    ctx.shadowBlur = 0;

    if (this.textProgress < currentText.length) {
      this.textProgress += textSpeed;
    } else {
      // 确保只有一个定时器运行
      if (!this.textTimeout) {
        this.textTimeout = setTimeout(() => {
          this.textIndex = (this.textIndex + 1) % texts.length;
          this.textProgress = 0;
          this.textTimeout = null; // 重置定时器引用
        }, transitionDelay);
      }
    }
  };

  render() {
    return (
      <div className="particles-header">
        <canvas ref={this.canvasRef} />
      </div>
    );
  }
}

export default ParticlesHeader;