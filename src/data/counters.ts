import type { CounterConfig } from '../types';

export const COUNTER_CONFIGS: CounterConfig[] = [
  { key: 'mc',     label: "MC's",       min: 2400, max: 4200 },
  { key: 'dj',     label: "DJ's",       min: 800,  max: 1600 },
  { key: 'writer', label: 'Writers',    min: 1200, max: 2600 },
  { key: 'bboy',   label: 'B-Boys',     min: 600,  max: 1300 },
  { key: 'album',  label: 'Álbuns',     min: 4800, max: 8600 },
  { key: 'video',  label: 'Videoclips', min: 3200, max: 6400 },
];