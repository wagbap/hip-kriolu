import { useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { Gallery } from '../components/sections/Gallery';
import { About } from '../components/sections/About';
import { Posters } from '../components/sections/Posters';
import { YearReleases } from '../components/sections/YearReleases';

export function Home() {
  const [galleryPaused, setGalleryPaused] = useState(false);

  return (
    <>
      <Hero />
      <Gallery
        isPaused={galleryPaused}
        onSelect={() => setGalleryPaused(true)}
        onDeselect={() => setGalleryPaused(false)}
      />
      <About />
      <Posters />
      <YearReleases />   {/* ← NOVO: em baixo dos posters */}
    </>
  );
}