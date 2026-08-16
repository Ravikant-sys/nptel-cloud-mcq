import React, { useEffect, useState } from 'react';

const COLORS = ['#58cc02', '#ff4b4b', '#ff9600', '#2b70c9', '#ce82ff', '#ffd900', '#00d4ff'];

export default function Confetti({ trigger = 0, count = 25 }) {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (!trigger) return;
    const newPieces = [];
    for (let i = 0; i < count; i++) {
      newPieces.push({
        id: Math.random(),
        left: Math.random() * 100,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        delay: Math.random() * 0.4,
        size: 6 + Math.random() * 8,
        borderRadius: Math.random() > 0.5 ? '50%' : '2px',
      });
    }
    setPieces(newPieces);

    const timer = setTimeout(() => {
      setPieces([]);
    }, 2800);

    return () => clearTimeout(timer);
  }, [trigger, count]);

  if (!pieces.length) return null;

  return (
    <div className="confetti-container">
      {pieces.map(p => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            background: p.color,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: p.borderRadius,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
