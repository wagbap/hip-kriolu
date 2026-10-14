import { useMemo, useState } from 'react';
import { ARTISTS, CATEGORIES } from '../../data/artists';
import { PosterCard } from '../ui/PosterCard';
import { SelectFilter } from '../ui/SelectFilter';
import { SparkleIcon, FilterIcon } from '../ui/Icons';
import type { Category } from '../../types';

type CategoryFilter = Category | 'all';

export function Posters() {
  const [category, setCategory] = useState<CategoryFilter>('all');

  const filteredArtists = useMemo(() => {
    if (category === 'all') return ARTISTS;
    return ARTISTS.filter((a) => a.categories.includes(category));
  }, [category]);

  return (
    <section className="px-5 md:px-12 pt-16 pb-12">
      <div className="max-w-[1600px] mx-auto mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        {/* Título com ícone */}
        <div className="flex items-center gap-3">
          <SparkleIcon size={18} className="text-kriolu-accent" />
          <h2 className="text-sm font-bold tracking-[3px] uppercase text-white/60">
            Destaques do Arquivo
          </h2>
        </div>

        {/* Filtros */}
        <div className="flex items-end gap-4">
          <SelectFilter
            label="Categoria"
            value={category}
            options={CATEGORIES}
            onChange={(v) => setCategory(v as CategoryFilter)}
          />

          <div className="flex items-center gap-2 pb-3 text-white/40">
            <FilterIcon size={14} />
            <span className="text-xs font-bold uppercase tracking-widest tabular-nums">
              {filteredArtists.length}{' '}
              {filteredArtists.length === 1 ? 'artista' : 'artistas'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-3.5 md:gap-5">
        {filteredArtists.map((artist) => (
          <PosterCard key={artist.id} artist={artist} />
        ))}
      </div>

      {filteredArtists.length === 0 && (
        <p className="text-center text-white/40 py-20 text-sm">
          Sem artistas nesta categoria.
        </p>
      )}
    </section>
  );
}