import { useEffect, useRef } from 'react';

interface Options {
  speed?: number;
  loopMultiplier?: number;
}

export function useAutoScrollGallery(
  trackRef: React.RefObject<HTMLDivElement>,
  isPaused: boolean,
  { speed = 0.7, loopMultiplier = 3 }: Options = {}
) {
  const scrollXRef = useRef(0);
  const rafRef = useRef<number>(0);
  const dragRef = useRef({ isDragging: false, startX: 0, startScrollX: 0 });
  const pausedRef = useRef(isPaused);

  useEffect(() => {
    pausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const loop = () => {
      if (!pausedRef.current && !dragRef.current.isDragging) {
        scrollXRef.current -= speed;
        const limit = track.scrollWidth / loopMultiplier;
        if (Math.abs(scrollXRef.current) >= limit) scrollXRef.current = 0;
        track.style.transform = `translateY(-50%) translateX(${scrollXRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    const onMouseDown = (e: MouseEvent) => {
      if (pausedRef.current) return;
      dragRef.current = {
        isDragging: true,
        startX: e.clientX,
        startScrollX: scrollXRef.current,
      };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!dragRef.current.isDragging) return;
      scrollXRef.current = dragRef.current.startScrollX + (e.clientX - dragRef.current.startX);
      track.style.transform = `translateY(-50%) translateX(${scrollXRef.current}px)`;
    };

    const onMouseUp = () => { dragRef.current.isDragging = false; };

    track.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      track.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [trackRef, speed, loopMultiplier]);
}