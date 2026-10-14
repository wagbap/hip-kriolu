import { useEffect, useRef, useState } from 'react';
import { COUNTER_CONFIGS } from '../data/counters';

const UPDATE_INTERVAL_MS = 5000;
const ANIMATION_DURATION_MS = 1200;

const randomInRange = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

export function useCounters() {
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(COUNTER_CONFIGS.map((c) => [c.key, 0]))
  );

  const rafRefs = useRef<Record<string, number>>({});

  useEffect(() => {
    const animate = (key: string, target: number) => {
      const from = values[key] ?? 0;
      const start = performance.now();

      cancelAnimationFrame(rafRefs.current[key]);

      const tick = (now: number) => {
        const progress = Math.min((now - start) / ANIMATION_DURATION_MS, 1);
        const current = Math.floor(from + (target - from) * easeOutCubic(progress));

        setValues((prev) => ({ ...prev, [key]: current }));

        if (progress < 1) {
          rafRefs.current[key] = requestAnimationFrame(tick);
        }
      };

      rafRefs.current[key] = requestAnimationFrame(tick);
    };

    const runAll = () => {
      COUNTER_CONFIGS.forEach((c) => animate(c.key, randomInRange(c.min, c.max)));
    };

    runAll();
    const id = window.setInterval(runAll, UPDATE_INTERVAL_MS);

    return () => {
      window.clearInterval(id);
      Object.values(rafRefs.current).forEach(cancelAnimationFrame);
    };
  }, []);

  return { values, configs: COUNTER_CONFIGS };
}