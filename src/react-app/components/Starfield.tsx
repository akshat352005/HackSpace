import { useMemo } from "react";

type Star = {
  x: number; // 0..100 vw
  y: number; // 0..100 vh
  size: number; // px
  opacity: number; // 0..1
  twinkleDelay: number; // seconds
};

type StarfieldProps = {
  count?: number;
  seed?: number;
  showConstellations?: boolean;
};

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export default function Starfield({ count = 180, seed = 42, showConstellations = true }: StarfieldProps) {
  const stars = useMemo<Star[]>(() => {
    const rand = seededRandom(seed);
    const list: Star[] = [];
    for (let i = 0; i < count; i++) {
      list.push({
        x: rand() * 100,
        y: rand() * 100,
        size: Math.max(1, Math.floor(rand() * 2) + 1),
        opacity: 0.5 + rand() * 0.5,
        twinkleDelay: rand() * 5,
      });
    }
    return list;
  }, [count, seed]);

  const constellationLines = useMemo(() => {
    if (!showConstellations || stars.length < 6) return [] as Array<[Star, Star]>;
    const pairs: Array<[Star, Star]> = [];
    for (let i = 0; i < 6; i++) {
      const a = stars[Math.floor((i * 13) % stars.length)];
      const b = stars[Math.floor(((i + 1) * 17) % stars.length)];
      pairs.push([a, b]);
    }
    return pairs;
  }, [showConstellations, stars]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <svg className="absolute inset-0 w-full h-full" role="presentation">
        {constellationLines.map(([a, b], idx) => (
          <line
            key={idx}
            x1={`${a.x}vw`}
            y1={`${a.y}vh`}
            x2={`${b.x}vw`}
            y2={`${b.y}vh`}
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white star-twinkle"
          style={{
            left: `${s.x}vw`,
            top: `${s.y}vh`,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDelay: `${s.twinkleDelay}s`,
          }}
        />
      ))}
    </div>
  );
}

 
