import React, { useRef, useState, useEffect, useMemo } from "react";

type DraggablePlanetProps = {
  size: number;
  color: string; // tailwind gradient classes like "from-blue-400 to-blue-600"
  initialX: number; // percentage of viewport width
  initialY: number; // percentage of viewport height
  glowIntensity?: number; // 0..1
  rings?: boolean;
  variant?: 'glossy' | 'textured' | 'gasGiant' | 'rocky';
  palette?: { a: string; b: string; c: string; d: string };
  atmosphere?: boolean;
  atmosphereColor?: string; // rgba string for rim light
};

type Crater = { x: number; y: number; r: number; opacity: number };

export default function DraggablePlanet({
  size,
  color,
  initialX,
  initialY,
  glowIntensity = 0.5,
  rings = false,
  variant = 'glossy',
  palette,
  atmosphere = true,
  atmosphereColor = 'rgba(147,197,253,0.45)',
}: DraggablePlanetProps) {
  const planetRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({
    x: (initialX / 100) * window.innerWidth,
    y: (initialY / 100) * window.innerHeight,
  });
  const basePositionRef = useRef<{ x: number; y: number }>({
    x: (initialX / 100) * window.innerWidth,
    y: (initialY / 100) * window.innerHeight,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number | null>(null);
  const startTsRef = useRef<number>(performance.now());
  const driftSeedRef = useRef({
    phaseX: Math.random() * Math.PI * 2,
    phaseY: Math.random() * Math.PI * 2,
    speedX: 0.15 + Math.random() * 0.15,
    speedY: 0.15 + Math.random() * 0.15,
    amplitudeX: 6 + Math.random() * 10,
    amplitudeY: 6 + Math.random() * 10,
  });

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!isDragging) return;
      basePositionRef.current = { x: e.clientX - offset.x, y: e.clientY - offset.y };
    }
    function handleMouseUp() {
      setIsDragging(false);
    }
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset.x, offset.y]);

  useEffect(() => {
    function handleResize() {
      const nx = (initialX / 100) * window.innerWidth;
      const ny = (initialY / 100) * window.innerHeight;
      basePositionRef.current = { x: nx, y: ny };
      setPosition({ x: nx, y: ny });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initialX, initialY]);

  // Animation loop for gentle float and smooth following
  useEffect(() => {
    function frame(now: number) {
      const t = (now - startTsRef.current) / 1000;
      const seed = driftSeedRef.current;
      const driftX = Math.sin(seed.phaseX + t * seed.speedX) * seed.amplitudeX;
      const driftY = Math.cos(seed.phaseY + t * seed.speedY) * seed.amplitudeY;

      const desired = {
        x: basePositionRef.current.x + driftX,
        y: basePositionRef.current.y + driftY,
      };

      // Smoothly approach desired position
      const smoothing = isDragging ? 0.12 : 0.06; // slower when idle for floaty feel
      setPosition((prev) => ({
        x: prev.x + (desired.x - prev.x) * smoothing,
        y: prev.y + (desired.y - prev.y) * smoothing,
      }));

      rafRef.current = requestAnimationFrame(frame);
    }
    rafRef.current = requestAnimationFrame(frame);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isDragging]);

  function onMouseDown(e: React.MouseEvent<HTMLDivElement>) {
    const rect = planetRef.current?.getBoundingClientRect();
    if (!rect) return;
    setIsDragging(true);
    setOffset({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    basePositionRef.current = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
  }

  const sizePx = `${size * 4}px`; // scale for visual niceness
  const glow = Math.max(0, Math.min(1, glowIntensity));
  const craterSeed = useRef(Math.floor(Math.random() * 10000));
  const craters: Crater[] = useMemo(() => {
    if (variant !== 'rocky') return [] as Crater[];
    const list: Crater[] = [];
    const rand = (seed: number) => {
      let v = seed;
      return () => { v = (v * 9301 + 49297) % 233280; return v / 233280; };
    };
    const r = rand(craterSeed.current);
    for (let i=0;i<6;i++) {
      list.push({ x: 20 + r()*60, y: 20 + r()*60, r: 6 + r()*8, opacity: 0.15 + r()*0.25 });
    }
    return list;
  }, [variant]);

  return (
    <div
      ref={planetRef}
      className="fixed select-none"
      style={{
        left: position.x,
        top: position.y,
        width: sizePx,
        height: sizePx,
        transform: "translate(-50%, -50%)",
        zIndex: 5,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={onMouseDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="img"
      aria-label="draggable planet"
    >
      <div
        className={`relative h-full w-full rounded-full overflow-visible`}
        style={{
          backgroundImage:
            variant === 'textured'
              ? (() => {
                  const p = palette ?? { a: '#8b1d1d', b: '#d97706', c: '#22d3ee', d: '#ef4444' };
                  return `conic-gradient(from 210deg at 55% 55%, ${p.a} 0deg, ${p.b} 90deg, ${p.c} 140deg, ${p.d} 190deg, ${p.a} 360deg), radial-gradient(120% 120% at 35% 30%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.15) 10%, rgba(0,0,0,0) 28%), radial-gradient(100% 100% at 65% 65%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 70%)`;
                })()
              : variant === 'gasGiant'
                ? (() => {
                    const p = palette ?? { a: '#d97706', b: '#ef4444', c: '#22d3ee', d: '#f59e0b' };
                    return `conic-gradient(from 180deg at 50% 50%, ${p.a} 0deg 40deg, ${p.b} 40deg 80deg, ${p.d} 80deg 120deg, ${p.c} 120deg 170deg, ${p.a} 170deg 210deg, ${p.b} 210deg 260deg, ${p.d} 260deg 300deg, ${p.a} 300deg 360deg), radial-gradient(120% 120% at 30% 30%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.15) 10%, rgba(0,0,0,0) 28%), radial-gradient(100% 100% at 60% 60%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 55%, rgba(0,0,0,0) 70%)`;
                  })()
                : `radial-gradient(120% 120% at 30% 30%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 8%, rgba(255,255,255,0.08) 18%, rgba(0,0,0,0.0) 28%), radial-gradient(100% 100% at 60% 60%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.0) 70%), conic-gradient(from 140deg, rgba(255,255,255,0.06), rgba(0,0,0,0.1), rgba(255,255,255,0.04))`,
          WebkitMaskImage: `radial-gradient(circle at 50% 50%, black 65%, transparent 68%)`,
          boxShadow: `0 0 ${size * (isHovered ? 1.9 : 1.4)}px rgba(255,255,255,${0.12 + glow * (isHovered ? 0.45 : 0.25)}), 0 0 ${size * (isHovered ? 1.7 : 1.2)}px rgba(147,197,253,${0.18 + glow * (isHovered ? 0.45 : 0.3)}), inset 0 0 ${size * 0.5}px rgba(0,0,0,0.35)`,
          transition: "box-shadow 200ms ease, transform 200ms ease",
          transform: `${isHovered ? "scale(1.04)" : "scale(1)"} rotate(${variant==='gasGiant' ? 10 : 0}deg) scaleY(${variant==='gasGiant' ? 0.985 : 1})`,
      }}
      >
        {variant === 'glossy' && (
          <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${color} mix-blend-overlay ${isHovered ? "opacity-100" : "opacity-90"}`} style={{ transition: "opacity 200ms ease" }} />
        )}
        {variant === 'textured' && (
          <div className="absolute inset-0 rounded-full pointer-events-none" style={{
            backgroundImage: `repeating-conic-gradient(rgba(0,0,0,0.035) 0deg 2deg, rgba(255,255,255,0.03) 2deg 4deg)`,
            mixBlendMode: 'overlay',
            opacity: isHovered ? 0.65 : 0.5,
            transition: 'opacity 200ms ease',
          }} />
        )}
        {variant === 'rocky' && craters.map((c: Crater, idx: number) => (
          <div key={idx} className="absolute rounded-full"
            style={{
              left: `${c.x}%`, top: `${c.y}%`, width: `${c.r}%`, height: `${c.r}%`,
              transform: 'translate(-50%, -50%)',
              boxShadow: `inset ${c.r*0.2}px ${c.r*0.2}px ${c.r*0.8}px rgba(0,0,0,${0.35 + c.opacity}), inset -${c.r*0.25}px -${c.r*0.25}px ${c.r*0.9}px rgba(255,255,255,0.08)`,
              background: 'rgba(0,0,0,0.05)'
            }}
          />
        ))}
        <div className="absolute -inset-[12%] rounded-full blur-2xl" style={{
          background: `radial-gradient(circle, rgba(147,197,253,${(isHovered ? 0.5 : 0.35) + glow * 0.3}) 0%, rgba(59,130,246,0) 60%)`,
          transition: "opacity 200ms ease"
        }} />
        {atmosphere && (
          <div className="absolute -inset-[4%] rounded-full"
            style={{
              boxShadow: `0 0 ${size*1.2}px ${atmosphereColor}`,
              opacity: isHovered ? 0.85 : 0.65,
              transition: 'opacity 200ms ease'
            }}
          />
        )}
        {rings && (
          <div
            className="absolute inset-0"
            style={{
              transform: "rotate(25deg)",
            }}
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full"
              style={{ width: "170%", height: "45%" }}
            />
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full"
              style={{ width: "200%", height: "60%" }}
            />
          </div>
        )}
        <div className="absolute inset-0 rounded-full" style={{
          background: `radial-gradient(60% 60% at 30% 30%, rgba(255,255,255,0.28), rgba(255,255,255,0) 60%)`
        }} />
      </div>
    </div>
  );
}


