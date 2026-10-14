import { useRef, useState } from 'react';
import { ARTISTS } from '../../data/artists';
import { useAutoScrollGallery } from '../../hooks/useAutoScrollGallery';
import { GalleryCard } from '../ui/GalleryCard';
import type { Artist } from '../../types';

const LOOP_MULTIPLIER = 3;

interface Props {
  isPaused: boolean;
  onSelect: (artist: Artist) => void;
}

export function Gallery({ isPaused, onSelect }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [loopArtists] = useState<Artist[]>(() =>
    Array.from({ length: LOOP_MULTIPLIER }).flatMap(() => ARTISTS)
  );

  useAutoScrollGallery(trackRef, isPaused, { loopMultiplier: LOOP_MULTIPLIER });

  return (
    <section
      className="relative h-[500px] md:h-[700px] overflow-hidden flex items-center justify-center my-5 mb-10"
      style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)',
        maskImage: 'linear-gradient(to right, transparent 0%, #000 6%, #000 94%, transparent 100%)',
      }}
    >
      <div
        ref={trackRef}
        className="absolute top-1/2 left-0 flex gap-5 will-change-transform cursor-grab active:cursor-grabbing px-10"
        style={{ transform: 'translateY(-50%)' }}
      >
        {loopArtists.map((artist, idx) => (
          <GalleryCard key={`${artist.id}-${idx}`} artist={artist} onClick={onSelect} />
        ))}
      </div>
    </section>
  );
}