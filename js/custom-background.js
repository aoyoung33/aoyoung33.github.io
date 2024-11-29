// custom-background.js

// 初始化 canvas
const canvas = document.createElement('canvas');
canvas.id = 'backgroundCanvas';
document.body.appendChild(canvas);

// 设置 canvas 尺寸
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 获取 canvas 上下文
const ctx = canvas.getContext('2d');

// 使用 background.min.js 初始化背景流星特效
// 假设 background.min.js 提供了一个名为 initBackgroundEffect 的函数
initBackgroundEffect(canvas, {
  // 这里可以添加你需要的配置选项
  starColor: '#ffffff',
  starSize: 2,
  starSpeed: 1,
  meteorColor: '#ff0000',
  meteorSize: 3,
  meteorSpeed: 2
});

