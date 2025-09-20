import { useEffect, useRef } from "react";

export default function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodesRef = useRef<any[]>([]);
  const draggingRef = useRef<any>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create planets (nodes)
    const NUM_NODES = 25;
    const MAX_DIST = 160;
    const nodes = Array.from({ length: NUM_NODES }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: 3 + Math.random() * 2,
    }));
    nodesRef.current = nodes;

    // Mouse/touch interaction
    const pointer = { x: 0, y: 0, down: false };
    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      if ("touches" in e && e.touches[0]) {
        return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
      }
      return { x: (e as MouseEvent).clientX - rect.left, y: (e as MouseEvent).clientY - rect.top };
    };

    const down = (e: any) => {
      pointer.down = true;
      const { x, y } = getPos(e);
      pointer.x = x;
      pointer.y = y;
      // check if clicked on a node
      for (let n of nodes) {
        if (Math.hypot(n.x - x, n.y - y) < 20) {
          draggingRef.current = n;
          break;
        }
      }
    };
    const move = (e: any) => {
      const { x, y } = getPos(e);
      pointer.x = x;
      pointer.y = y;
      if (draggingRef.current) {
        draggingRef.current.x = x;
        draggingRef.current.y = y;
      }
    };
    const up = () => {
      pointer.down = false;
      draggingRef.current = null;
    };

    canvas.addEventListener("mousedown", down);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    canvas.addEventListener("touchstart", down);
    window.addEventListener("touchmove", move);
    window.addEventListener("touchend", up);

    // Animation loop
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update + draw planets
      for (let n of nodes) {
        if (draggingRef.current !== n) {
          n.x += n.vx;
          n.y += n.vy;
        }
        // wrap-around
        if (n.x < 0) n.x = canvas.width;
        if (n.x > canvas.width) n.x = 0;
        if (n.y < 0) n.y = canvas.height;
        if (n.y > canvas.height) n.y = 0;

        // planet
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "#9be7ff";
        ctx.fill();
      }

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            ctx.strokeStyle = `rgba(155,231,255,${1 - dist / MAX_DIST})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Your existing cosmic glow gradients */}
      <div className="absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-orange-700/40 to-pink-500/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 blur-3xl" />
      <div className="absolute top-1/4 left-1/3 h-2 w-2 rounded-full bg-white/70 animate-pulse" />
      <div className="absolute top-2/3 left-2/3 h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />
      <div className="absolute top-1/2 left-1/5 h-1 w-1 rounded-full bg-white/50 animate-pulse" />

      {/* Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
