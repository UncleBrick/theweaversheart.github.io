import { useEffect, useRef } from 'react';

interface Thread {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  opacity: number;
  length: number;
  angle: number;
  speed: number;
  color: string;
}

export default function AnimatedThreads() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const threads: Thread[] = [];
    const threadCount = 12;

    for (let i = 0; i < threadCount; i++) {
      threads.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX: Math.random() * canvas.width,
        targetY: Math.random() * canvas.height,
        opacity: Math.random() * 0.25 + 0.05,
        length: Math.random() * 250 + 150,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.1 + 0.03,
        color: Math.random() > 0.5 ? '#d4af37' : '#c0c0c0',
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      threads.forEach((thread) => {
        thread.x += (thread.targetX - thread.x) * 0.01;
        thread.y += (thread.targetY - thread.y) * 0.01;
        thread.angle += thread.speed * 0.01;

        if (Math.abs(thread.x - thread.targetX) < 5 && Math.abs(thread.y - thread.targetY) < 5) {
          thread.targetX = Math.random() * canvas.width;
          thread.targetY = Math.random() * canvas.height;
        }

        const endX = thread.x + Math.cos(thread.angle) * thread.length;
        const endY = thread.y + Math.sin(thread.angle) * thread.length;

        const gradient = ctx.createLinearGradient(thread.x, thread.y, endX, endY);
        gradient.addColorStop(0, `${thread.color}00`);
        gradient.addColorStop(0.5, `${thread.color}${Math.floor(thread.opacity * 255).toString(16).padStart(2, '0')}`);
        gradient.addColorStop(1, `${thread.color}00`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(thread.x, thread.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        ctx.fillStyle = `${thread.color}${Math.floor(thread.opacity * 0.8 * 255).toString(16).padStart(2, '0')}`;
        ctx.beginPath();
        ctx.arc(thread.x, thread.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
