import { useMemo } from "react";

type Comet = {
  id: number;
  startX: number; // vw
  startY: number; // vh
  length: number; // px
  delay: number; // s
  duration: number; // s
  angle: number; // deg
};

type CometLayerProps = {
  count?: number;
  seed?: number;
};

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 1664525 + 1013904223) % 0xffffffff;
    return value / 0xffffffff;
  };
}

export default function CometLayer({ count = 8, seed = 7 }: CometLayerProps) {
  const comets = useMemo<Comet[]>(() => {
    const rnd = seededRandom(seed);
    const arr: Comet[] = [];
    for (let i = 0; i < count; i++) {
      const startY = rnd() * 100; // anywhere vertically
      const startX = -10 - rnd() * 20; // start slightly off-screen left
      const length = 80 + rnd() * 140;
      const delay = rnd() * 6;
      const duration = 4 + rnd() * 5;
      const angle = -15 - rnd() * 30; // slight downward angle
      arr.push({ id: i, startX, startY, length, delay, duration, angle });
    }
    return arr;
  }, [count, seed]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-5" aria-hidden>
      {comets.map((c) => (
        <div
          key={c.id}
          className="absolute comet"
          style={{
            left: `${c.startX}vw`,
            top: `${c.startY}vh`,
            width: `${c.length}px`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            transform: `rotate(${c.angle}deg)`,
          }}
        >
          <div className="comet-head" />
          <div className="comet-tail" />
        </div>
      ))}
    </div>
  );
}


