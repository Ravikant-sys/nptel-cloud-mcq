import React, { useEffect, useState } from 'react';

const PERFECT_OPTIONS = [
  { emoji: '🔥', title: 'On Fire!', subtitle: 'Perfect round — all correct!' },
  { emoji: '⚡', title: 'Unstoppable!', subtitle: 'You nailed every question!' },
  { emoji: '🌟', title: 'Flawless!', subtitle: 'Not a single mistake!' },
];

const GOOD_OPTIONS = [
  { emoji: '💪', title: 'Great Job!', subtitle: 'Keep the momentum going!' },
  { emoji: '👏', title: 'Well Done!', subtitle: "You're doing fantastic!" },
  { emoji: '🎯', title: 'Nice Work!', subtitle: 'Almost perfect!' },
];

export default function MilestoneOverlay({ correctCount, totalInBlock, onDismiss }) {
  const [dismissing, setDismissing] = useState(false);
  const [msg] = useState(() => {
    if (correctCount === totalInBlock) {
      return PERFECT_OPTIONS[Math.floor(Math.random() * PERFECT_OPTIONS.length)];
    }
    return GOOD_OPTIONS[Math.floor(Math.random() * GOOD_OPTIONS.length)];
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDismissing(true);
      const closeTimer = setTimeout(() => {
        if (onDismiss) onDismiss();
      }, 400);
      return () => clearTimeout(closeTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  return (
    <div className={`milestone-overlay ${dismissing ? 'dismissing' : ''}`}>
      <div className="milestone-emoji">{msg.emoji}</div>
      <div className="milestone-text">{msg.title}</div>
      <div className="milestone-subtext">{msg.subtitle}</div>
      <div className="milestone-score-ring">
        <span className="milestone-score-text">
          {correctCount}/{totalInBlock}
        </span>
      </div>
    </div>
  );
}
