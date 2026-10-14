import { useRef } from 'react';
import { useVideoAutoplay } from '../../hooks/useVideoAutoplay';

interface Props {
  videoSrc: string;
  centerImage: string;
}

export function MediaSlider({ videoSrc, centerImage }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoAutoplay(videoRef);

  return (
    <div className="relative rounded-2xl p-6 overflow-hidden bg-slider-bg border border-kriolu-accent/25 shadow-slider">
      <div className="absolute top-0 left-0 right-0 h-px bg-track-fade" />

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-xs font-bold tracking-[2px] uppercase text-white/50">
          <span className="w-2 h-2 rounded-full bg-kriolu-accent shadow-glow animate-pulse-dot" />
          <span>Média em Destaque</span>
        </div>
        <div className="text-xs font-bold text-kriolu-accent tracking-wider">01 / 01</div>
      </div>

      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-[1]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45 z-[2] pointer-events-none" />
    
      </div>

      <div className="flex items-center justify-center gap-2.5 mt-4">
        <span className="w-7 h-2 rounded bg-kriolu-accent shadow-glow" />
      </div>
    </div>
  );
}