import { useRef } from 'react';
import { useVideoAutoplay } from '../hooks/useVideoAutoplay';

interface Props {
  src: string;
  poster?: string;
  className?: string;
}

export function VideoBackground({ src, poster, className = '' }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  useVideoAutoplay(ref);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}   