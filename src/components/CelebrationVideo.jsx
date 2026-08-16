import React, { useEffect, useRef, useState } from 'react';

export default function CelebrationVideo({ onComplete }) {
  const videoRef = useRef(null);
  const [fading, setFading] = useState(false);
  const completedRef = useRef(false);

  const triggerComplete = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    setFading(true);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      onComplete();
      return;
    }

    const fallbackTimeout = setTimeout(() => {
      triggerComplete();
    }, 6000);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          video.addEventListener('ended', triggerComplete, { once: true });
        })
        .catch(() => {
          // Autoplay blocked
          triggerComplete();
        });
    }

    return () => {
      clearTimeout(fallbackTimeout);
    };
  }, []);

  return (
    <div className={`celebration-video-wrapper ${fading ? 'fade-out' : ''}`}>
      <video
        ref={videoRef}
        className="celebration-video"
        muted
        playsInline
        src="/celebration.mp4"
      />
    </div>
  );
}
