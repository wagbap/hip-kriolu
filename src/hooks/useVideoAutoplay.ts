import { useEffect, type RefObject } from 'react';

export function useVideoAutoplay(ref: RefObject<HTMLVideoElement>) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.playsInline = true;

    const tryPlay = () => video.play().catch(() => undefined);
    const onFirstInteraction = () => tryPlay();

    tryPlay();

    document.addEventListener('click', onFirstInteraction, { once: true });
    return () => document.removeEventListener('click', onFirstInteraction);
  }, [ref]);
}